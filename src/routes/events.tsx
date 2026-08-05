import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { useMemo, useState } from "react";

import { AssetImage } from "@/components/AssetImage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { events, type ChapterEvent } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | VVCE ACM Student Chapter" },
      {
        name: "description",
        content:
          "Every workshop, hackathon, conference, colloquium and outreach drive conducted and attended by the VVCE ACM Student Chapter since 2018.",
      },
    ],
  }),
  component: EventsPage,
});

const years = [...new Set(events.map((e) => e.year))].sort((a, b) => b - a);

function EventCard({ event }: { event: ChapterEvent }) {
  return (
    <article className="glass-card flex flex-col overflow-hidden rounded-3xl">
      <AssetImage
        src={event.image}
        alt={event.title}
        hint={event.image.replace("/Assets/", "")}
        rounded="rounded-none"
        className="aspect-[16/10] w-full"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
          <CalendarDays className="h-3.5 w-3.5" />
          {event.date}
        </p>
        <h3 className="mt-2 font-display text-xl font-extrabold leading-snug">{event.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
      </div>
    </article>
  );
}

function EventsPage() {
  const [year, setYear] = useState<number | "all">("all");

  const shown = useMemo(
    () => (year === "all" ? events : events.filter((e) => e.year === year)),
    [year],
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pb-14 pt-16">
        <div className="tide pointer-events-none absolute inset-0 opacity-60" />
        <div className="paper-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto w-[min(1200px,94vw)]">
          <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.95]">
            Events and <span className="text-primary">activities</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Everything the chapter has run and taken part in — workshops, hackathons, international
            conferences, distinguished speaker sessions and school outreach.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto w-[min(1200px,94vw)]">
          {/* Year filter */}
          <div className="flex flex-wrap gap-2">
            {(["all", ...years] as const).map((y) => (
              <button
                key={String(y)}
                type="button"
                onClick={() => setYear(y as number | "all")}
                aria-pressed={year === y}
                className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                  year === y
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border/70 bg-card/60 text-muted-foreground hover:text-primary"
                }`}
              >
                {y === "all" ? "All years" : y}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((e) => (
              <EventCard key={`${e.title}-${e.date}`} event={e} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
