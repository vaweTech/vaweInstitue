// Script to generate placeholder course images
// This creates simple colored rectangles as placeholder images for courses

const fs = require('fs');
const path = require('path');

// Course image configurations
const courseImages = [
  { name: 'web-development.jpg', color: '#4A90E2', text: 'Web Development' },
  { name: 'data-science.jpg', color: '#FF6B6B', text: 'Data Science' },
  { name: 'digital-marketing.jpg', color: '#FFD700', text: 'Digital Marketing' },
  { name: 'business-management.jpg', color: '#2ECC71', text: 'Business Management' },
  { name: 'graphic-design.jpg', color: '#9B59B6', text: 'Graphic Design' },
  { name: 'mobile-development.jpg', color: '#E74C3C', text: 'Mobile Development' },
  { name: 'cloud-computing.jpg', color: '#FFD700', text: 'Cloud Computing' },
  { name: 'cybersecurity.jpg', color: '#34495E', text: 'Cybersecurity' },
  { name: 'ui-ux-design.jpg', color: '#4A90E2', text: 'UI/UX Design' },
  { name: 'project-management.jpg', color: '#FF6B6B', text: 'Project Management' },
  { name: 'artificial-intelligence.jpg', color: '#E67E22', text: 'AI & ML' },
  { name: 'financial-analysis.jpg', color: '#2ECC71', text: 'Financial Analysis' }
];

// Create SVG placeholder images
const createSVGImage = (color, text) => {
  return `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color}CC;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#grad)"/>
    <text x="200" y="150" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="white">${text}</text>
    <text x="200" y="180" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="white" opacity="0.8">Course Preview</text>
  </svg>`;
};

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'courses');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG files for each course
courseImages.forEach(course => {
  const svgContent = createSVGImage(course.color, course.text);
  const filePath = path.join(imagesDir, course.name.replace('.jpg', '.svg'));
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Created ${course.name.replace('.jpg', '.svg')}`);
});

console.log('\n🎉 Course preview images generated successfully!');
console.log('📁 Images created in: public/images/courses/');
console.log('\n💡 Note: These are SVG placeholder images. Replace with actual course images for production.');
