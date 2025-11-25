import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, Building, Users, Briefcase } from "lucide-react";
import PartnerMarquee from "../components/PartnerMarquee";
import { servicesDetails } from "./data";

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
              <p className="text-sm text-white/80 mt-1">Drop a note to partnerships@vawe.in or call +91-998-877-6655</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Engagement Models</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Tailored experiences for every stakeholder</h2>
            </div>
            <p className="text-sm text-gray-500 max-w-lg">
              Pick the track that fits your charter—campus programs, corporate upskilling, or individual accelerators. We plug into your context.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                  <model.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{model.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{model.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-16 pb-12">
        <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Start Exploring</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Jump to any service</h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              Use the cards to navigate to detailed sections or hover “Services” in the top navigation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesDetails.map((service) => (
              <Link
                key={`quick-${service.id}`}
                href={`/services#${service.id}`}
                className="group border border-gray-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-lg transition-all bg-gradient-to-br from-white to-blue-50/30"
              >
                <p className="text-xs uppercase tracking-wide text-blue-600 mb-1">{service.name}</p>
                <p className="text-base font-semibold text-gray-900 group-hover:text-blue-700">
                  {service.heroTagline}
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{service.summary}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  View section
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="space-y-16 pb-20">
        {servicesDetails.map((service, index) => (
          <section key={service.id} id={service.id} className="px-4 sm:px-6 lg:px-12 xl:px-16 scroll-mt-28">
            <div
              className={`max-w-6xl mx-auto rounded-[32px] overflow-hidden border ${
                index % 2 === 0 ? "bg-white border-gray-100 shadow-xl" : "bg-blue-50 border-blue-100 shadow-lg"
              }`}
            >
              <div className="grid lg:grid-cols-[3fr,2fr] gap-0">
                <div className="p-8 sm:p-10 flex flex-col justify-center space-y-6">
                  <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>{service.heroTagline}</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{service.name}</h2>
                    <p className="text-base text-gray-600">{service.summary}</p>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 bg-white/70 rounded-2xl border border-white/60 px-4 py-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {service.outcomes.map((stat) => (
                      <div key={stat} className="px-4 py-2 bg-blue-600/10 text-blue-800 text-sm font-medium rounded-full">
                        {stat}
                      </div>
                    ))}
                  </div>
                  <div>
                    <Link
                      href={service.cta.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-2xl shadow hover:bg-blue-700 transition-colors"
                    >
                      {service.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div
                  className={`p-8 sm:p-10 bg-gradient-to-br ${
                    index % 2 === 0 ? "from-blue-600/10 to-blue-600/5" : "from-white/70 to-white/20"
                  } flex flex-col justify-center`}
                >
                  <div className="grid gap-4">
                    {[0, 1, 2].map((row) => (
                      <div
                        key={`row-${row}`}
                        className="h-16 rounded-2xl bg-white/80 border border-white/60 backdrop-blur-sm shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="mt-6 text-sm text-gray-600">
                    Scroll within the page or use the services menu to jump directly to this section.
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

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

