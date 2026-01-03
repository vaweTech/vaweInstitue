// Script to generate actual course images for Hero section
// This creates realistic course preview images using HTML Canvas

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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  { 
    name: 'data-science.jpg', 
    title: 'Data Science',
    subtitle: 'AI & Machine Learning',
    color: '#FF6B6B',
    icon: '📊',
    features: ['Python', 'ML', 'Analytics', 'AI'],
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  { 
    name: 'digital-marketing.jpg', 
    title: 'Digital Marketing',
    subtitle: 'Marketing Strategy',
    color: '#FFD700',
    icon: '📈',
    features: ['SEO', 'Social Media', 'Ads', 'Analytics'],
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },
  { 
    name: 'cloud-computing.jpg', 
    title: 'Cloud Computing',
    subtitle: 'AWS & Azure',
    color: '#2ECC71',
    icon: '☁️',
    features: ['AWS', 'Azure', 'DevOps', 'Security'],
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  }
];

// Create HTML template for course images
const createCourseImageHTML = (course) => {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${course.title} Course</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 400px;
            height: 300px;
            background: ${course.background};
            font-family: 'Arial', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .course-icon {
            font-size: 48px;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .course-title {
            font-size: 24px;
            font-weight: bold;
            color: white;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
            text-align: center;
        }
        
        .course-subtitle {
            font-size: 16px;
            color: rgba(255,255,255,0.9);
            margin: 5px 0 15px 0;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            text-align: center;
        }
        
        .features {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
            margin-top: 10px;
        }
        
        .feature-tag {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
        }
        
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%);
        }
        
        .decorative-elements {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            backdrop-filter: blur(10px);
        }
        
        .bottom-text {
            position: absolute;
            bottom: 20px;
            left: 20px;
            right: 20px;
            color: white;
            font-size: 14px;
            font-weight: 500;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="overlay"></div>
    <div class="course-icon">${course.icon}</div>
    <h1 class="course-title">${course.title}</h1>
    <p class="course-subtitle">${course.subtitle}</p>
    <div class="features">
        ${course.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
    </div>
    <div class="decorative-elements">${course.icon}</div>
    <div class="bottom-text">Course Preview</div>
</body>
</html>`;
};

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'courses');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate HTML files for each course
courseImages.forEach(course => {
  const htmlContent = createCourseImageHTML(course);
  const filePath = path.join(imagesDir, course.name.replace('.jpg', '.html'));
  
  fs.writeFileSync(filePath, htmlContent);
  console.log(`✅ Created ${course.name.replace('.jpg', '.html')}`);
});

console.log('\n🎉 Course preview images generated successfully!');
console.log('📁 Images created in: public/images/courses/');
console.log('\n💡 Note: These are HTML files that can be converted to images using a headless browser.');
console.log('🔧 To convert to actual images, you can use tools like Puppeteer or Playwright.');
