export interface Project {
  sid: number;
  id: string;
  image: string;
  technologies: string[];
  links?: string[];
  created_at: string;
  es_title: string;
  en_title: string;
  es_learned: string;
  en_learned: string;
  es_description: string;
  en_description: string;
}