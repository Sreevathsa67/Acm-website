export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * General answers written for the site — not lifted from the old vvce.acm.org
 * pages, which had no FAQ. Check the specifics (fee, joining window, contact
 * routing) against how the council actually runs things and edit freely.
 */
export const faqs: FaqItem[] = [
  {
    question: "Who can join the chapter?",
    answer:
      "Any student of Vidyavardhaka College of Engineering, from any branch and any year. Recruitment opens at the start of the academic year — we announce it on our Instagram and through class representatives, you fill in the form that goes around, and then come to the induction programme where we walk you through what the chapter does and which teams need people. If you missed the drive, write to us anyway; there is usually room for someone who genuinely wants in.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No. Plenty of members join in their first semester having written nothing more than a Hello World, and our workshops are built to start from the basics. What matters far more is turning up consistently — the seniors will handle the rest.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Chapter events are open to students at no cost, apart from the occasional workshop that charges a small amount to cover materials. A formal ACM Student Membership is a separate thing you buy directly from ACM, and it gets you the Digital Library, courses and conference discounts — it is not required to take part in what the chapter runs. Ask the treasurer or write to acm@vvce.ac.in for what applies this year.",
  },
  {
    question: "How much time does it take?",
    answer:
      "A couple of hours in a normal week, and more in the run-up to an event you are organising. Academics come first, and every council has worked around exams and internals — tell your team lead when you are stretched rather than going quiet.",
  },
  {
    question: "What does the chapter actually do?",
    answer:
      "Workshops on programming, databases, cybersecurity and AI; hackathons; the AICDMB international conference; ACM Distinguished Speaker sessions; and outreach like Hour of Code, where members go out to government schools around Mysuru to teach children the basics of computing. The Events page has the full record since 2018.",
  },
  {
    question: "Can I propose an event or project?",
    answer:
      "Yes, and it is the fastest way to end up running one. Bring the idea to any office bearer with a rough sense of the format, who it is for and what it needs — the executive council reviews proposals and forms a working committee around the ones that go ahead.",
  },
  {
    question: "How do I become an office bearer?",
    answer:
      "Officers are elected once a year by a plurality of votes cast at the annual election meeting, and serve a one-year term — the Chapter By-Laws page sets out the roles and their duties in full. In practice the members who get elected are the ones who have already spent a year showing up and doing the unglamorous work.",
  },
];
