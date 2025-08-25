import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'syedmujahidahmed0@gmail.com',
    phone: '+919014692100',
    location: 'Hyderabad, India',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Syed Mujahid, I am reaching out to you because...',
    oldPortfolio: 'https://www.legacy.Mujahid.toinfinite.dev',
    portfolio:
        'https://drive.google.com/file/d/15lpevey6paCVhYQmHtNpib569miW_ToV/view?usp=drivesdk',
    upworkProfile: 'https://www.upwork.com/freelancers/Mujahid',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/mujahid411' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/syed-mujahid-ahmed-b16686248',
    },
    // Facebook wasn't provided in the resume; removed duplicate LinkedIn entry.
    { name: 'portfolio', url: GENERAL_INFO.portfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'AI Document Chat System',
        slug: 'ai-document-chat-system',
        liveUrl: '',
        year: 2024,
        description: `Built a full-stack RAG (Retrieval-Augmented Generation) application that allows users to upload documents (PDF, TXT, MD) and ask questions answered strictly from the document content. The system extracts text, chunks it intelligently, generates embeddings using OpenAI, stores them in PostgreSQL with pgvector for semantic search, and uses GPT to generate grounded answers. Features include file upload validation, text extraction from multiple formats, vector similarity search, citation tracking, and strict grounding to prevent hallucination.`,
        role: 'Full Stack Developer',
        techStack: [
            'FastAPI',
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'pgvector',
            'Docker',
            'Python',
            'React',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: '',
    },
    {
        title: 'Applicant Tracking System (ATS)',
        slug: 'applicant-tracking-system',
        liveUrl: '',
        year: 2024,
        description: `Engineered a comprehensive ATS from scratch at Proficient Now, architecting scalable microservices backend and dynamic frontend to manage the complete recruitment lifecycle. Built robust data synchronization framework with bi-directional migrators between Airtable and PostgreSQL, ensuring data consistency across platforms. Implemented real-time notification service using WebSockets with RabbitMQ message queuing for push notifications and email campaigns. Integrated multiple job portal APIs to automatically aggregate position data, reducing manual research by 80%.`,
        role: 'Software Engineer',
        techStack: [
            'Node.js',
            'Express.js',
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Prisma',
            'WebSockets',
            'RabbitMQ',
            'Docker',
            'React',
            'Airtable API',
            'Job Portal APIs',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
        sourceCode: '',
    },
    {
        title: 'Worldlynk - Student Platform',
        slug: 'worldlynk-student-platform',
        liveUrl: 'https://worldlynk.co.uk',
        year: 2024,
        description: `Built worldlynk.co.uk using React and Firebase, providing international students with a comprehensive platform to discover universities, accommodations, events, restaurants, and job opportunities abroad. Leveraged Firebase for backend functionalities including user authentication, real-time database updates, and cloud storage. Implemented intuitive responsive UI with real-time search, personalized recommendations, and secure data handling for enhanced user experience.`,
        role: 'Full Stack Developer',
        techStack: [
            'React',
            'Firebase',
            'JavaScript',
            'HTML',
            'CSS',
            'Firebase Auth',
            'Firestore',
            'Firebase Storage',
            'Real-time Search',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        sourceCode: '',
    },
    {
        title: 'E-commerce Platform',
        slug: 'e-commerce-platform',
        liveUrl: '',
        year: 2024,
        description: `Developed and maintained a feature-rich e-commerce website using the MERN stack at Neonflake, focusing on responsive and user-friendly designs for optimal shopping experience. Designed and implemented RESTful APIs for seamless front-end and back-end communication, ensuring efficient data handling and real-time updates. Managed databases for product and user information, optimized backend processes to enhance performance and reliability of the platform.`,
        role: 'Software Engineer Intern',
        techStack: [
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'Material-UI',
            'RESTful APIs',
            'JavaScript',
            'Database Optimization',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        sourceCode: '',
    },
    {
        title: 'AI Powered Financial App',
        slug: 'ai-powered-financial-app',
        liveUrl: '',
        year: 2024,
        description: `Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.`,
        role: 'Backend Developer',
        techStack: [
            'Express',
            'TypeScript',
            'MongoDB',
            'OpenAI API',
            'AWS SES',
            'AWS S3',
            'Node Mailer',
            'Joi',
            'Puppeteer',
            'EC2',
            'PM2',
            'Nginx',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        sourceCode: '',
    },
    {
        title: 'AI Powered Real Estate',
        slug: 'ai-powered-real-estate',
        liveUrl: '',
        year: 2024,
        description:
            'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        role: 'Full Stack Developer',
        techStack: [
            'Express',
            'TypeScript',
            'MongoDB (Mongoose)',
            'OpenAI API',
            'Replicate AI',
            'Stripe',
            'NextJS',
            'Formik',
            'Tailwind CSS',
            'Cronjob',
            'JWT',
            'Azure Blob',
        ],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: '',
    },
    {
        title: 'Newsroom Management',
        slug: 'newsroom-management',
        liveUrl: '',
        year: 2024,
        description:
            "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        role: 'Full Stack Developer',
        techStack: [
            'NextJS',
            'Material UI',
            'Redux',
            'React Hook Form',
            'Sun Editor',
            'Calendar',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: '',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        company: 'Proficient Now',
        duration: 'Apr 2024 - Present',
        location: 'Hyderabad',
    },
    {
        title: 'Full Stack Developer (Freelance)',
        company: 'Worldlynk (worldlynk.co.uk)',
        duration: 'Jan 2024 - Mar 2024',
        location: 'Remote',
    },
    {
        title: 'Software Engineer Intern',
        company: 'Neonflake',
        duration: 'Feb 2024 - Apr 2024',
        location: 'Hyderabad',
    },
    {
        title: 'Full Stack Web Development',
        company: 'Code For India',
        duration: 'May 2023 - Jan 2024',
        location: 'Hyderabad',
    },
];
