export interface Language {
  name: string;
  link: string;
  img: string;
  percentage: number;
  category?: 'backend' | 'frontend' | 'general';
  title?: string;
  style?: {
    border: string;
    opacity?: number;
  };
}

export const languages: Language[] = [
  {
    name: 'Javacript',
    style: {
      border: '#F7DF1E'
    },
    category: 'frontend',
    percentage: 75,
    img: '/images/js-logo.png',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    name: 'HTML',
    style: {
      border: '#E44C25'
    },
    category: 'frontend',
    percentage: 80,
    img: '/images/html-logo.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'CSS',
    style: {
      border: '#3890D0'
    },
    category: 'frontend',
    percentage: 90,
    img: '/images/css-logo.png',
    link: 'https://developer.mozilla.org/es/docs/Web/CSS'
  },
  {
    name: 'NodeJS',
    style: {
      border: '#73C62B'
    },
    category: 'backend',
    percentage: 90,
    img: '/images/nodejs-logo.png',
    link: 'https://nodejs.org'
  },
  {
    name: 'ExpressJS',
    style: {
      border: '#73C62B'
    },
    category: 'backend',
    percentage: 95,
    img: '/images/express-no-logo.png',
    link: 'https://expressjs.com'
  },
  {
    name: 'MongoDB',
    style: {
      border: '#13AA52'
    },
    category: 'backend',
    percentage: 90,
    img: '/images/mongo-logo.png',
    link: 'https://www.mongodb.com/'
  },
  {
    name: 'EJS',
    style: {
      border: '#A91E50',
      opacity: 0.5
    },
    category: 'backend',
    title: 'I don\'t recommend ejs in a real project. (or any template engine for ExpressJS)',
    percentage: 100,
    img: '/images/ejs-logo.png',
    link: 'https://ejs.co/'
  },
  {
    name: 'ReactJS',
    style: {
      border: '#61DAFB'
    },
    category: 'frontend',
    percentage: 85,
    img: '/images/react-logo.png',
    link: 'https://reactjs.org/'
  },
  {
    name: 'Less',
    style: {
      border: '#244979',
      opacity: 0.8
    },
    category: 'frontend',
    percentage: 65,
    title: 'Personally i don\'t like to use Less.',
    img: '/images/less-logo.png',
    link: 'https://lesscss.org/'
  },
  {
    name: 'Sass',
    style: {
      border: '#BF4080'
    },
    category: 'frontend',
    percentage: 75,
    img: '/images/sass-logo.png',
    link: 'https://sass-lang.com/'
  },
  {
    name: 'TailwindCSS',
    style: {
      border: '#06B6D4'
    },
    category: 'frontend',
    percentage: 85,
    img: '/images/tailwind-logo.png',
    link: 'https://tailwindcss.com/'
  },
  {
    name: 'Typescript',
    style: {
      border: '#3178C6'
    },
    category: 'general',
    percentage: 75,
    img: '/images/ts-logo.png',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'NextJS',
    style: {
      border: '#000000'
    },
    category: 'frontend',
    percentage: 85,
    img: '/images/nextjs-logo.png',
    link: 'https://nextjs.org'
  },
  {
    name: 'socket.io',
    style: {
      border: '#000000'
    },
    category: 'backend',
    percentage: 80,
    img: '/images/socket-io-logo.png',
    link: 'https://socket.io/'
  }
]
