import { createFileRoute } from "@tanstack/react-router";

import { AssetImage } from "@/components/AssetImage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { teams } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Teams | VVCE ACM Student Chapter" },
      {
        name: "description",
        content:
          "Every council of the VVCE ACM Student Chapter from 2018 to today — faculty sponsors, chairs, secretaries, treasurers, web masters and heads.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pb-14 pt-16">
        <div className="tide pointer-events-none absolute inset-0 opacity-60" />
        <div className="paper-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto w-[min(1200px,94vw)]">
          <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.95]">
            Our <span className="text-primary">teams</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every council that has run the chapter since 2018 — {teams.length} of them, and the
            faculty who backed each one.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto w-[min(1200px,94vw)] space-y-20">
          {teams.map((team) => (
            <div key={team.year}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border/70 pb-4">
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold">
                  Our Team {team.year}
                </h2>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {team.members.length} members
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                {team.members.map((m) => (
                  <article
                    key={`${team.year}-${m.name}-${m.role}`}
                    className="glass-card rounded-3xl p-4 text-center"
                  >
                    <AssetImage
                      src={m.image}
                      alt={m.name}
                      hint={m.image.replace("/Assets/", "")}
                      className="aspect-[3/4] w-full"
                    />
                    <h3 className="mt-4 font-display text-sm font-extrabold uppercase leading-tight">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {m.role}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
