export interface ISocialItem {
  link: string;
  title: string;
}

export interface Language {
  name: string;
  link: string;
  color: string;
  category?: 'backend' | 'frontend' | 'general';
}

export const languages: Language[] = [
  {
    name: 'Javascript',
    color: '#F7DF1E',
    category: 'frontend',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    name: 'HTML',
    color: '#E44C25',
    category: 'frontend',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'CSS',
    color: '#3890D0',
    category: 'frontend',
    link: 'https://developer.mozilla.org/es/docs/Web/CSS'
  },
  {
    name: 'NodeJS',
    color: '#73C62B',
    category: 'backend',
    link: 'https://nodejs.org'
  },
  {
    name: 'ExpressJS',
    color: '#73C62B',
    category: 'backend',
    link: 'https://expressjs.com'
  },
  {
    name: 'NestJS',
    color: '#EA2845',
    category: 'backend',
    link: 'https://nestjs.com'
  },
  {
    name: 'MongoDB',
    color: '#13AA52',
    category: 'backend',
    link: 'https://www.mongodb.com/'
  },
  {
    name: 'EJS',
    category: 'backend',
    link: 'https://ejs.co/',
    color: '#A91E50'
  },
  {
    name: 'ReactJS',
    category: 'frontend',
    link: 'https://reactjs.org/',
    color: '#61DAFB'
  },
  {
    name: 'Less',
    category: 'frontend',
    link: 'https://lesscss.org/',
    color: '#244979'
  },
  {
    name: 'Sass',
    category: 'frontend',
    link: 'https://sass-lang.com/',
    color: '#BF4080'
  },
  {
    name: 'TailwindCSS',
    category: 'frontend',
    link: 'https://tailwindcss.com/',
    color: '#06B6D4'
  },
  {
    name: 'Typescript',
    category: 'general',
    link: 'https://www.typescriptlang.org/',
    color: '#3178C6'
  },
  {
    name: 'NextJS',
    category: 'frontend',
    link: 'https://nextjs.org',
    color: '#000000'
  },
  {
    name: 'socket.io',
    category: 'backend',
    link: 'https://socket.io/',
    color: '#000000'
  }
]
