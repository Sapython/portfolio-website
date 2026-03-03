import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import Fuse from 'fuse.js';

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q');

  if (!query || query.trim() === '') {
    return new Response(JSON.stringify({ results: [] }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // Get all blog posts
    const posts = await getCollection('posts');

    // Prepare posts data for search
    const searchableData = posts.map((post) => ({
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      author: post.data.author,
      date: post.data.date,
      tags: post.data.tags,
      featured: post.data.featured,
      heroImage: post.data.heroImage,
      social: post.data.social,
      content: post.body, // Raw markdown content
    }));

    // Configure Fuse.js
    const fuse = new Fuse(searchableData, {
      threshold: 0.3, // 0-1 range, lower is stricter
      keys: [
        { name: 'title', weight: 1.0 },
        { name: 'description', weight: 0.8 },
        { name: 'author', weight: 0.5 },
        { name: 'content', weight: 0.6 },
      ],
      includeScore: true,
      includeMatches: true,
    });

    // Perform search
    const results = fuse.search(query);

    // Return simplified results
    const simplifiedResults = results.map(({ item, score, matches }) => ({
      slug: item.slug,
      title: item.title,
      description: item.description,
      date: item.date,
      author: item.author,
      tags: item.tags,
      featured: item.featured,
      heroImage: item.heroImage,
      social: item.social,
      score,
      matches: matches?.map((m) => ({
        key: m.key,
        value: m.value,
      })),
    }));

    return new Response(JSON.stringify({ results: simplifiedResults }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Search error:', error);
    return new Response(
      JSON.stringify({
        error: 'Search failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
