export const profile = {
  name: 'Tharushika Jansa',
  role: 'Software Engineer',
  tagline: 'React • TypeScript • C#/.NET • SQL • Web Applications',
  location: 'Brisbane, QLD 4122 · Open to relocation',
  email: 'tharushijanz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tharushika-jansa-1a8835114/',
  github: 'https://github.com/TharushiJansa19',
  oldGithub: 'https://github.com/TharushikaJanz',
  resumeUrl: './Tharushika_Jansa_Resume.pdf',
  photo: './profile-photo.jpg',
  summary:
    'I build responsive, detail-focused websites and web apps with HTML, CSS, JavaScript and React, including Shopify and WordPress builds for global fashion brands.',
  about:
    "I have 2+ years' experience in Agile teams, turning Figma designs into responsive pages, maintaining live Shopify storefronts and integrating REST APIs. I enjoy working closely with designers, QA and backend engineers, and I'm currently building my cloud skills with AWS.",
  workStyle:
    "I work comfortably across the full process — translating requirements into UI in Figma, building responsive layouts, integrating forms and analytics, and optimising for performance, accessibility, and SEO. I'm self-motivated, manage my own projects and deadlines, and care about the details that make a site match its design on every screen.",
}

export type SkillGroup = {
  title: string
  blurb: string
  skills: string[]
  highlight: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Technologies',
    blurb: 'What I build with every day',
    highlight: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Shopify'],
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'React Native',
      'Redux',
      'Tamagui',
      'Node.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Shopify',
      'Liquid',
      'WordPress',
      'Elementor Pro',
      'C# (.NET)',
      'Java',
      'Python',
    ],
  },
  {
    title: 'Cloud & Data',
    blurb: 'Backend, cloud and the data layer',
    highlight: ['SQL', 'REST APIs', 'AWS (Cloud Practitioner)'],
    skills: [
      'SQL',
      'MySQL',
      'SQL Server',
      'DynamoDB',
      'Firebase',
      'AWS (Cloud Practitioner)',
      'REST APIs',
      'Component Architecture',
      'Azure & CI/CD concepts',
    ],
  },
  {
    title: 'Tools & Collaboration',
    blurb: 'How I work within a team',
    highlight: ['Git', 'GitHub', 'Figma', 'Jira'],
    skills: [
      'Git',
      'GitHub',
      'Bitbucket',
      'Jira',
      'Confluence',
      'VS Code',
      'Android Studio',
      'IntelliJ IDEA',
      'Figma',
      'Adobe XD',
    ],
  },
  {
    title: 'Testing & Quality',
    blurb: 'Keeping things solid before ship',
    highlight: ['Manual Testing', 'Code Review'],
    skills: ['Manual Testing', 'Selenium WebDriver', 'Unit Testing', 'Code Review'],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
  points: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Brisbane, QLD',
    period: 'Sep 2025 — Present',
    summary: 'Delivering independent web solutions and expanding backend and cloud capabilities.',
    points: [
      'HARAO — smart parking bay monitoring system: designed a React-based dashboard to visualise real-time IoT sensor data and integrated backend services for live occupancy status.',
      'YellowCables — technology services client: built the responsive company website in React and TypeScript with reusable components and optimised performance.',
      'Ongoing development: strengthening backend skills in C# and SQL; studying AWS Cloud Practitioner and exploring serverless architecture.',
    ],
    tags: ['React', 'TypeScript', 'IoT Dashboards', 'AWS'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Star Garments Group (Pvt) Ltd',
    period: 'May 2024 — Aug 2025',
    summary: 'Delivered scalable e-commerce and corporate web platforms within Agile teams supporting global fashion brands.',
    points: [
      'Developed responsive web applications using React, JavaScript and TypeScript within Shopify and WordPress environments.',
      'Implemented maintainable, component-based architecture aligned with scalable design principles.',
      'Integrated frontend systems with backend APIs and structured data sources.',
      'Participated in sprint planning, peer code reviews, and cross-functional collaboration with UX designers and QA teams.',
      'Key projects: multi-brand e-commerce platforms for Komar Brands (Shopify, WordPress); corporate website redevelopment for Star Garments (WordPress).',
    ],
    tags: ['React', 'Shopify', 'WordPress', 'REST APIs'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Asyncdot (Pvt) Ltd',
    period: 'Jul 2023 — Apr 2024',
    summary: 'Contributed to financial and enterprise web/mobile applications in a sprint-based Agile environment.',
    points: [
      'Developed mobile application features using React Native and TypeScript.',
      'Integrated RESTful APIs for authentication, transactions, and dynamic data handling.',
      'Collaborated with backend engineers to ensure reliable API communication.',
      'Key projects: Simplebooks financial mobile app (Tamagui, React Native, JavaScript, Tailwind CSS); POS web application (React, JavaScript).',
    ],
    tags: ['React Native', 'TypeScript', 'Tamagui', 'REST APIs'],
  },
  {
    role: 'Trainee Software Engineer',
    company: 'Sutra Technologies (Pvt) Ltd',
    period: 'Jul 2022 — Jul 2023',
    summary: 'Developed scalable web and mobile applications within Agile delivery teams.',
    points: [
      'Travo (public transport ticket booking app): built booking workflows using React Native, implemented map-based features using geolocation services, and integrated REST APIs for ticket management and authentication.',
      'ConTrak (internal project management web app): developed a React-based dashboard for employee project and task management, integrated with backend APIs for dynamic data.',
    ],
    tags: ['React Native', 'Geolocation', 'React', 'REST APIs'],
  },
]

export type Project = {
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
  liveLinks?: { label: string; url: string }[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'YellowCables',
    description:
      'Freelance client project: a responsive website for a technology services company, built from the ground up in React and TypeScript.',
    tags: ['Client Work', 'React', 'TypeScript', 'Vite'],
    github: 'https://github.com/TharushiJansa19/yellowcables',
    live: 'https://www.yellowcables.au/',
    featured: true,
  },
  {
    name: 'Komar Brands — Multi-Brand Shopify Storefronts',
    description:
      'Theme rebuilds and updates across six live Shopify storefronts for global fashion brands: banner and promotional page builds, new product/section rollouts, ADA accessibility compliance fixes, and bug fixes (swatches, product visibility, button issues).',
    tags: ['Shopify', 'Liquid', 'ADA Accessibility', 'Bug Fixes'],
    liveLinks: [
      { label: 'Cuddl Duds', url: 'https://cuddlduds.com/' },
      { label: 'BedHead Pajamas', url: 'https://bedheadpjs.com/' },
      { label: 'On Gossamer', url: 'https://ongossamer.com/' },
      { label: 'Le Mystère', url: 'https://lemystere.com/' },
      { label: 'Eileen West', url: 'https://www.eileenwest.com/' },
      { label: 'Aria Sleepwear', url: 'https://ariasleepwear.com/' },
    ],
    featured: true,
  },
  {
    name: 'Komar Brands — Corporate Site',
    description:
      'Converted Figma designs into a fully built WordPress site, working alongside a senior developer to deliver it from the ground up.',
    tags: ['WordPress', 'Figma to Code', 'Corporate Site'],
    live: 'https://komarbrands.com/',
    featured: true,
  },
  {
    name: 'Star Garments Group — Corporate Site',
    description:
      'Built the company’s current WordPress site from scratch alongside a senior developer, from initial structure through to launch.',
    tags: ['WordPress', 'Corporate Site'],
    live: 'https://www.star.lk/',
    featured: true,
  },
  {
    name: 'HARAO — Smart Parking Monitor',
    description:
      'Real-time IoT dashboard visualising live parking bay occupancy, built with a React frontend wired to live sensor APIs.',
    tags: ['React', 'IoT', 'Dashboards', 'REST APIs'],
    featured: true,
  },
  {
    name: 'Wardrobe Whiz',
    description:
      'AI-powered wardrobe management system pairing a mobile frontend with a machine learning backend — recommendation logic built with image segmentation and feature extraction.',
    tags: ['React Native', 'Python', 'Segformer', 'Pinecone'],
    github: 'https://github.com/TharushiJansa19/WardrobeWhiz',
  },
  {
    name: 'Simplebooks',
    description:
      'Financial mobile application handling authentication, transactions and dynamic data with a clean, component-driven UI.',
    tags: ['React Native', 'Tamagui', 'Tailwind CSS'],
  },
  {
    name: 'Travo — Transit Ticketing App',
    description:
      'Public transport ticket booking app with map-based, geolocation-driven booking workflows and REST API ticket management.',
    tags: ['React Native', 'Geolocation', 'REST APIs'],
  },
  {
    name: 'ConTrak',
    description:
      'Internal project management web app with a React dashboard for employee project and task tracking, backed by dynamic APIs.',
    tags: ['React', 'Dashboards', 'REST APIs'],
  },
  {
    name: 'Student Management System',
    description:
      'Desktop C#/.NET application with full CRUD operations and a relational SQL Server schema for enrolments, payments and courses.',
    tags: ['C#', '.NET', 'SQL Server'],
  },
  {
    name: 'DeTexster — Plant Disease Detection',
    description:
      'Image classification mobile workflow built with TensorFlow for plant disease detection and treatment recommendation.',
    tags: ['Python', 'TensorFlow', 'Flutter'],
  },
]

export type Education = {
  title: string
  place: string
  period: string
}

export const education: Education[] = [
  { title: 'BEng (Hons) Software Engineering (2:1)', place: 'University of Westminster, UK', period: '2024' },
  { title: 'Pearson Assured Diploma in Information Technology (DiTEC)', place: '', period: '2020' },
]

export const certifications: string[] = ['AWS Certified Cloud Practitioner — In Progress']
