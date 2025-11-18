import {
    Code,
    Brain,
    Cloud,
    Shield,
    Palette,
    Megaphone,
    Briefcase,
    DollarSign,
    BookOpen,
    BarChart3,
    Smartphone,
    Target,
  } from 'lucide-react';
  
  export const courses = [
    // 🧠 TECH & PROGRAMMING
    {
      id: 'full-stack-web-dev',
      title: 'Full-Stack Web Development',
      description:
        'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build modern full-stack web apps from scratch.',
      category: 'Technology',
      icon: 'Code',
      duration: '8 Months',
      level: 'Intermediate',
      modules: 24,
      students: 9200,
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Ethan Reynolds',
        bio: 'Senior Software Engineer at Google with 10+ years of full-stack experience.',
        image:
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Frontend Fundamentals', description: 'HTML5, CSS3, JS ES6, responsive layouts' },
        { title: 'React & Next.js', description: 'Modern SPA & SSR web development' },
        { title: 'Backend with Node.js', description: 'APIs, Express, MongoDB, JWT Auth' },
        { title: 'Deployment', description: 'Docker, CI/CD, and cloud hosting' },
      ],
    },
  
    {
      id: 'python-programming',
      title: 'Python Programming Masterclass',
      description:
        'Learn Python from basics to advanced concepts with practical projects in data science, automation, and web apps.',
      category: 'Technology',
      icon: 'Brain',
      duration: '6 Months',
      level: 'Beginner',
      modules: 18,
      students: 8700,
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Sophia Turner',
        bio: 'AI Research Engineer and Python developer for 8+ years.',
        image:
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Python Basics', description: 'Syntax, data types, loops, and functions' },
        { title: 'Object-Oriented Programming', description: 'Classes, inheritance, and modules' },
        { title: 'Data Science Essentials', description: 'NumPy, Pandas, and Matplotlib' },
        { title: 'Automation & Scripting', description: 'Web scraping, file management, APIs' },
      ],
    },
  
    {
      id: 'ai-machine-learning',
      title: 'AI & Machine Learning Professional Program',
      description:
        'A complete journey into Artificial Intelligence and Machine Learning using Python, TensorFlow, and PyTorch.',
      category: 'Technology',
      icon: 'Brain',
      duration: '10 Months',
      level: 'Advanced',
      modules: 30,
      students: 5600,
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Dr. Arjun Mehta',
        bio: 'Ph.D. in Machine Learning, 12 years of AI research & development.',
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Maths for ML', description: 'Linear algebra, probability, and calculus for AI' },
        { title: 'Supervised Learning', description: 'Regression, classification, and optimization' },
        { title: 'Deep Learning', description: 'Neural networks, CNNs, RNNs, Transformers' },
        { title: 'AI Projects', description: 'Capstone project and deployment with TensorFlow' },
      ],
    },
  
    {
      id: 'cloud-computing-aws',
      title: 'Cloud Computing with AWS',
      description:
        'Gain practical experience with AWS services — EC2, S3, Lambda, and CloudFormation — and become cloud certified.',
      category: 'Technology',
      icon: 'Cloud',
      duration: '4 Months',
      level: 'Intermediate',
      modules: 12,
      students: 4800,
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Michael Chen',
        bio: 'AWS Certified Solutions Architect and Cloud Engineer.',
        image:
          'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'AWS Fundamentals', description: 'EC2, S3, IAM, and VPC' },
        { title: 'Serverless Apps', description: 'Lambda, API Gateway, DynamoDB' },
        { title: 'DevOps on AWS', description: 'CI/CD pipelines and CloudFormation' },
        { title: 'Certification Prep', description: 'AWS Certified Architect (SAA-C03)' },
      ],
    },
  
    {
      id: 'cybersecurity-essentials',
      title: 'Cybersecurity Essentials',
      description:
        'Learn ethical hacking, network defense, and real-world security practices to protect systems and data.',
      category: 'Technology',
      icon: 'Shield',
      duration: '5 Months',
      level: 'Intermediate',
      modules: 16,
      students: 3700,
      image:
        'https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Natalie Brooks',
        bio: 'Ethical Hacker and Security Consultant with 9 years of experience.',
        image:
          'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Network Security Basics', description: 'Firewalls, VPNs, encryption' },
        { title: 'Ethical Hacking', description: 'Reconnaissance, penetration testing' },
        { title: 'Incident Response', description: 'Detection and response workflows' },
        { title: 'Compliance', description: 'GDPR, ISO, and risk management' },
      ],
    },
  
    // 🎨 DESIGN
    {
      id: 'graphic-design',
      title: 'Graphic Design for Beginners',
      description:
        'Master Adobe Photoshop, Illustrator, and Figma to create stunning visuals and brand identities.',
      category: 'Design',
      icon: 'Palette',
      duration: '3 Months',
      level: 'Beginner',
      modules: 10,
      students: 6500,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Alex Rivera',
        bio: 'Creative Director with 15 years of design experience in top agencies.',
        image:
          'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Design Principles', description: 'Color, typography, and composition' },
        { title: 'Adobe Suite', description: 'Photoshop, Illustrator, and InDesign' },
        { title: 'UI/UX Basics', description: 'Wireframes and user flows in Figma' },
        { title: 'Portfolio Project', description: 'Design your own brand identity' },
      ],
    },

    // 🧠 DATA & AI PROGRAMS
    {
      id: 'data-science-pro-program',
      title: 'Data Science Professional Program',
      description:
        'A 400-500 hour immersive program covering Python, statistics, visualization, ML, and internship-grade projects.',
      category: 'Technology',
      icon: 'Brain',
      duration: '10 Months',
      level: 'Advanced',
      modules: 28,
      students: 6200,
      image:
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Dr. Meera Srinivasan',
        bio: 'Lead Data Scientist with 13+ years in analytics and AI consulting.',
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Python for Data Science', description: 'Pandas, NumPy, data wrangling' },
        { title: 'Statistics & Mathematics', description: 'Probability, hypothesis testing, linear algebra' },
        { title: 'Visualization', description: 'Matplotlib, Seaborn, dashboards' },
        { title: 'Machine Learning', description: 'Supervised/unsupervised methods and deployment' },
        { title: 'Projects + Internship', description: 'Real datasets and mentored industry projects' },
      ],
    },

    {
      id: 'ai-ml-advanced',
      title: 'Artificial Intelligence & Machine Learning',
      description:
        'A 450 hour specialization in deep learning, NLP, neural networks, AI tools, and live capstone projects.',
      category: 'Technology',
      icon: 'Brain',
      duration: '9 Months',
      level: 'Advanced',
      modules: 26,
      students: 5100,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Prof. Nikhil Varma',
        bio: 'AI researcher and architect with deployments across fintech and healthcare.',
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Deep Learning Foundations', description: 'ANNs, CNNs, RNNs, transformers' },
        { title: 'Natural Language Processing', description: 'Text pipelines, embeddings, LLMs' },
        { title: 'Neural Network Engineering', description: 'Optimization, regularization, MLOps basics' },
        { title: 'AI Tools & Platforms', description: 'TensorFlow, PyTorch, Vertex AI' },
        { title: 'Live Projects', description: 'End-to-end AI solutions with mentor reviews' },
      ],
    },

    {
      id: 'data-analytics-fasttrack',
      title: 'Data Analytics Fast Track',
      description:
        'A 250 hour analyst-ready curriculum using Excel, SQL, Power BI/Tableau, and entry-level Python.',
      category: 'Technology',
      icon: 'BarChart3',
      duration: '6 Months',
      level: 'Intermediate',
      modules: 18,
      students: 6900,
      image:
        'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Harini Kapoor',
        bio: 'Analytics Manager specializing in BI automation and storytelling.',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Excel Power Skills', description: 'Dashboards, PowerQuery, automation' },
        { title: 'SQL for Analysts', description: 'Queries, joins, stored procedures' },
        { title: 'Power BI & Tableau', description: 'Data models, visuals, publishing' },
        { title: 'Python Basics', description: 'Data cleaning with Pandas' },
        { title: 'Reporting Projects', description: 'Business KPIs and presentation decks' },
      ],
    },

    // 🟥 SOFTWARE & DEVELOPMENT PROGRAMS
    {
      id: 'full-stack-intense',
      title: 'Full-Stack Web Development (350 hrs)',
      description:
        'Become a production-ready engineer with HTML/CSS, modern JS, React, Node.js, MongoDB, and deployment workflows.',
      category: 'Technology',
      icon: 'Code',
      duration: '8 Months',
      level: 'Intermediate',
      modules: 20,
      students: 7500,
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Rahul Menon',
        bio: 'Lead MERN Architect, speaker, and mentor for 11+ years.',
        image:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Frontend Engineering', description: 'HTML5, CSS3, ESNext patterns' },
        { title: 'React Ecosystem', description: 'Hooks, routing, state management' },
        { title: 'Node & APIs', description: 'Express, authentication, REST/GraphQL' },
        { title: 'MongoDB & Data Modeling', description: 'Aggregation, performance' },
        { title: 'Deployment Stack', description: 'CI/CD, Docker, cloud hosting' },
      ],
    },

    {
      id: 'full-stack-java-enterprise',
      title: 'Full-Stack Java Enterprise Program',
      description:
        'Build enterprise-grade applications with Java, Spring Boot, Hibernate, REST APIs, and Angular/React frontends.',
      category: 'Technology',
      icon: 'Code',
      duration: '9 Months',
      level: 'Advanced',
      modules: 24,
      students: 5300,
      image:
        'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Suresh Narayanan',
        bio: 'Solution Architect delivering Java microservices for global enterprises.',
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Core Java & OOP', description: 'Collections, multithreading, design patterns' },
        { title: 'Spring Boot & Hibernate', description: 'REST APIs, JPA, Spring Security' },
        { title: 'Frontend with Angular/React', description: 'Component-driven UI, state management' },
        { title: 'Microservices & DevOps', description: 'Docker, CI/CD, cloud deployment' },
        { title: 'Capstone', description: 'End-to-end enterprise product build' },
      ],
    },

    {
      id: 'python-r-sql-analytics',
      title: 'Python + R + SQL Analytics Combo',
      description:
        'A comprehensive analytics toolkit mastering Python, R, and SQL for data science, BI, and automation workflows.',
      category: 'Technology',
      icon: 'Brain',
      duration: '6 Months',
      level: 'Intermediate',
      modules: 20,
      students: 4700,
      image:
        'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Ishita Rao',
        bio: 'Lead Data Engineer specializing in multi-language data ecosystems.',
        image:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Python Programming', description: 'Data wrangling, automation scripts' },
        { title: 'R for Analytics', description: 'Tidyverse, statistical modeling, Shiny dashboards' },
        { title: 'Advanced SQL', description: 'Window functions, performance tuning, ETL' },
        { title: 'Integration Projects', description: 'Blending Python, R, SQL workflows' },
      ],
    },

    {
      id: 'mobile-app-dev-hybrid',
      title: 'Mobile App Development (Flutter / React Native)',
      description:
        'Build cross-platform mobile apps using Flutter or React Native, backed with APIs, auth, and store deployment.',
      category: 'Technology',
      icon: 'Smartphone',
      duration: '7 Months',
      level: 'Intermediate',
      modules: 18,
      students: 5200,
      image:
        'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Akash Yadav',
        bio: 'Mobile Architect with scaled apps across edtech and e-commerce.',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Language Foundations', description: 'Dart or JavaScript refresh' },
        { title: 'UI Components & Navigation', description: 'Reusable widgets and patterns' },
        { title: 'Backend Integration', description: 'REST APIs, Firebase, auth flows' },
        { title: 'State Management', description: 'Provider, Redux, Bloc' },
        { title: 'App Deployment', description: 'Play Store, App Store submissions' },
      ],
    },

    {
      id: 'software-engineering-core',
      title: 'Software Engineering Foundations',
      description:
        'A 300 hour program focusing on SDLC, OOP, Git/GitHub, and mini projects to groom industry-ready engineers.',
      category: 'Technology',
      icon: 'Code',
      duration: '6 Months',
      level: 'Beginner',
      modules: 16,
      students: 5800,
      image:
        'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Sangeeta Rao',
        bio: 'Principal Engineer coaching grads on engineering excellence.',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'SDLC & Architecture', description: 'Waterfall, Agile, microservices' },
        { title: 'Object-Oriented Programming', description: 'Design patterns and SOLID' },
        { title: 'Version Control', description: 'Git, GitHub workflows, code reviews' },
        { title: 'Mini Projects', description: 'Team-based build and demo cycles' },
      ],
    },

    {
      id: 'devops-sre-pro',
      title: 'DevOps & Site Reliability Engineering',
      description:
        'Master modern DevOps with Linux, Docker, Kubernetes, CI/CD, and cloud deployment over 300-400 hours.',
      category: 'Technology',
      icon: 'Cloud',
      duration: '7 Months',
      level: 'Advanced',
      modules: 22,
      students: 4300,
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Vikram Shah',
        bio: 'SRE lead managing mission-critical cloud infra for unicorn startups.',
        image:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Linux & Shell Scripting', description: 'Automation and OS internals' },
        { title: 'Containerization', description: 'Docker, Kubernetes, Helm' },
        { title: 'CI/CD Pipelines', description: 'Jenkins, GitHub Actions, ArgoCD' },
        { title: 'Cloud Deployments', description: 'AWS/GCP fundamentals and monitoring' },
      ],
    },

    // 🧭 BUSINESS, MANAGEMENT & MARKETING
    {
      id: 'mba-mini-program',
      title: 'MBA Mini Program (Marketing, HR, Finance)',
      description:
        'A 150 hour management bootcamp covering marketing, HR, finance, strategy, and case-study driven learning.',
      category: 'Business',
      icon: 'Briefcase',
      duration: '4 Months',
      level: 'Intermediate',
      modules: 12,
      students: 2600,
      image:
        'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Prof. Kavya Rao',
        bio: 'IIM alumnus, corporate strategist, and leadership coach.',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Management Basics', description: 'Organization behavior, operations' },
        { title: 'HR & Marketing Skills', description: 'Recruitment, branding campaigns' },
        { title: 'Finance Essentials', description: 'Budgeting, cost analysis, valuation' },
        { title: 'Case Studies', description: 'Harvard-style business case simulations' },
      ],
    },

    {
      id: 'digital-marketing-pro',
      title: 'Digital Marketing Accelerator',
      description:
        'A 150-200 hour program covering SEO, Google Ads, social media, and content strategies for brand growth.',
      category: 'Marketing',
      icon: 'Megaphone',
      duration: '4 Months',
      level: 'Intermediate',
      modules: 14,
      students: 6400,
      image:
        'https://images.unsplash.com/photo-1556767576-cfba5f8c51fc?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Rhea Mehta',
        bio: 'Performance marketing lead with multi-million dollar campaign experience.',
        image:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'SEO & Content', description: 'On-page, off-page, keyword research' },
        { title: 'Paid Advertising', description: 'Google Ads, Meta Ads funnels' },
        { title: 'Social Media Marketing', description: 'Organic + paid playbooks' },
        { title: 'Content Marketing', description: 'Editorial calendars, storytelling' },
      ],
    },

    {
      id: 'business-analytics-noncoding',
      title: 'Business Analytics (Non-Coding)',
      description:
        'A 120 hour analytics program using Excel, Power BI, and business case modeling without heavy coding.',
      category: 'Business',
      icon: 'BarChart3',
      duration: '3 Months',
      level: 'Beginner',
      modules: 10,
      students: 3100,
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Neha Gupta',
        bio: 'Senior Business Analyst with Fortune 100 consulting experience.',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Excel Advanced', description: 'Pivot tables, macros, scenario analysis' },
        { title: 'Power BI Dashboards', description: 'Data modeling, DAX basics' },
        { title: 'Business Case Analysis', description: 'Financial and operational modeling' },
        { title: 'Reporting Projects', description: 'Executive-ready narratives' },
      ],
    },

    {
      id: 'product-management-core',
      title: 'Product Management Launchpad',
      description:
        'A 150 hour product management journey covering lifecycle, UX, research, and strategic roadmapping.',
      category: 'Business',
      icon: 'Target',
      duration: '4 Months',
      level: 'Intermediate',
      modules: 12,
      students: 2900,
      image:
        'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Ananya Desai',
        bio: 'Product leader who launched multiple SaaS products across APAC.',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Product Lifecycle', description: 'Discovery to growth methodologies' },
        { title: 'UI/UX Foundations', description: 'Customer journeys, design thinking' },
        { title: 'Market Research & Strategy', description: 'Competitive analysis, pricing' },
        { title: 'Roadmaps & Delivery', description: 'Prioritization and GTM planning' },
      ],
    },
  
    // 📢 MARKETING
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & SEO Mastery',
      description:
        'Understand social media marketing, SEO, PPC, and analytics to grow any online business effectively.',
      category: 'Marketing',
      icon: 'Megaphone',
      duration: '3 Months',
      level: 'Beginner',
      modules: 10,
      students: 7200,
      image:
        'https://images.unsplash.com/photo-1556767576-cfba5f8c51fc?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Emma Lee',
        bio: 'Digital Marketing Strategist with 12 years of experience in global campaigns.',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'SEO Fundamentals', description: 'On-page and off-page optimization' },
        { title: 'Content Marketing', description: 'Building audience and storytelling' },
        { title: 'Paid Advertising', description: 'Google Ads and Meta Ads' },
        { title: 'Analytics', description: 'Google Analytics and conversion tracking' },
      ],
    },
  
    // 💼 BUSINESS
    {
      id: 'business-management',
      title: 'Business Management Essentials',
      description:
        'Develop leadership, strategic thinking, and operations management skills for modern organizations.',
      category: 'Business',
      icon: 'Briefcase',
      duration: '6 Months',
      level: 'Intermediate',
      modules: 14,
      students: 3900,
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'Daniel Foster',
        bio: 'MBA, Business Consultant for Fortune 500 companies.',
        image:
          'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Strategic Leadership', description: 'Decision making and vision setting' },
        { title: 'Operations Management', description: 'Efficiency and scaling systems' },
        { title: 'Financial Planning', description: 'Budgeting, P&L, and risk analysis' },
        { title: 'HR & People Skills', description: 'Talent management and motivation' },
      ],
    },
  
    // 💰 FINANCE
    {
      id: 'personal-finance',
      title: 'Personal Finance & Investing 101',
      description:
        'Understand budgeting, investing, and wealth-building fundamentals to take control of your finances.',
      category: 'Business',
      icon: 'DollarSign',
      duration: '2 Months',
      level: 'Beginner',
      modules: 8,
      students: 6100,
      image:
        'https://images.unsplash.com/photo-1565372918674-686f8d7f3c4e?auto=format&fit=crop&w=800&q=80',
      instructor: {
        name: 'James O’Neil',
        bio: 'Financial Advisor & Investor with 15 years of experience.',
        image:
          'https://images.unsplash.com/photo-1614289372297-f8b0e75e62c7?auto=format&fit=crop&w=200&q=60',
      },
      syllabus: [
        { title: 'Budgeting Basics', description: 'Tracking income and expenses' },
        { title: 'Investing Fundamentals', description: 'Stocks, ETFs, crypto, and diversification' },
        { title: 'Retirement Planning', description: '401(k), IRA, and compounding growth' },
        { title: 'Smart Saving', description: 'Automating and optimizing spending' },
      ],
    },
  ];
  




// // app/courses/data.js

// export const courses = [
//     // --- TECHNOLOGY COURSES ---
//     {
//       id: 'full-stack-development',
//       title: 'Full-Stack Web Development Bootcamp',
//       description:
//         'Master HTML, CSS, JavaScript, React, Node.js, and databases to build production-grade web applications.',
//       category: 'Technology',
//       icon: 'Code',
//       duration: '6 Months',
//       level: 'Intermediate',
//       modules: 24,
//       students: 12500,
//       image: 'https://source.unsplash.com/800x600/?web-development,programming,code',
//       instructor: {
//         name: 'Alex Johnson',
//         bio: 'Full-Stack Engineer with 10+ years of experience in React, Node.js, and scalable systems.',
//         image: 'https://source.unsplash.com/200x200/?man,developer,portrait',
//       },
//       syllabus: [
//         { title: 'Frontend Foundations', description: 'HTML, CSS, and responsive design' },
//         { title: 'JavaScript & React', description: 'Modern ES6+ JS, React fundamentals, and hooks' },
//         { title: 'Backend with Node.js', description: 'REST APIs, Express.js, and authentication' },
//         { title: 'Databases', description: 'MongoDB, PostgreSQL, and data modeling' },
//         { title: 'DevOps Basics', description: 'Version control, deployment, and CI/CD pipelines' },
//       ],
//     },
  
//     {
//       id: 'python-programming',
//       title: 'Python Programming for Everyone',
//       description:
//         'Learn Python fundamentals, data structures, and scripting — perfect for beginners or upskilling.',
//       category: 'Technology',
//       icon: 'Brain',
//       duration: '3 Months',
//       level: 'Beginner',
//       modules: 12,
//       students: 9800,
//       image: 'https://source.unsplash.com/800x600/?python,code,programming',
//       instructor: {
//         name: 'Sophia Turner',
//         bio: 'Software Engineer and Data Enthusiast specializing in Python and automation.',
//         image: 'https://source.unsplash.com/200x200/?woman,developer,portrait',
//       },
//       syllabus: [
//         { title: 'Introduction to Python', description: 'Syntax, variables, loops, and data types' },
//         { title: 'Functions & Modules', description: 'Reusable code and modular programming' },
//         { title: 'File Handling', description: 'Reading/writing data and file operations' },
//         { title: 'Error Handling & Debugging', description: 'Clean and safe code practices' },
//         { title: 'Mini Projects', description: 'Real-world examples for hands-on practice' },
//       ],
//     },
  
//     {
//       id: 'cybersecurity-essentials',
//       title: 'Cybersecurity Essentials',
//       description:
//         'Learn ethical hacking, network defense, and real-world security practices to protect systems and data.',
//       category: 'Technology',
//       icon: 'Shield',
//       duration: '5 Months',
//       level: 'Intermediate',
//       modules: 16,
//       students: 3700,
//       image: 'https://source.unsplash.com/800x600/?cybersecurity,hacking,security,technology',
//       instructor: {
//         name: 'Natalie Brooks',
//         bio: 'Ethical Hacker and Security Consultant with 9 years of experience.',
//         image: 'https://source.unsplash.com/200x200/?woman,cybersecurity,portrait',
//       },
//       syllabus: [
//         { title: 'Network Security Basics', description: 'Firewalls, VPNs, encryption' },
//         { title: 'Ethical Hacking', description: 'Reconnaissance and penetration testing' },
//         { title: 'Incident Response', description: 'Threat detection and mitigation' },
//         { title: 'Compliance & Governance', description: 'GDPR, ISO, and risk management' },
//       ],
//     },
  
//     {
//       id: 'cloud-computing',
//       title: 'Cloud Computing with AWS & Azure',
//       description:
//         'Deploy and manage scalable cloud infrastructure using Amazon Web Services and Microsoft Azure.',
//       category: 'Technology',
//       icon: 'Cloud',
//       duration: '4 Months',
//       level: 'Intermediate',
//       modules: 14,
//       students: 6400,
//       image: 'https://source.unsplash.com/800x600/?cloud-computing,aws,azure,server',
//       instructor: {
//         name: 'Daniel Kim',
//         bio: 'Cloud Architect with 11+ years in multi-cloud infrastructure and DevOps automation.',
//         image: 'https://source.unsplash.com/200x200/?man,cloud-engineer,portrait',
//       },
//       syllabus: [
//         { title: 'Cloud Foundations', description: 'IaaS, PaaS, SaaS explained' },
//         { title: 'AWS Deep Dive', description: 'EC2, S3, and Lambda basics' },
//         { title: 'Azure Essentials', description: 'Virtual machines and services overview' },
//         { title: 'Cloud Security & Monitoring', description: 'IAM, policies, and best practices' },
//       ],
//     },
  
//     // --- BUSINESS & MARKETING ---
//     {
//       id: 'digital-marketing',
//       title: 'Digital Marketing & SEO Mastery',
//       description:
//         'Understand social media, SEO, PPC, and analytics to grow any online business effectively.',
//       category: 'Marketing',
//       icon: 'Megaphone',
//       duration: '3 Months',
//       level: 'Beginner',
//       modules: 10,
//       students: 7200,
//       image: 'https://source.unsplash.com/800x600/?digital-marketing,seo,social-media',
//       instructor: {
//         name: 'Emma Lee',
//         bio: 'Digital Marketing Strategist with 12 years of experience in global campaigns.',
//         image: 'https://source.unsplash.com/200x200/?woman,marketer,portrait',
//       },
//       syllabus: [
//         { title: 'SEO Fundamentals', description: 'On-page and off-page optimization' },
//         { title: 'Content Marketing', description: 'Audience targeting and storytelling' },
//         { title: 'Paid Advertising', description: 'Google Ads and Meta Ads' },
//         { title: 'Analytics', description: 'Google Analytics and performance insights' },
//       ],
//     },
  
//     {
//       id: 'personal-finance',
//       title: 'Personal Finance & Investing 101',
//       description:
//         'Understand budgeting, investing, and wealth-building fundamentals to take control of your finances.',
//       category: 'Business',
//       icon: 'DollarSign',
//       duration: '2 Months',
//       level: 'Beginner',
//       modules: 8,
//       students: 6100,
//       image: 'https://source.unsplash.com/800x600/?finance,money,investment,business',
//       instructor: {
//         name: 'James O’Neil',
//         bio: 'Financial Advisor & Investor with 15 years of experience.',
//         image: 'https://source.unsplash.com/200x200/?man,business,portrait',
//       },
//       syllabus: [
//         { title: 'Budgeting Basics', description: 'Tracking income and expenses' },
//         { title: 'Investing Fundamentals', description: 'Stocks, ETFs, and diversification' },
//         { title: 'Retirement Planning', description: '401(k), IRA, and compounding growth' },
//         { title: 'Smart Saving', description: 'Automation and lifestyle planning' },
//       ],
//     },
  
//     {
//       id: 'entrepreneurship',
//       title: 'Entrepreneurship & Startup Strategy',
//       description:
//         'Learn how to turn an idea into a business with proven frameworks for startups and leadership.',
//       category: 'Business',
//       icon: 'Briefcase',
//       duration: '4 Months',
//       level: 'Intermediate',
//       modules: 12,
//       students: 4800,
//       image: 'https://source.unsplash.com/800x600/?startup,business,entrepreneur,teamwork',
//       instructor: {
//         name: 'Laura White',
//         bio: 'Startup mentor and entrepreneur who scaled 3 SaaS products successfully.',
//         image: 'https://source.unsplash.com/200x200/?woman,entrepreneur,portrait',
//       },
//       syllabus: [
//         { title: 'Ideation & Validation', description: 'Testing product-market fit' },
//         { title: 'Funding Strategies', description: 'Bootstrapping and venture capital' },
//         { title: 'Growth Hacking', description: 'Customer acquisition and retention' },
//         { title: 'Leadership & Teams', description: 'Building culture and collaboration' },
//       ],
//     },
  
//     // --- CREATIVE & NON-TECHNICAL ---
//     {
//       id: 'graphic-design',
//       title: 'Graphic Design Fundamentals',
//       description:
//         'Master design principles, color theory, and Adobe tools to create stunning visuals.',
//       category: 'Design',
//       icon: 'Palette',
//       duration: '3 Months',
//       level: 'Beginner',
//       modules: 9,
//       students: 8500,
//       image: 'https://source.unsplash.com/800x600/?graphic-design,creativity,art',
//       instructor: {
//         name: 'Liam Carter',
//         bio: 'Creative Director and UI/UX Designer with a decade of design experience.',
//         image: 'https://source.unsplash.com/200x200/?man,designer,portrait',
//       },
//       syllabus: [
//         { title: 'Design Basics', description: 'Typography, layout, and color theory' },
//         { title: 'Adobe Suite', description: 'Photoshop, Illustrator, and XD' },
//         { title: 'Brand Identity', description: 'Logo design and visual consistency' },
//         { title: 'Portfolio Project', description: 'End-to-end design challenge' },
//       ],
//     },
  
//     {
//       id: 'communication-skills',
//       title: 'Effective Communication & Public Speaking',
//       description:
//         'Enhance your verbal, written, and presentation skills to stand out in personal and professional settings.',
//       category: 'Soft Skills',
//       icon: 'Users',
//       duration: '2 Months',
//       level: 'All Levels',
//       modules: 6,
//       students: 9000,
//       image: 'https://source.unsplash.com/800x600/?public-speaking,communication,leadership',
//       instructor: {
//         name: 'David Chen',
//         bio: 'Public speaking coach and corporate trainer with 15+ years of experience.',
//         image: 'https://source.unsplash.com/200x200/?man,speaker,portrait',
//       },
//       syllabus: [
//         { title: 'Confidence Building', description: 'Overcome stage fear and anxiety' },
//         { title: 'Storytelling', description: 'Engage audiences with impactful messages' },
//         { title: 'Body Language', description: 'Gestures, tone, and posture' },
//         { title: 'Presentation Skills', description: 'Crafting powerful slide decks' },
//       ],
//     },
//   ];
  