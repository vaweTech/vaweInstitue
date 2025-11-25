// Script to generate realistic course images using Canvas API simulation
// This creates actual course preview images with proper graphics

const fs = require('fs');
const path = require('path');

// Course image configurations with realistic designs
const courseImages = [
  { 
    name: 'web-development.jpg', 
    title: 'Web Development',
    subtitle: 'Full Stack Development',
    color: '#4A90E2',
    icon: '💻',
    features: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    techStack: ['Frontend', 'Backend', 'Database', 'Deployment']
  },
  { 
    name: 'data-science.jpg', 
    title: 'Data Science',
    subtitle: 'AI & Machine Learning',
    color: '#FF6B6B',
    icon: '📊',
    features: ['Python', 'ML', 'Analytics', 'AI'],
    techStack: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn']
  },
  { 
    name: 'digital-marketing.jpg', 
    title: 'Digital Marketing',
    subtitle: 'Marketing Strategy',
    color: '#FFD700',
    icon: '📈',
    features: ['SEO', 'Social Media', 'Ads', 'Analytics'],
    techStack: ['Google Ads', 'Facebook', 'Analytics', 'Content']
  },
  { 
    name: 'cloud-computing.jpg', 
    title: 'Cloud Computing',
    subtitle: 'AWS & Azure',
    color: '#2ECC71',
    icon: '☁️',
    features: ['AWS', 'Azure', 'DevOps', 'Security'],
    techStack: ['AWS', 'Azure', 'Docker', 'Kubernetes']
  }
];

// Create SVG course images with realistic graphics
const createCourseSVG = (course) => {
  return `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${course.name.replace('.jpg', '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${course.color};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${course.color}CC;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="overlay-${course.name.replace('.jpg', '')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:1" />
        <stop offset="100%" style="stop-color:rgba(0,0,0,0.4);stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.3)"/>
      </filter>
    </defs>
    
    <!-- Background -->
    <rect width="400" height="300" fill="url(#bg-${course.name.replace('.jpg', '')})"/>
    
    <!-- Overlay -->
    <rect width="400" height="300" fill="url(#overlay-${course.name.replace('.jpg', '')})"/>
    
    <!-- Decorative circles -->
    <circle cx="50" cy="50" r="30" fill="rgba(255,255,255,0.1)" />
    <circle cx="350" cy="80" r="20" fill="rgba(255,255,255,0.08)" />
    <circle cx="80" cy="250" r="25" fill="rgba(255,255,255,0.06)" />
    <circle cx="320" cy="220" r="35" fill="rgba(255,255,255,0.05)" />
    
    <!-- Main content area -->
    <rect x="50" y="80" width="300" height="140" fill="rgba(255,255,255,0.1)" rx="15" filter="url(#shadow)"/>
    
    <!-- Course icon -->
    <text x="200" y="130" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="white" filter="url(#shadow)">${course.icon}</text>
    
    <!-- Course title -->
    <text x="200" y="160" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="white" filter="url(#shadow)">${course.title}</text>
    
    <!-- Course subtitle -->
    <text x="200" y="180" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="rgba(255,255,255,0.9)" filter="url(#shadow)">${course.subtitle}</text>
    
    <!-- Tech stack tags -->
    <rect x="80" y="200" width="60" height="20" fill="rgba(255,255,255,0.2)" rx="10" />
    <text x="110" y="213" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="white">${course.techStack[0]}</text>
    
    <rect x="150" y="200" width="60" height="20" fill="rgba(255,255,255,0.2)" rx="10" />
    <text x="180" y="213" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="white">${course.techStack[1]}</text>
    
    <rect x="220" y="200" width="60" height="20" fill="rgba(255,255,255,0.2)" rx="10" />
    <text x="250" y="213" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="white">${course.techStack[2]}</text>
    
    <rect x="290" y="200" width="60" height="20" fill="rgba(255,255,255,0.2)" rx="10" />
    <text x="320" y="213" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="white">${course.techStack[3]}</text>
    
    <!-- Bottom text -->
    <text x="200" y="270" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="rgba(255,255,255,0.8)" filter="url(#shadow)">Course Preview</text>
    
    <!-- Decorative elements -->
    <circle cx="350" cy="50" r="8" fill="rgba(255,255,255,0.3)" />
    <circle cx="50" cy="250" r="6" fill="rgba(255,255,255,0.2)" />
  </svg>`;
};

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'courses');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG files for each course
courseImages.forEach(course => {
  const svgContent = createCourseSVG(course);
  const filePath = path.join(imagesDir, course.name.replace('.jpg', '.svg'));
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Created ${course.name.replace('.jpg', '.svg')}`);
});

console.log('\n🎉 Realistic course preview images generated successfully!');
console.log('📁 Images created in: public/images/courses/');
console.log('\n✨ Features:');
console.log('   • Realistic course graphics');
console.log('   • Tech stack tags');
console.log('   • Professional gradients');
console.log('   • Shadow effects');
console.log('   • Decorative elements');
