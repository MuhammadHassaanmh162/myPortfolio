// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONFIGURATION — edit this single file to update the entire app
// ─────────────────────────────────────────────────────────────────────────────

// ── Personal Info ─────────────────────────────────────────────────────────────
export const PERSONAL = {
  name:             'Muhammad Hassaan',
  firstName:        'Muhammad',
  lastName:         'Hassaan',
  initials:         'MH',
  title:            'Software Engineer',
  tagline:          'Results-driven Software Engineer with 2+ years crafting scalable full-stack applications. Specializing in MERN stack, .NET, and delivering exceptional user experiences.',
  bio: [
    'Results-driven Software Engineer with 2+ years of experience in full-stack development, specializing in MERN stack and .NET technologies. I design and implement scalable web applications that optimize system performance while delivering high-quality software solutions.',
    'I graduated from FAST-NUCES Karachi with a BS in Computer Science and have worked with teams across Pakistan and the United States. I thrive in Agile environments and love turning complex problems into elegant, user-friendly solutions.',
  ],
  location:         'North Nazimabad, Karachi, Pakistan',
  email:            'muhammadhassaanmh162@gmail.com',
  phone:            '+92 345 897 5335',
  // ↓ Drop your PDF in the /public folder — the download button uses this
  resumePath:       '/resume.pdf',
  resumeFilename:   'Muhammad_Hassaan_Resume.pdf',
  // ↓ Drop your photo (JPG/PNG) in the /public folder
  profilePhoto:     '/profile.png',
  // ↓ Toggle the green "Available for opportunities" badge in the Hero section
  available:        true,
};

// ── Social Links ──────────────────────────────────────────────────────────────
export const SOCIAL = {
  github:   'https://github.com/MuhammadHassaanmh162',
  linkedin: 'https://www.linkedin.com/in/muhammad-hassaan-394758235/',
  email:    `mailto:${PERSONAL.email}`,
};

// ── EmailJS ───────────────────────────────────────────────────────────────────
// 1. Go to https://emailjs.com → create a free account
// 2. Add an Email Service → copy the Service ID below (already updated)
// 3. Create an Email Template using variables:
//      {{from_name}}  {{from_email}}  {{subject}}  {{message}}
//    → copy the Template ID below
// 4. Account → API Keys → copy your Public Key below
export const EMAILJS = {
  serviceId:  'service_d1eo4pf',    // ✅ Updated
  templateId: 'YOUR_TEMPLATE_ID',   // ← Replace
  publicKey:  'YOUR_PUBLIC_KEY',    // ← Replace (Account > API Keys)
};

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

// ── Hero Typewriter Roles ─────────────────────────────────────────────────────
export const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Software Engineer',
  'React.js Specialist',
  'Problem Solver',
];

// ── About Stats ───────────────────────────────────────────────────────────────
export const STATS = [
  { value: '2+',   label: 'Years Experience' },
  { value: '10+',  label: 'Projects Built' },
  { value: '4+',   label: 'Companies Worked' },
  { value: '100%', label: 'Commitment' },
];

// ── Skills ────────────────────────────────────────────────────────────────────
// iconKey → must match a key in the ICON_MAP inside Skills.jsx
// Use 'NEUTRAL' for icons that are white-on-dark (so they adapt to light mode)
export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'TypeScript', iconKey: 'SiTypescript', color: '#3178C6', level: 85 },
      { name: 'JavaScript', iconKey: 'SiJavascript', color: '#F7DF1E', level: 92 },
      { name: 'Python',     iconKey: 'SiPython',     color: '#3776AB', level: 80 },
      { name: 'PHP',        iconKey: 'SiPhp',        color: '#777BB4', level: 70 },
      { name: 'HTML5',      iconKey: 'SiHtml5',      color: '#E34F26', level: 95 },
      { name: 'CSS3',       iconKey: 'SiCss',        color: '#1572B6', level: 90 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: [
      { name: 'React.js',   iconKey: 'SiReact',    color: '#61DAFB', level: 92 },
      { name: 'Node.js',    iconKey: 'SiNodedotjs', color: '#339933', level: 85 },
      { name: 'Express.js', iconKey: 'SiExpress',  color: 'NEUTRAL',  level: 88 },
      { name: '.NET',       iconKey: 'SiDotnet',   color: '#512BD4',  level: 75 },
      { name: 'Flask',      iconKey: 'SiFlask',    color: 'NEUTRAL',  level: 72 },
      { name: 'Bootstrap',  iconKey: 'SiBootstrap', color: '#7952B3', level: 88 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MongoDB',  iconKey: 'SiMongodb',  color: '#47A248', level: 88 },
      { name: 'MySQL',    iconKey: 'SiMysql',    color: '#4479A1', level: 82 },
      { name: 'Firebase', iconKey: 'SiFirebase', color: '#FFCA28', level: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git',        iconKey: 'SiGit',        color: '#F05032', level: 90 },
      { name: 'GitHub',     iconKey: 'SiGithub',     color: 'NEUTRAL', level: 90 },
      { name: 'Postman',    iconKey: 'SiPostman',    color: '#FF6C37', level: 85 },
      { name: 'TensorFlow', iconKey: 'SiTensorflow', color: '#FF6F00', level: 68 },
      { name: 'npm',        iconKey: 'SiNpm',        color: '#CB3837', level: 88 },
    ],
  },
];

export const SPECIALIZATIONS = [
  'RESTful APIs', 'Responsive Web Design', 'Agile / Scrum',
  'CI/CD Pipelines', 'Version Control', 'JWT Auth',
  'React Native', 'Machine Learning', 'Data Structures',
];

// ── Projects ──────────────────────────────────────────────────────────────────
// iconKey: 'FiMapPin' | 'FiSmartphone' | 'FiCpu'  (mapped inside Projects.jsx)
export const PROJECTS = [
  {
    id: 1,
    title:       'Safe-T',
    subtitle:    'Intelligent Route Safety Platform',
    description: 'A comprehensive mapping application leveraging MERN stack architecture that provides optimized routing while prioritizing user safety by analyzing and avoiding high-crime areas. Integrated OpenStreetMap API for real-time geographic data visualization and implemented ML algorithms for data-driven route optimization.',
    iconKey:     'FiMapPin',
    gradient:    'linear-gradient(135deg, #0A84FF, #30D158)',
    glowColor:   'rgba(10,132,255,0.25)',
    tags:        ['React.js', 'Node.js', 'MongoDB', 'Express', 'Machine Learning', 'OpenStreetMap API', 'JWT'],
    github:      'https://github.com/MuhammadHassaanmh162',
    demo:        '#',
    badge:       'Full Stack + ML',
  },
  {
    id: 2,
    title:       'Finance Tracker',
    subtitle:    'Personal Finance Management App',
    description: 'A cross-platform mobile application using React Native and Expo framework enabling users to efficiently track income, expenses, and financial goals across iOS and Android. Architected cloud-based backend using Firebase with real-time data synchronization and Context API for centralized state management.',
    iconKey:     'FiSmartphone',
    gradient:    'linear-gradient(135deg, #BF5AF2, #FF9F0A)',
    glowColor:   'rgba(191,90,242,0.25)',
    tags:        ['React Native', 'Expo', 'Firebase', 'Firestore', 'Context API', 'Cloud Functions'],
    github:      'https://github.com/MuhammadHassaanmh162',
    demo:        '#',
    badge:       'Mobile App',
  },
  {
    id: 3,
    title:       'Sarcasm Detection',
    subtitle:    'NLP Analysis Tool',
    description: 'Advanced Natural Language Processing system utilizing BERT for accurate sarcasm detection and sentiment polarity analysis in social media text (Twitter data). Built RESTful API using Flask with MongoDB integration, achieving high accuracy in detecting nuanced language patterns.',
    iconKey:     'FiCpu',
    gradient:    'linear-gradient(135deg, #FF9F0A, #FF453A)',
    glowColor:   'rgba(255,159,10,0.25)',
    tags:        ['Python', 'Flask', 'TensorFlow', 'BERT', 'MongoDB', 'NLP', 'RESTful API'],
    github:      'https://github.com/MuhammadHassaanmh162',
    demo:        '#',
    badge:       'AI / NLP',
  },
];

// ── Work Experience ───────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    role:        'Software Engineer',
    company:     'Culturefy',
    location:    'United States (Remote)',
    period:      'Nov 2023 – Present',
    current:     true,
    color:       '#0A84FF',
    description: [
      'Developed responsive and scalable front-end interfaces using React.js, modular SCSS, and Bootstrap delivering consistent user experiences across all devices.',
      'Built and integrated backend APIs to support front-end workflows, ensuring smooth data flow and efficient feature implementation.',
      'Maintained clean, reusable code applying best practices to improve performance, readability, and long-term maintainability.',
    ],
    tags: ['React.js', 'SCSS', 'Bootstrap', 'REST API'],
  },
  {
    role:        'Teaching Assistant',
    company:     'FAST – National University of Computing & Emerging Sciences',
    location:    'Karachi, Pakistan',
    period:      'Oct 2023 – Dec 2023',
    current:     false,
    color:       '#30D158',
    description: [
      'Evaluated student progress through comprehensive assignment grading, contributing to a 10% improvement in average class performance metrics.',
      'Monitored student work patterns to identify knowledge gaps and provide targeted academic support.',
      'Mentored students on software development best practices, project architecture, and technical implementation strategies.',
    ],
    tags: ['Teaching', 'Mentoring', 'Software Engineering'],
  },
  {
    role:        'MERN Stack Developer',
    company:     'Invonta',
    location:    'Karachi, Pakistan',
    period:      'Jan 2023 – Sep 2023',
    current:     false,
    color:       '#BF5AF2',
    description: [
      'Architected responsive, mobile-first front-end components using React.js, implementing modern web technologies to deliver seamless user experiences across multiple products.',
      'Designed and implemented robust RESTful APIs and backend services using Node.js and Express.js, optimizing data exchange between client and server architectures.',
      'Optimized web application performance through code refactoring, caching strategies, and reduced page load times while maintaining rigorous testing standards.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
  },
  {
    role:        'Junior Web Developer Intern',
    company:     'Avairosoft',
    location:    'Karachi, Pakistan',
    period:      'Aug 2021 – Oct 2021',
    current:     false,
    color:       '#FF9F0A',
    description: [
      'Developed and maintained dynamic web applications utilizing React.js framework and modern JavaScript ES6+ features, contributing to multiple client projects.',
      'Implemented responsive design principles ensuring cross-browser compatibility across Chrome, Firefox, Safari, and Edge.',
      'Collaborated with UI/UX designers, product managers, and senior developers to deliver high-quality web solutions.',
    ],
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
  },
];

// ── Education ─────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree:      'Bachelor of Science in Computer Science',
    institution: 'National University of Computing & Emerging Sciences – FAST',
    period:      'Aug 2019 – Dec 2023',
    location:    'Karachi, Pakistan',
    color:       '#0A84FF',
  },
  {
    degree:      'Pre-Engineering (Intermediate)',
    institution: 'Guards Public College',
    period:      'Sep 2017 – June 2019',
    location:    'Karachi, Pakistan',
    color:       '#BF5AF2',
  },
  {
    degree:      'Computer Science (Matriculation)',
    institution: "Karachi Citizen's Academy",
    period:      'Feb 2014 – May 2017',
    location:    'Karachi, Pakistan',
    color:       '#30D158',
  },
];

// ── Achievements ──────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  { text: "Co-Head of UI/UX Team — Procom 2023: Pakistan's largest tech festival",        icon: '🎨' },
  { text: 'Runner-Up — Database Competition, DevDay 2022',                                 icon: '🥈' },
  { text: 'Active Member — YRP Foundation (NGO), Pakistan',                                icon: '🤝' },
];
