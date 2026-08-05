import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { articles } from "@/data/bylaws";

export const Route = createFileRoute("/bylaws")({
  head: () => ({
    meta: [
      { title: "Chapter By-Laws | VVCE ACM Student Chapter" },
      {
        name: "description",
        content:
          "The by-laws of the VVCE ACM Student Chapter — name, purpose, membership, officers, sponsor, executive council, meetings, code of conduct and dissolution.",
      },
    ],
  }),
  component: BylawsPage,
});

function BylawsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pb-14 pt-16">
        <div className="tide pointer-events-none absolute inset-0 opacity-60" />
        <div className="paper-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto w-[min(1200px,94vw)]">
          <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.95]">
            Chapter <span className="text-primary">By-Laws</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The rules the chapter runs on, as chartered by the Association for Computing Machinery.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid w-[min(1200px,94vw)] gap-10 lg:grid-cols-[260px_1fr]">
          {/* Contents */}
          <nav className="glass-card h-max rounded-3xl p-6 lg:sticky lg:top-28">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Contents
            </p>
            <ol className="mt-4 space-y-2 text-sm">
              {articles.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#article-${a.id}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {a.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-8">
            {articles.map((a) => (
              <article
                key={a.id}
                id={`article-${a.id}`}
                className="glass-card scroll-mt-28 rounded-3xl p-8"
              >
                <h2 className="font-display text-2xl font-extrabold text-primary">{a.title}</h2>
                <div className="mt-4 space-y-4">
                  {a.body.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
