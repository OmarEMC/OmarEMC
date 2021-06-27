export interface Language {
  name: string;
  link: string;
  title?: string;
  img: string;
  percentage: number;
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
    percentage: 75,
    img: '/images/js-logo.png',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    name: 'HTML',
    style: {
      border: '#E44C25'
    },
    percentage: 80,
    img: '/images/html-logo.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'CSS',
    style: {
      border: '#3890D0'
    },
    percentage: 90,
    img: '/images/css-logo.png',
    link: 'https://developer.mozilla.org/es/docs/Web/CSS'
  },
  {
    name: 'NodeJS',
    style: {
      border: '#73C62B'
    },
    percentage: 90,
    img: '/images/nodejs-logo.png',
    link: 'https://nodejs.org'
  },
  {
    name: 'ExpressJS',
    style: {
      border: '#73C62B'
    },
    percentage: 95,
    img: '/images/express-no-logo.png',
    link: 'https://expressjs.com'
  },
  {
    name: 'MongoDB',
    style: {
      border: '#13AA52'
    },
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
    percentage: 75,
    img: '/images/sass-logo.png',
    link: 'https://sass-lang.com/'
  },
  {
    name: 'Typescript',
    style: {
      border: '#3178C6'
    },
    percentage: 75,
    img: '/images/ts-logo.png',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'NextJS',
    style: {
      border: '#000000'
    },
    percentage: 85,
    img: '/images/nextjs-logo.png',
    link: 'https://nextjs.org'
  }
]
