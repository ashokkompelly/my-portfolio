import { Project, Experience, Skill } from "./types.ts";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Just Small Things",
    description:
      "A comprehensive E-Commerce platform designed for seamless shopping experiences, featuring advanced product filtering and secure checkout.",
    tags: ["HTML", "CSS", "JavaScript", "E-Commerce", "Shopify"],
    imageUrl: "https://ashokkompelly.com/assets/images/portfolio1.jpg",
    link: "https://justsmallthings.com",
  },
  {
    id: "2",
    title: "Mepstra IT",
    description:
      "A professional WordPress-based corporate site for an IT services company, optimized for performance and SEO.",
    tags: ["WordPress", "PHP", "SEO", "Web Design"],
    imageUrl: "https://ashokkompelly.com/assets/images/portfolio2.jpg",
    link: "https://mepstrait.com/",
  },
  {
    id: "3",
    title: "WASP Group",
    description:
      "A high-end company website for WASP Group, focusing on clean aesthetics and interactive user interface.",
    tags: ["WordPress", "PHP", "UI/UX Design", "Corporate Website"],
    imageUrl: "https://ashokkompelly.com/assets/images/portfolio3.jpg",
    link: "https://wasp-pfs.com/",
  },
  {
    id: "4",
    title: "Braein",
    description:
      "An innovative IoT-based services platform showcasing smart technology solutions and real-time data visualization.",
    tags: ["HTML", "CSS", "JavaScript", "IoT", "Data Visualization"],
    imageUrl: "https://ashokkompelly.com/assets/images/portfolio4.jpg",
    link: "https://braein.com",
  },
  {
    id: "5",
    title: "Brother USA",
    description:
      "A robust e-commerce solution for Brother USA, featuring complex product catalogs and enterprise-level architecture.",
    tags: ["Next.js", "TypeScript", "Redux", "Enterprise"],
    imageUrl: "https://ashokkompelly.com/assets/images/portfolio5.jpg",
    link: "https://brother-usa.com",
  },
  {
    id: "6",
    title: "Quick Commerce Mobile App",
    description:
      "A custom mobile application for Quick Commerce, designed to enhance user engagement and streamline the shopping experience.",
    tags: [
      "React Native",
      "Node.js",
      "Azure Cosmos DB",
      "Mobile App",
      "Android",
      "iOS",
    ],
    imageUrl:
      "https://media.istockphoto.com/id/1300476661/photo/high-angle-view-asian-chinese-womans-hand-on-mobile-app-for-online-food-delivery-with-laptop.jpg?s=1024x1024&w=is&k=20&c=59FWoXiiiJ-Op_r40e79f38MYp27YvTwXUOunhsvHRM=",
  },
];

export const SKILLS: Skill[] = [
  { name: "UI/UX Design", category: "design", icon: "fa-solid fa-pen-nib" },
  { name: "Figma", category: "design", icon: "fa-brands fa-figma" },
  { name: "Adobe XD", category: "design", icon: "fa-solid fa-paint-brush" },
  { name: "Photoshop", category: "design", icon: "fa-brands fa-adobe" },
  { name: "React.js", category: "frontend", icon: "fa-brands fa-react" },
  { name: "JavaScript", category: "frontend", icon: "fa-brands fa-js" },
  { name: "TypeScript", category: "frontend", icon: "fa-solid fa-code" },
  { name: "Node.js", category: "backend", icon: "fa-brands fa-node-js" },
  { name: "Express.js", category: "backend", icon: "fa-solid fa-server" },
  { name: "Python", category: "backend", icon: "fa-brands fa-python" },
  { name: "MongoDB", category: "database", icon: "fa-solid fa-database" },
  { name: "MySQL", category: "database", icon: "fa-solid fa-database" },
  { name: "AWS", category: "cloud", icon: "fa-brands fa-aws" },
  { name: "Azure", category: "cloud", icon: "fa-solid fa-cloud" },
  { name: "WordPress", category: "cms", icon: "fa-brands fa-wordpress" },
  { name: "Shopify", category: "cms", icon: "fa-solid fa-store" },
  { name: "SEO/Marketing", category: "seo", icon: "fa-solid fa-chart-line" },
  { name: "GitHub", category: "versioning", icon: "fa-brands fa-github" },
  { name: "Postman", category: "testing", icon: "fa-solid fa-paper-plane" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Erebor Tech",
    role: "Fullstack Developer",
    period: "2024 - Present",
    description: [
      "Developed responsive user interfaces using React, Next.js, and React Native.",
      "Built and optimized APIs using Node.js, Python, and Django for scalable applications.",
      "Developed and customized CMS-based websites using WordPress and Shopify, including theme development, plugin integration, and eCommerce store setup.",
      "Designed and contributed to UI/UX for a mobile eCommerce application using Figma, including wireframes, prototypes, and user flow optimization.",
      "Translated Figma designs into pixel-perfect, responsive UI components, ensuring consistency across mobile and web platforms.",
      "Collaborated with designers and stakeholders using Figma for design reviews and seamless developer handoff.",
      "Leveraged AI-powered tools such as GitHub Copilot and other AI assistants to accelerate development, improve code quality, and enhance productivity.",
      "Implemented performance optimization techniques across frontend and backend, improving application speed and scalability.",
      "Improved web application performance through code optimisation and database tuning.",
      "Deployed applications to AWS and Azure using CI/CD pipelines.",
      "Implemented secure authentication systems, including JWT and OAuth, ensuring data protection.",
      "Utilized Git for version control, enabling efficient collaboration, code management, and streamlined development workflows.",
    ],
  },
  {
    id: "2",
    company: "Mepstra Engineering",
    role: "Software Team Lead",
    period: "2020 - 2024",
    description: [
      "Led planning, estimation, and development of scalable web applications using React.js and Django.",
      "Designed and implemented RESTful APIs and microservices architecture for high-traffic applications.",
      "Designed database architectures, wireframes, and UI layouts for modern web and CMS-based applications.",
      "Developed and customized CMS-driven websites using WordPress and Shopify, including theme customization and plugin integrations.",
      "Guided development teams and handled complex frontend and backend tasks across web and CMS platforms.",
      "Established coding standards and ensured code quality, maintainability, and best practices across projects.",
      "Resolved technical challenges related to APIs, databases, performance optimization, and CMS integrations.",
    ],
  },
];

export const BIOGRAPHY = `
Hello, I'm AK (Ashok Kompelly). Every great design begins with an even better story. 
I am a passionate Fullstack Developer and Team Lead with over 10+ years of experience in the industry, having successfully delivered 100+ projects.
I specialize in Website Design, Development, and SEO/Marketing, helping brands build a powerful digital presence through interactive and high-performance web solutions.
My focus is on turning complex ideas into seamless digital realities with a blend of technical expertise and creative design.
`;
