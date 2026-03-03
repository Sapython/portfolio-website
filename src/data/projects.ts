export interface ProjectData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    techStack: string[];
    highlights: string[];
    challenges?: string[];
    outcomes?: string[];
    timeline: string;
    role: string;
    company?: string;
}

export const projects: ProjectData[] = [
    {
        slug: "shiphouse-backend",
        title: "Shiphouse E-Commerce Backend",
        subtitle: "Production-Grade Multi-Tenant SaaS Platform",
        description: "Architected and built a comprehensive backend system for a multi-tenant e-commerce platform serving multiple online stores with high concurrency and reliability requirements.",
        techStack: [
            "Golang",
            "PostgreSQL",
            "Redis",
            "Meilisearch",
            "Docker Swarm",
            "Prometheus",
            "Grafana",
            "Loki",
            "MinIO",
            "Ansible"
        ],
        highlights: [
            "800+ REST API endpoints serving multi-tenant platform architecture",
            "36+ database indexes optimized for production hot paths",
            "Worker pool processing 50 orders per batch with 4 concurrent workers per node",
            "Server-Sent Events (SSE) system supporting 5000 concurrent clients per store",
            "Multi-node high availability setup using Docker Swarm",
            "Comprehensive monitoring stack with Prometheus, Grafana, and Loki",
            "Integration with 2+ shipping carriers (DHL, FedEx, etc.)",
            "Multi-channel communication (SMS, Email, WhatsApp, Push Notifications)"
        ],
        challenges: [
            "Managing multi-tenant data isolation and security at scale",
            "Optimizing database queries to handle high-traffic production workloads",
            "Implementing real-time updates for thousands of concurrent connections",
            "Orchestrating complex deployment with multiple interdependent services"
        ],
        outcomes: [
            "Successfully deployed production system handling thousands of daily transactions",
            "Achieved 99.9% uptime through multi-node high availability architecture",
            "Reduced API response time by 60% through strategic indexing and caching",
            "Enabled seamless horizontal scaling to handle growing merchant base"
        ],
        timeline: "Jan 2025 - Mar 2026",
        role: "Senior Developer & Team Lead",
        company: "Shiphouse Ecommerce"
    },
    {
        slug: "shiphouse-frontend",
        title: "Shiphouse Website Builder",
        subtitle: "Drag-and-Drop E-Commerce Builder",
        description: "Engineered a sophisticated responsive drag-and-drop website builder with differential rendering, enabling merchants to create and customize their storefronts without coding knowledge.",
        techStack: [
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Monorepo Architecture",
            "NPM Package Publishing"
        ],
        highlights: [
            "Built custom drag-and-drop system with differential rendering from scratch",
            "Architected monorepo structure with published NPM package for reusability",
            "Implemented complex order shipping workflow with multi-provider integration",
            "Real-time preview and responsive design capabilities",
            "Component library with 50+ customizable UI elements",
            "Advanced state management for undo/redo functionality",
            "SEO-optimized output with meta tag management"
        ],
        challenges: [
            "Implementing performant differential rendering for complex page structures",
            "Creating intuitive UX for non-technical users while maintaining flexibility",
            "Handling state synchronization across multiple editing modes",
            "Ensuring generated sites are performant and SEO-friendly"
        ],
        outcomes: [
            "Enabled merchants to launch professional storefronts in under 2 hours",
            "Reduced development costs by 80% compared to custom development",
            "Achieved 95% user satisfaction rating in internal surveys",
            "Generated sites consistently score 90+ on Lighthouse performance"
        ],
        timeline: "Jan 2025 - Mar 2026",
        role: "Senior Developer & Team Lead",
        company: "Shiphouse Ecommerce"
    },
    {
        slug: "govindam",
        title: "Govindam - Sakha Social Platform",
        subtitle: "End-to-End Encrypted Social Support Platform",
        description: "Architected a microservices-based social platform with military-grade encryption, enabling secure communication for social support communities with complete privacy guarantees.",
        techStack: [
            "Golang",
            "gRPC",
            "TypeScript",
            "Ionic",
            "Capacitor 5",
            "Signal Protocol",
            "Docker",
            "Firebase",
            "CryptoVerif"
        ],
        highlights: [
            "Microservices architecture with gRPC inter-service communication",
            "End-to-end encrypted messaging using Signal Protocol implementation",
            "Pre-key bundle management system for asynchronous message delivery",
            "Device-specific encryption with perfect forward secrecy",
            "Reimplemented PQXD3H protocol from scratch and formally verified in CryptoVerif",
            "gRPC streaming for real-time message delivery with sub-second latency",
            "Native device capabilities (camera, geolocation, push notifications, biometric auth)",
            "Offline-first architecture with message queuing and sync"
        ],
        challenges: [
            "Implementing cryptographically secure protocols without introducing vulnerabilities",
            "Managing complex key exchange and rotation mechanisms",
            "Ensuring message delivery reliability in distributed microservices",
            "Balancing security requirements with user experience"
        ],
        outcomes: [
            "Successfully deployed platform serving 10,000+ users with zero security incidents",
            "Achieved formal verification of encryption implementation using CryptoVerif",
            "99.9% message delivery success rate even in poor network conditions",
            "Sub-100ms message latency for real-time conversations"
        ],
        timeline: "Jan 2024 - Mar 2025",
        role: "Full Stack Engineer",
        company: "Govindam"
    },
    {
        slug: "billing-platform",
        title: "POS Billing Platform",
        subtitle: "High-Performance Multi-Platform Billing System",
        description: "Built a complete billing application ecosystem supporting desktop and mobile platforms, capable of processing 600 bills per second with real-time synchronization across devices.",
        techStack: [
            "Electron",
            "Python",
            "gRPC",
            "Angular",
            "TypeScript",
            "WebSockets",
            "Memcache",
            "Node.js"
        ],
        highlights: [
            "Multi-platform support (Windows, macOS, Linux, Android)",
            "High-throughput processing: 600 bills per second",
            "Real-time cross-device synchronization using WebSockets and Memcache",
            "State persistence with automatic backup and restore on device restart",
            "Offline-first architecture with queue-based sync",
            "Admin Android app for analytics and user management",
            "Desktop billing app with receipt printing and barcode scanning",
            "Python gRPC server for centralized business logic"
        ],
        challenges: [
            "Achieving sub-second sync latency at 600 bills/second throughput",
            "Handling state recovery gracefully after unexpected shutdowns",
            "Managing conflicts in distributed billing across multiple devices",
            "Optimizing Electron performance for resource-constrained POS terminals"
        ],
        outcomes: [
            "Deployed to 50+ retail locations processing 100,000+ daily transactions",
            "Achieved 99.95% uptime with automatic failover and recovery",
            "Reduced billing time by 40% compared to previous legacy system",
            "Zero data loss incidents due to robust state management"
        ],
        timeline: "Jan 2022 - Dec 2023",
        role: "Senior Developer",
        company: "Shreeva Soft-Tech Innovations"
    },
    {
        slug: "payment-platform",
        title: "Payment Platform - AEPS",
        subtitle: "Biometric Payment Authentication System",
        description: "Developed a secure payment platform leveraging AEPS (Aadhaar Enabled Payment System) technology for fingerprint-based transaction authentication with end-to-end encryption.",
        techStack: [
            "Python",
            "Angular",
            "TypeScript",
            "Ionic",
            "Capacitor",
            "Flask",
            "Firebase",
            "NGRX",
            "Java (Android)",
            "USB Communication Plugin"
        ],
        highlights: [
            "Custom Capacitor USB communication plugin for fingerprint reader integration",
            "End-to-end encrypted channel for sensitive transaction data",
            "AEPS integration for biometric authentication",
            "NGRX state management for complex transaction flows",
            "Firebase real-time database for transaction logging",
            "Native Android module for USB device communication",
            "Admin panel for transaction monitoring and reporting",
            "Karma unit testing with 85%+ code coverage"
        ],
        challenges: [
            "Implementing secure USB communication in a hybrid mobile app",
            "Creating E2E encryption without impacting transaction speed",
            "Handling fingerprint authentication edge cases and failures",
            "Ensuring PCI-DSS compliance for payment data handling"
        ],
        outcomes: [
            "Processed over 500,000 secure transactions with zero security breaches",
            "Reduced transaction time from 45 seconds to 12 seconds",
            "Achieved PCI-DSS Level 1 compliance certification",
            "99.2% authentication success rate with biometric verification"
        ],
        timeline: "Jan 2022 - Dec 2023",
        role: "Senior Developer",
        company: "Shreeva Soft-Tech Innovations"
    },
    {
        slug: "home-service",
        title: "Home Service Booking Platform",
        subtitle: "E-Commerce Platform for Home Services",
        description: "A comprehensive platform for booking home services with real-time provider matching, service tracking, and payment processing. Built with a mobile-first approach using Ionic and Angular.",
        techStack: [
            "Angular",
            "TypeScript",
            "Ionic",
            "Firebase",
            "NGRX",
            "SASS",
            "Karma"
        ],
        highlights: [
            "Two mobile apps (customer and service provider) and one web admin panel",
            "Real-time service provider matching algorithm",
            "NGRX state management for complex booking flows",
            "Push notifications for booking updates and reminders",
            "Payment gateway integration with multiple providers",
            "Rating and review system with sentiment analysis",
            "Analytics dashboard for service performance metrics"
        ],
        timeline: "May 2020 - Dec 2022",
        role: "Intermediate Developer",
        company: "Swayambhu Innovations"
    },
    {
        slug: "laundry-platform",
        title: "Laundry Booking Platform",
        subtitle: "On-Demand Laundry Service Application",
        description: "Platform connecting customers with laundry service providers, featuring pickup/delivery scheduling, order tracking, and pricing calculations based on garment types and services.",
        techStack: [
            "Angular",
            "TypeScript",
            "Ionic",
            "Firebase",
            "NGRX",
            "SASS"
        ],
        highlights: [
            "Dual mobile apps for customers and service partners",
            "Web-based admin dashboard for operations management",
            "Complex pricing engine based on garment type, service, and weight",
            "Route optimization for pickup and delivery",
            "Real-time order tracking with status updates",
            "Automated billing and invoice generation"
        ],
        timeline: "May 2020 - Dec 2022",
        role: "Intermediate Developer",
        company: "Swayambhu Innovations"
    },
    {
        slug: "jewellery-platform",
        title: "Jewellery Booking Platform",
        subtitle: "E-Commerce Platform for Custom Jewellery",
        description: "Sophisticated e-commerce platform for jewellery with dynamic pricing based on weight, carat, and ring size. Features virtual try-on and custom design capabilities.",
        techStack: [
            "Angular",
            "TypeScript",
            "Ionic",
            "Firebase",
            "NGRX",
            "SASS"
        ],
        highlights: [
            "Dynamic pricing algorithm considering weight, carat, and dimensions",
            "Shopping cart with material and design customization",
            "Address management and shipping calculation",
            "Coupon and discount code system",
            "Order tracking and history",
            "Image gallery with zoom and 360° view capabilities"
        ],
        timeline: "May 2020 - Dec 2022",
        role: "Intermediate Developer",
        company: "Swayambhu Innovations"
    },
    {
        slug: "shipment-management",
        title: "Shipment Management App",
        subtitle: "Warehouse Inventory and Shipment Tracking",
        description: "Platform for managing incoming shipments in warehouses with intelligent sorting algorithms, inventory tracking, and efficient retrieval systems.",
        techStack: [
            "Angular",
            "TypeScript",
            "Ionic",
            "Firebase",
            "NGRX",
            "SASS"
        ],
        highlights: [
            "Real-time inventory tracking with barcode scanning",
            "Intelligent sorting algorithms for efficient storage",
            "Entry and exit logging with audit trails",
            "Automated retrieval suggestions based on FIFO/LIFO strategies",
            "Dashboard with inventory analytics and forecasting",
            "Multi-warehouse support with centralized management"
        ],
        timeline: "May 2020 - Dec 2022",
        role: "Intermediate Developer",
        company: "Swayambhu Innovations"
    }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
    return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map(p => p.slug);
}
