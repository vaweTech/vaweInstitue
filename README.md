# VAWE Institute - Training Institute Web Application

A beautiful, modern web application for VAWE Institute built with Next.js and Tailwind CSS, featuring a minimalist design with soft pastel colors.

## 🎨 Design Features

- **Pastel Color Palette**: Soft Blue (#A8DADC), Soft Pink (#F4A7B9), Soft Yellow (#FFF3B0), Soft Green (#C1E1C1)
- **Minimalist & Clean**: Card-style layouts with clear navigation
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Modern Typography**: Easy-to-read sans-serif fonts
- **Smooth Animations**: Hover effects and transitions for better UX

## 📋 Pages

### 1. **Home Page** (`/`)
- Hero section with gradient background
- Key statistics showcase
- Featured courses preview
- Why choose us section
- Call-to-action sections
- Prominent "Login to LMS" button

### 2. **Courses Page** (`/courses`)
- Comprehensive course catalog with 12+ courses
- Card-style course displays with detailed information
- Filter categories (All, Technology, Business, Design, Marketing)
- Course details: duration, level, price, modules, student count
- Enrollment call-to-action

### 3. **About Page** (`/about`)
- Institute mission and vision
- Core values showcase
- Leadership team profiles
- Timeline of milestones
- Global reach statistics

### 4. **Contact Page** (`/contact`)
- Contact information cards (Address, Email, Phone, Hours)
- Interactive contact form with validation
- FAQ section
- Map location placeholder
- Success confirmation message

### 5. **Enrollment Page** (`/enrollment`)
- Multi-step enrollment form (4 steps)
  - Step 1: Personal Information
  - Step 2: Educational Background
  - Step 3: Course Selection
  - Step 4: Review & Submit
- Progress indicator
- Form validation
- Success confirmation page
- Support contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 (React 19.2.0)
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vaweinstitute
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vaweinstitute/
├── app/
│   ├── components/
│   │   ├── Header.js          # Navigation header with mobile menu
│   │   ├── Footer.js          # Footer with links and contact info
│   │   ├── Button.js          # Reusable button component
│   │   └── Card.js            # Reusable card components
│   ├── about/
│   │   └── page.js            # About page
│   ├── contact/
│   │   └── page.js            # Contact page
│   ├── courses/
│   │   └── page.js            # Courses listing page
│   ├── enrollment/
│   │   └── page.js            # Enrollment form page
│   ├── favicon.ico
│   ├── globals.css            # Global styles & Tailwind configuration
│   ├── layout.js              # Root layout
│   └── page.js                # Home page
├── public/                     # Static assets
├── package.json
└── README.md
```

## 🎨 Component Library

### Button Component
```jsx
<Button href="/path" variant="primary" size="lg">
  Click Me
</Button>
```

Variants: `primary`, `secondary`, `accent`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

### Card Component
```jsx
<Card variant="blue" hoverable>
  <CardHeader>Header Content</CardHeader>
  <CardBody>Body Content</CardBody>
  <CardFooter>Footer Content</CardFooter>
</Card>
```

Variants: `default`, `blue`, `pink`, `yellow`, `green`

## 🔗 LMS Integration

The application includes prominent links to the LMS platform:
- Header navigation "Login to LMS" button
- Hero section CTA
- Footer quick links

**LMS URL**: `https://lms.vaweinstitute.com`

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components adapt seamlessly across devices with mobile-first approach.

## 🎯 Key Features

1. **User-Friendly Navigation**: Sticky header with mobile hamburger menu
2. **Interactive Forms**: Client-side validation and success feedback
3. **Visual Hierarchy**: Clear typography and spacing
4. **Accessible Design**: Semantic HTML and ARIA labels
5. **Performance Optimized**: Next.js app router and optimizations
6. **SEO Ready**: Meta tags and semantic structure

## 🌐 Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting service
3. Ensure Node.js runtime is available

## 📞 Support

For questions or support:
- Email: info@vaweinstitute.com
- Phone: +1 (555) 123-4567
- Address: 123 Education Street, Learning City, LC 12345

## 🔮 Future Enhancements

- Blog/News section
- Student testimonials
- Live chat support
- Course preview videos
- Payment gateway integration
- Student dashboard
- Newsletter subscription
- Multi-language support

## 📄 License

Copyright © 2024 VAWE Institute. All rights reserved.

## 👥 Credits

Developed as a modern MVP for VAWE Institute with a focus on user experience, accessibility, and clean design principles.

---

Built with ❤️ using Next.js and Tailwind CSS
