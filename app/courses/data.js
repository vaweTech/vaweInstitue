// import {
//     Code,
//     Brain,
//     Cloud,
//     Shield,
//     Palette,
//     Megaphone,
//     Briefcase,
//     DollarSign,
//     BookOpen,
//     BarChart3,
//     Smartphone,
//     Target,
//   } from 'lucide-react';
  
//   export const courses = [
//     // 🧠 TECH & PROGRAMMING
//     {
//       id: 'full-stack-web-dev',
//       title: 'Full-Stack Web Development',
//       description:
//         'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build modern full-stack web apps from scratch.',
//       category: 'Technology',
//       icon: 'Code',
//       duration: '8 Months',
//       level: 'Intermediate',
//       modules: 24,
//       students: 9200,
//       image:
//         'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Ethan Reynolds',
//         bio: 'Senior Software Engineer at Google with 10+ years of full-stack experience.',
//         image:
//           'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Frontend Fundamentals', description: 'HTML5, CSS3, JS ES6, responsive layouts' },
//         { title: 'React & Next.js', description: 'Modern SPA & SSR web development' },
//         { title: 'Backend with Node.js', description: 'APIs, Express, MongoDB, JWT Auth' },
//         { title: 'Deployment', description: 'Docker, CI/CD, and cloud hosting' },
//       ],
//     },
  
//     {
//       id: 'python-programming',
//       title: 'Python Programming Masterclass',
//       description:
//         'Learn Python from basics to advanced concepts with practical projects in data science, automation, and web apps.',
//       category: 'Technology',
//       icon: 'Brain',
//       duration: '6 Months',
//       level: 'Beginner',
//       modules: 18,
//       students: 8700,
//       image:
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Sophia Turner',
//         bio: 'AI Research Engineer and Python developer for 8+ years.',
//         image:
//           'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Python Basics', description: 'Syntax, data types, loops, and functions' },
//         { title: 'Object-Oriented Programming', description: 'Classes, inheritance, and modules' },
//         { title: 'Data Science Essentials', description: 'NumPy, Pandas, and Matplotlib' },
//         { title: 'Automation & Scripting', description: 'Web scraping, file management, APIs' },
//       ],
//     },
  
//     {
//       id: 'ai-machine-learning',
//       title: 'AI & Machine Learning Professional Program',
//       description:
//         'A complete journey into Artificial Intelligence and Machine Learning using Python, TensorFlow, and PyTorch.',
//       category: 'Technology',
//       icon: 'Brain',
//       duration: '10 Months',
//       level: 'Advanced',
//       modules: 30,
//       students: 5600,
//       image:
//         'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Dr. Arjun Mehta',
//         bio: 'Ph.D. in Machine Learning, 12 years of AI research & development.',
//         image:
//           'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Maths for ML', description: 'Linear algebra, probability, and calculus for AI' },
//         { title: 'Supervised Learning', description: 'Regression, classification, and optimization' },
//         { title: 'Deep Learning', description: 'Neural networks, CNNs, RNNs, Transformers' },
//         { title: 'AI Projects', description: 'Capstone project and deployment with TensorFlow' },
//       ],
//     },
  
//     {
//       id: 'cloud-computing-aws',
//       title: 'Cloud Computing with AWS',
//       description:
//         'Gain practical experience with AWS services — EC2, S3, Lambda, and CloudFormation — and become cloud certified.',
//       category: 'Technology',
//       icon: 'Cloud',
//       duration: '4 Months',
//       level: 'Intermediate',
//       modules: 12,
//       students: 4800,
//       image:
//         'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Michael Chen',
//         bio: 'AWS Certified Solutions Architect and Cloud Engineer.',
//         image:
//           'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'AWS Fundamentals', description: 'EC2, S3, IAM, and VPC' },
//         { title: 'Serverless Apps', description: 'Lambda, API Gateway, DynamoDB' },
//         { title: 'DevOps on AWS', description: 'CI/CD pipelines and CloudFormation' },
//         { title: 'Certification Prep', description: 'AWS Certified Architect (SAA-C03)' },
//       ],
//     },

//     // 🧠 DATA & AI PROGRAMS
//     {
//       id: 'data-science-pro-program',
//       title: 'Data Science Professional Program',
//       description:
//         'A 400-500 hour immersive program covering Python, statistics, visualization, ML, and internship-grade projects.',
//       category: 'Technology',
//       icon: 'Brain',
//       duration: '10 Months',
//       level: 'Advanced',
//       modules: 28,
//       students: 6200,
//       image:
//         'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Dr. Meera Srinivasan',
//         bio: 'Lead Data Scientist with 13+ years in analytics and AI consulting.',
//         image:
//           'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Python for Data Science', description: 'Pandas, NumPy, data wrangling' },
//         { title: 'Statistics & Mathematics', description: 'Probability, hypothesis testing, linear algebra' },
//         { title: 'Visualization', description: 'Matplotlib, Seaborn, dashboards' },
//         { title: 'Machine Learning', description: 'Supervised/unsupervised methods and deployment' },
//         { title: 'Projects + Internship', description: 'Real datasets and mentored industry projects' },
//       ],
//     },

//     {
//       id: 'ai-ml-advanced',
//       title: 'Artificial Intelligence & Machine Learning',
//       description:
//         'A 450 hour specialization in deep learning, NLP, neural networks, AI tools, and live capstone projects.',
//       category: 'Technology',
//       icon: 'Brain',
//       duration: '9 Months',
//       level: 'Advanced',
//       modules: 26,
//       students: 5100,
//       image:
//         'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Prof. Nikhil Varma',
//         bio: 'AI researcher and architect with deployments across fintech and healthcare.',
//         image:
//           'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Deep Learning Foundations', description: 'ANNs, CNNs, RNNs, transformers' },
//         { title: 'Natural Language Processing', description: 'Text pipelines, embeddings, LLMs' },
//         { title: 'Neural Network Engineering', description: 'Optimization, regularization, MLOps basics' },
//         { title: 'AI Tools & Platforms', description: 'TensorFlow, PyTorch, Vertex AI' },
//         { title: 'Live Projects', description: 'End-to-end AI solutions with mentor reviews' },
//       ],
//     },

//     {
//       id: 'data-analytics-fasttrack',
//       title: 'Data Analytics Fast Track',
//       description:
//         'A 250 hour analyst-ready curriculum using Excel, SQL, Power BI/Tableau, and entry-level Python.',
//       category: 'Technology',
//       icon: 'BarChart3',
//       duration: '6 Months',
//       level: 'Intermediate',
//       modules: 18,
//       students: 6900,
//       image:
//         'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Harini Kapoor',
//         bio: 'Analytics Manager specializing in BI automation and storytelling.',
//         image:
//           'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Excel Power Skills', description: 'Dashboards, PowerQuery, automation' },
//         { title: 'SQL for Analysts', description: 'Queries, joins, stored procedures' },
//         { title: 'Power BI & Tableau', description: 'Data models, visuals, publishing' },
//         { title: 'Python Basics', description: 'Data cleaning with Pandas' },
//         { title: 'Reporting Projects', description: 'Business KPIs and presentation decks' },
//       ],
//     },

//     // 🟥 SOFTWARE & DEVELOPMENT PROGRAMS
//     {
//       id: 'full-stack-intense',
//       title: 'Full-Stack Web Development (350 hrs)',
//       description:
//         'Become a production-ready engineer with HTML/CSS, modern JS, React, Node.js, MongoDB, and deployment workflows.',
//       category: 'Technology',
//       icon: 'Code',
//       duration: '8 Months',
//       level: 'Intermediate',
//       modules: 20,
//       students: 7500,
//       image:
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Rahul Menon',
//         bio: 'Lead MERN Architect, speaker, and mentor for 11+ years.',
//         image:
//           'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Frontend Engineering', description: 'HTML5, CSS3, ESNext patterns' },
//         { title: 'React Ecosystem', description: 'Hooks, routing, state management' },
//         { title: 'Node & APIs', description: 'Express, authentication, REST/GraphQL' },
//         { title: 'MongoDB & Data Modeling', description: 'Aggregation, performance' },
//         { title: 'Deployment Stack', description: 'CI/CD, Docker, cloud hosting' },
//       ],
//     },

//     {
//       id: 'full-stack-java-enterprise',
//       title: 'Full-Stack Java Enterprise Program',
//       description:
//         'Build enterprise-grade applications with Java, Spring Boot, Hibernate, REST APIs, and Angular/React frontends.',
//       category: 'Technology',
//       icon: 'Code',
//       duration: '9 Months',
//       level: 'Advanced',
//       modules: 24,
//       students: 5300,
//       image:
//         'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Suresh Narayanan',
//         bio: 'Solution Architect delivering Java microservices for global enterprises.',
//         image:
//           'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Core Java & OOP', description: 'Collections, multithreading, design patterns' },
//         { title: 'Spring Boot & Hibernate', description: 'REST APIs, JPA, Spring Security' },
//         { title: 'Frontend with Angular/React', description: 'Component-driven UI, state management' },
//         { title: 'Microservices & DevOps', description: 'Docker, CI/CD, cloud deployment' },
//         { title: 'Capstone', description: 'End-to-end enterprise product build' },
//       ],
//     },

//     {
//       id: 'python-r-sql-analytics',
//       title: 'Python + R + SQL Analytics Combo',
//       description:
//         'A comprehensive analytics toolkit mastering Python, R, and SQL for data science, BI, and automation workflows.',
//       category: 'Technology',
//       icon: 'Brain',
//       duration: '6 Months',
//       level: 'Intermediate',
//       modules: 20,
//       students: 4700,
//       image:
//         'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Ishita Rao',
//         bio: 'Lead Data Engineer specializing in multi-language data ecosystems.',
//         image:
//           'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Python Programming', description: 'Data wrangling, automation scripts' },
//         { title: 'R for Analytics', description: 'Tidyverse, statistical modeling, Shiny dashboards' },
//         { title: 'Advanced SQL', description: 'Window functions, performance tuning, ETL' },
//         { title: 'Integration Projects', description: 'Blending Python, R, SQL workflows' },
//       ],
//     },

//     // 🧭 BUSINESS, MANAGEMENT & MARKETING
//     {
//       id: 'mba-mini-program',
//       title: 'MBA Mini Program (Marketing, HR, Finance)',
//       description:
//         'A 150 hour management bootcamp covering marketing, HR, finance, strategy, and case-study driven learning.',
//       category: 'Business',
//       icon: 'Briefcase',
//       duration: '4 Months',
//       level: 'Intermediate',
//       modules: 12,
//       students: 2600,
//       image:
//         'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Prof. Kavya Rao',
//         bio: 'IIM alumnus, corporate strategist, and leadership coach.',
//         image:
//           'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Management Basics', description: 'Organization behavior, operations' },
//         { title: 'HR & Marketing Skills', description: 'Recruitment, branding campaigns' },
//         { title: 'Finance Essentials', description: 'Budgeting, cost analysis, valuation' },
//         { title: 'Case Studies', description: 'Harvard-style business case simulations' },
//       ],
//     },

//     {
//       id: 'business-analytics-noncoding',
//       title: 'Business Analytics (Non-Coding)',
//       description:
//         'A 120 hour analytics program using Excel, Power BI, and business case modeling without heavy coding.',
//       category: 'Business',
//       icon: 'BarChart3',
//       duration: '3 Months',
//       level: 'Beginner',
//       modules: 10,
//       students: 3100,
//       image:
//         'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Neha Gupta',
//         bio: 'Senior Business Analyst with Fortune 100 consulting experience.',
//         image:
//           'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Excel Advanced', description: 'Pivot tables, macros, scenario analysis' },
//         { title: 'Power BI Dashboards', description: 'Data modeling, DAX basics' },
//         { title: 'Business Case Analysis', description: 'Financial and operational modeling' },
//         { title: 'Reporting Projects', description: 'Executive-ready narratives' },
//       ],
//     },
//     {
//       id: 'cpp-programming-dsa',
//       title: 'C++ Programming & Data Structures',
//       description:
//         'A 140 hour hands-on program covering modern C++, OOP, STL, and core data structures & algorithms for interviews.',
//       category: 'Programming',
//       icon: 'Code2',
//       duration: '4 Months',
//       level: 'Beginner to Intermediate',
//       modules: 12,
//       students: 4200,
//       image:
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Arjun Mehta',
//         bio: 'C++ engineer with 8+ years of experience in product-based companies and competitive programming.',
//         image:
//           'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         {
//           title: 'C++ Fundamentals',
//           description: 'Syntax, data types, operators, control flow, functions',
//         },
//         {
//           title: 'Object-Oriented Programming',
//           description: 'Classes, objects, inheritance, polymorphism, encapsulation',
//         },
//         {
//           title: 'STL & Templates',
//           description: 'Vectors, maps, sets, iterators, templates, algorithms',
//         },
//         {
//           title: 'Data Structures & Algorithms',
//           description: 'Arrays, linked lists, stacks, queues, trees, sorting & searching',
//         },
//       ],
//     }
// ,    
  
//     // 📢 MARKETING
//     {
//       id: 'digital-marketing',
//       title: 'Digital Marketing & SEO Mastery',
//       description:
//         'Understand social media marketing, SEO, PPC, and analytics to grow any online business effectively.',
//       category: 'Marketing',
//       icon: 'Megaphone',
//       duration: '3 Months',
//       level: 'Beginner',
//       modules: 10,
//       students: 7200,
//       image:
//         'https://images.unsplash.com/photo-1556767576-cfba5f8c51fc?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Emma Lee',
//         bio: 'Digital Marketing Strategist with 12 years of experience in global campaigns.',
//         image:
//           'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'SEO Fundamentals', description: 'On-page and off-page optimization' },
//         { title: 'Content Marketing', description: 'Building audience and storytelling' },
//         { title: 'Paid Advertising', description: 'Google Ads and Meta Ads' },
//         { title: 'Analytics', description: 'Google Analytics and conversion tracking' },
//       ],
//     },
  
//     // 💼 BUSINESS
//     {
//       id: 'business-management',
//       title: 'Business Management Essentials',
//       description:
//         'Develop leadership, strategic thinking, and operations management skills for modern organizations.',
//       category: 'Business',
//       icon: 'Briefcase',
//       duration: '6 Months',
//       level: 'Intermediate',
//       modules: 14,
//       students: 3900,
//       image:
//         'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
//       instructor: {
//         name: 'Daniel Foster',
//         bio: 'MBA, Business Consultant for Fortune 500 companies.',
//         image:
//           'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=60',
//       },
//       syllabus: [
//         { title: 'Strategic Leadership', description: 'Decision making and vision setting' },
//         { title: 'Operations Management', description: 'Efficiency and scaling systems' },
//         { title: 'Financial Planning', description: 'Budgeting, P&L, and risk analysis' },
//         { title: 'HR & People Skills', description: 'Talent management and motivation' },
//       ],
//     },
  
//   ];
  


export const courses = [
  {
    "id": "cpp-programming",
    "title": "C++ Programming",
    "description": "A practical C++ course covering core syntax, OOP principles, STL, and problem-solving skills for software development and interviews.",
    "category": "Programming",
    "icon": "Code2",
    "duration": "3 Months",
    "level": "Beginner to Intermediate",
    "modules": 10,
    "students": 2800,
    "image": "/assets/c++.png",
    "instructor": {
      "name": "Arjun Mehta",
      "bio": "C++ developer with 8+ years of experience in product-based companies and competitive programming.",
      "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "C++ Basics",
        "description": "Syntax, variables, operators, control flow, and functions."
      },
      {
        "title": "Object-Oriented Programming",
        "description": "Classes, objects, constructors, inheritance, polymorphism."
      },
      {
        "title": "STL and Advanced Features",
        "description": "Vectors, maps, sets, iterators, templates, and exceptions."
      },
      {
        "title": "Mini Projects & Interview Prep",
        "description": "Hands-on projects, coding challenges, and interview questions."
      }
    ]
  },
  {
    "id": "aptitude-training",
    "title": "Aptitude",
    "description": "A structured aptitude program focused on quantitative, logical reasoning, and verbal ability for placements and competitive exams.",
    "category": "Career Skills",
    "icon": "Calculator",
    "duration": "1.5 Months",
    "level": "Beginner",
    "modules": 8,
    "students": 3500,
    "image": "/assets/Aptitude.jpg",
    "instructor": {
      "name": "Priya Sharma",
      "bio": "Quantitative aptitude trainer with a decade of experience coaching engineering and MBA aspirants.",
      "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Quantitative Aptitude",
        "description": "Percentages, ratios, time & work, time & distance, and number systems."
      },
      {
        "title": "Logical Reasoning",
        "description": "Puzzles, arrangements, syllogisms, and data sufficiency."
      },
      {
        "title": "Verbal Ability",
        "description": "Grammar, reading comprehension, vocabulary, and sentence correction."
      },
      {
        "title": "Mock Tests & Analysis",
        "description": "Full-length tests, performance analysis, and test-taking strategy."
      }
    ]
  },
  {
    "id": "search-engine-marketing",
    "title": "Search Engine Marketing",
    "description": "Learn paid search advertising, keyword strategy, campaign optimization, and performance tracking using Google Ads and related tools.",
    "category": "Digital Marketing",
    "icon": "Search",
    "duration": "2 Months",
    "level": "Beginner to Intermediate",
    "modules": 9,
    "students": 1800,
    "image": "/assets/SEM.jpg",
    "instructor": {
      "name": "Rohit Verma",
      "bio": "Digital marketing specialist with 7+ years in performance marketing and lead generation.",
      "image": "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "SEM Fundamentals",
        "description": "Introduction to search engines, paid vs organic, and core concepts."
      },
      {
        "title": "Google Ads Campaigns",
        "description": "Account structure, campaign creation, keywords, and ad copywriting."
      },
      {
        "title": "Optimization & Analytics",
        "description": "Quality score, bidding strategies, A/B testing, and conversion tracking."
      },
      {
        "title": "Reporting & Strategy",
        "description": "Dashboards, KPIs, client reporting, and ROI-focused planning."
      }
    ]
  },
  {
    "id": "broadband-technician",
    "title": "Broadband Technician",
    "description": "Job-oriented training on broadband installation, configuration, troubleshooting, and customer handling for field technicians.",
    "category": "Telecom & Networking",
    "icon": "Wifi",
    "duration": "2.5 Months",
    "level": "Beginner",
    "modules": 9,
    "students": 1200,
    "image": "/assets/Broadband Technician.jpg",
    "instructor": {
      "name": "Suresh Kumar",
      "bio": "Telecom field expert with hands-on experience in broadband and fiber installations.",
      "image": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Basics of Networking",
        "description": "LAN/WAN concepts, IP addressing, and basic hardware components."
      },
      {
        "title": "Broadband Technologies",
        "description": "DSL, fiber, modems, routers, and configuration basics."
      },
      {
        "title": "Installation & Troubleshooting",
        "description": "Site survey, wiring, device setup, and common issue resolution."
      },
      {
        "title": "Customer Interaction & Safety",
        "description": "Soft skills, documentation, safety procedures, and field best practices."
      }
    ]
  },
  {
    "id": "mongodb-database",
    "title": "MongoDB",
    "description": "Learn NoSQL concepts and MongoDB for building scalable, document-based applications with real-world use cases.",
    "category": "Databases",
    "icon": "Database",
    "duration": "1.5 Months",
    "level": "Beginner to Intermediate",
    "modules": 8,
    "students": 1500,
    "image": "/assets/Mango DB.png",
    "instructor": {
      "name": "Ankit Rao",
      "bio": "Backend engineer specializing in NoSQL databases and microservices.",
      "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "NoSQL & MongoDB Basics",
        "description": "Introduction to NoSQL, collections, documents, and BSON."
      },
      {
        "title": "CRUD Operations",
        "description": "Insert, query, update, delete, and working with Mongo shell.",
      },
      {
        "title": "Schema Design & Indexing",
        "description": "Data modeling, indexes, performance considerations."
      },
      {
        "title": "Aggregation & Integration",
        "description": "Aggregation framework and connecting MongoDB with applications."
      }
    ]
  },
  {
    "id": "python-programming",
    "title": "PYTHON",
    "description": "A beginner-friendly Python course that covers programming fundamentals, data handling, and automation basics.",
    "category": "Programming",
    "icon": "Code",
    "duration": "3 Months",
    "level": "Beginner",
    "modules": 10,
    "students": 4200,
    "image": "/assets/pythonimge.jpeg",
    "instructor": {
      "name": "Meera Iyer",
      "bio": "Python developer and trainer focused on automation and data processing.",
      "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Python Foundations",
        "description": "Variables, data types, operators, and control flow."
      },
      {
        "title": "Functions & Modules",
        "description": "Functions, modules, packages, and virtual environments."
      },
      {
        "title": "Data Handling",
        "description": "File handling, exceptions, and working with external libraries."
      },
      {
        "title": "Mini Projects",
        "description": "Simple automation and scripting projects to apply concepts."
      }
    ]
  },
  {
    "id": "react-frontend",
    "title": "React",
    "description": "Learn React from scratch to build responsive and interactive front-end web applications with components and hooks.",
    "category": "Web Development",
    "icon": "Atom",
    "duration": "2.5 Months",
    "level": "Beginner to Intermediate",
    "modules": 9,
    "students": 2600,
    "image": "/assets/react.jpg",
    "instructor": {
      "name": "Rahul Desai",
      "bio": "Front-end engineer specializing in modern JavaScript and React ecosystems.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "React Basics",
        "description": "Components, JSX, props, and state management."
      },
      {
        "title": "Hooks & Routing",
        "description": "useState, useEffect, custom hooks, and React Router."
      },
      {
        "title": "APIs & State Management",
        "description": "Fetching data, context API, and basic global state handling."
      },
      {
        "title": "Project Development",
        "description": "Building a complete single-page application with best practices."
      }
    ]
  },
  {
    "id": "django-framework",
    "title": "Django Framework",
    "description": "Master Django to build secure, scalable backend applications with ORM, authentication, and REST APIs.",
    "category": "Web Development",
    "icon": "Layers",
    "duration": "3 Months",
    "level": "Intermediate",
    "modules": 10,
    "students": 1900,
    "image": "/assets/Django FrameWork.jpg",
    "instructor": {
      "name": "Kiran Reddy",
      "bio": "Full-stack developer with expertise in Python, Django, and REST APIs.",
      "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Django Essentials",
        "description": "Project setup, apps, views, templates, and URLs."
      },
      {
        "title": "Models & ORM",
        "description": "Models, migrations, relationships, and admin customization."
      },
      {
        "title": "Authentication & Forms",
        "description": "User auth, sessions, forms, and validation."
      },
      {
        "title": "Building APIs",
        "description": "Django REST Framework basics and building RESTful APIs."
      }
    ]
  },
  {
    "id": "microsoft-office",
    "title": "Microsoft Office",
    "description": "Essential Microsoft Office skills in Word, Excel, and PowerPoint for academic, office, and professional productivity.",
    "category": "Productivity",
    "icon": "FileText",
    "duration": "1.5 Months",
    "level": "Beginner",
    "modules": 7,
    "students": 5000,
    "image": "/assets/Microsoft.webp",
    "instructor": {
      "name": "Anusha Kulkarni",
      "bio": "Corporate trainer specializing in digital productivity and office tools.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "MS Word",
        "description": "Document formatting, templates, and professional reports."
      },
      {
        "title": "MS Excel",
        "description": "Formulas, charts, basic functions, and data analysis."
      },
      {
        "title": "MS PowerPoint",
        "description": "Presentations, slide design, and visual storytelling."
      },
      {
        "title": "Office Productivity",
        "description": "Shortcut keys, collaboration, and file management best practices."
      }
    ]
  },
  {
    "id": "java-advanced-hibernate",
    "title": "Java Advanced: Hibernate Framework",
    "description": "Deep dive into Hibernate ORM for enterprise Java applications with mapping, caching, and performance optimization.",
    "category": "Programming",
    "icon": "Braces",
    "duration": "2 Months",
    "level": "Intermediate to Advanced",
    "modules": 8,
    "students": 1100,
    "image": "/assets/Advanced Java.jpg",
    "instructor": {
      "name": "Vikram Joshi",
      "bio": "Senior Java architect with extensive experience in Hibernate and Spring-based enterprise systems.",
      "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Hibernate Basics",
        "description": "ORM concepts, configuration, and entity mapping."
      },
      {
        "title": "Associations & Inheritance",
        "description": "One-to-one, one-to-many, many-to-many, and inheritance mapping."
      },
      {
        "title": "Queries & Performance",
        "description": "HQL, Criteria API, caching, and lazy loading."
      },
      {
        "title": "Real-World Integration",
        "description": "Using Hibernate with Spring and building a sample enterprise module."
      }
    ]
  },
  {
    "id": "r-language",
    "title": "R Language",
    "description": "Statistical programming with R for data analysis, visualization, and introductory machine learning.",
    "category": "Data & Analytics",
    "icon": "PieChart",
    "duration": "2 Months",
    "level": "Beginner to Intermediate",
    "modules": 8,
    "students": 900,
    "image": "/assets/R-Programming.jpg",
    "instructor": {
      "name": "Sneha Nair",
      "bio": "Data analyst with experience in R, statistics, and exploratory data analysis.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "R Fundamentals",
        "description": "R syntax, data types, and data structures."
      },
      {
        "title": "Data Manipulation",
        "description": "Using dplyr and tidyr for cleaning and transforming data."
      },
      {
        "title": "Data Visualization",
        "description": "Creating plots with ggplot2 and base R graphics."
      },
      {
        "title": "Intro to Modeling",
        "description": "Basic regression, classification, and model evaluation."
      }
    ]
  },
  {
    "id": "generative-ai",
    "title": "Generative AI (GenAI)",
    "description": "Introduction to generative AI concepts including large language models, prompt engineering, and practical GenAI use cases.",
    "category": "AI & ML",
    "icon": "Sparkles",
    "duration": "2 Months",
    "level": "Intermediate",
    "modules": 9,
    "students": 1600,
    "image": "/assets/Generative AI.jpg",
    "instructor": {
      "name": "Dr. Kavya Rao",
      "bio": "AI researcher focusing on NLP, generative models, and applied AI solutions.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Generative AI Overview",
        "description": "GenAI landscape, applications, and ethics."
      },
      {
        "title": "Language Models & Prompts",
        "description": "Understanding LLMs and prompt engineering techniques."
      },
      {
        "title": "Hands-on GenAI Tools",
        "description": "Working with APIs and practical productivity use cases."
      },
      {
        "title": "Capstone Use Case",
        "description": "Designing a GenAI-based solution or workflow."
      }
    ]
  },
  {
    "id": "ai-devices-installation-operator",
    "title": "AI Devices Installation Operator",
    "description": "Practical training to install, configure, and maintain AI-enabled devices and smart systems in real-world environments.",
    "category": "Hardware & IoT",
    "icon": "Cpu",
    "duration": "2.5 Months",
    "level": "Beginner",
    "modules": 9,
    "students": 700,
    "image": "/assets/AI Device Installation Operator.jpg",
    "instructor": {
      "name": "Mahesh Babu",
      "bio": "IoT and embedded systems specialist with field deployment experience.",
      "image": "https://images.unsplash.com/photo-1528034019136-1c9ce82eac00?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "AI Device Basics",
        "description": "Types of AI devices, sensors, and connectivity options."
      },
      {
        "title": "Installation & Configuration",
        "description": "Site readiness, mounting, wiring, and initial setup."
      },
      {
        "title": "Testing & Troubleshooting",
        "description": "Diagnostics, common issues, and maintenance routines."
      },
      {
        "title": "Safety & Documentation",
        "description": "Safety guidelines, logs, and customer communication."
      }
    ]
  },
  {
    "id": "javascript-fundamentals",
    "title": "Java Script",
    "description": "Core JavaScript programming for the web, covering fundamentals, DOM manipulation, and modern ES features.",
    "category": "Web Development",
    "icon": "FileCode",
    "duration": "2 Months",
    "level": "Beginner to Intermediate",
    "modules": 9,
    "students": 3000,
    "image": "/assets/javaScript.png",
    "instructor": {
      "name": "Sanjay Kulkarni",
      "bio": "JavaScript developer with experience in front-end frameworks and modern web tooling.",
      "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "JS Basics",
        "description": "Variables, data types, operators, and control structures."
      },
      {
        "title": "Functions & Objects",
        "description": "Functions, scope, objects, and arrays."
      },
      {
        "title": "DOM & Events",
        "description": "DOM manipulation, events, and basic form handling."
      },
      {
        "title": "ES6+ Features",
        "description": "Arrow functions, let/const, spread, promises, and modules."
      }
    ]
  },
  {
    "id": "dsa-data-structures-algorithms",
    "title": "DSA (Data Structures and Algorithms)",
    "description": "Structured preparation for data structures and algorithms with a focus on coding interviews and problem-solving.",
    "category": "Programming",
    "icon": "Branch",
    "duration": "3 Months",
    "level": "Intermediate",
    "modules": 11,
    "students": 2200,
    "image": "/assets/DSA.jpg",
    "instructor": {
      "name": "Harsha Vardhan",
      "bio": "Competitive programmer and software engineer with interview coaching experience.",
      "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Foundations",
        "description": "Complexity analysis, recursion, and basic math for DSA."
      },
      {
        "title": "Core Data Structures",
        "description": "Arrays, linked lists, stacks, queues, and hash maps."
      },
      {
        "title": "Trees & Graphs",
        "description": "Binary trees, BSTs, heaps, and basic graph algorithms."
      },
      {
        "title": "Interview Problem Sets",
        "description": "Pattern-based practice and mock interview questions."
      }
    ]
  },
  {
    "id": "java-programming",
    "title": "JAVA",
    "description": "End-to-end Java programming course covering core concepts, OOP, collections, and basic JDBC for real-world applications.",
    "category": "Programming",
    "icon": "Coffee",
    "duration": "3 Months",
    "level": "Beginner to Intermediate",
    "modules": 10,
    "students": 3400,
    "image": "/assets/JAVA.jpg",
    "instructor": {
      "name": "Naveen Kumar",
      "bio": "Java developer with strong experience in backend services and enterprise applications.",
      "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Core Java",
          "description": "Syntax, data types, OOP principles, and control statements."
      },
      {
        "title": "Collections & Generics",
        "description": "Lists, sets, maps, iterators, and generics."
      },
      {
        "title": "Exception Handling & I/O",
        "description": "Exception hierarchy, handling patterns, and file I/O."
      },
      {
        "title": "Intro to JDBC",
        "description": "Connecting Java applications to databases and basic CRUD."
      }
    ]
  },
  {
    "id": "telecomm-customer-care-executive",
    "title": "Telecomm Customer Care Executive",
    "description": "Skill-based training for telecom customer support roles focusing on communication, systems handling, and service quality.",
    "category": "Customer Service",
    "icon": "Headset",
    "duration": "2 Months",
    "level": "Beginner",
    "modules": 8,
    "students": 1300,
    "image": "/assets/Telegram customer care Executive.jpg",
    "instructor": {
      "name": "Divya Menon",
      "bio": "Customer experience trainer with specialization in telecom processes and voice support.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Telecom Basics",
        "description": "Overview of telecom services, plans, and terminology."
      },
      {
        "title": "Customer Communication",
        "description": "Call etiquette, problem-solving, and empathy building."
      },
      {
        "title": "Systems & Tools",
        "description": "CRM systems, ticketing tools, and documentation."
      },
      {
        "title": "Service Quality & Escalations",
        "description": "Handling difficult customers and escalation procedures."
      }
    ]
  },
  {
    "id": "html-web-fundamentals",
    "title": "HTML",
    "description": "Foundation course on HTML to structure web pages and build clean, semantic layouts.",
    "category": "Web Development",
    "icon": "Globe",
    "duration": "1 Month",
    "level": "Beginner",
    "modules": 6,
    "students": 2800,
    "image": "/assets/HTML (1).png",
    "instructor": {
      "name": "Anil Kumar",
      "bio": "Front-end developer with a passion for teaching web fundamentals.",
      "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "HTML Basics",
        "description": "Tags, elements, attributes, and basic structure."
      },
      {
        "title": "Semantic HTML",
        "description": "Header, nav, main, footer, and accessibility basics."
      },
      {
        "title": "Forms & Media",
        "description": "Forms, inputs, audio, video, and images."
      },
      {
        "title": "Mini Project",
        "description": "Create a multi-section static website using HTML."
      }
    ]
  },
  {
    "id": "sql-database",
    "title": "SQL",
    "description": "Learn relational database concepts and SQL queries for data retrieval, manipulation, and reporting.",
    "category": "Databases",
    "icon": "Table",
    "duration": "1.5 Months",
    "level": "Beginner",
    "modules": 7,
    "students": 2600,
    "image": "/assets/Mysql.png",
    "instructor": {
      "name": "Rashmi Rao",
      "bio": "Database specialist with experience in SQL-based analytics and reporting.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Relational Database Basics",
        "description": "Tables, relationships, keys, and normalization concepts."
      },
      {
        "title": "Core SQL Queries",
        "description": "SELECT, WHERE, ORDER BY, GROUP BY, and joins."
      },
      {
        "title": "Data Manipulation",
        "description": "INSERT, UPDATE, DELETE, and transactions basics."
      },
      {
        "title": "Reporting Queries",
        "description": "Aggregations, subqueries, and views for reporting."
      }
    ]
  },
  {
    "id": "general-duty-assistant",
    "title": "General Duty Assistant",
    "description": "Healthcare support training to assist nurses and medical staff in hospitals and care centers.",
    "category": "Healthcare",
    "icon": "HeartPulse",
    "duration": "3 Months",
    "level": "Beginner",
    "modules": 10,
    "students": 800,
    "image": "/assets/General Duty Assistant.jpg",
    "instructor": {
      "name": "Dr. Shalini Rao",
      "bio": "Healthcare professional with experience in hospital operations and patient care training.",
      "image": "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Healthcare Basics",
        "description": "Hospital environment, roles, and basic medical terminology."
      },
      {
        "title": "Patient Care",
        "description": "Basic nursing assistance, hygiene, and comfort measures."
      },
      {
        "title": "Safety & Hygiene",
        "description": "Infection control, PPE, and safety best practices."
      },
      {
        "title": "Documentation & Communication",
        "description": "Reporting to nurses, patient records, and soft skills."
      }
    ]
  },
  {
    "id": "css-styling",
    "title": "CSS",
    "description": "Styling web pages with CSS, including layouts, responsive design, and modern styling techniques.",
    "category": "Web Development",
    "icon": "Palette",
    "duration": "1.5 Months",
    "level": "Beginner",
    "modules": 7,
    "students": 2700,
    "image": "/assets/CSS.png",
    "instructor": {
      "name": "Siddharth Jain",
      "bio": "UI developer focused on clean, responsive, and accessible designs.",
      "image": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "CSS Fundamentals",
        "description": "Selectors, properties, and the box model."
      },
      {
        "title": "Layouts & Positioning",
        "description": "Flexbox, grid, and responsive design techniques."
      },
      {
        "title": "Typography & Colors",
        "description": "Fonts, color systems, and visual hierarchy."
      },
      {
        "title": "CSS Project",
        "description": "Styling a complete multi-page website."
      }
    ]
  },
  {
    "id": "machine-learning-deep-learning",
    "title": "Machine Learning, Deep Learning",
    "description": "Foundational ML and DL concepts, algorithms, and hands-on projects using popular libraries.",
    "category": "AI & ML",
    "icon": "Brain",
    "duration": "4 Months",
    "level": "Intermediate to Advanced",
    "modules": 12,
    "students": 1400,
    "image": "/assets/ML & DL.jpg",
    "instructor": {
      "name": "Dr. Aditya Singh",
      "bio": "Machine learning engineer and researcher with experience in neural networks and predictive modeling.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "ML Foundations",
        "description": "Supervised vs unsupervised learning, evaluation metrics."
      },
      {
        "title": "Core Algorithms",
        "description": "Regression, classification, clustering, and feature engineering."
      },
      {
        "title": "Neural Networks",
        "description": "Perceptrons, feedforward networks, and backpropagation."
      },
      {
        "title": "Deep Learning Applications",
        "description": "Intro to CNNs/RNNs and project-based implementation."
      }
    ]
  },
  {
    "id": "power-bi-business-intelligence",
    "title": "Power BI",
    "description": "Create interactive dashboards, reports, and data models using Microsoft Power BI for business analytics.",
    "category": "Business Intelligence",
    "icon": "BarChart3",
    "duration": "1.5 Months",
    "level": "Beginner to Intermediate",
    "modules": 7,
    "students": 2100,
    "image": "/assets/Power Bi.png",
    "instructor": {
      "name": "Neha Gupta",
      "bio": "Business intelligence consultant with Power BI and reporting expertise.",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Power BI Essentials",
        "description": "Interface, data sources, and basic visualizations."
      },
      {
        "title": "Data Modeling",
        "description": "Relationships, star schemas, and data cleaning."
      },
      {
        "title": "DAX Basics",
        "description": "Measures, calculated columns, and core functions."
      },
      {
        "title": "Dashboards & Sharing",
        "description": "Building interactive dashboards and publishing reports."
      }
    ]
  },
  {
    "id": "java-advanced-spring-boot",
    "title": "Java Advanced – Spring & Spring Boot Framework",
    "description": "Enterprise Java development using Spring and Spring Boot to build REST APIs and production-ready applications.",
    "category": "Programming",
    "icon": "Hexagon",
    "duration": "3 Months",
    "level": "Intermediate to Advanced",
    "modules": 11,
    "students": 1750,
    "image": "/assets/Java.jpg",
    "instructor": {
      "name": "Rohan Patil",
      "bio": "Senior backend engineer with extensive experience in Spring, Spring Boot, and microservices.",
      "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=60"
    },
    "syllabus": [
      {
        "title": "Spring Core",
        "description": "IoC container, beans, configuration, and dependency injection."
      },
      {
        "title": "Spring MVC & REST",
        "description": "Controllers, request mapping, validation, and REST APIs."
      },
      {
        "title": "Spring Boot",
        "description": "Auto-configuration, starters, and building microservices."
      },
      {
        "title": "Security & Deployment",
        "description": "Spring Security basics and deploying Spring Boot apps."
      }
    ]
  }
]
