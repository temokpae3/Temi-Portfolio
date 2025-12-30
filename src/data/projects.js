// FoodieSafety
import foodie1 from '../assets/foodie-wireframe-1.png';
import foodie2 from '../assets/foodie-wireframe-2.png';
import foodie3 from '../assets/foodie-wireframe-3.png';
import foodieDemo1 from '../assets/foodie-safety demo 1.gif';
import foodieDemo2 from '../assets/foodie-safety demo 2.gif';
import foodieDemo3 from '../assets/foodie-safety demo 3.gif';

// CS Web App
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

// KimiNoMelody
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

// BookScript
import bookscriptHome from '../assets/bookscript-home.png';
import bookscriptCatalog from '../assets/bookscript-catalog.png';
import bookscriptDashboard from '../assets/bookscript-dashboard.png';

export const projects = [
    {
        title: 'FoodieSafety',
        timeframe: 'August 2024 – December 2025',
        background: 'Created a platform to give customers insights on food recalls from FDA/USDA data and help them make informed food choices.',
        role: 'Frontend & UI/UX design, prototyping, Figma mockups',
        process: [
            'User research to identify pain points',
            'High-fidelity Wireframes and mockups in Figma',
            'Prototyping in Figma and React.js',
            'Iterated based on usability testing feedback',
        ],
        solution: [
            'Interactive dashboard showing search, filter, and data visualization features',
            'Accessible, responsive UI with WCAG compliance',
            'Pattern libraries for consistent design',
        ],
        results: 'Lighthouse score increased from 78 → 98; positive feedback from stakeholders',
        artifacts: [
            { src: foodie1, alt: 'FoodieSafety Landing Page' },
            { src: foodie2, alt: 'FoodieSafety Recall Page' },
            { src: foodie3, alt: 'FoodieSafety Dashboard Page' },
            { src: foodieDemo1, alt: 'FoodieSafety Signup/Login Demo' },
            { src: foodieDemo2, alt: 'FoodieSafety Barcode Scanner Demo' },
            { src: foodieDemo3, alt: 'FoodieSafety Subscription Demo' },
        ],
        techStack: ['React.js', 'Figma', 'Bootstrap', 'FastAPI', 'Python', 'UI/UX Design'],
    },
    {
        title: 'Web Developer – Virginia Tech',
        timeframe: 'May 2025 – Sept 2025',
        background: 'Full-stack platform for CS Ethics Web App to manage articles, users, and tags.',
        role: 'Frontend development and UI/UX design',
        process: [
            'Team meetings to gather requirements and understand user needs',
            'Converted Figma mockups to React/Next.js components',
            'Improved usability and accessibility',
            'Collaborated with designers and engineers in Agile sprints',
        ],
        solution: [
            'Responsive React/Next.js UI components aligned with visual hierarchy and accessibility',
            'Documented interaction patterns in Confluence to reduce onboarding time for new developers',
        ],
        results: 'Reduced onboarding time by 40%, increased user engagement by 50%',
        artifacts: [
            { src: cs1, alt: 'CS Ethics Web App Login Wireframe' },
            { src: cs2, alt: 'CS Ethics Web App Search Wireframe' },
            { src: cs3, alt: 'CS Ethics Web App Upload Article Wireframe' },
            { src: cs4, alt: 'CS Ethics Web App Tag Management Wireframe' },
            { src: csProto1, alt: 'CS Ethics Web App Landing Page Prototype' },
            { src: csProto2, alt: 'CS Ethics Web App Signup Prototype' },
            { src: csProto3, alt: 'CS Ethics Web App Login Prototype' },
            { src: csProto4, alt: 'CS Ethics Web App Dashboard Prototype' },
            { src: csProto5, alt: 'CS Ethics Web App Article Details Prototype' },
            { src: csProto6, alt: 'CS Ethics Web App Search Functionality Prototype' },
            { src: csProto7, alt: 'CS Ethics Web App Tag Management Prototype' },
        ],
        techStack: ['React.js', 'Next.js', 'Figma', 'Tailwind CSS', 'Jira', 'Confluence', 'UI/UX Design'],
    },
    {
        title: 'KimiNoMelody',
        timeframe: 'January 2025 – May 2025',
        background: 'Web application for anime music fans to explore, rate, and discuss anime songs while creating mood-based playlists.',
        role: 'Frontend development, UI/UX design, prototyping, wireframing',
        process: [
            'Conducted user research on anime communities to understand music discovery habits',
            'Designed low-fidelity wireframes and high fidelity mockups for interactive prototypes in Figma',
            'Developed responsive components in Django for playlists, song ratings, and discussions',
            'Iterated designs based on user testing and community feedback'
        ],
        solution: [
            'Interactive playlists with song search, rating, and commenting features',
            'Community-driven experience using hashtags for anime soundtrack discussions',
            'Profile customization and social features (following playlists, exploring trending songs)'
        ],
        results: 'Increased user engagement during testing, with users creating multiple playlists and leaving comments; positive feedback on community features and UI clarity',
        artifacts: [
            { src: km1, alt: 'KimiNoMelody Home Page Low-Fidelity Wireframe' },
            { src: km2, alt: 'KimiNoMelody Browse Songs Low-Fidelity Wireframe' },
            { src: km3, alt: 'KimiNoMelody Main Song Details Low-Fidelity Wireframe' },
            { src: km4, alt: 'KimiNoMelody Upload Song Low-Fidelity Wireframe' },
            { src: km5, alt: 'KimiNoMelody Profile Low-Fidelity Wireframe' },
            { src: kmProto1, alt: 'KimiNoMelody Home Page High-Fidelity Prototype' },
            { src: kmProto2, alt: 'KimiNoMelody Browse Songs High-Fidelity Prototype' },
            { src: kmProto3, alt: 'KimiNoMelody Main Song Details High-Fidelity Prototype' },
            { src: kmProto4, alt: 'KimiNoMelody Upload Song High-Fidelity Prototype' },
            { src: kmProto5, alt: 'KimiNoMelody Profile High-Fidelity Prototype' },
        ],
        techStack: [ 'Balsamiq', 'UI/UX Design', 'HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'PostgreSQL', 'MVC', 'AJAX', 'JSON', 'JQuery', 'HTTP Requests' ],
    },
    {
        title: 'BookScript',
        timeframe: 'August 2024 – December 2024',
        background: 'A full-stack web application that allows users to browse, search, and purchase manga while managing inventory and user accounts.',
        role: 'Full-stack development, UI/UX design, API integration',
        process: [
            'Designed user flows and high-fidelity mockups in Figma',
            'Implemented responsive frontend pages using HTML, CSS, TypeScript, and React.js',
            'Developed REST API endpoints with Java (Gradle) for authentication, catalog browsing, and ordering',
            'Created MySQL schema for users, inventory, and orders',
            'Performed iterative testing and debugging based on course requirements'
        ],
        solution: [
            'Interactive graphic novels catalog with search, filtering, and detailed product pages',
            'User accounts with login/signup, order history, and wishlist functionality',
            'Order processing system with shopping cart and checkout features',
            'RESTful API enabling seamless communication between frontend and backend'
        ],
        results: 'Successfully delivered as a coursework project; praised for clean UI, stable API design, and well-structured database implementation',
        artifacts: [
            { src: bookscriptHome, alt: 'Graphic Bookstore Home Page with featured titles' },
            { src: bookscriptCatalog, alt: 'Graphic Bookstore catalog browsing and filtering interface' },
            { src: bookscriptDashboard, alt: 'User dashboard' },
        ],
        techStack: [
            'Figma', 'HTML', 'CSS', 'JavaScript', 'TypeScript',
            'React.js', 'MySQL', 'Java', 'Gradle', 'REST API'
        ],
    },
];