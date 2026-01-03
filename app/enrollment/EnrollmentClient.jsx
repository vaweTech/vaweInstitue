'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, User, BookOpen, GraduationCap, ClipboardList } from 'lucide-react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import { useRouter } from 'next/navigation';

/* -------------------------------------------------------------------------- */
/*                             Reusable Subcomponents                         */
/* -------------------------------------------------------------------------- */

const StepCard = ({ title, icon: Icon, children }) => (
  <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-md">
    <div className="flex items-center mb-6 space-x-3">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    </div>
    {children}
  </div>
);

const FormField = ({ label, name, type = 'text', value, onChange, required = false, placeholder, options }) => (
  <div className="mb-5">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === 'select' ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">Select an option</option>
        {options?.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ) : type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
      ></textarea>
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    )}
  </div>
);

const ProgressBar = ({ step, steps }) => (
  <div className="flex items-center justify-between mb-10">
    {steps.map((s, idx) => {
      const isActive = s.number === step;
      const isCompleted = s.number < step;
      const Icon = s.icon;
      return (
        <div key={idx} className="flex flex-col items-center text-center flex-1 relative">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
              isCompleted
                ? 'bg-blue-600 border-blue-600 text-white'
                : isActive
                ? 'border-blue-500 text-blue-600 bg-white'
                : 'border-gray-300 text-gray-400 bg-white'
            }`}
          >
            {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
          </div>
          <p
            className={`mt-2 text-xs font-medium ${
              isActive ? 'text-blue-600' : isCompleted ? 'text-gray-700' : 'text-gray-400'
            }`}
          >
            {s.label}
          </p>
          {idx < steps.length - 1 && (
            <div
              className={`absolute top-5 left-1/2 w-full h-0.5 -z-10 ${
                isCompleted ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            ></div>
          )}
        </div>
      );
    })}
  </div>
);

/* -------------------------------------------------------------------------- */
/*                               Main Component                               */
/* -------------------------------------------------------------------------- */

export default function EnrollmentClient() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    country: '',
    highestEducation: '',
    institution: '',
    fieldOfStudy: '',
    course: '',
    preferredStartDate: '',
    learningGoals: '',
    hearAboutUs: '',
    agreeTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  const steps = [
    { number: 1, label: 'Personal Info', icon: User },
    { number: 2, label: 'Education', icon: GraduationCap },
    { number: 3, label: 'Course', icon: BookOpen },
    { number: 4, label: 'Review', icon: ClipboardList }
  ];

  const courses = [
    'Web Development',
    'Data Science & Analytics',
    'Digital Marketing',
    'Business Management',
    'Graphic Design',
    'Mobile App Development',
    'Cloud Computing with AWS',
    'Cybersecurity Fundamentals',
    'UI/UX Design',
    'Project Management',
    'AI & Machine Learning',
    'Financial Analysis & Modeling'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Play submit sound on user gesture to avoid autoplay restrictions
    try {
      const audio = new Audio('/subbmitSound.mp3');
      audio.volume = 1.0;
      // Fire and forget; ignore promise rejection if user agent blocks
      audio.play().catch(() => {});
    } catch (_) {}
    setCountdown(10);
    setIsSubmitted(true);
    console.log(formData);
    // Fire-and-forget: send thank-you email
    try {
      fetch('/api/enrollment-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: formData.email,
          firstName: formData.firstName,
          courseTitle: formData.course,
          phone: formData.phone,
        }),
      }).catch(() => {});
    } catch (_) {}
  };

  useEffect(() => {
    if (!isSubmitted) return;
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 10000);
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, [isSubmitted, router]);

  if (isSubmitted) {
    return (
      <>
        <main
          className="min-h-screen relative flex items-center justify-center bg-gray-50 px-4 overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
            backgroundRepeat: 'repeat',
            backgroundSize: '64px 64px',
          }}
        >
          {/* Ambient subtle shapes (do not alter page background color) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -left-16 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 -right-10 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-ping" />
            <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* Success Card */}
          <div className="relative z-10 max-w-xl w-full">
            <div className="relative rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-2xl p-10 text-center overflow-hidden">
              <div className="absolute -inset-1 rounded-3xl opacity-20" />
              <div className="relative">
                <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-gray-900">Enrollment Successful!</h1>
                <p className="text-gray-700 mb-6">
                  Thanks, {formData.firstName || 'Learner'}! We&apos;ll email you the next steps shortly.
                </p>
                {formData.course && (
                  <div className="mb-6 text-gray-800">
                    <p className="text-sm">Selected course:</p>
                    <p className="font-semibold">
                      {formData.course}
                    </p>
                  </div>
                )}
                <p className="text-sm text-gray-600 mb-4">
                  Redirecting to home in <span className="font-semibold text-gray-800">{countdown}s</span>...
                </p>
                <div className="flex justify-center">
                  <Button href="/" variant="primary" size="lg" className="bg-white text-black border-2 border-black hover:shadow-lg">
                    Go to Home Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main
        className="bg-gray-50 min-h-screen py-16"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url(/favicon.ico)',
          backgroundRepeat: 'repeat',
          backgroundSize: '64px 64px',
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">VAWE Institute Enrollment</h1>
            <p className="text-gray-600">
              Join thousands of learners advancing their careers through our certified programs.
            </p>
          </div>

          <ProgressBar step={step} steps={steps} />

          <form onSubmit={handleSubmit} className="space-y-8 transition-all duration-300">
            {step === 1 && (
              <StepCard title="Personal Information" icon={User}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  <FormField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  <FormField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>
                <FormField label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} required />
                <FormField label="Address" name="address" value={formData.address} onChange={handleChange} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="City" name="city" value={formData.city} onChange={handleChange} required />
                  <FormField label="Country" name="country" value={formData.country} onChange={handleChange} required />
                </div>
              </StepCard>
            )}

            {step === 2 && (
              <StepCard title="Educational Background" icon={GraduationCap}>
                <FormField
                  label="Highest Education Level"
                  name="highestEducation"
                  type="select"
                  value={formData.highestEducation}
                  onChange={handleChange}
                  required
                  options={['High School', 'Associate Degree', "Bachelor's Degree", "Master's Degree", 'Doctorate', 'Other']}
                />
                <FormField label="Institution Name" name="institution" value={formData.institution} onChange={handleChange} required />
                <FormField label="Field of Study" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} />
              </StepCard>
            )}

            {step === 3 && (
              <StepCard title="Course Selection" icon={BookOpen}>
                <FormField
                  label="Select Course"
                  name="course"
                  type="select"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  options={courses}
                />
                <FormField label="Preferred Start Date" name="preferredStartDate" type="date" value={formData.preferredStartDate} onChange={handleChange} required />
                <FormField
                  label="Learning Goals"
                  name="learningGoals"
                  type="textarea"
                  value={formData.learningGoals}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you aim to achieve..."
                />
                <FormField
                  label="How did you hear about us?"
                  name="hearAboutUs"
                  type="select"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  required
                  options={['Search Engine', 'Social Media', 'Friend/Referral', 'Advertisement', 'Other']}
                />
              </StepCard>
            )}

            {step === 4 && (
              <StepCard title="Review & Confirm" icon={ClipboardList}>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm text-gray-700 space-y-3">
                  <p><b>Name:</b> {formData.firstName} {formData.lastName}</p>
                  <p><b>Email:</b> {formData.email}</p>
                  <p><b>Phone:</b> {formData.phone}</p>
                  <p><b>Education:</b> {formData.highestEducation} @ {formData.institution}</p>
                  <p><b>Course:</b> {formData.course}</p>
                  <p><b>Goals:</b> {formData.learningGoals}</p>
                </div>
                <div className="mt-4">
                  <label className="flex items-start space-x-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>
                      I agree to the terms and conditions and understand that VAWE Institute may contact me about my enrollment.
                    </span>
                  </label>
                </div>
              </StepCard>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button type="button" variant="primary" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="secondary"
                  className="bg-gradient-to-r from-[#ffd700] to-[#ffa500] text-black border-2 border-black hover:shadow-lg"
                >
                  Submit Enrollment
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

