export interface Project {
  id?: number;
  title: string;
  description: string;
  period?: string;
  client?: string;
  tags: string[];
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SocialLink {
  url: string;
  icon: string;
  label: string;
}