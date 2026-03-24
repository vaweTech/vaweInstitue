import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building,
  Users,
  Briefcase,
  GraduationCap,
  FolderKanban,
  BadgeCheck,
  Presentation,
  Target,
} from "lucide-react";
import PartnerMarquee from "../components/PartnerMarquee";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

const engagementModels = [
  {
    icon: Building,
    title: "Campus & University",
    description:
      "Multi-semester delivery with TPO dashboards, curriculum mapping, faculty enablement, and high-volume placement drives.",
    points: ["Outcome-based MoUs", "NIRF & NAAC-aligned reporting", "Hybrid labs & remote studios"],
  },
  {
    icon: Briefcase,
    title: "Corporate & L&D",
    description:
      "Talent transformation for new hires and laterals with competency benchmarking, capstone pods, and leadership coaching.",
    points: ["Skills taxonomy integration", "Success KPIs & analytics", "Global time zone delivery"],
  },
  {
    icon: Users,
    title: "Individual Learners",
    description:
      "Career accelerators with mentor hours, certification tracks, and hiring partner access tailored to each learner's goal.",
    points: ["Personalized learning paths", "Placement support & alumni network", "Scholarships & financing options"],
  },
];

const processSteps = [
  { title: "Discover", detail: "Audit current capability, define KPIs, and map cohorts." },
  { title: "Design", detail: "Co-create curriculum, learning paths, and tech stack." },
  { title: "Deliver", detail: "Blended execution with live, self-paced, and lab components." },
  { title: "Deploy", detail: "Assessments, projects, certifications, and placement drives." },
  { title: "Delight", detail: "Feedback loops, analytics, and continuous improvement." },
];

const offerings = [
  {
    id: "internships",
    name: "Internships",
    heroTagline: "Real-time work experience",
    summary: "Work-integrated internships with mentorship, sprints, reviews and portfolio-ready proof of work.",
    highlights: ["Hybrid pods & daily rituals", "Real-time project modules", "Mentor reviews & showcases"],
    cta: { label: "Explore Internships", href: "/internship" },
    icon: Briefcase,
    accent: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    id: "courses",
    name: "Courses & Trainings",
    heroTagline: "Job-ready learning paths",
    summary: "Career-aligned courses in Full-Stack, Data, AI/ML, Java, Web Development and more.",
    highlights: ["Beginner → Advanced tracks", "Hands-on labs & projects", "Industry-aligned curriculum"],
    cta: { label: "Browse Courses", href: "/courses" },
    icon: GraduationCap,
    accent: "from-[#7C3AED] to-[#2563EB]",
  },
  {
    id: "projects",
    name: "Real-time Projects",
    heroTagline: "Build proof-of-work",
    summary: "Work on guided projects that mirror production flows: requirements → sprints → QA → delivery.",
    highlights: ["Capstones & mini-projects", "GitHub-ready repos", "Demo days & feedback loops"],
    cta: { label: "See Projects", href: "/academic-projects" },
    icon: FolderKanban,
    accent: "from-[#0EA5E9] to-[#10B981]",
  },
  {
    id: "certifications",
    name: "Certifications",
    heroTagline: "IBM + Microsoft + Bosch",
    summary: "Certification tracks with structured prep, assessments, and official proof to showcase your skills.",
    highlights: ["IBM SkillsBuild tracks", "Microsoft technology pathways", "Bosch-aligned modules"],
    cta: { label: "Explore Certifications", href: "/certifications" },
    icon: BadgeCheck,
    accent: "from-[#F97316] to-[#F59E0B]",
  },
  {
    id: "workshops",
    name: "Workshops",
    heroTagline: "Fast skill boosts",
    summary: "Short, high-impact workshops for colleges, companies, and learner communities.",
    highlights: ["Weekend formats", "Hands-on challenges", "Certificates & takeaways"],
    cta: { label: "View Workshops", href: "/services#workshops" },
    icon: Presentation,
    accent: "from-[#22C55E] to-[#14B8A6]",
  },
  {
    id: "placements",
    name: "CRT & Placements",
    heroTagline: "Interview-ready outcomes",
    summary: "Campus recruitment training, aptitude, communication, mock interviews and placement support.",
    highlights: ["Aptitude + soft skills", "Resume & LinkedIn support", "Interview practice"],
    cta: { label: "Placement Support", href: "/services" },
    icon: Target,
    accent: "from-[#EF4444] to-[#A855F7]",
  },
];

const highlightStats = [
  { value: "Internships", label: "Real-time pods & mentorship" },
  { value: "Courses", label: "Career-aligned pathways" },
  { value: "Projects", label: "Proof-of-work portfolios" },
  { value: "Certifications", label: "IBM · Microsoft · Bosch" },
];

const certificationShowcase = [
  { title: "IBM SkillsBuild Certificate", tags: ["IBM", "Cloud", "AI"] },
  { title: "Microsoft Technology Certificate", tags: ["Microsoft", "Azure", "Productivity"] },
  { title: "Bosch Global Skill Certification", tags: ["Bosch", "Automation", "Professional"] },
  { title: "VAWE Institute Excellence Certificate", tags: ["VAWE", "Internship", "Excellence"] },
  { title: "VAWE Completion Certificate", tags: ["VAWE", "Course", "Completion"] },
];

const faqs = [
  {
    question: "Can we customize services for a specific department or geography?",
    answer:
      "Yes. Every engagement begins with a discovery sprint where we map objectives, timeline, locations, and delivery preferences. We often run parallel tracks for multiple campuses or regions.",
  },
  {
    question: "How long does it take to launch a new program?",
    answer:
      "Standard offerings go live within 2 weeks. Bespoke programs that require co-created content, LMS integrations, or labs typically take 4–6 weeks from kickoff.",
  },
  {
    question: "Do you provide outcome reports and analytics?",
    answer:
      "Absolutely. Stakeholders receive dashboards covering enrollments, attendance, mastery scores, certification attempts, placement stats, and learner feedback.",
  },
  {
    question: "What support do learners get after the training?",
    answer:
      "Learners continue to access recordings, discussion forums, mentor office hours, and placement teams. We also run alumni AMAs and networking events.",
  },
];

export const metadata = {
  title: "Services | VAWE Institute",
  description:
    "Explore VAWE Institute services: trainings, certifications, projects, workshops, CRT, and placement support for learners and partner institutions.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F8FF] via-white to-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#3B82F6] opacity-90 rounded-3xl blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[3fr,2fr] gap-10 items-center bg-white/80 backdrop-blur rounded-[32px] p-8 sm:p-12 shadow-2xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Solutions for learners, colleges & corporate partners</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              One Platform for Training, Certifications, Projects, Workshops & Placements
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Partner with VAWE to architect learning journeys that deliver measurable impact—whether you are upskilling a campus batch,
              preparing for certifications, or building a future-ready talent pipeline.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-100 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse Programs
              </Link>
            </div>
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
              <ol className="inline-flex items-center flex-wrap gap-1">
                {breadcrumbs.map((crumb, idx) => (
                  <li key={crumb.href} className="flex items-center gap-1">
                    {idx > 0 && <span className="text-gray-400">/</span>}
                    <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white shadow-lg border border-blue-50">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Why institutions choose VAWE</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="text-3xl font-bold text-gray-900">400+</p>
                  <p>Hiring & academic partners</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">16K+</p>
                  <p>Learners placed via CRT & services</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">18%</p>
                  <p>Higher certification pass rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">32%</p>
                  <p>Average salary uplift post training</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
              <p className="text-sm uppercase tracking-wide font-semibold text-white/80">Need a custom stack?</p>
              <p className="text-lg font-semibold mt-2">We design bespoke learning interventions for universities & enterprises.</p>
              <p className="text-sm text-white/80 mt-1">Drop a note to vawe.info@gmail.com or call 8885103333</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-14">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">What we provide</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                Internships, Courses, Projects, Certifications and more
              </h2>
            </div>
            <p className="text-sm text-gray-600 max-w-2xl">
              Everything is designed to be outcome-driven: build proof of work, earn certifications, and get placement-ready with CRT support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {highlightStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-4 shadow-sm"
              >
                <p className="text-sm sm:text-base font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-2xl transition-shadow overflow-hidden relative"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} text-white flex items-center justify-center shadow-md`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{item.heroTagline}</p>
                      <h3 className="text-xl font-semibold text-gray-900 mt-1">{item.name}</h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 border border-gray-100 text-gray-700">
                    VAWE
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{item.summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <Link
                    href={item.cta.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    {item.cta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-gray-600 hover:text-gray-900 underline underline-offset-4"
                  >
                    Talk to advisor
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications showcase */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
        <div className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-100 p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Certifications</p>
              <h2 className="text-3xl font-bold text-gray-900">IBM, Microsoft, Bosch and VAWE certificates</h2>
              <p className="text-sm text-gray-600 mt-2 max-w-2xl">
                We support certification-aligned learning paths and assessments so learners can show credible proof of skills.
              </p>
            </div>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold shadow hover:bg-blue-700 transition-colors w-fit"
            >
              Explore Certifications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificationShowcase.map((cert) => (
              <div key={cert.title} className="rounded-3xl bg-white border border-white/60 shadow-sm p-6 hover:shadow-lg transition-shadow">
                <p className="text-lg font-semibold text-gray-900">{cert.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Structured prep, practice tests, and verification-ready certificates.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
        <div className="max-w-6xl mx-auto rounded-[32px] bg-white border border-gray-100 shadow-xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">How engagements run</p>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">A guided, data-backed delivery model</h2>
            </div>
            <p className="text-sm text-gray-600 max-w-2xl">
              From discovery to continuous improvement, we keep stakeholders in the loop with transparent communication and measurable checkpoints.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="p-4 rounded-2xl border border-gray-100 bg-blue-50/50">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  Step {index + 1}
                </div>
                <p className="text-lg font-semibold text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-600 mt-2">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
        <div className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-100 p-8 sm:p-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">FAQs</p>
              <h2 className="text-3xl font-bold text-gray-900">Answers for decision makers</h2>
              <p className="text-sm text-gray-600 mt-2">
                Still evaluating VAWE for your organization? These FAQs cover the most common queries from academic heads, L&D leaders, and learners.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold shadow hover:bg-blue-700 transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={faq.question}
                className="group border border-white/50 rounded-2xl bg-white/70 p-4 sm:p-5 shadow-sm"
                open={idx === 0}
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-blue-600 group-open:hidden">+</span>
                  <span className="text-blue-600 hidden group-open:inline-block">–</span>
                </summary>
                <p className="text-sm text-gray-600 mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-5xl mx-auto text-center mb-8">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Collaborations</p>
            <h3 className="text-2xl font-bold text-gray-900">Trusted by Universities & Hiring Partners</h3>
            <p className="text-gray-600 mt-2">
              Our services are co-created with academia and industry to keep talent roadmaps future-ready.
            </p>
          </div>
          <PartnerMarquee />
        </div>
      </section>
    </div>
  );
}

