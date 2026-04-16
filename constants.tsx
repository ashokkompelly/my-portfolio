
import { Project, Experience, Skill } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Just Small Things',
    description: 'A comprehensive E-Commerce platform designed for seamless shopping experiences, featuring advanced product filtering and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'E-Commerce'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://ashokkompelly.com'
  },
  {
    id: '2',
    title: 'Mepstra IT',
    description: 'A professional WordPress-based corporate site for an IT services company, optimized for performance and SEO.',
    tags: ['WordPress', 'PHP', 'SEO', 'Web Design'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://mepstrait.com/'
  },
  {
    id: '3',
    title: 'WASP Group',
    description: 'A high-end company website for WASP Group, focusing on clean aesthetics and interactive user interface.',
    tags: ['JavaScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://wasp-pfs.com/'
  },
  {
    id: '4',
    title: 'Braein',
    description: 'An innovative IoT-based services platform showcasing smart technology solutions and real-time data visualization.',
    tags: ['IoT', 'React', 'D3.js', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://ashokkompelly.com'
  },
  {
    id: '5',
    title: 'Brother USA',
    description: 'A robust e-commerce solution for Brother USA, featuring complex product catalogs and enterprise-level architecture.',
    tags: ['Next.js', 'TypeScript', 'Redux', 'Enterprise'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://ashokkompelly.com'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', category: 'frontend', icon: 'fa-brands fa-react' },
  { name: 'JavaScript', category: 'frontend', icon: 'fa-brands fa-js' },
  { name: 'TypeScript', category: 'frontend', icon: 'fa-solid fa-code' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'fa-solid fa-palette' },
  { name: 'Node.js', category: 'backend', icon: 'fa-brands fa-node-js' },
  { name: 'Express.js', category: 'backend', icon: 'fa-solid fa-server' },
  { name: 'MongoDB', category: 'backend', icon: 'fa-solid fa-database' },
  { name: 'WordPress', category: 'tools', icon: 'fa-brands fa-wordpress' },
  { name: 'UI/UX Design', category: 'frontend', icon: 'fa-solid fa-pen-nib' },
  { name: 'SEO/Marketing', category: 'tools', icon: 'fa-solid fa-chart-line' },
  { name: 'GitHub', category: 'tools', icon: 'fa-brands fa-github' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Erebor Tech',
    role: 'Fullstack Developer & Team Lead',
    period: '2021 - Present',
    description: [
      'Leading a team of developers to build and maintain high-performance web applications.',
      'Architecting scalable backend solutions using Node.js and MongoDB.',
      'Driving UI/UX improvements and ensuring cross-browser compatibility.',
      'Mentoring junior developers and implementing best practices for code quality.'
    ]
  },
  {
    id: '2',
    company: 'Freelance',
    role: 'Web Developer & UI/UX Designer',
    period: '2019 - 2021',
    description: [
      'Developed custom websites for various clients using WordPress and modern JS frameworks.',
      'Designed intuitive user interfaces and prototypes using Figma and Adobe XD.',
      'Optimized websites for SEO and performance, resulting in improved search rankings.',
      'Managed end-to-end project lifecycles from discovery to deployment.'
    ]
  }
];

export const BIOGRAPHY = `
Hello, I'm AK (Ashok Kompelly). Every great design begins with an even better story. 
I am a passionate Fullstack Developer and Team Lead with over 9+ years of experience in the industry, having successfully delivered 100+ projects.
I specialize in Website Design, Development, and SEO/Marketing, helping brands build a powerful digital presence through interactive and high-performance web solutions.
My focus is on turning complex ideas into seamless digital realities with a blend of technical expertise and creative design.
`;
