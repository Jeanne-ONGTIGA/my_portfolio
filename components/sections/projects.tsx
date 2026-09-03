'use client';

import { useState } from 'react';
import { getProjects } from '@/lib/translations';
import { Reveal } from '@/components/reveal';
import { LuExternalLink, LuGithub, LuArrowUpRight } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import { useI18n } from '@/components/language-provider';

export function Projects() {
  const { lang, t } = useI18n();
  const projects = getProjects(lang);

  const categoryList = Array.from(new Set(projects.map((p) => p.category)));
  const categories = [t.ui.projects.all, ...categoryList];
  const [filter, setFilter] = useState(t.ui.projects.all);

  const filtered =
    filter === t.ui.projects.all ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.ui.projects.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ui.projects.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.ui.projects.subtitle}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                  filter === cat
                    ? 'bg-primary text-primary-foreground shadow-float'
                    : 'border border-border/60 bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={((i % 3) + 1) as 1 | 2 | 3} variant="scale">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-float-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {t.ui.projects.featured}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex items-center justify-between font-display text-lg font-semibold">
                    {project.title}
                    <LuArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      <LuExternalLink className="h-4 w-4" />
                      {t.ui.projects.demo}
                    </a>
                    <span className="h-3 w-px bg-border" />
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <LuGithub className="h-4 w-4" />
                      {t.ui.projects.code}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
