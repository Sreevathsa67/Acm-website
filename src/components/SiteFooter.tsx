import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

import { chapter, navLinks, socials } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: socials.instagram, Icon: Instagram },
  { label: "LinkedIn", href: socials.linkedin, Icon: Linkedin },
  { label: "Facebook", href: socials.facebook, Icon: Facebook },
  { label: "Email", href: socials.email, Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 px-6 py-12">
      <div className="mx-auto grid w-[min(1200px,94vw)] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-extrabold">{chapter.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {chapter.purpose}
          </p>
          <a
            href={socials.email}
            className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            {chapter.email}
          </a>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Follow us
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Instagram className="h-4 w-4" />
            @vvce_acm
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-[min(1200px,94vw)] flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} VVCE ACM Student Chapter, Mysuru</span>
        <span>
          {chapter.college} · {chapter.place}
        </span>
      </div>
    </footer>
  );
}
