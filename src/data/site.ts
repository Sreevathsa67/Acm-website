import { Bot, Braces, Code2, Cpu, Lock, Palette } from "lucide-react";

export const chapter = {
  name: "VVCE ACM Student Chapter",
  shortName: "VVCE ACM",
  college: "Vidyavardhaka College of Engineering",
  place: "Mysuru, Karnataka",
  tagline: "Association for Computing Machinery Student Chapter at VVCE, Mysore!",
  purpose:
    "This chapter is organized and operated exclusively for educational and scientific purpose to promote knowledge of Science, Design and Development.",
  email: "acm@vvce.ac.in",
};

/** Top-level pages. "The Hub" from the template is now "Teams". */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Teams", to: "/team" },
  { label: "Chapter By-Laws", to: "/bylaws" },
] as const;

export const socials = {
  instagram: "https://www.instagram.com/vvce_acm/",
  linkedin: "https://www.linkedin.com/in/acm-student-chapter-vvce-411a831b1/",
  facebook: "https://www.facebook.com/vvceacm",
  email: `mailto:${chapter.email}`,
};

export const domains = [
  { label: "Coding", Icon: Code2 },
  { label: "Dev", Icon: Braces },
  { label: "Design", Icon: Palette },
  { label: "CyberSec", Icon: Lock },
  { label: "AI / ML", Icon: Bot },
  { label: "Systems", Icon: Cpu },
];
