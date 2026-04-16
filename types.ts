
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools';
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
