// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect, useRef } from 'react';
// import { Home, BookOpen, Info, Mail, UserPlus, LogIn, Menu, X, ChevronDown, GraduationCap, Award, Briefcase, Users, Building2, Grid3x3, MoreVertical, ChevronRight, Clock, TrendingUp, Star, Search } from 'lucide-react';
// import { courses } from '../courses/data';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isMoreOpen, setIsMoreOpen] = useState(false);
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const servicesRef = useRef(null);
//   const moreRef = useRef(null);
//   const coursesRef = useRef(null);
//   const searchRef = useRef(null);
//   const searchInputRef = useRef(null);

//   // Get unique categories from courses
//   const categories = Array.from(new Set(courses.map(course => course.category)));

//   // Filter courses based on search query - comprehensive search
//   useEffect(() => {
//     if (searchQuery.trim().length > 0) {
//       const query = searchQuery.toLowerCase().trim();
//       const filtered = courses.filter(course => {
//         const titleMatch = course.title.toLowerCase().includes(query);
//         const categoryMatch = course.category.toLowerCase().includes(query);
//         const descriptionMatch = course.description?.toLowerCase().includes(query);
//         const levelMatch = course.level?.toLowerCase().includes(query);
        
//         // Search for related terms
//         const searchTerms = ['internship', 'program', 'training', 'course', 'certification', 'placement'];
//         const hasRelatedTerm = searchTerms.some(term => 
//           course.title.toLowerCase().includes(term) || 
//           course.description?.toLowerCase().includes(term) ||
//           course.category.toLowerCase().includes(term)
//         );
        
//         // If user searches for internship/program, also show courses that mention these terms
//         const isSearchingForProgram = query.includes('internship') || query.includes('program') || query.includes('training');
        
//         return titleMatch || categoryMatch || descriptionMatch || levelMatch || 
//                (isSearchingForProgram && hasRelatedTerm);
//       }).slice(0, 10); // Limit to 10 results
//       setSearchResults(filtered);
//       setIsSearchOpen(true);
//     } else {
//       setSearchResults([]);
//       setIsSearchOpen(false);
//     }
//   }, [searchQuery]);

//   // Get courses for selected category
//   const getCoursesByCategory = (category) => {
//     return courses.filter(course => course.category === category).slice(0, 6);
//   };

//   // Set default selected category when dropdown opens
//   useEffect(() => {
//     if (isCoursesOpen && !selectedCategory && categories.length > 0) {
//       setSelectedCategory(categories[0]);
//     }
//   }, [isCoursesOpen, selectedCategory, categories]);

//   // Handle scroll for sticky navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       if (currentScrollY < 10) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         // Scrolling down - hide navbar and close dropdowns
//         setIsVisible(false);
//         setIsCoursesOpen(false);
//         setIsMoreOpen(false);
//         setIsServicesOpen(false);
//         setIsSearchOpen(false);
//       } else if (currentScrollY < lastScrollY) {
//         // Scrolling up - show navbar
//         setIsVisible(true);
//       }
      
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (servicesRef.current && !servicesRef.current.contains(event.target)) {
//         setIsServicesOpen(false);
//       }
//       if (moreRef.current && !moreRef.current.contains(event.target)) {
//         setIsMoreOpen(false);
//       }
//       if (coursesRef.current && !coursesRef.current.contains(event.target)) {
//         setIsCoursesOpen(false);
//         setSelectedCategory(null);
//       }
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setIsSearchOpen(false);
//         // Don't clear search query, keep it for better UX
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Focus search input when search opens
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   const services = [
//     { name: 'Trainings', href: '/services#trainings', icon: GraduationCap },
//     { name: 'Certifications', href: '/services#certifications', icon: Award },
//     { name: 'Projects', href: '/services#projects', icon: Briefcase },
//     { name: 'Workshops', href: '/services#workshops', icon: Users },
//     { name: 'CRT', href: '/services#crt', icon: Building2 },
//     { name: 'Placements', href: '/services#placements', icon: Building2 },
//   ];

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const moreLinks = [
//     { name: 'About', href: '/about', icon: Info },
//     { name: 'Contact', href: '/contact', icon: Mail },
//   ];

//   return (
//     <header 
//       className={`w-full bg-white relative z-50 min-h-[64px] transition-transform duration-300 ${
//         isVisible ? 'translate-y-0' : '-translate-y-full'
//       }`}
//       style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
//     >
//       <nav className="w-full mt-2 max-w-full px-4 sm:px-6 lg:px-12 xl:px-16">
//         <div className="flex items-center justify-between h-16 min-h-[64px] py-2">
//           {/* Left Section: Logo and All Courses */}
//           <div className="flex items-center space-x-6">
//             {/* Logo with Favicon */}
//             <Link href="/" className="flex items-center space-x-4 group">
//               <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ring-2 ring-gray-100 overflow-hidden">
//                 <Image
//                   src="/logo.png"
//                   alt="VAWE Institute Logo"
//                   width={72}
//                   height={72}
//                   className="w-full h-full rounded-full"
//                   style={{ 
//                     objectFit: 'cover',
//                     objectPosition: 'center center'
//                   }}
//                   priority
//                   unoptimized
//                 />
//               </div>
//               <div className="flex flex-col justify-center">
//                 <span 
//                   className="text-base md:text-md lg:text-4xl font-bold text-gray-700 hover:text-blue-600 transition-colors duration-300"
//                   style={{ 
//                     fontFamily: '"Times New Roman", Times, serif'
//                   }}
//                 >
//                   VAWE INSTITUTE
//                 </span>
//               </div>
//             </Link>

//             {/* All Courses Button with Dropdown */}
//             <div 
//               ref={coursesRef} 
//               className="hidden lg:block relative"
//               onMouseEnter={() => setIsCoursesOpen(true)}
//               onMouseLeave={() => setIsCoursesOpen(false)}
//             >
//               <button
//                 className={`relative flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold shadow-md transition-all duration-300 ${
//                   isCoursesOpen 
//                     ? 'bg-blue-700 shadow-lg scale-[1.02]' 
//                     : 'hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02]'
//                 }`}
//               >
//                 <Grid3x3 className="w-4 h-4" />
//                 <span>All Courses</span>
//                 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
//               </button>
              
//               {/* Courses Dropdown Menu - Two Panel Layout */}
//               {isCoursesOpen && (
//                 <div 
//                   className="absolute top-full left-0 mt-2 w-[900px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
//                   style={{ 
//                     animation: 'slideDown 0.2s ease-out',
//                   }}
//                 >
//                   <div className="flex h-[550px]">
//                     {/* Left Sidebar - Categories */}
//                     <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
//                       <div className="p-4 border-b border-gray-200 bg-white">
//                         <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">CATEGORIES</h3>
//                       </div>
//                       <div className="py-2">
//                         {categories.map((category) => (
//                           <button
//                             key={category}
//                             onClick={() => setSelectedCategory(category)}
//                             className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 ${
//                               selectedCategory === category
//                                 ? 'bg-blue-600 text-white'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                             }`}
//                           >
//                             <span className={`text-sm font-medium ${selectedCategory === category ? 'font-semibold' : ''}`}>
//                               {category}
//                             </span>
//                             {selectedCategory === category && (
//                               <ChevronRight className="w-4 h-4 text-white" />
//                             )}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Right Content - Course Cards Grid */}
//                     <div className="flex-1 overflow-y-auto p-6 bg-white">
//                       <div className="mb-6">
//                         <h2 className="text-2xl font-bold text-gray-900 mb-1">Career Aligned Learning Paths</h2>
//                         <p className="text-sm text-gray-600">Master essential skills for your dream career</p>
//                       </div>
                      
//                       {selectedCategory && (
//                         <div className="grid grid-cols-2 gap-4">
//                           {getCoursesByCategory(selectedCategory).map((course, index) => (
//                             <Link
//                               key={course.id}
//                               href={`/courses/${course.id}`}
//                               className="group block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all duration-200"
//                               onClick={() => setIsCoursesOpen(false)}
//                             >
//                               <div className="mb-3">
//                                 <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                                   {course.title}
//                                 </h3>
//                               </div>
//                               <div className="flex items-center gap-3 text-xs text-gray-500">
//                                 <div className="flex items-center gap-1.5">
//                                   <Clock className="w-3.5 h-3.5" />
//                                   <span className="font-medium">{course.duration}</span>
//                                 </div>
//                                 {index === 0 && (
//                                   <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
//                                     Trending Now
//                                   </span>
//                                 )}
//                                 {index === 2 && (
//                                   <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-medium">
//                                     Most Popular
//                                   </span>
//                                 )}
//                               </div>
//                             </Link>
//                           ))}
//                         </div>
//                       )}
                      
//                       {!selectedCategory && (
//                         <div className="flex items-center justify-center h-64">
//                           <div className="text-center">
//                             <Grid3x3 className="w-16 h-16 text-gray-300 mx-auto mb-3" />
//                             <p className="text-gray-600 font-medium">Select a category to view courses</p>
//                           </div>
//                         </div>
//                       )}
                      
//                       {selectedCategory && (
//                         <div className="mt-6 flex justify-end border-t border-gray-200 pt-4">
//                           <Link
//                             href="/courses"
//                             className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
//                             onClick={() => setIsCoursesOpen(false)}
//                           >
//                             Explore All Programs
//                           </Link>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Center Section: Search Bar */}
//           <div ref={searchRef} className="hidden lg:block flex-1 max-w-2xl mx-6 relative">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 placeholder="Search courses, programs, internships..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onFocus={() => searchQuery && setIsSearchOpen(true)}
//                 className="w-full pl-12 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 bg-white shadow-sm"
//               />
//             </div>
            
//             {/* Search Results Dropdown */}
//             {isSearchOpen && searchQuery.trim().length > 0 && (
//               <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-2xl z-50 overflow-hidden">
//                 <div className="max-h-96 overflow-y-auto">
//                   {searchResults.length > 0 ? (
//                     <>
//                       <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
//                         <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                           {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
//                         </div>
//                       </div>
//                       {searchResults.map((course) => (
//                         <Link
//                           key={course.id}
//                           href={`/courses/${course.id}`}
//                           onClick={() => {
//                             setSearchQuery('');
//                             setIsSearchOpen(false);
//                           }}
//                           className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors group"
//                         >
//                           <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
//                             {course.title}
//                           </div>
//                           <div className="flex items-center gap-2 text-xs text-gray-500">
//                             <span>{course.category}</span>
//                             {course.duration && (
//                               <>
//                                 <span>•</span>
//                                 <span>{course.duration}</span>
//                               </>
//                             )}
//                             {course.level && (
//                               <>
//                                 <span>•</span>
//                                 <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded">{course.level}</span>
//                               </>
//                             )}
//                           </div>
//                           {course.description && (
//                             <div className="text-xs text-gray-600 mt-1 line-clamp-1">
//                               {course.description}
//                             </div>
//                           )}
//                         </Link>
//                       ))}
//                     </>
//                   ) : (
//                     <div className="px-4 py-12 text-center">
//                       <div className="text-sm text-gray-500 mb-2">No courses or programs found</div>
//                       <div className="text-xs text-gray-400">Try searching for "internship", "program", or course names</div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Section: Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}
            
//             {/* More Dropdown */}
//             <div
//               ref={moreRef}
//               className="relative"
//               onMouseEnter={() => setIsMoreOpen(true)}
//               onMouseLeave={() => setIsMoreOpen(false)}
//             >
//               <button
//                 className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
//                 aria-haspopup="true"
//                 aria-expanded={isMoreOpen}
//               >
//                 <span>More</span>
//                 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
//               </button>
              
//               {/* More Dropdown Menu (always rendered for SEO) */}
//               <div 
//                 className={`absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 transition-all duration-200 ${
//                   isMoreOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
//                 }`}
//               >
//                 {moreLinks.map((link) => {
//                   const Icon = link.icon;
//                   return (
//                     <Link
//                       key={link.name}
//                       href={link.href}
//                       className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
//                       onClick={() => setIsMoreOpen(false)}
//                     >
//                       <Icon className="w-4 h-4 text-gray-600" />
//                       <span className="text-gray-700 text-sm font-medium">{link.name}</span>
//                     </Link>
//                   );
//                 })}
//                 {/* Services in More dropdown */}
//                 <div className="border-t border-gray-200 mt-2 pt-2">
//                   <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Services</div>
//                   {services.map((service) => {
//                     const Icon = service.icon;
//                     return (
//                       <Link
//                         key={service.name}
//                         href={service.href}
//                         className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
//                         onClick={() => setIsMoreOpen(false)}
//                       >
//                         <Icon className="w-4 h-4 text-gray-600" />
//                         <span className="text-gray-700 text-sm font-medium">{service.name}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
            
//             {/* LMS Login Button */}
//             <Link
//               href="https://www.skillwins.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
//             >
//               LMS Login
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-1.5 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden py-4 border-top border-gray-200/50 animate-fade-in">
//             <div className="flex flex-col space-y-1">
//               {/* All Courses Button - Mobile */}
//               <Link
//                 href="/courses"
//                 className="mx-4 mb-3 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <Grid3x3 className="w-4 h-4" />
//                 <span>All Courses</span>
//               </Link>
              
//               {/* Mobile Search */}
//               <div className="px-4 mb-3">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Search courses, programs, internships..."
//                     value={searchQuery}
//                     onChange={(e) => {
//                       setSearchQuery(e.target.value);
//                       if (e.target.value.trim().length > 0) {
//                         setIsSearchOpen(true);
//                       }
//                     }}
//                     onFocus={() => searchQuery && setIsSearchOpen(true)}
//                     className="w-full pl-11 pr-4 py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                   />
//                 </div>
                
//                 {/* Mobile Search Results */}
//                 {isSearchOpen && searchQuery.trim().length > 0 && (
//                   <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
//                     <div className="max-h-64 overflow-y-auto">
//                       {searchResults.length > 0 ? (
//                         <>
//                           <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
//                             <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//                               {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
//                             </div>
//                           </div>
//                           {searchResults.map((course) => (
//                             <Link
//                               key={course.id}
//                               href={`/courses/${course.id}`}
//                               onClick={() => {
//                                 setSearchQuery('');
//                                 setIsSearchOpen(false);
//                                 setIsMenuOpen(false);
//                               }}
//                               className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 group"
//                             >
//                               <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
//                                 {course.title}
//                               </div>
//                               <div className="flex items-center gap-2 text-xs text-gray-500">
//                                 <span>{course.category}</span>
//                                 {course.duration && (
//                                   <>
//                                     <span>•</span>
//                                     <span>{course.duration}</span>
//                                   </>
//                                 )}
//                               </div>
//                               {course.description && (
//                                 <div className="text-xs text-gray-600 mt-1 line-clamp-1">
//                                   {course.description}
//                                 </div>
//                               )}
//                             </Link>
//                           ))}
//                         </>
//                       ) : (
//                         <div className="px-4 py-8 text-center">
//                           <div className="text-sm text-gray-500 mb-2">No courses or programs found</div>
//                           <div className="text-xs text-gray-400">Try searching for "internship", "program", or course names</div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               {/* Mobile Categories */}
//               <div className="px-4 mb-3">
//                 <div className="text-sm font-semibold text-gray-500 mb-2 uppercase">Categories</div>
//                 <div className="space-y-1">
//                   {categories.map((category) => (
//                     <Link
//                       key={category}
//                       href={`/courses?category=${encodeURIComponent(category)}`}
//                       className="block px-4 py-2 rounded-lg transition-all duration-300 font-medium hover:bg-gray-100 text-gray-700 text-sm"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {category}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
              
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
              
//               {/* More Links in Mobile Menu */}
//               {moreLinks.map((link) => {
//                 const Icon = link.icon;
//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-100 transition-colors font-medium"
//                     style={{ color: '#374151' }}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Services in Mobile Menu */}
//               <div className="px-4 py-2.5">
//                 <div className="text-sm font-semibold text-gray-500 mb-2">Services</div>
//                 <div className="space-y-1">
//                   {services.map((service) => {
//                     const Icon = service.icon;
//                     return (
//                       <Link
//                         key={service.name}
//                         href={service.href}
//                         className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 font-medium hover:bg-gray-100"
//                         style={{ color: '#374151' }}
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <Icon className="w-4 h-4" />
//                         <span className="text-sm">{service.name}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
              
//               {/* LMS Login Button - Mobile */}
//               <div className="px-4 pt-2">
//                 <Link
//                   href="https://www.skillwins.in"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   LMS Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }



'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  Home, BookOpen, Info, Mail, UserPlus, LogIn, Menu, X, ChevronDown,
  GraduationCap, Award, Briefcase, Users, Building2, Grid3x3, MoreVertical,
  ChevronRight, Clock, TrendingUp, Star, Search
} from 'lucide-react';
import { courses } from '../courses/data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const servicesRef = useRef(null);
  const moreRef = useRef(null);
  const coursesRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  // responsive icon size helper (use with className)
  // we use tailwind responsive classes inline in JSX instead of function

  const categories = Array.from(new Set(courses.map(course => course.category)));

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase().trim();
      const filtered = courses.filter(course => {
        const titleMatch = course.title.toLowerCase().includes(query);
        const categoryMatch = course.category.toLowerCase().includes(query);
        const descriptionMatch = course.description?.toLowerCase().includes(query);
        const levelMatch = course.level?.toLowerCase().includes(query);
        const searchTerms = ['internship', 'program', 'training', 'course', 'certification', 'placement'];
        const hasRelatedTerm = searchTerms.some(term =>
          course.title.toLowerCase().includes(term) ||
          course.description?.toLowerCase().includes(term) ||
          course.category.toLowerCase().includes(term)
        );
        const isSearchingForProgram = query.includes('internship') || query.includes('program') || query.includes('training');
        return titleMatch || categoryMatch || descriptionMatch || levelMatch || (isSearchingForProgram && hasRelatedTerm);
      }).slice(0, 10);
      setSearchResults(filtered);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  }, [searchQuery]);

  const getCoursesByCategory = (category) => courses.filter(c => c.category === category).slice(0, 6);

  useEffect(() => {
    if (isCoursesOpen && !selectedCategory && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [isCoursesOpen, selectedCategory, categories]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsCoursesOpen(false);
        setIsMoreOpen(false);
        setIsSearchOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        // keep servicesRef pattern for future use
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesOpen(false);
        setSelectedCategory(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const services = [
    { name: 'Trainings', href: '/services#trainings', icon: GraduationCap },
    { name: 'Certifications', href: '/services#certifications', icon: Award },
    { name: 'Projects', href: '/services#projects', icon: Briefcase },
    { name: 'Workshops', href: '/services#workshops', icon: Users },
    { name: 'CRT', href: '/services#crt', icon: Building2 },
    { name: 'Placements', href: '/services#placements', icon: Building2 },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const moreLinks = [
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <header
      className={`w-full bg-white relative z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 py-2">
          {/* Left: Logo + All Courses */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-1">
              <div
                className="relative rounded-full overflow-hidden ring-1 ring-gray-100 shadow-sm flex items-center justify-center"
                style={{ width: 70, height: 70 }}
              >
                {/* Responsive logo by size via tailwind classes on parent wrapper */}
                <Image
                  src="/logo.png"
                  alt="VAWE Institute Logo"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>

              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-sm sm:text-base md:text-2xl font-bold text-gray-700 hover:text-blue-600 transition-colors"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  VAWE INSTITUTE
                </span>
          
              </div>
            </Link>

            {/* All Courses button - hidden on small devices (mobile gets link in menu) */}
            <div
              ref={coursesRef}
              className="hidden lg:block relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                aria-haspopup="menu"
                aria-expanded={isCoursesOpen}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold shadow-sm transition-all duration-200 ${
                  isCoursesOpen ? 'bg-blue-700 text-white scale-[1.02]' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Grid3x3 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm">All Courses</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="flex h-[520px]">
                    <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
                      <div className="p-4 border-b border-gray-200 bg-white">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">CATEGORIES</h3>
                      </div>
                      <div className="py-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 ${
                              selectedCategory === category ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span className={`text-sm ${selectedCategory === category ? 'font-semibold' : ''}`}>
                              {category}
                            </span>
                            {selectedCategory === category && <ChevronRight className="w-4 h-4 text-white" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 bg-white">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Career Aligned Learning Paths</h2>
                        <p className="text-sm text-gray-600">Master essential skills for your dream career</p>
                      </div>

                      {selectedCategory ? (
                        <div className="grid grid-cols-2 gap-4">
                          {getCoursesByCategory(selectedCategory).map((course, index) => (
                            <Link
                              key={course.id}
                              href={`/courses/${course.id}`}
                              className="group block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all duration-200"
                              onClick={() => setIsCoursesOpen(false)}
                            >
                              <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-blue-600">
                                {course.title}
                              </h3>
                              <div className="flex items-center gap-3 text-xs text-gray-500">
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5" />
                                  <span className="font-medium">{course.duration}</span>
                                </div>
                                {index === 0 && <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Trending Now</span>}
                                {index === 2 && <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-medium">Most Popular</span>}
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-64">
                          <div className="text-center">
                            <Grid3x3 className="w-16 h-16 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-600 font-medium">Select a category to view courses</p>
                          </div>
                        </div>
                      )}

                      {selectedCategory && (
                        <div className="mt-6 flex justify-end border-t border-gray-200 pt-4">
                          <Link href="/courses" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm" onClick={() => setIsCoursesOpen(false)}>
                            Explore All Programs
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center: Search (collapses on smaller screens) */}
          <div ref={searchRef} className="flex-1 max-w-2xl mx-4 hidden md:block relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search courses, programs, internships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setIsSearchOpen(true)}
                className="w-full pl-12 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 bg-white shadow-sm"
              />
            </div>

            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-2xl z-50 overflow-hidden">
                <div className="max-h-72 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <>
                      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
                        </div>
                      </div>
                      {searchResults.map((course) => (
                        <Link
                          key={course.id}
                          href={`/courses/${course.id}`}
                          onClick={() => { setSearchQuery(''); setIsSearchOpen(false); }}
                          className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors group"
                        >
                          <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600">
                            {course.title}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{course.category}</span>
                            {course.duration && (<><span>•</span><span>{course.duration}</span></>)}
                            {course.level && (<><span>•</span><span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded">{course.level}</span></>)}
                          </div>
                          {course.description && <div className="text-xs text-gray-600 mt-1 line-clamp-1">{course.description}</div>}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <div className="px-4 py-12 text-center">
                      <div className="text-sm text-gray-500 mb-2">No courses or programs found</div>
                      <div className="text-xs text-gray-400">Try searching for "internship", "program", or course names</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {link.name}
              </Link>
            ))}

            {/* More dropdown */}
            <div ref={moreRef} className="relative" onMouseEnter={() => setIsMoreOpen(true)} onMouseLeave={() => setIsMoreOpen(false)}>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium" aria-haspopup="menu" aria-expanded={isMoreOpen}>
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 transition-all duration-200 ${isMoreOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                {moreLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.name} href={link.href} className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-50 transition-colors" onClick={() => setIsMoreOpen(false)}>
                      <Icon className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700 text-sm font-medium">{link.name}</span>
                    </Link>
                  );
                })}

                <div className="border-t border-gray-200 mt-2 pt-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Services</div>
                  {services.map(service => {
                    const Icon = service.icon;
                    return (
                      <Link key={service.name} href={service.href} className="flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-50 transition-colors" onClick={() => setIsMoreOpen(false)}>
                        <Icon className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700 text-sm font-medium">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link href="https://www.skillwins.in" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              LMS Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1.5 rounded-xl hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col gap-3 px-4 pt-4">
              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Grid3x3 className="w-5 h-5" />
                <span>All Courses</span>
              </Link>

              {/* Mobile Search */}
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses, programs, internships..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (e.target.value.trim().length > 0) setIsSearchOpen(true);
                    }}
                    onFocus={() => searchQuery && setIsSearchOpen(true)}
                    className="w-full pl-11 pr-4 py-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                {isSearchOpen && searchQuery.trim().length > 0 && (
                  <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <div className="max-h-64 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        <>
                          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                              {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
                            </div>
                          </div>
                          {searchResults.map(course => (
                            <Link key={course.id} href={`/courses/${course.id}`} onClick={() => { setSearchQuery(''); setIsSearchOpen(false); setIsMenuOpen(false); }} className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                              <div className="font-semibold text-gray-900 text-sm mb-1">{course.title}</div>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{course.category}</span>
                                {course.duration && (<><span>•</span><span>{course.duration}</span></>)}
                              </div>
                              {course.description && <div className="text-xs text-gray-600 mt-1 line-clamp-1">{course.description}</div>}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <div className="px-4 py-8 text-center">
                          <div className="text-sm text-gray-500 mb-2">No courses or programs found</div>
                          <div className="text-xs text-gray-400">Try "internship" or "program"</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Categories */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2 uppercase">Categories</div>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <Link key={category} href={`/courses?category=${encodeURIComponent(category)}`} className="block px-3 py-2 rounded-lg bg-gray-50 text-center text-sm hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Primary Links */}
              <div className="flex flex-col">
                {navLinks.map(link => (
                  <Link key={link.name} href={link.href} className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Services</div>
                <div className="grid grid-cols-2 gap-2">
                  {services.map(service => {
                    const Icon = service.icon;
                    return (
                      <Link key={service.name} href={service.href} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link href="https://www.skillwins.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                LMS Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
