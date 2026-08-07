"use client";

import { useEffect, useMemo, useState } from "react";

type ShowcaseProject = {
  title: string;
  description: string;
  category: string;
  tools: string[];
  year: string;
  gradient: string;
  url: string;
  status?: string;
  duration?: string;
};

type Tone = {
  eyebrow: string;
  button: string;
  buttonHover: string;
  activeCard: string;
  listButton: string;
  chip: string;
  accent: string;
};

type ProjectShowcaseProps = {
  eyebrow: string;
  heading: string;
  description: string;
  projects: ShowcaseProject[];
  tone: Tone;
  buttonLabel: string;
  listHeading: string;
  metaLabel: string;
};

export default function ProjectShowcase({
  eyebrow,
  heading,
  description,
  projects,
  tone,
  buttonLabel,
  listHeading,
  metaLabel,
}: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const featuredProject = useMemo(() => projects[activeIndex] ?? projects[0], [activeIndex, projects]);

  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = window.setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, projects.length]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const metaValue = featuredProject.status ?? featuredProject.duration ?? featuredProject.year;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#fef3c7_100%)] px-6 py-24 text-slate-900 dark:bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#111827_100%)] dark:text-white sm:px-8 lg:px-12">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-sm font-medium shadow-sm backdrop-blur ${tone.eyebrow}`}>
              {eyebrow}
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{heading}</h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{description}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-xl shadow-orange-500/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Spotlight
            </p>
            <p className="mt-2 text-xl font-semibold">{featuredProject.title}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{featuredProject.category}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            className="group overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 text-white shadow-2xl shadow-slate-950/20 transition duration-500 hover:-translate-y-1 hover:scale-[1.01]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="h-72 sm:h-80 transition duration-500 group-hover:scale-105" style={{ background: featuredProject.gradient }} />
            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                  {featuredProject.category}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone.chip}`}>
                  {featuredProject.year}
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">{featuredProject.title}</h2>
                <p className="text-sm leading-7 text-slate-300">{featuredProject.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-slate-100">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-slate-400">{metaLabel}: {metaValue}</span>
                <a
                  href={featuredProject.url}
                  className={`rounded-full px-4 py-2 text-sm font-semibold text-white transition ${tone.button} ${tone.buttonHover}`}
                >
                  {buttonLabel}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{listHeading}</h3>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className={`rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition ${tone.listButton} dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200`}
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className={`rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition ${tone.listButton} dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200`}
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={project.title}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-2xl border p-4 text-left transition duration-300 ${isActive ? tone.activeCard : `border-slate-200 bg-white/80 hover:-translate-y-1 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/70`}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{project.title}</p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{project.category}</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {project.year}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
