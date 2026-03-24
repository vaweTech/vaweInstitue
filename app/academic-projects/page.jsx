"use client";

import { createElement, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  FileText,
  Globe,
  GraduationCap,
  HelpCircle,
  Layers,
  Mail,
  Phone,
  Presentation,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const resolveIcon = (maybeIcon) => {
    const candidate = typeof maybeIcon === "function" ? maybeIcon : maybeIcon?.default;
    return typeof candidate === "function" ? candidate : Sparkles;
  };

  const phone = "+91 8885103333";
  const email = "vawe.info@gmail.com";

  const stats = useMemo(
    () => [
      { value: "500+", label: "Projects Delivered", Icon: Briefcase },
      { value: "1000+", label: "Students Supported", Icon: Users },
      { value: "25+", label: "Project Domains", Icon: Layers },
      { value: "95%", label: "Satisfaction Rate", Icon: Star },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "Web Development",
        desc: "Responsive websites, dashboards, admin panels and real-time apps with modern stacks.",
        Icon: Globe,
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "AI & ML Projects",
        desc: "Model training, evaluation, datasets, and real-world use cases with clear explanations.",
        Icon: Brain,
        color: "from-violet-500 to-purple-600",
      },
      {
        title: "Power BI Dashboards",
        desc: "Interactive reports, DAX, data modeling, and insights storytelling for viva-ready demos.",
        Icon: BarChart3,
        color: "from-amber-500 to-orange-600",
      },
      {
        title: "Data Science",
        desc: "Data cleaning, EDA, visualization, ML pipelines and presentation-ready insights.",
        Icon: Database,
        color: "from-emerald-500 to-teal-600",
      },
      {
        title: "Python / Java Projects",
        desc: "Core logic + backend APIs + database integration with full source code and guide.",
        Icon: Code2,
        color: "from-cyan-500 to-blue-600",
      },
      {
        title: "Full Stack Development",
        desc: "End-to-end projects with frontend + backend + database + deployment support.",
        Icon: Layers,
        color: "from-rose-500 to-pink-600",
      },
      {
        title: "IEEE Projects",
        desc: "Research/IEEE-based topics with implementation, paper mapping and documentation help.",
        Icon: BadgeCheck,
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "Documentation & Viva",
        desc: "PPT, report, synopsis, diagrams, source code explanation and viva prep sessions.",
        Icon: FileText,
        color: "from-fuchsia-500 to-purple-600",
      },
    ],
    []
  );

  const branches = useMemo(
    () => [
      "CSE", "IT", "ECE", "EEE", "Mechanical", "Civil",
      "MBA", "MCA", "BCA", "B.Sc / M.Sc", "Diploma",
      "All Engineering & Non-Engineering",
    ],
    []
  );

  const categories = useMemo(
    () => [
      { title: "Mini Projects", Icon: Blocks, desc: "Short-term projects for quick learning and internal assessments." },
      { title: "Major Projects", Icon: Building2, desc: "End-to-end projects with modules, database and deployment support." },
      { title: "Final Year Projects", Icon: GraduationCap, desc: "Complete academic projects for B.Tech/M.Tech/B.Sc/MCA/MBA." },
      { title: "Real-Time Projects", Icon: Briefcase, desc: "Industry-style projects with sprints, reviews and demos." },
      { title: "Internship Projects", Icon: Sparkles, desc: "Academic internships + project guidance with mentoring." },
      { title: "Capstone Projects", Icon: Layers, desc: "Portfolio-ready capstones that improve job interview confidence." },
      { title: "Research / IEEE Projects", Icon: BookOpen, desc: "Research-focused builds mapped to IEEE papers and methods." },
    ],
    []
  );

  const whyChoose = useMemo(
    () => [
      { title: "Real-time development", Icon: Briefcase, desc: "We build projects like a product team: clear modules and timelines." },
      { title: "Latest technologies", Icon: Cpu, desc: "Modern stacks and tools used in companies—kept simple for students." },
      { title: "Full source code", Icon: Code2, desc: "Clean source code included with setup steps and walkthrough." },
      { title: "Complete documentation", Icon: FileText, desc: "Synopsis, report, diagrams, and project flow explained." },
      { title: "PPT & report support", Icon: Presentation, desc: "Presentation design + story so you can explain confidently." },
      { title: "Viva preparation", Icon: HelpCircle, desc: "One-to-one explanation + common viva questions and answers." },
      { title: "Customizations", Icon: Sparkles, desc: "Topic, modules and features can be tailored to your requirement." },
      { title: "Fast delivery", Icon: Zap, desc: "Quick timelines with quality checks and revision support." },
      { title: "Online + offline support", Icon: Phone, desc: "Support through calls and in-person guidance (if available)." },
    ],
    []
  );

  const technologies = useMemo(
    () => [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Harsha",
        role: "B.Tech, CSE",
        rating: 5,
        quote: "They explained everything from dataset to model results clearly. My viva went smoothly and my guide appreciated the documentation.",
      },
      {
        name: "Sneha",
        role: "MCA",
        rating: 5,
        quote: "Got full stack project with source code, PPT and report. Support was fast and very helpful before submission.",
      },
      {
        name: "Ravi",
        role: "MBA",
        rating: 5,
        quote: "Power BI dashboard looked professional and they taught me how to present insights. Great guidance and timely delivery.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      { q: "Do you provide source code?", a: "Yes. You will get complete source code along with setup steps and explanation." },
      { q: "Can the project be customized?", a: "Yes. We can customize modules, features, datasets, UI, and outputs based on your requirement." },
      { q: "Do you support all branches and departments?", a: "Yes. We support engineering and non-engineering branches for Bachelor's and Master's degree students." },
      { q: "Do you provide documentation and PPT?", a: "Yes. We provide report, PPT, synopsis and diagrams as required by the college format." },
      { q: "Is viva support available?", a: "Yes. We provide project explanation sessions and common viva questions + answers." },
      { q: "Do you offer internships + project guidance?", a: "Yes. We provide academic internships with guided project work and mentoring." },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/60 via-indigo-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-100/40 to-transparent rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-sm text-blue-700 font-medium">
                <ShieldCheck className="h-4 w-4" />
                <span>Source Code + PPT + Report + Viva Support</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900">
                Final Year{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Academic Projects
                </span>{" "}
                for All Branches
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                Premium project guidance from topic selection to final submission — development, documentation, PPT and viva preparation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
                >
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  View Domains
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Mini Projects", "Major Projects", "IEEE Projects", "Internship Projects"].map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-gray-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/40 via-indigo-200/20 to-violet-200/30 blur-2xl" />
              <div className="relative rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-xl shadow-gray-200/50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-bold text-gray-900">Project Dashboard</p>
                    <p className="text-sm text-gray-500 mt-0.5">Quick snapshot of outcomes</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {stats.map((s) => {
                    const Icon = resolveIcon(s.Icon);
                    return (
                    <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4 hover:bg-blue-50/50 hover:border-blue-100 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        {createElement(Icon, { className: "h-4 w-4 text-blue-500" })}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                    </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                      <Cpu className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Domains we cover</p>
                      <p className="text-xs text-gray-500">Web, AI/ML, Data, Cloud, Cyber Security, IoT, Mobile Apps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = resolveIcon(s.Icon);
              return (
              <div key={s.label} className="group flex items-center gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-5 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition">
                  {createElement(Icon, { className: "h-6 w-6 text-blue-600" })}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Project Domains</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Premium services for your projects
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Choose your domain and get end-to-end guidance — from requirement to final submission with confident presentation.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = resolveIcon(s.Icon);
              return (
              <div key={s.title} className="group rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-sm`}>
                  {createElement(Icon, { className: "h-6 w-6 text-white" })}
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-blue-600">
                  <span>Source Code + PPT + Report</span>
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section id="branches" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Branches & Departments</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">We support all branches</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Engineering or non-engineering, Bachelor&apos;s or Master&apos;s — we help you choose a suitable domain and complete your project with proper documentation and viva support.
              </p>
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Bachelor&apos;s & Master&apos;s degrees</p>
                    <p className="text-sm text-gray-500">B.Tech, M.Tech, B.Sc, M.Sc, MCA, MBA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-7">
              <div className="flex flex-wrap gap-2">
                {branches.map((b) => (
                  <span key={b} className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default">
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Mini + Major", "IEEE + Research", "Internship Projects", "Documentation"].map((x) => (
                  <div key={x} className="rounded-xl bg-white border border-gray-200 px-4 py-3 flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 sm:py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Project Types</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Choose the right category</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Mini projects for quick evaluation, major projects for full submission, internship projects for practical exposure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const Icon = resolveIcon(c.Icon);
              return (
              <div key={c.title} className="group flex items-start gap-4 rounded-2xl bg-white border border-gray-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition">
                  {createElement(Icon, { className: "h-6 w-6 text-blue-600" })}
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{c.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Why Choose Us</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Premium guidance. Clear outcomes.</h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                We focus on quality and student confidence — so you can explain your project properly in reviews and viva.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 shrink-0">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                  <Star className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Viva-ready delivery</p>
                  <p className="text-xs text-gray-500">Explanation + Q&A support included</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => {
              const Icon = resolveIcon(w.Icon);
              return (
              <div key={w.title} className="group flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-5 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm group-hover:bg-blue-100 group-hover:border-blue-200 transition">
                  {createElement(Icon, { className: "h-5 w-5 text-blue-600" })}
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{w.title}</p>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{w.desc}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-16 sm:py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Technologies</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Modern tech stacks we use</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              The right technology based on your branch, complexity and college requirement — easy to explain and present.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((t) => (
              <div key={t.name} className="group flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-200 px-4 py-5 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">Testimonials</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Students love the clarity & support</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Real feedback from students after project delivery, explanation sessions and viva support.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-0.5 text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-gray-200">
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Quick answers</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Common questions about source code, customization, documentation and viva support.
              </p>
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 mt-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Need help choosing a topic?</p>
                    <p className="text-xs text-gray-500">We suggest topics based on your branch & interests.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((f, idx) => (
                <details key={f.q} className="group rounded-xl bg-white border border-gray-200 p-5 hover:border-blue-200 transition-all duration-300" open={idx === 0}>
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="text-sm font-semibold text-gray-900">{f.q}</span>
                    <span className="text-blue-500 group-open:rotate-45 transition-transform text-lg font-light shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA + Contact */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-start">
              <div className="space-y-5">
                <p className="text-sm font-semibold tracking-widest uppercase text-white/70">Get Started</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Need a Final Year Project? Let&apos;s Build It Together
                </h2>
                <p className="text-base text-white/80 leading-relaxed max-w-lg">
                  Share your branch, domain interest and deadline. We&apos;ll suggest a suitable topic and the best tech stack, then guide you from start to submission.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href={`tel:${phone.replace(/\s|\+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-7 py-3.5 text-sm font-semibold hover:bg-gray-100 transition shadow-lg"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Link>
                  <Link
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/20 transition"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-6">
                <p className="text-base font-bold text-white">Contact details</p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/90">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/90">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>{email}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-white/10 border border-white/15 p-4">
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-wide">What you get</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/80">
                    {["Source Code", "Report + PPT", "Documentation", "Explanation", "Viva Q&A", "Revisions"].map((x) => (
                      <div key={x} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300 shrink-0" />
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-400">
            <div>&copy; {new Date().getFullYear()} VAWE Institute. All rights reserved.</div>
            <div className="flex flex-wrap gap-4">
              <Link href="#services" className="hover:text-gray-600 transition">Domains</Link>
              <Link href="#faq" className="hover:text-gray-600 transition">FAQ</Link>
              <Link href="#contact" className="hover:text-gray-600 transition">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
