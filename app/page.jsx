import Footer from './components/Footer';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';
import Button from './components/Button';
import Card, { CardHeader, CardBody, CardFooter } from './components/Card';
import FlipCard from './components/FlipCard';
import PartnerMarquee from './components/PartnerMarquee';
import { Code, BarChart3, Megaphone, Briefcase, Clock, TrendingUp, BookOpen, Award, Users, Target, Sparkles, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import HoverCards from './components/whychoice';
export default function Home() {

  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      color: 'blue',
      iconName: 'Code',
      enrolled: '1,200+',
      rating: '4.9',
      features: [
        'HTML5 & CSS3 Fundamentals',
        'JavaScript ES6+ & DOM Manipulation',
        'React.js & Component Architecture',
        'Node.js & Express Backend',
        'Database Design & MongoDB',
        'RESTful APIs & Authentication',
        'Deployment & DevOps Basics',
        'Portfolio Project Development'
      ]
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, and machine learning with Python',
      duration: '10 weeks',
      level: 'Intermediate',
      color: 'pink',
      iconName: 'BarChart3',
      enrolled: '850+',
      rating: '4.8',
      features: [
        'Python Programming for Data Science',
        'Pandas & NumPy Data Manipulation',
        'Data Visualization with Matplotlib & Seaborn',
        'Statistical Analysis & Hypothesis Testing',
        'Machine Learning with Scikit-learn',
        'Deep Learning Fundamentals',
        'Data Cleaning & Preprocessing',
        'Real-world Data Science Projects'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Complete digital marketing strategy including SEO, social media, and content marketing',
      duration: '8 weeks',
      level: 'Beginner',
      color: 'yellow',
      iconName: 'Megaphone',
      enrolled: '1,500+',
      rating: '4.7',
      features: [
        'SEO & Search Engine Optimization',
        'Social Media Marketing Strategy',
        'Content Marketing & Blogging',
        'Google Ads & PPC Campaigns',
        'Email Marketing & Automation',
        'Analytics & Performance Tracking',
        'Brand Building & Positioning',
        'Marketing Campaign Management'
      ]
    },
    {
      id: 4,
      title: 'Business Management',
      description: 'Essential business skills including leadership, finance, and strategic planning',
      duration: '14 weeks',
      level: 'All Levels',
      color: 'green',
      iconName: 'Briefcase',
      enrolled: '900+',
      rating: '4.9',
      features: [
        'Leadership & Team Management',
        'Financial Planning & Budgeting',
        'Strategic Planning & Analysis',
        'Project Management Methodologies',
        'Communication & Negotiation',
        'Operations & Supply Chain',
        'Marketing & Sales Strategy',
        'Entrepreneurship & Innovation'
      ]
    }
  ];

  const stats = [
    { number: '2500+', label: 'Students Enrolled', Icon: Users },
    { number: '20+', label: 'Expert Instructors', Icon: Award },
    { number: '50+', label: 'Courses Available', Icon: BookOpen },
    { number: '95%', label: 'Success Rate', Icon: TrendingUp }
  ];

  const benefits = [
    {
      Icon: BookOpen,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience',
      color: 'from-[#6366F1] to-[#8B5CF6]',
      colorLight: 'from-[#818CF8] to-[#A78BFA]',
      colorDark: '#4F46E5',
      theme: 'indigo-purple'
    },
    {
      Icon: CheckCircle2,
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to course materials',
      color: 'from-[#EC4899] to-[#F43F5E]',
      colorLight: 'from-[#F472B6] to-[#FB7185]',
      colorDark: '#DB2777',
      theme: 'pink-rose'
    },
    {
      Icon: Award,
      title: 'Certification',
      description: 'Earn recognized certificates to boost your career prospects',
      color: 'from-[#10B981] to-[#059669]',
      colorLight: 'from-[#34D399] to-[#10B981]',
      colorDark: '#047857',
      theme: 'emerald-green'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "Full Stack Development",
      rating: 5,
      text: "VAWE Institute transformed my career completely. The instructors are amazing and the curriculum is industry-relevant. I got my dream job within 3 months!",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      course: "Data Science",
      rating: 5,
      text: "The best investment I made in my education. The hands-on approach and real-world projects helped me understand concepts deeply.",
      avatar: "RK"
    },
    {
      id: 3,
      name: "Anita Patel",
      course: "Digital Marketing",
      rating: 5,
      text: "Excellent faculty and practical learning approach. The course structure is well-designed and the support system is outstanding.",
      avatar: "AP"
    },
    {
      id: 4,
      name: "Vikram Singh",
      course: "Cloud Computing",
      rating: 5,
      text: "VAWE Institute provided me with all the skills needed for cloud architecture. The mentors are industry experts and very supportive.",
      avatar: "VS"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      course: "UI/UX Design",
      rating: 5,
      text: "Creative learning environment with modern tools. The portfolio projects helped me build a strong foundation in design principles.",
      avatar: "SR"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      course: "Cybersecurity",
      rating: 5,
      text: "Comprehensive curriculum covering all aspects of cybersecurity. The lab sessions and real-world scenarios were incredibly valuable.",
      avatar: "AM"
    }
  ];

  return (
    <>
      <main className="min-h-screen">
        <div className="lg:mt-[-50px]">
        <Hero />  
        </div>
        {/* Featured Courses Section (Top Courses) */}
        <section className=" py-8 sm:py-12 md:py-20 lg:py-24 xl:py-32 2xl:py-40" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-slide-up">
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4" style={{ backgroundColor: 'rgba(38,235,229,0.12)' }}>
                <Target className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" style={{ color: 'var(--brand-accent)' }} />
                <span className="text-xs sm:text-sm md:text-base font-medium" style={{ color: 'var(--brand-accent)' }}>Popular Courses</span>
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[var(--text)] mb-3 sm:mb-4 md:mb-6 leading-tight">
                Top Courses
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2">
                Explore our most popular courses designed to help you succeed in your career
              </p>
            </div>

            <div className="flex gap-3 overflow-x-auto overflow-y-hidden sm:overflow-hidden snap-x snap-mandatory -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8 lg:gap-10">
              {featuredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-slide-up relative shrink-0 w-[85%] sm:w-auto sm:shrink md:py-4 snap-center transition-transform duration-300 ease-out hover:-translate-y-3 hover:z-10 will-change-transform transform-gpu"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FlipCard course={course} variant={course.color} />
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
              <Button href="/courses" variant="primary" size="lg" className="w-full sm:w-auto shadow-xl hover:shadow-2xl text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10">
                <span className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <span>View All Courses</span>
                </span>
              </Button>
            </div>
          </div>
        </section>


        {/* why choose us Section */}

        <section className="py-8 mt-[150px] sm:py-12 md:py-20 lg:py-24 xl:py-32 2xl:py-40" style={{ backgroundColor: 'var(--background)' }}>
                <HoverCards />
              </section>
<hr/>
        {/* Stats Section (moved below Why Choose) */}
        <section className="py-8 sm:py-12 lg:mt-[-200px] md:py-20 lg:py-24 xl:py-32 2xl:py-40" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {stats.map((stat, index) => {
                const Icon = stat.Icon;
                return (
                  <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="mb-3 sm:mb-4 md:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-xl sm:rounded-2xl bg-[#A8DADC] text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-black bg-clip-text text-transparent mb-1 sm:mb-2 leading-tight">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight px-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 sm:py-12 md:py-20 lg:py-24 xl:py-32 2xl:py-40 relative overflow-hidden" style={{ backgroundColor: 'var(--background-alt)' }}>
          {/* Background Elements */}
          <div className="absolute inset-0" style={{ backgroundColor: 'transparent' }}></div>
          
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text=[var(--text)] mb-3 sm:mb-4 md:mb-6 leading-tight">
                What Our Students Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2">
                Hear from our successful graduates who transformed their careers with VAWE Institute
              </p>
            </div>

            {/* Hanging Rope Container */}
            <div className="relative">
              {/* Rope */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-full shadow-lg"></div>
              
              {/* Wall Hooks */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-3 sm:h-4 bg-[#696969] rounded-t-full shadow-lg"></div>

              {/* Testimonial Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-6 sm:pt-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`relative ${
                      index % 2 === 0 ? 'animate-float-left' : 'animate-float-right'
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: '4s'
                    }}
                  >
                    {/* Clothes Pin */}
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-6 sm:h-8 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-t-full shadow-md z-20">
                      <div className="absolute top-0.5 sm:top-1 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-4 sm:h-6 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-t-full"></div>
                    </div>

                    {/* Testimonial Card */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 mt-3 sm:mt-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      {/* Quote Icon */}
                      <div className="absolute -top-1.5 sm:-top-2 -left-1.5 sm:-left-2 w-6 sm:w-8 h-6 sm:h-8 bg-[#C4B4E3] rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                        &quot;{testimonial.text}&quot;
                      </p>

                      {/* Student Info */}
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#C4B4E3] to-[#B3E5FC] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-2 sm:mr-3">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--text)] text-xs sm:text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-gray-500 text-xs sm:text-sm">{testimonial.course}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 md:py-20 lg:py-24 xl:py-32 2xl:py-40 relative overflow-hidden bg-gradient-to-b from-[#53cafc] to-[#4b95e3] text-white">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-16 sm:w-24 md:w-32 lg:w-40 h-16 sm:h-24 md:h-32 lg:h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-20 sm:w-32 md:w-40 lg:w-48 h-20 sm:h-32 md:h-40 lg:h-48 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center relative z-10">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 text-white mx-auto mb-4 sm:mb-6 md:mb-8 animate-pulse" />
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white/95 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2">
              Join thousands of successful students and take the first step towards achieving your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4">
              <Button href="/enrollment" variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-[#2C3E50] hover:bg-gray-50 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Button>
              <Button href="https://www.skillwins.in/" variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-blue-900 hover:text-[#2C3E50] shadow-xl text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10">
                Login to LMS
              </Button>
            </div>
          </div>
        </section>
        {/* <ChatBot /> */}
      </main>
      <Footer />
    </>
  );
}
