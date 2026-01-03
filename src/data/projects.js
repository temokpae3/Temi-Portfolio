// src/data/projects.js

// =====================
// FoodieSafety
// =====================
import foodie1 from '../assets/foodie-wireframe-1.png';
import foodie2 from '../assets/foodie-wireframe-2.png';
import foodie3 from '../assets/foodie-wireframe-3.png';
import foodieDemo1 from '../assets/FoodieSafety_DemoVideo.mp4';

// =====================
// CS Web App
// =====================
import cs1 from '../assets/cs-web-app-wireframe-1.png';
import cs2 from '../assets/cs-web-app-wireframe-2.png';
import cs3 from '../assets/cs-web-app-wireframe-3.png';
import cs4 from '../assets/cs-web-app-wireframe-4.png';
import csProto1 from '../assets/cs-web-app-prototype-1.png';
import csProto2 from '../assets/cs-web-app-prototype-2.png';
import csProto3 from '../assets/cs-web-app-prototype-3.png';
import csProto4 from '../assets/cs-web-app-prototype-4.png';
import csProto5 from '../assets/cs-web-app-prototype-5.png';
import csProto6 from '../assets/cs-web-app-prototype-6.png';
import csProto7 from '../assets/cs-web-app-prototype-7.png';

// =====================
// KimiNoMelody
// =====================
import km1 from '../assets/kiminomelody-wireframe-1.png';
import km2 from '../assets/kiminomelody-wireframe-2.png';
import km3 from '../assets/kiminomelody-wireframe-3.png';
import km4 from '../assets/kiminomelody-wireframe-4.png';
import km5 from '../assets/kiminomelody-wireframe-5.png';
import kmProto1 from '../assets/kiminomelody-prototype-1.png';
import kmProto2 from '../assets/kiminomelody-prototype-2.png';
import kmProto3 from '../assets/kiminomelody-prototype-3.png';
import kmProto4 from '../assets/kiminomelody-prototype-4.png';
import kmProto5 from '../assets/kiminomelody-prototype-5.png';

// =====================
// BookScript
// =====================
import bookscriptHome from '../assets/bookscript-home.png';
import bookscriptCatalog from '../assets/bookscript-catalog.png';
import bookscriptDashboard from '../assets/bookscript-dashboard.png';
import bookscriptDemo1 from '../assets/bookscript_demo_1.gif';
import bookscriptDemo2 from '../assets/bookscript_demo_2.gif';

export const projects = [
  {
    slug: 'foodie-safety',
    title: 'FoodieSafety',
    timeframe: 'August 2024 – December 2025',
    background:
      'Created a platform to give customers insights on food recalls from FDA/USDA data and help them make informed food choices.',
    role: 'Frontend & UI/UX design, prototyping, Figma mockups',
    process: [
      'User research to identify pain points',
      'High-fidelity wireframes and mockups in Figma',
      'Prototyping in Figma and React.js',
      'Iterated based on usability testing feedback',
    ],
    solution: [
      'Interactive dashboard showing pantry page, product recalls, barcode scanning, AI Chatbot, subscription alerts,food safety tips, and more',
      'Accessible, responsive UI with WCAG compliance',
      'Pattern libraries for consistent design',
    ],
    features: [
      'User accounts with personalized food preferences',
      'Search and filter food recalls from FDA/USDA datasets',
      'Barcode scanning for purchased products',
      'AI Chatbot for food recipes',
      'Subscription alerts for food safety updates',
    ],
    results:
      'Lighthouse score increased from 67 → 100; positive feedback from stakeholders',
    uxArtifacts: [
      { type: 'image', src: foodie1, alt: 'FoodieSafety landing page wireframe' },
      { type: 'image', src: foodie2, alt: 'FoodieSafety recall page wireframe' },
      { type: 'image', src: foodie3, alt: 'FoodieSafety dashboard wireframe' },
    ],
    finalScreens: [
      { type: 'video', src: foodieDemo1, alt: 'Feature walkthrough video' },
    ],
    techStack: [
      'React.js',
      'Figma',
      'Bootstrap',
      'FastAPI',
      'Python',
      'UI/UX Design',
    ],
  },

  {
    slug: 'cs-ethics-web-app',
    title: 'Web Developer – Virginia Tech',
    timeframe: 'May 2025 – Sept 2025',
    background:
      'Full-stack platform for the CS Ethics Web App to manage articles, users, and tags.',
    role: 'Frontend development and UI/UX design',
    process: [
      'Team meetings to gather requirements and understand user needs',
      'Converted Figma mockups to React/Next.js components',
      'Improved usability and accessibility',
      'Collaborated with designers and engineers in Agile sprints',
    ],
    solution: [
      'Responsive React/Next.js/Tailwind CSS UI components aligned with visual hierarchy and accessibility',
      'Documented interaction patterns in Confluence to reduce onboarding time',
    ],
    features: [
      'Article browsing, search, and tagging system',
      'User authentication and role-based access',
      'Admin tools for content moderation',
      'Accessible, mobile-friendly layouts',
      'Tag management system',
    ],
    results:
      'Reduced onboarding time by 40%, increased user engagement by 50%',
    uxArtifacts: [
      { type: 'image', src: cs1, alt: 'Login wireframe' },
      { type: 'image', src: cs2, alt: 'Search wireframe' },
      { type: 'image', src: cs3, alt: 'Upload article wireframe' },
      { type: 'image', src: cs4, alt: 'Tag management wireframe' },
    ],
    finalScreens: [
      { type: 'image', src: csProto1, alt: 'Landing page prototype' },
      { type: 'image', src: csProto2, alt: 'Signup prototype' },
      { type: 'image', src: csProto3, alt: 'Login prototype' },
      { type: 'image', src: csProto4, alt: 'Dashboard prototype' },
      { type: 'image', src: csProto5, alt: 'Article details prototype' },
      { type: 'image', src: csProto6, alt: 'Search functionality prototype' },
      { type: 'image', src: csProto7, alt: 'Tag management prototype' },
    ],
    techStack: [
      'React.js',
      'Next.js',
      'Figma',
      'Tailwind CSS',
      'Jira',
      'Confluence',
      'UI/UX Design',
    ],
  },

  {
    slug: 'kiminomelody',
    title: 'KimiNoMelody',
    timeframe: 'January 2025 – May 2025',
    background:
      'Web application for anime music fans to explore, rate, and discuss anime songs while creating mood-based playlists.',
    role: 'Frontend development, UI/UX design, prototyping, wireframing',
    process: [
      'User research within anime communities',
      'Low- and high-fidelity prototyping in Figma',
      'Frontend development with Django templates',
      'Iterated based on community feedback',
    ],
    solution: [
      'Interactive playlists with ratings and comments',
      'Community-driven discovery using tags and hashtags',
      'Profile customization and social features',
    ],
    features: [
      'Song search, rating, and commenting',
      'Playlist creation',
      'Community discussion',
      'User profiles',
    ],
    results:
      'High engagement during testing; users created multiple playlists and praised UI clarity',
    uxArtifacts: [
      { type: 'image', src: km1, alt: 'Home page wireframe' },
      { type: 'image', src: km2, alt: 'Browse songs wireframe' },
      { type: 'image', src: km3, alt: 'Song details wireframe' },
      { type: 'image', src: km4, alt: 'Upload song wireframe' },
      { type: 'image', src: km5, alt: 'Profile wireframe' },
    ],
    finalScreens: [
      { type: 'image', src: kmProto1, alt: 'Home page prototype' },
      { type: 'image', src: kmProto2, alt: 'Browse songs prototype' },
      { type: 'image', src: kmProto3, alt: 'Song details prototype' },
      { type: 'image', src: kmProto4, alt: 'Upload song prototype' },
      { type: 'image', src: kmProto5, alt: 'Profile prototype' },
    ],
    techStack: [
      'Balsamiq',
      'UI/UX Design',
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Django',
      'PostgreSQL',
      'AJAX',
    ],
  },

  {
    slug: 'bookscript',
    title: 'BookScript',
    timeframe: 'August 2024 – December 2024',
    background:
      'Full-stack web application that allows users to browse, search, and purchase graphic novels while managing inventory and user accounts.',
    role: 'Full-stack development, UI/UX design, API integration',
    process: [
      'Designed user flows and high-fidelity mockups in Figma',
      'Implemented responsive frontend pages with React.js',
      'Developed REST APIs with Java and Gradle',
      'Designed MySQL database schema',
    ],
    solution: [
      'Searchable catalog with detailed product pages',
      'User authentication and order history',
      'Shopping cart and checkout flow',
      'RESTful backend integration',
    ],
    features: [
      'Catalog tabs',
      'User accounts and authentication',
      'Shopping cart and checkout',
      'Confirmation page',
      'Login and signup',
      'About me, contact, Directions',
    ],
    results:
      'Praised for clean UI, stable API design, and well-structured database implementation',
    uxArtifacts: [
      { type: 'image', src: bookscriptHome, alt: 'Home page design' },
      { type: 'image', src: bookscriptCatalog, alt: 'Catalog browsing design' },
      { type: 'image', src: bookscriptDashboard, alt: 'User dashboard' },
    ],
    finalScreens: [
      { type: 'image', src: bookscriptDemo1, alt: 'BookScript feature demo 1' },
      { type: 'image', src: bookscriptDemo2, alt: 'BookScript feature demo 2' },
    ],
    techStack: [
      'Figma',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'MySQL',
      'Java',
      'Gradle',
      'REST API',
    ],
  },
];