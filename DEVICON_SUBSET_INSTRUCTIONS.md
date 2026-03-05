# Devicon Font Subsetting Instructions

## Icons Used (30 total)
devicon-androidstudio-plain, devicon-angularjs-plain, devicon-cloudflare-plain, 
devicon-django-plain, devicon-docker-plain, devicon-electron-original, 
devicon-firebase-plain, devicon-flask-original, devicon-flutter-plain, 
devicon-github-original, devicon-googlecloud-plain, devicon-go-original-wordmark, 
devicon-graphql-plain, devicon-html5-plain, devicon-ionic-original, 
devicon-java-plain, devicon-jenkins-plain, devicon-jira-plain, 
devicon-kotlin-plain, devicon-kubernetes-plain, devicon-mysql-plain, 
devicon-postgresql-plain, devicon-python-plain, devicon-react-original, 
devicon-redis-plain, devicon-sass-original, devicon-sass-plain, 
devicon-tailwindcss-plain, devicon-terraform-plain, devicon-typescript-plain

## Subsetting Options

### Option 1: Use pyftsubset (Python tool)
```bash
pip install fonttools
pyftsubset public/fonts/devicon.woff \
  --text="$(grep -roh 'devicon-[a-z0-9-]*' src/ | sort -u)" \
  --output-file=public/fonts/devicon-subset.woff
```

### Option 2: Use glyphhanger (Node.js tool)
```bash
npm install -g glyphhanger
glyphhanger --subset=public/fonts/devicon.woff \
  --whitelist="$(grep -roh 'devicon-[a-z0-9-]*' src/ | sort -u)"
```

### Option 3: Use online tool
Visit https://everythingfonts.com/subsetter and upload the font

Current size: 473 KB
Expected after subsetting: ~50-80 KB (saving 400+ KB)
