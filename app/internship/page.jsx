import Script from 'next/script';
import {
  Award,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Headphones,
  HeartHandshake,
  Laptop,
  Layers,
  Lightbulb,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

import Footer from '../components/Footer';
import Button from '../components/Button';
import Card, { CardBody, CardHeader } from '../components/Card';

const textTone = {
  primary: 'color-mix(in oklab,var(--text)95%,transparent)',
  secondary: 'color-mix(in oklab,var(--text)85%,transparent)',
  subtle: 'color-mix(in oklab,var(--text)70%,transparent)',
};

export const metadata = {
  title: 'Internships & Real-time Projects | VAWE Institute',
  description:
    'Work-integrated internships with real-time project experience and a hybrid work culture, powered by VAWE Global Tech Software Solutions.',
  keywords: [
    'VAWE internships',
    'VAWE Global Tech',
    'real-time IT projects',
    'internship Vijayawada',
    'global tech internship India',
    'work-integrated learning',
  ],
  alternates: {
    canonical: '/placements',
  },
  openGraph: {
    title: 'Internships & Real-time Projects | VAWE Institute',
    description:
      'Gain real-time software project experience and dedicated mentorship with VAWE Institute and VAWE Global Tech.',
    url: 'https://vaweinstitute.com/placements',
    type: 'website',
    siteName: 'VAWE Institute',
    images: [
      {
        url: 'https://vaweinstitute.com/assets/codingimage.jpg',
        width: 1200,
        height: 630,
        alt: 'VAWE Internship & Placement Program',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internships & Real-time Projects | VAWE Institute',
    description:
      'Launch your tech career with VAWE internships, real-time projects and dedicated mentorship.',
    images: ['https://vaweinstitute.com/assets/codingimage.jpg'],
  },
};

const stats = [
  { label: 'Industry Collaborations', value: '400+', detail: 'IT services · SaaS · product' },
  { label: 'Internship & Project Pods (2024)', value: '950+', detail: 'Product · Data · CX' },
  { label: 'Real-time Modules Shipped', value: '1,800+', detail: 'Features · dashboards · CX playbooks' },
  { label: 'Mentor Time / Learner', value: '120+', detail: 'Code · strategy · reviews' },
];

const internshipTracks = [
  {
    Icon: Laptop,
    title: 'Product Engineering',
    summary: 'Full-stack, APIs & cloud-native flows.',
    points: ['MERN & Python', 'Agile sprints & reviews', 'CI/CD & demo days'],
    accent: '#0ea5e9',
    meta: '3 months · Hybrid · Real-time modules',
  },
  {
    Icon: LineChart,
    title: 'Data & Digital Analytics',
    summary: 'Dashboards, automation & insights.',
    points: ['Power BI & Python basics', 'Business-style datasets', 'KPI & ROI storytelling'],
    accent: '#10b981',
    meta: '3 months · Hybrid · Impact reports',
  },
  {
    Icon: HeartHandshake,
    title: 'Customer Success & Growth',
    summary: 'Client outcomes & revenue impact.',
    points: ['CRM & CX playbooks', 'Stakeholder comms', 'Capstone & recos'],
    accent: '#f97316',
    meta: '3 months · Hybrid · Client scenarios',
  },
];

const cultureHighlights = [
  {
    Icon: Users,
    title: 'Small, strong squads',
    description: 'You are seen, not lost in a batch.',
  },
  {
    Icon: Lightbulb,
    title: 'Build-first attitude',
    description: 'We ship, break, fix and learn together.',
  },
  {
    Icon: Building2,
    title: 'Industry in the room',
    description: 'Drives, talks, critiques & reviews.',
  },
  {
    Icon: CheckCircle2,
    title: 'Professional habits',
    description: 'SOPs, NDAs, stand-ups & retros.',
  },
];

const careerFlywheel = [
  {
    title: 'Discover',
    tagline: 'Where are you going?',
    description: 'Map your target role, skills and timeline.',
  },
  {
    title: 'Build',
    tagline: 'Can you ship value?',
    description: 'Work on real-time style modules & features.',
  },
  {
    title: 'Show',
    tagline: 'Can people see it?',
    description: 'Portfolio, LinkedIn and GitHub that sell you.',
  },
  {
    title: 'Share',
    tagline: 'Can you articulate it?',
    description: 'Reviews, feedback and storytelling to defend your work.',
  },
];

const successSignals = [
  {
    Icon: Target,
    title: 'Outcome metrics',
    description: 'Each intern has clear KPIs, not vague “training”.',
  },
  {
    Icon: Briefcase,
    title: 'Proof of work',
    description: 'Code, dashboards, decks and stories ready to share.',
  },
  {
    Icon: Rocket,
    title: 'Guided showcases',
    description: 'Curated demo rituals, critiques and storytelling practice.',
  },
];

const realTimeExperience = [
  {
    label: '01',
    title: 'Powered by VAWE Global Tech',
    description: 'You learn inside an active software solutions company.',
  },
  {
    label: '02',
    title: 'Project, not just project titles',
    description: 'Requirements → sprints → testing → delivery — end to end.',
  },
  {
    label: '03',
    title: 'Modern tools & rituals',
    description: 'Git, cloud, boards, stand-ups and reviews from day one.',
  },
];

const programPhases = [
  {
    label: 'Phase 01',
    title: 'Baseline & Orientation',
    duration: 'Week 1',
    outcomes: [
      'Career compass workshop and measurable OKRs for every learner.',
      'Tooling setup across Git, analytics suites, CRM and delivery boards.',
      'Mentor pairing plus expectations for hybrid collaboration.',
    ],
  },
  {
    label: 'Phase 02',
    title: 'Build & Demo Sprints',
    duration: 'Weeks 2–8',
    outcomes: [
      'Agile pods shipping features, dashboards and CX playbooks.',
      'Weekly sprint reviews with VAWE Global Tech delivery leaders.',
      'Ops rituals: stand-ups, retros, QA sign-offs and stakeholder updates.',
    ],
  },
  {
    label: 'Phase 03',
    title: 'Proof & Showcase',
    duration: 'Weeks 9–12',
    outcomes: [
      'Capstone scoped by real client-style briefs and acceptance criteria.',
      'Portfolio packaging: case studies, repo hygiene and storytelling.',
      'Showcase week: live demos, critiques and iteration plans.',
    ],
  },
];

const programSignals = [
  {
    Icon: ClipboardCheck,
    title: 'Structured roadmap',
    description: 'Know the weekly objectives, rituals and reviewers in advance.',
  },
  {
    Icon: Layers,
    title: 'Stacked learning',
    description: 'Engineering, analytics and CX squads mirror cross-team work.',
  },
  {
    Icon: Award,
    title: 'Dual validation',
    description: 'Mentors plus partner teams sign off on your proof of work.',
  },
  {
    Icon: TrendingUp,
    title: 'Career analytics',
    description: 'Dashboards track competencies, showcases and outcomes.',
  },
];

const mentorshipStack = [
  {
    Icon: Compass,
    title: 'Career compass pods',
    description: 'Personalized skill maps with measurable checkpoints.',
    detail: 'Mentor pods revisit OKRs every Friday.',
  },
  {
    Icon: CalendarClock,
    title: 'Rhythmic reviews',
    description: 'Weekly demos with delivery leads and structured feedback.',
    detail: 'Demo decks & repos audited before sign-off.',
  },
  {
    Icon: Headphones,
    title: 'On-call support',
    description: 'Dedicated Slack/Meet channels with engineers & CX coaches.',
    detail: 'Response SLA under 6 working hours.',
  },
  {
    Icon: ShieldCheck,
    title: 'Showcase guardrails',
    description: 'Mock demos, review squads and narrative rehearsals.',
    detail: 'Feedback windows before every milestone.',
  },
];

const whoIsThisFor = [
  'You want your first tech opportunity to feel earned, not lucky.',
  'You are tired of “just theory” and need real work experience.',
  'You are switching to tech and want a structured, guided path.',
  'You care about culture, mentors and long-term growth.',
];

const testimonials = [
  {
    quote:
      'VAWE felt like my first job, not a classroom. Daily stand-ups with delivery managers helped me explain business impact instead of just listing tools.',
    name: 'Spoorthi R.',
    role: 'Product Engineering Intern, 2024 cohort',
    result: 'Delivered fintech release review-ready',
    badge: 'Product Engineering Cohort · 2024',
  },
  {
    quote:
      'The analytics pod made me own the story behind every dashboard. My Power BI case study plus critique loops helped me speak to real business impact.',
    name: 'Venkata Ajay',
    role: 'Analytics Intern, 2024 cohort',
    result: 'Presented enterprise automation insights',
    badge: 'Data & Digital Analytics Cohort · 2024',
  },
];

const faqs = [
  {
    question: 'Who can apply?',
    answer:
      'Final-year students, fresh graduates and working professionals across India who are serious about building a tech career.',
  },
  {
    question: 'Is this only classroom training?',
    answer:
      'No. It is work-integrated. You learn concepts, then apply them on guided, real-time style projects with mentors.',
  },
  {
    question: 'Do I need prior experience?',
    answer:
      'No. We start with fundamentals, pair you with a mentor pod and gradually raise the complexity based on your comfort.',
  },
  {
    question: 'What is the weekly commitment?',
    answer:
      'Expect 18–22 hours each week across live rituals, async build time, reviews and reflection logs.',
  },
];

const applicationFlow = [
  {
    step: '01',
    title: 'Share your intent',
    description: 'Tell us your background, preferred track and timeline.',
    helper: '5 min form',
  },
  {
    step: '02',
    title: 'Clarity conversation',
    description: '15-minute mentor call to align skills, goals and logistics.',
    helper: 'Virtual meet',
  },
  {
    step: '03',
    title: 'Diagnostic sprint',
    description: 'Complete a short brief so we can personalize your roadmap.',
    helper: '48 hr window',
  },
  {
    step: '04',
    title: 'Onboard & start shipping',
    description: 'Lock your seat, meet your pod and join the kickoff stand-up.',
    helper: 'Hybrid or remote',
  },
];

export default function PlacementsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'VAWE Internship Program',
    description:
      'Work-integrated internships with real-time project exposure, hybrid work culture and mentorship.',
    programType: 'InternshipProgram',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'VAWE Institute',
      url: 'https://vaweinstitute.com',
    },
    educationalCredentialAwarded: 'Internship certificate and real-time project experience',
    hasCourse: internshipTracks.map((track) => ({
      '@type': 'Course',
      name: track.title,
      description: track.summary,
    })),
    timeToComplete: 'P3M',
    occupationalCategory: ['Software Developer', 'Data Analyst', 'Customer Success Specialist'],
    totalOccupationalExperienceRequired: 'P0M',
  };

  return (
    <>
      <Script
        id="jsonld-internships"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen mt-[-15px] bg-[var(--background)] text-[var(--text)]">
        {/* ---------- HERO SECTION ---------- */}
        <section
          id="internship-hero"
          className="relative overflow-hidden py-20 sm:py-24"
          style={{ backgroundColor: 'var(--navbar-hero)' }}
        >
          {/* subtle shapes */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-indigo-500/25 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="grid lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.9fr)] gap-10 items-center">
              {/* LEFT: Copy */}
              <div className="space-y-6 text-white">
                <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/15">
                  <Sparkles className="w-4 h-4" />
                  <span>VAWE Institute · VAWE Global Tech Software Solutions</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                    Turn your learning into
                    <span className="block font-bold text-[var(--button-hover)]">
                      real work & real impact.
                    </span>
                  </h1>
                  <p className="text-sm sm:text-base text-white/85 max-w-xl">
                    Work-integrated internships with real-time project experience, guided by
                    engineers and leaders from VAWE Global Tech.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-[0.7rem] sm:text-xs text-white/85">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    Real-time project flows
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    Hybrid, work-like environment
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    Portfolio storytelling support
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/enrollment" size="lg">
                    Apply for Internship
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="lg"
                    className="text-white border-white/70 hover:bg-white/10"
                  >
                    Talk to a Career Advisor
                  </Button>
                </div>

                {/* Hero micro-highlights */}
                <div className="flex flex-wrap gap-6 pt-2 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    <span>Launch-ready proof of work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Project, not just certificates</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Stats cluster card */}
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 sm:p-6">
                  <p className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase mb-2">
                    Snapshot
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl bg-white/5 border border-white/15 p-3 text-white"
                      >
                        <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/60">
                          {stat.label}
                        </p>
                        <p className="text-xl font-bold mt-1">{stat.value}</p>
                        <p className="text-[0.7rem] mt-1 text-white/80">{stat.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-black/25 border border-white/10 p-4 text-xs text-white/85 flex flex-wrap gap-3">
                  <span className="font-semibold text-white">Program type:</span>
                  <span>Internship · Real-time Projects · Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- MINI HIGHLIGHTS STRIP ---------- */}
        <section className="py-6 bg-[var(--background)] border-b border-[color-mix(in oklab,var(--text)10%,transparent)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--button)]/10 flex items-center justify-center">
                  <Laptop className="w-4 h-4 text-[var(--button)]" />
                </div>
                <div>
                  <p className="font-semibold">Job-style workdays</p>
                  <p
                    className="text-[0.7rem] sm:text-xs"
                    style={{ color: 'color-mix(in oklab, var(--text)75%, transparent)' }}
                  >
                    Stand-ups, boards, code reviews & deadlines.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--button)]/10 flex items-center justify-center">
                  <LineChart className="w-4 h-4 text-[var(--button)]" />
                </div>
                <div>
                  <p className="font-semibold">Visible progress</p>
                  <p
                    className="text-[0.7rem] sm:text-xs"
                    style={{ color: 'color-mix(in oklab, var(--text)75%, transparent)' }}
                  >
                    Track growth week by week.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--button)]/10 flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4 text-[var(--button)]" />
                </div>
                <div>
                  <p className="font-semibold">Humans, not numbers</p>
                  <p
                    className="text-[0.7rem] sm:text-xs"
                    style={{ color: 'color-mix(in oklab, var(--text)75%, transparent)' }}
                  >
                    Mentors know your name and your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- REAL-TIME EXPERIENCE SECTION ---------- */}
        <section id="realtime-experience" className="py-16 bg-[var(--background-alt)]/25">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                  Real-time Work
                </p>
                <h2 className="text-3xl font-bold">
                  Learn inside a real software solution engine.
                </h2>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: 'color-mix(in oklab, var(--text)80%, transparent)' }}
                >
                  VAWE Global Tech builds software for clients. You learn in the same environment —
                  rituals, tools and expectations tuned to industry.
                </p>
              </div>

              <div className="space-y-4">
                {realTimeExperience.map((item) => (
                  <div
                    key={item.title}
                    className="relative rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-[color-mix(in oklab,var(--text)10%,transparent)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--button)]/10 text-[var(--button)] text-xs font-semibold">
                        {item.label}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
                        <p
                          className="mt-1 text-xs sm:text-sm"
                          style={{ color: textTone.secondary }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PROGRAM BLUEPRINT SECTION ---------- */}
        <section id="program-blueprint" className="py-16 bg-[var(--background)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,0.85fr),minmax(0,1.15fr)] gap-10 items-start">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                    12-week blueprint
                  </p>
                  <h2 className="text-3xl font-bold">Clarity on what you build every week.</h2>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: textTone.primary }}
                  >
                    Every learner follows the same rigor VAWE Global Tech demands from its delivery
                    teams—clear rituals, documented proof of work and measurable career KPIs.
                  </p>
                </div>
                <Button
                  href="/enrollment"
                  size="md"
                  variant="secondary"
                  className="bg-[var(--button)] text-white hover:bg-[var(--button-hover)] w-full sm:w-auto"
                >
                  Download detailed schedule
                </Button>
                <div className="grid sm:grid-cols-2 gap-4">
                  {programSignals.map((signal) => (
                    <div
                      key={signal.title}
                      className="rounded-2xl border border-[color-mix(in oklab,var(--text)10%,transparent)] bg-white/5 p-4 flex gap-3 items-start"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-[var(--button)]/10 flex items-center justify-center">
                        <signal.Icon className="w-5 h-5 text-[var(--button)]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{signal.title}</h3>
                        <p
                          className="text-xs sm:text-sm"
                          style={{ color: textTone.secondary }}
                        >
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {programPhases.map((phase) => (
                  <div
                    key={phase.title}
                    className="rounded-3xl bg-white p-5 sm:p-6 shadow-sm border border-[color-mix(in oklab,var(--text)10%,transparent)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className="text-[0.65rem] uppercase tracking-[0.3em]"
                          style={{ color: textTone.subtle }}
                        >
                          {phase.label}
                        </p>
                        <h3 className="text-lg sm:text-xl font-semibold">{phase.title}</h3>
                      </div>
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[var(--button)]/10 text-[var(--button)]">
                        {phase.duration}
                      </span>
                    </div>
                    <ul
                      className="mt-4 space-y-3 text-sm"
                      style={{ color: textTone.primary }}
                    >
                      {phase.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3 items-start">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--button)] flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- INTERNSHIP TRACKS SECTION ---------- */}
        <section id="internship-tracks" className="py-18 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                Internship Tracks
              </p>
              <h2 className="text-3xl font-bold">Pick your lane. We’ll help you drive it.</h2>
              <p
                className="text-sm sm:text-base"
                style={{ color: textTone.primary }}
              >
                Every track ends with one simple outcome: “Yes, I can do this job.”
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {internshipTracks.map((track) => (
                <Card
                  key={track.title}
                  hoverable
                  accentColor={track.accent}
                  className="h-full flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-md"
                      style={{ backgroundColor: track.accent }}
                    >
                      <track.Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{track.title}</h3>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: textTone.secondary }}
                    >
                      {track.summary}
                    </p>
                    <p
                      className="mt-2 inline-flex text-[0.7rem] rounded-full px-3 py-1 border"
                      style={{
                        borderColor: 'color-mix(in oklab,var(--text)20%,transparent)',
                        color: textTone.secondary,
                      }}
                    >
                      {track.meta}
                    </p>
                  </CardHeader>
                  <CardBody className="pt-1 flex-1 flex flex-col justify-between">
                    <ul
                      className="space-y-2 text-sm"
                      style={{ color: textTone.primary }}
                    >
                      {track.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span
                            className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: track.accent }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MENTORSHIP & SUPPORT SECTION ---------- */}
        <section id="mentorship" className="py-16 bg-[var(--background-alt)]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                Mentorship & Rituals
              </p>
              <h2 className="text-3xl font-bold">Support that feels like working inside a tech team.</h2>
              <p
                className="text-sm sm:text-base"
                style={{ color: textTone.primary }}
              >
                From 1:1 pods to on-call help, you are never building alone. Each ritual mirrors how
                high-performing squads operate.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentorshipStack.map((item) => (
                <Card key={item.title} hoverable className="h-full">
                  <CardHeader className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--button)]/10 flex items-center justify-center">
                      <item.Icon className="w-6 h-6 text-[var(--button)]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                    <p
                      className="text-sm"
                      style={{ color: textTone.secondary }}
                    >
                      {item.description}
                    </p>
                    <p
                      className="text-xs uppercase tracking-[0.18em]"
                      style={{ color: textTone.subtle }}
                    >
                      {item.detail}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CULTURE SECTION ---------- */}
        <section id="work-culture" className="py-16 bg-[var(--background-alt)]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] gap-10 items-start">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                  Culture & Environment
                </p>
                <h2 className="text-3xl font-bold">A place where questions are welcome.</h2>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: textTone.primary }}
                >
                  Learn like a student. Work like a professional. Be treated like a teammate.
                </p>
                <Button href="/contact" className="bg-gradient-to-r from-[#F57124] to-[#FBA426] text-white" variant="secondary">
                  Schedule a Virtual Tour
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cultureHighlights.map((item) => (
                  <Card key={item.title} hoverable>
                    <CardHeader>
                      <div className="w-10 h-10 rounded-2xl bg-[var(--button)]/10 flex items-center justify-center mb-3">
                        <item.Icon className="w-5 h-5 text-[var(--button)]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                      <p
                        className="mt-1 text-sm"
                        style={{ color: textTone.secondary }}
                      >
                        {item.description}
                      </p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SUCCESS STORIES SECTION ---------- */}
        <section id="success-stories" className="py-16 bg-[var(--background)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                Success Stories
              </p>
              <h2 className="text-3xl font-bold">Learners who turned practice into outcomes.</h2>
              <p
                className="text-sm sm:text-base"
                style={{ color: textTone.primary }}
              >
                Proof that real work, mentorship and clarity translate into confident storytelling
                across product, SaaS and services teams.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((story) => (
                <div
                  key={story.name}
                  className="rounded-3xl bg-white shadow-lg border border-[color-mix(in oklab,var(--text)12%,transparent)] p-6 sm:p-7 flex flex-col gap-4"
                >
                  <p
                    className="text-base sm:text-lg font-medium leading-relaxed"
                    style={{ color: textTone.primary }}
                  >
                    “{story.quote}”
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-sm sm:text-base">{story.name}</p>
                    <p
                      className="text-xs uppercase tracking-[0.2em]"
                      style={{ color: textTone.subtle }}
                    >
                      {story.badge}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: textTone.subtle }}
                    >
                      {story.role}
                    </p>
                  </div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-[var(--button)]/10 text-[var(--button)] text-xs font-semibold w-fit">
                    {story.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- WHO IS THIS FOR SECTION ---------- */}
        <section id="who-is-this-for" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-3">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                  Who It’s For
                </p>
                <h2 className="text-3xl font-bold">If this sounds like you, VAWE fits you.</h2>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: textTone.primary }}
                >
                  We are not for “time pass”. We are for people who want to move.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
                <ul className="space-y-3">
                  {whoIsThisFor.map((line) => (
                    <li key={line} className="flex gap-3 items-start">
                      <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[var(--button)] flex-shrink-0" />
                      <p
                        className="text-sm sm:text-base"
                        style={{ color: textTone.primary }}
                      >
                        {line}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CAREER FLYWHEEL SECTION ---------- */}
        <section id="career-growth" className="py-16 bg-[var(--background-alt)]/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                Career Flywheel
              </p>
              <h2 className="text-3xl font-bold">A simple journey from learner to hire.</h2>
              <p
                className="text-sm sm:text-base"
                style={{ color: textTone.primary }}
              >
                Four clear stages. No confusion, only next steps.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute inset-x-4 top-9 h-px bg-gradient-to-r from-transparent via-[color-mix(in oklab,var(--text)15%,transparent)] to-transparent" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {careerFlywheel.map((stage, index) => (
                  <div
                    key={stage.title}
                    className="rounded-3xl bg-white p-5 shadow-sm border border-[color-mix(in oklab,var(--text)10%,transparent)]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--button)]/10 text-[var(--button)] text-xs font-semibold">
                        {index + 1}
                      </span>
                      <h3 className="text-base font-semibold">{stage.title}</h3>
                    </div>
                    <p
                      className="text-xs uppercase tracking-[0.18em] mb-2"
                      style={{ color: textTone.subtle }}
                    >
                      {stage.tagline}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: textTone.secondary }}
                    >
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- READINESS STACK + FAQ SECTION ---------- */}
        <section id="readiness-stack" className="py-16 bg-[var(--background-alt)]/35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                  Readiness Stack
                </p>
                <h2 className="text-3xl font-bold">Signals mentors recognize instantly.</h2>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: textTone.primary }}
                >
                  We don’t just say “trained”. We show “ready”.
                </p>

                <div className="space-y-5 pt-2">
                  {successSignals.map((signal) => (
                    <div key={signal.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--button)]/15 text-[var(--button)] flex items-center justify-center">
                        <signal.Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold">{signal.title}</h3>
                        <p
                          className="text-sm"
                      style={{ color: textTone.secondary }}
                        >
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">FAQs</h3>
                  <p
                    className="text-xs sm:text-sm"
                    style={{ color: textTone.subtle }}
                  >
                    Quick answers before you click “Apply”.
                  </p>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group border border-[color-mix(in oklab,var(--text)15%,transparent)] rounded-2xl p-4"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                        <span className="text-sm text-[var(--button-hover)] group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p
                        className="mt-2 text-sm"
                        style={{ color: textTone.secondary }}
                      >
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- APPLICATION FLOW SECTION ---------- */}
        <section id="application-flow" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,0.85fr),minmax(0,1.15fr)] gap-10 items-start">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
                  Application Journey
                </p>
                <h2 className="text-3xl font-bold">Four steps between you and day-one impact.</h2>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: textTone.primary }}
                >
                  We keep admissions conversational and practical. Share your intent, experience a
                  diagnostic sprint and lock your seat once you are confident.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href="/enrollment"
                    size="md"
                    className="bg-[var(--button)] text-white hover:bg-[var(--button-hover)]"
                  >
                    Start application
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="md"
                    className="border-[var(--button)] text-[var(--button)] hover:bg-[var(--button)]/10"
                  >
                    Talk to admissions
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                {applicationFlow.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-[color-mix(in oklab,var(--text)12%,transparent)] bg-white/5 p-5 sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--button)]/10 text-[var(--button)] font-semibold text-base">
                          {step.step}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold">{step.title}</h3>
                          <p
                            className="text-sm"
                            style={{ color: textTone.secondary }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{ color: textTone.subtle }}
                      >
                        {step.helper}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FINAL CTA SECTION ---------- */}
        <section id="apply" className="py-18 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#0ba8d9] to-[#064ea6] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[0.7rem] uppercase tracking-[0.2em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  <span>Next Cohort Now Forming</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight">
                  Start your VAWE journey with real-time work from day one.
                </h2>
                <p className="text-sm sm:text-base text-white/85">
                  Limited seats. Join the next batch, learn with mentors from VAWE Global Tech and
                  share your proof of work with confidence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href="/enrollment"
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#064ea6] hover:bg-white/90"
                >
                  Start Application
                </Button>
                <Button
                  href="tel:+918885103333"
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Call 8885103333
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}


// import Script from 'next/script';
// import Image from 'next/image';
// import {
//   Award,
//   Briefcase,
//   Building2,
//   CalendarClock,
//   CheckCircle2,
//   ClipboardCheck,
//   Compass,
//   Headphones,
//   HeartHandshake,
//   Laptop,
//   Layers,
//   Lightbulb,
//   LineChart,
//   Rocket,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   TrendingUp,
//   Users,
// } from 'lucide-react';

// import Footer from '../components/Footer';
// import Button from '../components/Button';
// import Card, { CardBody, CardHeader } from '../components/Card';

// const textTone = {
//   primary: 'color-mix(in oklab,var(--text)95%,transparent)',
//   secondary: 'color-mix(in oklab,var(--text)85%,transparent)',
//   subtle: 'color-mix(in oklab,var(--text)70%,transparent)',
// };

// export const metadata = {
//   title: 'Internships & Real-time Projects | VAWE Institute',
//   description:
//     'Work-integrated internships with real-time project experience and a hybrid work culture, powered by VAWE Global Tech Software Solutions.',
//   keywords: [
//     'VAWE internships',
//     'VAWE Global Tech',
//     'real-time IT projects',
//     'internship Vijayawada',
//     'global tech internship India',
//     'work-integrated learning',
//   ],
//   alternates: {
//     canonical: '/placements',
//   },
//   openGraph: {
//     title: 'Internships & Real-time Projects | VAWE Institute',
//     description:
//       'Gain real-time software project experience and dedicated mentorship with VAWE Institute and VAWE Global Tech.',
//     url: 'https://vaweinstitute.com/placements',
//     type: 'website',
//     siteName: 'VAWE Institute',
//     images: [
//       {
//         url: 'https://vaweinstitute.com/assets/codingimage.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'VAWE Internship & Placement Program',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Internships & Real-time Projects | VAWE Institute',
//     description:
//       'Launch your tech career with VAWE internships, real-time projects and dedicated mentorship.',
//     images: ['https://vaweinstitute.com/assets/codingimage.jpg'],
//   },
// };

// const stats = [
//   { label: 'Industry Collaborations', value: '400+', detail: 'IT services · SaaS · product' },
//   { label: 'Internship & Project Pods (2024)', value: '950+', detail: 'Product · Data · CX' },
//   { label: 'Real-time Modules Shipped', value: '1,800+', detail: 'Features · dashboards · CX playbooks' },
//   { label: 'Mentor Time / Learner', value: '120+', detail: 'Code · strategy · reviews' },
// ];

// const internshipTracks = [
//   {
//     Icon: Laptop,
//     title: 'Product Engineering',
//     summary: 'Full-stack, APIs & cloud-native flows.',
//     points: ['MERN & Python', 'Agile sprints & reviews', 'CI/CD & demo days'],
//     accent: '#0ea5e9',
//     meta: '3 months · Hybrid · Real-time modules',
//   },
//   {
//     Icon: LineChart,
//     title: 'Data & Digital Analytics',
//     summary: 'Dashboards, automation & insights.',
//     points: ['Power BI & Python basics', 'Business-style datasets', 'KPI & ROI storytelling'],
//     accent: '#10b981',
//     meta: '3 months · Hybrid · Impact reports',
//   },
//   {
//     Icon: HeartHandshake,
//     title: 'Customer Success & Growth',
//     summary: 'Client outcomes & revenue impact.',
//     points: ['CRM & CX playbooks', 'Stakeholder comms', 'Capstone & recos'],
//     accent: '#f97316',
//     meta: '3 months · Hybrid · Client scenarios',
//   },
// ];

// const cultureHighlights = [
//   {
//     Icon: Users,
//     title: 'Small, strong squads',
//     description: 'You are seen, not lost in a batch.',
//   },
//   {
//     Icon: Lightbulb,
//     title: 'Build-first attitude',
//     description: 'We ship, break, fix and learn together.',
//   },
//   {
//     Icon: Building2,
//     title: 'Industry in the room',
//     description: 'Drives, talks, critiques & reviews.',
//   },
//   {
//     Icon: CheckCircle2,
//     title: 'Professional habits',
//     description: 'SOPs, NDAs, stand-ups & retros.',
//   },
// ];

// const careerFlywheel = [
//   {
//     title: 'Discover',
//     tagline: 'Where are you going?',
//     description: 'Map your target role, skills and timeline.',
//   },
//   {
//     title: 'Build',
//     tagline: 'Can you ship value?',
//     description: 'Work on real-time style modules & features.',
//   },
//   {
//     title: 'Show',
//     tagline: 'Can people see it?',
//     description: 'Portfolio, LinkedIn and GitHub that sell you.',
//   },
//   {
//     title: 'Share',
//     tagline: 'Can you articulate it?',
//     description: 'Reviews, feedback and storytelling to defend your work.',
//   },
// ];

// const successSignals = [
//   {
//     Icon: Target,
//     title: 'Outcome metrics',
//     description: 'Each intern has clear KPIs, not vague “training”.',
//   },
//   {
//     Icon: Briefcase,
//     title: 'Proof of work',
//     description: 'Code, dashboards, decks and stories ready to share.',
//   },
//   {
//     Icon: Rocket,
//     title: 'Guided showcases',
//     description: 'Curated demo rituals, critiques and storytelling practice.',
//   },
// ];

// const realTimeExperience = [
//   {
//     label: '01',
//     title: 'Powered by VAWE Global Tech',
//     description: 'You learn inside an active software solutions company.',
//   },
//   {
//     label: '02',
//     title: 'Project, not just project titles',
//     description: 'Requirements → sprints → testing → delivery — end to end.',
//   },
//   {
//     label: '03',
//     title: 'Modern tools & rituals',
//     description: 'Git, cloud, boards, stand-ups and reviews from day one.',
//   },
// ];

// const programPhases = [
//   {
//     label: 'Phase 01',
//     title: 'Baseline & Orientation',
//     duration: 'Week 1',
//     outcomes: [
//       'Career compass workshop and measurable OKRs for every learner.',
//       'Tooling setup across Git, analytics suites, CRM and delivery boards.',
//       'Mentor pairing plus expectations for hybrid collaboration.',
//     ],
//   },
//   {
//     label: 'Phase 02',
//     title: 'Build & Demo Sprints',
//     duration: 'Weeks 2–8',
//     outcomes: [
//       'Agile pods shipping features, dashboards and CX playbooks.',
//       'Weekly sprint reviews with VAWE Global Tech delivery leaders.',
//       'Ops rituals: stand-ups, retros, QA sign-offs and stakeholder updates.',
//     ],
//   },
//   {
//     label: 'Phase 03',
//     title: 'Proof & Showcase',
//     duration: 'Weeks 9–12',
//     outcomes: [
//       'Capstone scoped by real client-style briefs and acceptance criteria.',
//       'Portfolio packaging: case studies, repo hygiene and storytelling.',
//       'Showcase week: live demos, critiques and iteration plans.',
//     ],
//   },
// ];

// const programSignals = [
//   {
//     Icon: ClipboardCheck,
//     title: 'Structured roadmap',
//     description: 'Know the weekly objectives, rituals and reviewers in advance.',
//   },
//   {
//     Icon: Layers,
//     title: 'Stacked learning',
//     description: 'Engineering, analytics and CX squads mirror cross-team work.',
//   },
//   {
//     Icon: Award,
//     title: 'Dual validation',
//     description: 'Mentors plus partner teams sign off on your proof of work.',
//   },
//   {
//     Icon: TrendingUp,
//     title: 'Career analytics',
//     description: 'Dashboards track competencies, showcases and outcomes.',
//   },
// ];

// const mentorshipStack = [
//   {
//     Icon: Compass,
//     title: 'Career compass pods',
//     description: 'Personalized skill maps with measurable checkpoints.',
//     detail: 'Mentor pods revisit OKRs every Friday.',
//   },
//   {
//     Icon: CalendarClock,
//     title: 'Rhythmic reviews',
//     description: 'Weekly demos with delivery leads and structured feedback.',
//     detail: 'Demo decks & repos audited before sign-off.',
//   },
//   {
//     Icon: Headphones,
//     title: 'On-call support',
//     description: 'Dedicated Slack/Meet channels with engineers & CX coaches.',
//     detail: 'Response SLA under 6 working hours.',
//   },
//   {
//     Icon: ShieldCheck,
//     title: 'Showcase guardrails',
//     description: 'Mock demos, review squads and narrative rehearsals.',
//     detail: 'Feedback windows before every milestone.',
//   },
// ];

// const whoIsThisFor = [
//   'You want your first tech opportunity to feel earned, not lucky.',
//   'You are tired of “just theory” and need real work experience.',
//   'You are switching to tech and want a structured, guided path.',
//   'You care about culture, mentors and long-term growth.',
// ];

// const testimonials = [
//   {
//     quote:
//       'VAWE felt like my first job, not a classroom. Daily stand-ups with delivery managers helped me explain business impact instead of just listing tools.',
//     name: 'Spoorthi R.',
//     role: 'Product Engineering Intern, 2024 cohort',
//     result: 'Delivered fintech release review-ready',
//     badge: 'Product Engineering Cohort · 2024',
//   },
//   {
//     quote:
//       'The analytics pod made me own the story behind every dashboard. My Power BI case study plus critique loops helped me speak to real business impact.',
//     name: 'Venkata Ajay',
//     role: 'Analytics Intern, 2024 cohort',
//     result: 'Presented enterprise automation insights',
//     badge: 'Data & Digital Analytics Cohort · 2024',
//   },
// ];

// const faqs = [
//   {
//     question: 'Who can apply?',
//     answer:
//       'Final-year students, fresh graduates and working professionals across India who are serious about building a tech career.',
//   },
//   {
//     question: 'Is this only classroom training?',
//     answer:
//       'No. It is work-integrated. You learn concepts, then apply them on guided, real-time style projects with mentors.',
//   },
//   {
//     question: 'Do I need prior experience?',
//     answer:
//       'No. We start with fundamentals, pair you with a mentor pod and gradually raise the complexity based on your comfort.',
//   },
//   {
//     question: 'What is the weekly commitment?',
//     answer:
//       'Expect 18–22 hours each week across live rituals, async build time, reviews and reflection logs.',
//   },
// ];

// const applicationFlow = [
//   {
//     step: '01',
//     title: 'Share your intent',
//     description: 'Tell us your background, preferred track and timeline.',
//     helper: '5 min form',
//   },
//   {
//     step: '02',
//     title: 'Clarity conversation',
//     description: '15-minute mentor call to align skills, goals and logistics.',
//     helper: 'Virtual meet',
//   },
//   {
//     step: '03',
//     title: 'Diagnostic sprint',
//     description: 'Complete a short brief so we can personalize your roadmap.',
//     helper: '48 hr window',
//   },
//   {
//     step: '04',
//     title: 'Onboard & start shipping',
//     description: 'Lock your seat, meet your pod and join the kickoff stand-up.',
//     helper: 'Hybrid or remote',
//   },
// ];

// export default function PlacementsPage() {
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'EducationalOccupationalProgram',
//     name: 'VAWE Internship Program',
//     description:
//       'Work-integrated internships with real-time project exposure, hybrid work culture and mentorship.',
//     programType: 'InternshipProgram',
//     provider: {
//       '@type': 'EducationalOrganization',
//       name: 'VAWE Institute',
//       url: 'https://vaweinstitute.com',
//     },
//     educationalCredentialAwarded: 'Internship certificate and real-time project experience',
//     hasCourse: internshipTracks.map((track) => ({
//       '@type': 'Course',
//       name: track.title,
//       description: track.summary,
//     })),
//     timeToComplete: 'P3M',
//     occupationalCategory: ['Software Developer', 'Data Analyst', 'Customer Success Specialist'],
//     totalOccupationalExperienceRequired: 'P0M',
//   };

//   return (
//     <>
//       <Script
//         id="jsonld-internships"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//       <main className="min-h-screen mt-[-15px] bg-[var(--background)] text-[var(--text)]">
//         {/* ---------- HERO SECTION ---------- */}
//         <section
//           id="internship-hero"
//           className="relative overflow-hidden py-20 sm:py-24"
//           style={{ backgroundColor: 'var(--navbar-hero)' }}
//         >
//           {/* subtle shapes */}
//           <div className="pointer-events-none absolute inset-0 opacity-60">
//             <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl" />
//             <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-indigo-500/25 blur-3xl" />
//           </div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
//             <div className="grid lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.9fr)] gap-10 items-center">
//               {/* LEFT: Copy */}
//               <div className="space-y-6 text-white">
//                 <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/15">
//                   <Sparkles className="w-4 h-4" />
//                   <span>VAWE Institute · VAWE Global Tech Software Solutions</span>
//                 </div>

//                 <div className="space-y-3">
//                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
//                     Turn your learning into
//                     <span className="block font-bold text-[var(--button-hover)]">
//                       real work & real impact.
//                     </span>
//                   </h1>
//                   <p className="text-sm sm:text-base text-white/85 max-w-xl">
//                     Work-integrated internships with real-time project experience, guided by
//                     engineers and leaders from VAWE Global Tech.
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-2 text-[0.7rem] sm:text-xs text-white/85">
//                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
//                     Real-time project flows
//                   </span>
//                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
//                     Hybrid, work-like environment
//                   </span>
//                   <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
//                     Portfolio storytelling support
//                   </span>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button href="/enrollment" size="lg">
//                     Apply for Internship
//                   </Button>
//                   <Button
//                     href="/contact"
//                     variant="outline"
//                     size="lg"
//                     className="text-white border-white/70 hover:bg-white/10"
//                   >
//                     Talk to a Career Advisor
//                   </Button>
//                 </div>

//                 {/* Hero micro-highlights */}
//                 <div className="flex flex-wrap gap-6 pt-2 text-xs text-white/80">
//                   <div className="flex items-center gap-2">
//                     <Rocket className="w-4 h-4" />
//                     <span>Launch-ready proof of work</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Briefcase className="w-4 h-4" />
//                     <span>Project, not just certificates</span>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: Illustration + Stats cluster card */}
//               <div className="space-y-4">
//                 {/* Hero illustration PNG */}
//                 <div className="relative">
//                   <Image
//                     src="/images/internship-hero.png"
//                     alt="Interns collaborating on software projects at VAWE"
//                     width={640}
//                     height={420}
//                     className="w-full h-auto rounded-3xl shadow-xl border border-white/20 object-cover"
//                     priority
//                   />
//                 </div>

//                 <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 sm:p-6">
//                   <p className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase mb-2">
//                     Snapshot
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     {stats.map((stat) => (
//                       <div
//                         key={stat.label}
//                         className="rounded-2xl bg-white/5 border border-white/15 p-3 text-white"
//                       >
//                         <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/60">
//                           {stat.label}
//                         </p>
//                         <p className="text-xl font-bold mt-1">{stat.value}</p>
//                         <p className="text-[0.7rem] mt-1 text-white/80">{stat.detail}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="rounded-2xl bg-black/25 border border-white/10 p-4 text-xs text-white/85 flex flex-wrap gap-3">
//                   <span className="font-semibold text-white">Program type:</span>
//                   <span>Internship · Real-time Projects · Mentorship</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- MINI HIGHLIGHTS STRIP ---------- */}
//         <section className="py-6 bg-[var(--background)] border-b border-[color-mix(in oklab,var(--text)10%,transparent)]">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-[var(--button)]/10 flex items-center justify-center">
//                   <Laptop className="w-4 h-4 text-[var(--button)]" />
//                 </div>
//                 <div>
//                   <p className="font-semibold">Job-style workdays</p>
//                   <p
//                     className="text-[0.7rem] sm:text-xs"
//                     style={{ color: 'color-mix(in oklab, var(--text)75%, transparent)' }}
//                   >
//                     Stand-ups, boards, code reviews & deadlines.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-[var(--button)]/10 flex items-center justify-center">
//                   <LineChart className="w-4 h-4 text-[var(--button)]" />
//                 </div>
//                 <div>
//                   <p className="font-semibold">Visible progress</p>
//                   <p
//                     className="text-[0.7rem] sm:text-xs"
//                     style={{ color: 'color-mix(in oklab, var(--text)75%, transparent)' }}
//                   >
//                     Track growth week by week.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-[var(--button)]/10 flex items-center justify-center">
//                   <HeartHandshake className="w-4 h-4 text-[var(--button)]" />
//                 </div>
//                 <div>
//                   <p className="font-semibold">Humans, not numbers</p>
//                   <p
//                     className="text-[0.7rem] sm:text-xs"
//                     style={{ color: 'color-mix(in oklab, var(--text)75%, transparent)' }}
//                   >
//                     Mentors know your name and your goals.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- REAL-TIME EXPERIENCE SECTION ---------- */}
//         <section id="realtime-experience" className="py-16 bg-[var(--background-alt)]/25">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="grid lg:grid-cols-2 gap-10 items-start">
//               <div className="space-y-4">
//                 <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                   Real-time Work
//                 </p>
//                 <h2 className="text-3xl font-bold">
//                   Learn inside a real software solution engine.
//                 </h2>
//                 <p
//                   className="text-sm sm:text-base"
//                   style={{ color: 'color-mix(in oklab, var(--text)80%, transparent)' }}
//                 >
//                   VAWE Global Tech builds software for clients. You learn in the same environment —
//                   rituals, tools and expectations tuned to industry.
//                 </p>

//                 {/* Real-time work illustration PNG */}
//                 <div className="mt-3">
//                   <Image
//                     src="/images/realtime-projects.png"
//                     alt="Interns working on real-time software modules"
//                     width={520}
//                     height={320}
//                     className="w-full h-auto rounded-2xl border border-[color-mix(in oklab,var(--text)10%,transparent)] object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {realTimeExperience.map((item) => (
//                   <div
//                     key={item.title}
//                     className="relative rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-[color-mix(in oklab,var(--text)10%,transparent)]"
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--button)]/10 text-[var(--button)] text-xs font-semibold">
//                         {item.label}
//                       </div>
//                       <div>
//                         <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
//                         <p
//                           className="mt-1 text-xs sm:text-sm"
//                           style={{ color: textTone.secondary }}
//                         >
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- PROGRAM BLUEPRINT SECTION ---------- */}
//         <section id="program-blueprint" className="py-16 bg-[var(--background)]">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="grid lg:grid-cols-[minmax(0,0.85fr),minmax(0,1.15fr)] gap-10 items-start">
//               <div className="space-y-6">
//                 <div className="space-y-3">
//                   <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                     12-week blueprint
//                   </p>
//                   <h2 className="text-3xl font-bold">Clarity on what you build every week.</h2>
//                   <p
//                     className="text-sm sm:text-base"
//                     style={{ color: textTone.primary }}
//                   >
//                     Every learner follows the same rigor VAWE Global Tech demands from its delivery
//                     teams—clear rituals, documented proof of work and measurable career KPIs.
//                   </p>
//                 </div>
//                 <Button
//                   href="/enrollment"
//                   size="md"
//                   variant="secondary"
//                   className="bg-[var(--button)] text-white hover:bg-[var(--button-hover)] w-full sm:w-auto"
//                 >
//                   Download detailed schedule
//                 </Button>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {programSignals.map((signal) => (
//                     <div
//                       key={signal.title}
//                       className="rounded-2xl border border-[color-mix(in oklab,var(--text)10%,transparent)] bg-white/5 p-4 flex gap-3 items-start"
//                     >
//                       <div className="w-10 h-10 rounded-2xl bg-[var(--button)]/10 flex items-center justify-center">
//                         <signal.Icon className="w-5 h-5 text-[var(--button)]" />
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-semibold">{signal.title}</h3>
//                         <p
//                           className="text-xs sm:text-sm"
//                           style={{ color: textTone.secondary }}
//                         >
//                           {signal.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 {programPhases.map((phase) => (
//                   <div
//                     key={phase.title}
//                     className="rounded-3xl bg-white p-5 sm:p-6 shadow-sm border border-[color-mix(in oklab,var(--text)10%,transparent)]"
//                   >
//                     <div className="flex items-start justify-between gap-4">
//                       <div>
//                         <p
//                           className="text-[0.65rem] uppercase tracking-[0.3em]"
//                           style={{ color: textTone.subtle }}
//                         >
//                           {phase.label}
//                         </p>
//                         <h3 className="text-lg sm:text-xl font-semibold">{phase.title}</h3>
//                       </div>
//                       <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[var(--button)]/10 text-[var(--button)]">
//                         {phase.duration}
//                       </span>
//                     </div>
//                     <ul
//                       className="mt-4 space-y-3 text-sm"
//                       style={{ color: textTone.primary }}
//                     >
//                       {phase.outcomes.map((outcome) => (
//                         <li key={outcome} className="flex gap-3 items-start">
//                           <span className="mt-1 h-2 w-2 rounded-full bg-[var(--button)] flex-shrink-0" />
//                           {outcome}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- INTERNSHIP TRACKS SECTION ---------- */}
//         <section id="internship-tracks" className="py-18 py-16">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="max-w-2xl space-y-3">
//               <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                 Internship Tracks
//               </p>
//               <h2 className="text-3xl font-bold">Pick your lane. We’ll help you drive it.</h2>
//               <p
//                 className="text-sm sm:text-base"
//                 style={{ color: textTone.primary }}
//               >
//                 Every track ends with one simple outcome: “Yes, I can do this job.”
//               </p>
//             </div>

//             <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//               {internshipTracks.map((track) => (
//                 <Card
//                   key={track.title}
//                   hoverable
//                   accentColor={track.accent}
//                   className="h-full flex flex-col"
//                 >
//                   <CardHeader className="pb-3">
//                     <div
//                       className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-md"
//                       style={{ backgroundColor: track.accent }}
//                     >
//                       <track.Icon className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-xl font-semibold">{track.title}</h3>
//                     <p
//                       className="mt-1 text-sm"
//                       style={{ color: textTone.secondary }}
//                     >
//                       {track.summary}
//                     </p>
//                     <p
//                       className="mt-2 inline-flex text-[0.7rem] rounded-full px-3 py-1 border"
//                       style={{
//                         borderColor: 'color-mix(in oklab,var(--text)20%,transparent)',
//                         color: textTone.secondary,
//                       }}
//                     >
//                       {track.meta}
//                     </p>
//                   </CardHeader>
//                   <CardBody className="pt-1 flex-1 flex flex-col justify-between">
//                     <ul
//                       className="space-y-2 text-sm"
//                       style={{ color: textTone.primary }}
//                     >
//                       {track.points.map((point) => (
//                         <li key={point} className="flex items-start gap-2">
//                           <span
//                             className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
//                             style={{ backgroundColor: track.accent }}
//                           />
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </CardBody>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ---------- MENTORSHIP & SUPPORT SECTION ---------- */}
//         <section id="mentorship" className="py-16 bg-[var(--background-alt)]/20">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
//               <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                 Mentorship & Rituals
//               </p>
//             <h2 className="text-3xl font-bold">Support that feels like working inside a tech team.</h2>
//               <p
//                 className="text-sm sm:text-base"
//                 style={{ color: textTone.primary }}
//               >
//                 From 1:1 pods to on-call help, you are never building alone. Each ritual mirrors how
//                 high-performing squads operate.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {mentorshipStack.map((item) => (
//                 <Card key={item.title} hoverable className="h-full">
//                   <CardHeader className="space-y-2">
//                     <div className="w-12 h-12 rounded-2xl bg-[var(--button)]/10 flex items-center justify-center">
//                       <item.Icon className="w-6 h-6 text-[var(--button)]" />
//                     </div>
//                     <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
//                     <p
//                       className="text-sm"
//                       style={{ color: textTone.secondary }}
//                     >
//                       {item.description}
//                     </p>
//                     <p
//                       className="text-xs uppercase tracking-[0.18em]"
//                       style={{ color: textTone.subtle }}
//                     >
//                       {item.detail}
//                     </p>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ---------- CULTURE SECTION ---------- */}
//         <section id="work-culture" className="py-16 bg-[var(--background-alt)]/30">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="grid lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] gap-10 items-start">
//               <div className="space-y-4">
//                 <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                   Culture & Environment
//                 </p>
//                 <h2 className="text-3xl font-bold">A place where questions are welcome.</h2>
//                 <p
//                   className="text-sm sm:text-base"
//                   style={{ color: textTone.primary }}
//                 >
//                   Learn like a student. Work like a professional. Be treated like a teammate.
//                 </p>
//                 <Button
//                   href="/contact"
//                   className="bg-gradient-to-r from-[#F57124] to-[#FBA426] text-white"
//                   variant="secondary"
//                 >
//                   Schedule a Virtual Tour
//                 </Button>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {cultureHighlights.map((item) => (
//                   <Card key={item.title} hoverable>
//                     <CardHeader>
//                       <div className="w-10 h-10 rounded-2xl bg-[var(--button)]/10 flex items-center justify-center mb-3">
//                         <item.Icon className="w-5 h-5 text-[var(--button)]" />
//                       </div>
//                       <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
//                       <p
//                         className="mt-1 text-sm"
//                         style={{ color: textTone.secondary }}
//                       >
//                         {item.description}
//                       </p>
//                     </CardHeader>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- SUCCESS STORIES SECTION ---------- */}
//         <section id="success-stories" className="py-16 bg-[var(--background)]">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="max-w-2xl space-y-3">
//               <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                 Success Stories
//               </p>
//               <h2 className="text-3xl font-bold">Learners who turned practice into outcomes.</h2>
//               <p
//                 className="text-sm sm:text-base"
//                 style={{ color: textTone.primary }}
//               >
//                 Proof that real work, mentorship and clarity translate into confident storytelling
//                 across product, SaaS and services teams.
//               </p>
//             </div>
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {testimonials.map((story) => (
//                 <div
//                   key={story.name}
//                   className="rounded-3xl bg-white shadow-lg border border-[color-mix(in oklab,var(--text)12%,transparent)] p-6 sm:p-7 flex flex-col gap-4"
//                 >
//                   <p
//                     className="text-base sm:text-lg font-medium leading-relaxed"
//                     style={{ color: textTone.primary }}
//                   >
//                     “{story.quote}”
//                   </p>
//                   <div className="space-y-1">
//                     <p className="font-semibold text-sm sm:text-base">{story.name}</p>
//                     <p
//                       className="text-xs uppercase tracking-[0.2em]"
//                       style={{ color: textTone.subtle }}
//                     >
//                       {story.badge}
//                     </p>
//                     <p
//                       className="text-sm"
//                       style={{ color: textTone.subtle }}
//                     >
//                       {story.role}
//                     </p>
//                   </div>
//                   <div className="inline-flex px-3 py-1 rounded-full bg-[var(--button)]/10 text-[var(--button)] text-xs font-semibold w-fit">
//                     {story.result}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ---------- WHO IS THIS FOR SECTION ---------- */}
//         <section id="who-is-this-for" className="py-16">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="grid lg:grid-cols-2 gap-10 items-start">
//               <div className="space-y-3">
//                 <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                   Who It’s For
//                 </p>
//                 <h2 className="text-3xl font-bold">If this sounds like you, VAWE fits you.</h2>
//                 <p
//                   className="text-sm sm:text-base"
//                   style={{ color: textTone.primary }}
//                 >
//                   We are not for “time pass”. We are for people who want to move.
//                 </p>
//               </div>

//               <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
//                 <ul className="space-y-3">
//                   {whoIsThisFor.map((line) => (
//                     <li key={line} className="flex gap-3 items-start">
//                       <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[var(--button)] flex-shrink-0" />
//                       <p
//                         className="text-sm sm:text-base"
//                         style={{ color: textTone.primary }}
//                       >
//                         {line}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- CAREER FLYWHEEL SECTION ---------- */}
//         <section id="career-growth" className="py-16 bg-[var(--background-alt)]/20">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
//               <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                 Career Flywheel
//               </p>
//               <h2 className="text-3xl font-bold">A simple journey from learner to hire.</h2>
//               <p
//                 className="text-sm sm:text-base"
//                 style={{ color: textTone.primary }}
//               >
//                 Four clear stages. No confusion, only next steps.
//               </p>
//             </div>

//             <div className="relative">
//               <div className="hidden md:block absolute inset-x-4 top-9 h-px bg-gradient-to-r from-transparent via-[color-mix(in oklab,var(--text)15%,transparent)] to-transparent" />
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
//                 {careerFlywheel.map((stage, index) => (
//                   <div
//                     key={stage.title}
//                     className="rounded-3xl bg-white p-5 shadow-sm border border-[color-mix(in oklab,var(--text)10%,transparent)]"
//                   >
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--button)]/10 text-[var(--button)] text-xs font-semibold">
//                         {index + 1}
//                       </span>
//                       <h3 className="text-base font-semibold">{stage.title}</h3>
//                     </div>
//                     <p
//                       className="text-xs uppercase tracking-[0.18em] mb-2"
//                       style={{ color: textTone.subtle }}
//                     >
//                       {stage.tagline}
//                     </p>
//                     <p
//                       className="text-sm"
//                       style={{ color: textTone.secondary }}
//                     >
//                       {stage.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- READINESS STACK + FAQ SECTION ---------- */}
//         <section id="readiness-stack" className="py-16 bg-[var(--background-alt)]/35">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="grid lg:grid-cols-2 gap-10 items-start">
//               <div className="space-y-4">
//                 <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                   Readiness Stack
//                 </p>
//                 <h2 className="text-3xl font-bold">Signals mentors recognize instantly.</h2>
//                 <p
//                   className="text-sm sm:text-base"
//                   style={{ color: textTone.primary }}
//                 >
//                   We don’t just say “trained”. We show “ready”.
//                 </p>

//                 <div className="space-y-5 pt-2">
//                   {successSignals.map((signal) => (
//                     <div key={signal.title} className="flex gap-4">
//                       <div className="w-12 h-12 rounded-2xl bg-[var(--button)]/15 text-[var(--button)] flex items-center justify-center">
//                         <signal.Icon className="w-6 h-6" />
//                       </div>
//                       <div>
//                         <h3 className="text-base sm:text-lg font-semibold">{signal.title}</h3>
//                         <p
//                           className="text-sm"
//                           style={{ color: textTone.secondary }}
//                         >
//                           {signal.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
//                 <div className="space-y-1">
//                   <h3 className="text-xl font-semibold">FAQs</h3>
//                   <p
//                     className="text-xs sm:text-sm"
//                     style={{ color: textTone.subtle }}
//                   >
//                     Quick answers before you click “Apply”.
//                   </p>
//                 </div>
//                 <div className="space-y-4">
//                   {faqs.map((faq) => (
//                     <details
//                       key={faq.question}
//                       className="group border border-[color-mix(in oklab,var(--text)15%,transparent)] rounded-2xl p-4"
//                     >
//                       <summary className="flex items-center justify-between cursor-pointer list-none">
//                         <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
//                         <span className="text-sm text-[var(--button-hover)] group-open:rotate-45 transition-transform">
//                           +
//                         </span>
//                       </summary>
//                       <p
//                         className="mt-2 text-sm"
//                         style={{ color: textTone.secondary }}
//                       >
//                         {faq.answer}
//                       </p>
//                     </details>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- APPLICATION FLOW SECTION ---------- */}
//         <section id="application-flow" className="py-16">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="grid lg:grid-cols-[minmax(0,0.85fr),minmax(0,1.15fr)] gap-10 items-start">
//               <div className="space-y-4">
//                 <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--button-hover)] font-semibold">
//                   Application Journey
//                 </p>
//                 <h2 className="text-3xl font-bold">Four steps between you and day-one impact.</h2>
//                 <p
//                   className="text-sm sm:text-base"
//                   style={{ color: textTone.primary }}
//                 >
//                   We keep admissions conversational and practical. Share your intent, experience a
//                   diagnostic sprint and lock your seat once you are confident.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <Button
//                     href="/enrollment"
//                     size="md"
//                     className="bg-[var(--button)] text-white hover:bg-[var(--button-hover)]"
//                   >
//                     Start application
//                   </Button>
//                   <Button
//                     href="/contact"
//                     variant="outline"
//                     size="md"
//                     className="border-[var(--button)] text-[var(--button)] hover:bg-[var(--button)]/10"
//                   >
//                     Talk to admissions
//                   </Button>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 {applicationFlow.map((step) => (
//                   <div
//                     key={step.title}
//                     className="rounded-3xl border border-[color-mix(in oklab,var(--text)12%,transparent)] bg-white/5 p-5 sm:p-6"
//                   >
//                     <div className="flex items-center justify-between gap-4 flex-wrap">
//                       <div className="flex items-center gap-4">
//                         <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--button)]/10 text-[var(--button)] font-semibold text-base">
//                           {step.step}
//                         </span>
//                         <div>
//                           <h3 className="text-base sm:text-lg font-semibold">{step.title}</h3>
//                           <p
//                             className="text-sm"
//                             style={{ color: textTone.secondary }}
//                           >
//                             {step.description}
//                           </p>
//                         </div>
//                       </div>
//                       <span
//                         className="text-xs font-semibold uppercase tracking-[0.2em]"
//                         style={{ color: textTone.subtle }}
//                       >
//                         {step.helper}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ---------- FINAL CTA SECTION ---------- */}
//         <section id="apply" className="py-18 py-16">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#0ba8d9] to-[#064ea6] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
//               <div className="space-y-3 max-w-xl">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[0.7rem] uppercase tracking-[0.2em]">
//                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
//                   <span>Next Cohort Now Forming</span>
//                 </div>
//                 <h2 className="text-3xl font-bold leading-tight">
//                   Start your VAWE journey with real-time work from day one.
//                 </h2>
//                 <p className="text-sm sm:text-base text-white/85">
//                   Limited seats. Join the next batch, learn with mentors from VAWE Global Tech and
//                   share your proof of work with confidence.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
//                 {/* CTA badge illustration PNG */}
//                 <div className="mb-3 sm:mb-0 sm:mr-3 flex justify-center sm:justify-end">
//                   <Image
//                     src="/images/cta-badge.png"
//                     alt="Internship badge illustration"
//                     width={180}
//                     height={180}
//                     className="w-24 sm:w-32 h-auto drop-shadow-lg"
//                   />
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <Button
//                     href="/enrollment"
//                     size="lg"
//                     variant="secondary"
//                     className="bg-white text-[#064ea6] hover:bg-white/90"
//                   >
//                     Start Application
//                   </Button>
//                   <Button
//                     href="tel:+918885103333"
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10"
//                   >
//                     Call 8885103333
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </main>
//     </>
//   );
// }
