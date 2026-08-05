import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Instagram, Mail, Sparkles, Users } from "lucide-react";

import { AssetImage } from "@/components/AssetImage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { events } from "@/data/events";
import { faqs } from "@/data/faq";
import { chapter, domains, socials } from "@/data/site";
import { teams } from "@/data/team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home | VVCE ACM Student Chapter" },
      { name: "description", content: chapter.purpose },
      { property: "og:title", content: "VVCE ACM Student Chapter" },
      { property: "og:description", content: chapter.purpose },
    ],
  }),
  component: Index,
});

function Marquee() {
  const items = [...domains, ...domains];
  return (
    <div className="overflow-hidden border-y border-border/70 bg-card/50 py-3">
      <div className="marquee-track">
        {items.map(({ label, Icon }, i) => (
          <span
            key={i}
            className="mx-6 inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Icon className="h-4 w-4 text-primary" />
            {label}
            <span className="ml-6 text-primary/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const latestEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-14">
        <div className="tide pointer-events-none absolute inset-0 opacity-70" />
        <div className="paper-grid pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative mx-auto grid w-[min(1200px,94vw)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> VVCE, Mysuru
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-extrabold leading-[0.92]">
              Learn it.
              <br />
              Build it.
              <br />
              <span className="text-primary">Teach</span> it.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {chapter.tagline} {chapter.purpose}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore our events <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center rounded-full border border-primary/25 bg-card/70 px-6 py-3 text-sm font-semibold backdrop-blur"
              >
                Meet the teams
              </Link>
            </div>
          </div>

          {/* Orbit dial */}
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="absolute inset-[14%] rounded-full border border-primary/25" />
            <div className="absolute inset-[28%] rounded-full border border-primary/30" />
            <div className="float-slow absolute inset-[34%] grid place-items-center rounded-full bg-primary/90 text-center">
              <div>
                <p className="font-display text-3xl font-extrabold text-primary-foreground">ACM</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
                  VVCE
                </p>
              </div>
            </div>
            {domains.map(({ label, Icon }, i) => {
              const a = (i / domains.length) * Math.PI * 2 - Math.PI / 2;
              return (
                <div
                  key={label}
                  className="glass-card absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold"
                  style={{
                    left: `${50 + Math.cos(a) * 46}%`,
                    top: `${50 + Math.sin(a) * 46}%`,
                  }}
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ABOUT — bento */}
      <section id="about" className="relative px-6 py-24">
        <div className="mx-auto w-[min(1200px,94vw)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold">
              About the chapter
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Chartered by the ACM, at Vidyavardhaka College of Engineering, Mysuru.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 md:grid-rows-2">
            <article className="glass-card relative flex flex-col overflow-hidden rounded-3xl p-8 md:col-span-2 md:row-span-2">
              <div className="tide pointer-events-none absolute inset-0 opacity-45" />
              <div className="relative flex flex-1 flex-col">
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-primary/25 bg-card/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                  <Users className="h-3.5 w-3.5" /> Chartered by the ACM
                </span>
                <h3 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-extrabold leading-[1.05]">
                  Advancing computing
                  <br />
                  <span className="text-primary">as a science</span> and a profession.
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {chapter.purpose} We have been doing it out of {chapter.college} since 2018 —
                  through workshops, hackathons, conferences and school outreach, run by students
                  for students.
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {domains.map(({ label, Icon }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs font-semibold"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>

                <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-border/70 pt-8">
                  {[
                    [`${events.length}`, "Events"],
                    [`${teams.length}`, "Councils"],
                    ["2018", "Since"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <dt className="font-display text-3xl font-extrabold text-primary">{n}</dt>
                      <dd className="text-xs uppercase tracking-widest text-muted-foreground">
                        {l}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>

            <article className="glass-card flex flex-col rounded-3xl p-7">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-xl font-bold">Open to everyone</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Membership is open to ACM members and non-members alike, and is never restricted by
                race, creed, age, gender, disability, nationality, sexual orientation, economic
                status, veteran status or parenthood.
              </p>
              <Link
                to="/bylaws"
                hash="article-iii"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Article III <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="glass-card flex flex-col rounded-3xl p-7">
              <Compass className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-xl font-bold">What we promote</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Greater interest in the science, design, development, construction, languages,
                management and applications of modern computing — and a way for people who care
                about it to find each other.
              </p>
              <Link
                to="/bylaws"
                hash="article-ii"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Article II <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto w-[min(1200px,94vw)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold">
              Events and activities
            </h2>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {latestEvents.map((e) => (
              <article key={e.title + e.date} className="glass-card overflow-hidden rounded-3xl">
                <AssetImage
                  src={e.image}
                  alt={e.title}
                  hint={e.image.replace("/Assets/", "")}
                  rounded="rounded-none"
                  className="aspect-[16/10] w-full"
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {e.date}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative px-6 pb-24">
        <div className="mx-auto w-[min(900px,94vw)]">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> FAQ
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold">
              Questions, answered.
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f) => (
              <AccordionItem key={f.question} value={f.question} className="border-border/70">
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:no-underline md:text-lg">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-sm leading-relaxed text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONNECT WITH US (replaces "Come build something with us") */}
      <section id="connect" className="scroll-mt-28 px-6 pb-24">
        <div className="glass-card tide relative mx-auto w-[min(1200px,94vw)] overflow-hidden rounded-[2rem] px-8 py-16 text-center">
          <h2 className="relative font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold">
            Connect with us.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Questions, collaborations, or want to register as a member? Write to the chapter or find
            us on Instagram — we answer on both.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={socials.email}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> {chapter.email}
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-7 py-3 text-sm font-semibold backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              <Instagram className="h-4 w-4" /> @vvce_acm
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
