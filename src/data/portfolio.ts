export type ProjectMedia = {
  src: string;
  type: "image" | "video";
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  bullets: string[];
  technologies: string[];
  note?: string;
  url?: string;
  media?: ProjectMedia[];
};

export const skills = [
  "PHP", "MySQL",
  "Node.js", "Express", "Socket.io",
  "TypeScript", "JavaScript",
  "React", "Next.js", "React Native",
  "Angular", "AngularJS",
  "jQuery",
  "Three.js", "Astro",
  "Tailwind CSS", "Bootstrap", "Material UI",
  "DigitalOcean", "Headless CMS",
  "HTML5", "CSS3",
];

// first 4 shown on page, rest behind show more
export const highlights = [
  "Full-stack web applications built end to end, from database to UI",
  "Frontend development in React, Next.js, React Native, Angular and Astro",
  "Responsive websites and landing pages with HTML, CSS and Tailwind CSS",
  "Headless CMS integration for content-managed sites and applications",
  "Payment integrations with PayPal and Stripe, including connected accounts",
  "REST API & SDK integration (Google, Autodesk, Shopify, Zammad, YouTube)",
  "Data visualization, including a React + Three.js interactive globe",
  "Subscription-based platforms with user and admin panels",
  "Real-time features: WebSocket chat, live presence and progress tracking",
  "Interactive games and educational apps for children",
  "Custom interactive tools, from photo upload & editing to gallery management",
  "Workflow automation and web scraping with PHP",
  "Email automation with account registration, login and password-reset flows",
  "Creative & multimedia programming: multi-display shows, OSC, audio outputs",
];

// full project list
const projectCatalog: Project[] = [
  {
    id: "texttospeech",
    title: "Text-to-speech conversion web application",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    bullets: [
      "Google Text-to-Speech API converts written text into a downloadable MP3, with language, voice, pitch and speed controls.",
      "SSML markup support in an advanced settings panel for higher-quality audio.",
      "Statistics panel tracking conversion history.",
      "PayPal subscription tiers gating text length, storage and feature access.",
    ],
    url: "https://cumulustalk.com/welcome.html",
  },
  {
    id: "restaurant-menu",
    title: "Restaurant menu web app (Konoba Bare)",
    category: "Full-stack development",
    technologies: ["Next.js", "node.js", "MySQL", "WebSockets", "Google Translate API", "DigitalOcean"],
    bullets: [
      "Custom restaurant menu management system for a daily-changing food offer.",
      "Replaced manual Microsoft Word menu updates with a database-driven workflow for adding dishes, editing details and activating daily menu items.",
      "Generates updated printed menus and keeps QR code menus synchronized.",
      "Multilingual menu support through the Google Translate API.",
      "Designed and implemented the MySQL database and PHP backend, then deployed the application to DigitalOcean.",
      "A real-time reservation system powered by WebSockets is currently in development.",
    ],
    media: [1, 2, 3, 4].map((number) => ({
      src: `/images/konoba_bare${number}.webp`,
      type: "image",
      alt: `Konoba Bare restaurant menu application screen ${number}`,
    })),
  },
  {
    id: "brico-i-seka",
    title: "Brico i Seka Barbershop Website",
    category: "Frontend development",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    bullets: [
      "Website for a Croatian barbershop focused on presenting its services clearly.",
      "Designed with a clean visual style and minimal layout.",
      "Smooth animations and motion details enhance the experience without compromising performance.",
    ],
    media: [1, 2, 3, 4].map((number) => ({
      src: `/images/brico${number}.webp`,
      type: "image",
      alt: `Brico i Seka barbershop website screen ${number}`,
    })),
    url: "https://bricoiseka.hr/",
  },
  {
    id: "datingsite",
    title: "Product sales app for an existing dating site",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "Yii", "MySQL"],
    bullets: [
      "Lets merchants upload products to an existing dating site.",
      "Each purchase generates a QR code, redeemed in stores to collect physical products.",
      "Customised Yii admin template.",
    ],
    media: [1, 2, 3, 4].map((number) => ({ src: `/images/datingsite_${number}.webp`, type: "image", alt: `Dating site product application screen ${number}` })),
  },
  {
    id: "autodesk",
    title: "Browser-based 3D model rendering app",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    bullets: [
      "Renders AutoCAD models in 3D via the Autodesk SDK, with optional logo branding.",
      "Subscription-based user management with admin and user panels.",
      "Option to share rendered models.",
      "Stripe payment integration.",
    ],
    media: [1, 2].map((number) => ({ src: `/images/autodesk_${number}.webp`, type: "image", alt: `Autodesk 3D viewer screen ${number}` })),
  },
  {
    id: "clinic",
    title: "Internal web app for a charity clinic in Namibia",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "PHP", "MySQL"],
    bullets: [
      "Internal app for Lifeline Clinic: patient records, ailment and attendance history, and feeding & outreach programme data.",
      "Data export plus an admin panel for adding clinic-specific database parameters.",
      "Staff-only access.",
      "Keyboard-driven data entry (Enter/Tab) that mimics desktop software workflows.",
    ],
    media: [1, 2, 3, 4, 5, 6].map((number) => ({ src: `/images/charity_${number}.webp`, type: "image", alt: `Charity clinic application screen ${number}` })),
  },
  {
    id: "stripe",
    title: "Stripe integration with connected accounts",
    category: "Payment integration",
    technologies: ["Stripe PHP SDK"],
    bullets: [
      "Clients create Stripe connected accounts to sell software in the app's developer area.",
      "Platform owner collects a fee on purchases made through connected accounts.",
    ],
    url: "https://cumulusgate.com/welcome.php",
    media: [1, 2, 3, 4].map((number) => ({ src: `/images/stripe_${number}.webp`, type: "image", alt: `Stripe integration screen ${number}` })),
  },
  {
    id: "zammad",
    title: "Zammad ticketing system automation",
    category: "API integration",
    technologies: ["Zammad API Client PHP"],
    bullets: [
      "Automates a company workflow by connecting Zammad to a custom PHP script via webhooks.",
      "The script scrapes third-party sites and returns processed data into Zammad tickets.",
    ],
    media: [1, 2].map((number) => ({ src: `/images/zammad_${number}.webp`, type: "image", alt: `Zammad automation screen ${number}` })),
  },
  {
    id: "visualization",
    title: "Flight data visualization",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Node.js", "Express"],
    bullets: [
      "Flight data visualization with a React + Three.js globe using real NASA imagery.",
      "Real-time chat implementation using WebSocket.",
      "Integration of Google Places API, real-time flight data API.",
    ],
    note: "Further details are not presented due to an NDA.",
    media: [{ src: "/images/visualization_1.webm", type: "video", alt: "Flight data visualization demonstration" }],
  },
  {
    id: "artproject",
    title: "Interactive multimedia show creation application",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express", "Socket.io"],
    bullets: [
      "Development of custom control system for specific multimedia and synchronized multiple displays show (Lead by ideas of the main artist).",
      "Audience connects by smartphone to interact with on-stage displays.",
      "Layered media editor (images, video, live streams, audio, text, QR codes) with Photoshop-style layers.",
      "Two built-in video games the audience controls with their phones.",
    ],
    media: [1, 2].map((number) => ({ src: `/images/artproject_${number}.webm`, type: "video", alt: `Interactive multimedia application demonstration ${number}` })),
  },
  {
    id: "advent",
    title: "Advent calendar game",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    bullets: [
      "Interactive Advent calendar of games for children learning English.",
      "Written answers, audio listening, crosswords, drag-and-drop and clickable activities.",
      "Answer checking and user progress tracking.",
      "Integration with Shopify purchases.",
    ],
    url: "https://formation.stepforward-education.fr/",
    media: [1, 2, 3, 4, 5, 6, 7].map((number) => ({ src: `/images/advent_${number}.webp`, type: "image", alt: `Advent calendar game screen ${number}` })),
  },
  {
    id: "amazing-english",
    title: "Alphabet game for kids",
    category: "Full-stack development",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    bullets: [
      "Interactive English-learning games for children.",
      "Sold via Shopify, with purchases linked through the Shopify API and an HTML invite email.",
      "Integration of subscription-based purchases.",
      "User management system for single- and multi-user accounts.",
      "User progress tracking, awards and bonus hints system.",
    ],
    url: "https://formation.stepforward-education.fr/amazing-english/",
    media: [
      ...[1, 2, 3, 4, 5].map((number) => ({ src: `/images/alphabet_${number}.webp`, type: "image" as const, alt: `Alphabet game screen ${number}` })),
      { src: "/images/alphabet_6.webm", type: "video", alt: "Alphabet game demonstration" },
    ],
  },
  {
    id: "exam-trainer",
    title: "Exam Trainer — web & mobile app",
    category: "Frontend development",
    technologies: ["React", "React Native"],
    bullets: [
      "Web and mobile frontend for an app to create, manage and practice exams for faster learning.",
      "AI-supported study features.",
    ],
  },
  {
    id: "tracey-sport",
    title: "Tracey Sport — race management web app",
    category: "Frontend development",
    technologies: ["Angular"],
    bullets: [
      "Angular frontend for organising and joining races across Croatia.",
      "Various UI features and platform improvements.",
    ],
    url: "https://traceysport.com",
    media: [{ src: "/images/tracey_1.webp", type: "image", alt: "Tracey Sport race management web app screen" }],
  },
  {
    id: "chalkboards-gallery",
    title: "Chalkboards Today — gallery management web app & website improvements",
    category: "Frontend development",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    bullets: [
      "React gallery-management app integrated with existing digital-signage software.",
      "Manage and control on-screen content remotely through cloud software.",
      "Frontend updates, visual refinements and UX adjustments on the existing website.",
    ],
    url: "https://chalkboardstoday.com",
  },
  {
    id: "karaoke",
    title: "Karaoke web app",
    category: "Frontend development",
    technologies: ["React", "JavaScript", "YouTube API"],
    bullets: [
      "Converted an existing Vanilla JS karaoke app into a React app.",
      "YouTube integration with an improved frontend structure and user interaction.",
    ],
  },
  {
    id: "frontend-portfolio",
    title: "Frontend development portfolio work",
    category: "Frontend development",
    technologies: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Frontend development.",
      "UI implementation, responsive layouts and interactive features.",
    ],
    url: "https://wmd.hosting/portfolio",
    media: [{ src: "/images/frontend_portfolio_1.webp", type: "image", alt: "Frontend development portfolio work screen" }],
  },
  {
    id: "aargh-table",
    title: "Aargh Software — dynamic table viewer",
    category: "Full-stack development",
    technologies: ["PHP"],
    bullets: [
      "Added a dynamic table-viewer page to an existing platform for subscribed clients.",
    ],
    url: "https://aarghsoftware.com",
    media: [{ src: "/images/aargh_1.webp", type: "image", alt: "Aargh Software dynamic table viewer screen" }],
  },
  {
    id: "outline-academy",
    title: "Outline World Academy — responsive website",
    category: "Frontend development",
    technologies: ["HTML", "CSS"],
    bullets: [
      "Responsive website built from Adobe Illustrator design files.",
      "Accurate translation of the design into a responsive layout.",
    ],
    url: "https://instagram.com/outlineworldacademy",
  },
  {
    id: "photo-sticker",
    title: "Custom photo sticker tool",
    category: "Frontend development",
    technologies: ["JavaScript"],
    bullets: [
      "Built and integrated a tool for creating personalised circle stickers.",
      "Photo-upload functionality on an existing website.",
    ],
  },
  {
    id: "math-game",
    title: "Math equations web game",
    category: "Full-stack development",
    technologies: ["JavaScript"],
    bullets: [
      "Math-practice game for children with an algorithm that adapts tasks to the child's age.",
      "Real-time online presence and achievement tracking.",
    ],
  },
  {
    id: "video-diary",
    title: "Private video diary web app",
    category: "Full-stack development",
    technologies: ["React"],
    bullets: [
      "React app for keeping a private diary of favourite videos.",
      "Video tracking and PayPal payment integration.",
    ],
  },
  {
    id: "trimble-marketo",
    title: "Trimble — Marketo form styling",
    category: "Frontend development",
    technologies: ["CSS"],
    bullets: [
      "CSS adjustments to Marketo forms to better align them with the existing site design.",
    ],
    url: "https://trimble.com",
    media: [{ src: "/images/trimble_1.webp", type: "image", alt: "Trimble Marketo form styling screen" }],
  },
  {
    id: "sclass-media",
    title: "S Class Media — website development",
    category: "Frontend development",
    technologies: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "JavaScript passing URL variables to all page links so tracking parameters are preserved.",
      "Frontend layout, styling and functionality maintenance on the existing site.",
    ],
    url: "https://sclassmedia.com",
    media: [{ src: "/images/sclass_media_1.webp", type: "image", alt: "S Class Media website screen" }],
  },
  /*
  {
    id: "app-landing",
    title: "Mobile app landing website",
    category: "Frontend development",
    technologies: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Landing site promoting an existing mobile application.",
      "Presents the app's value and guides users to download or learn more.",
    ],
  },
  */
];

// pinned first on the page, then the rest from projectCatalog
const featuredProjectOrder = [
  "restaurant-menu",
  "brico-i-seka",
  "exam-trainer",
  "tracey-sport",
  "aargh-table",
  "trimble-marketo",
  "sclass-media",
];

const featuredProjectIds = new Set(featuredProjectOrder);

export const projects: Project[] = [
  ...featuredProjectOrder.map((id) => projectCatalog.find((project) => project.id === id)!),
  ...projectCatalog.filter((project) => !featuredProjectIds.has(project.id)),
];
