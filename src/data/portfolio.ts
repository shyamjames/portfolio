export const profile = {
  name: "Shyam James",
  role: "Web developer, Kochi — MCA student at Rajagiri College of Social Sciences",
  tagline:
    "I build software that fixes an actual daily annoyance for actual people — a device-sync tool that survives a locked-down campus network, a platform a university now uses to evaluate exam scripts, a freelance system that keeps a logistics team's shipments straight. I care less about the stack and more about whether the thing works when someone depends on it.",
  email: "shyamjames74@gmail.com",
  location: "Kochi, Kerala, India",
  socials: {
    github: "https://github.com/shyamjames",
    linkedin: "https://linkedin.com/in/shyamjames",
    resume: "#",
  },
};

export const about = {
  bio: "I build software that fixes an actual daily annoyance for actual people — whether it's a device-sync tool surviving restricted campus networks, an answer-script evaluation platform for a university, or full-stack logistics tooling. I care less about the stack and more about whether the thing works reliably when someone depends on it.",
  highlights: [
    "Google Student Ambassador (Gemini) — run campus events and content, including a Career Glow Up meetup for placement prep.",
    "Placement Cell Representative & CSTAR member — organized a 20-challenge CTF covering steganography, forensics, and OSINT.",
    "UGC NET qualified for Assistant Professor — teaching stayed on the table alongside building.",
    "Outside the keyboard: photography, digital painting, and piano.",
  ],
};

export const skills = [
  {
    category: "Backend",
    items: [
      "Django · Django REST Framework",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    category: "Elsewhere & Systems",
    items: [
      "Java",
      "Rust · Kotlin",
      "Linux systems (daily driver: Arch)",
      "Python tooling & automation",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "React",
      "Flutter",
      "Android · .NET",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
];

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Digivalrex",
    subtitle: "Django · PostgreSQL · AWS EC2 — for Rajagiri College, built with RISO India",
    description:
      "A digital answer-script evaluation platform, replacing a manual process that involved four separate roles (COE, chairperson, chief and internal examiners). I mapped the full workflow, designed the role-based wireframes and data flow, and helped migrate the codebase to the college's own org for long-term ownership.",
    tech: ["Django", "PostgreSQL", "AWS EC2"],
    link: "https://github.com/shyamjames",
  },
  {
    title: "DevSync",
    subtitle: "Rust · Kotlin",
    description:
      "KDE Connect stopped working reliably on a network that isolates devices from each other, so I built a replacement from scratch — a dual WiFi/BLE transport that keeps phone-to-laptop sync working even when the network won't cooperate.",
    tech: ["Rust", "Kotlin", "WiFi", "BLE"],
    link: "https://github.com/shyamjames",
  },
  {
    title: "Logistics Management System",
    subtitle: "Django · React · Flutter — freelance, UAE",
    description:
      "Scoped and built a logistics management system for a UAE-based client, covering the web dashboard, API and mobile app across a single codebase.",
    tech: ["Django", "React", "Flutter"],
    link: "https://github.com/shyamjames",
  },
  {
    title: "StackLite",
    subtitle: "Android · .NET",
    description:
      "An astrophotography stacking app that aligns and combines night-sky exposures on-device, built as a semester project.",
    tech: ["Android", ".NET"],
    link: "https://github.com/shyamjames",
  },
];

export const experience = [
  {
    role: "Google Student Ambassador (Gemini)",
    company: "Google",
    period: "2024 — Present",
    description:
      "Run campus events and content, including a Career Glow Up meetup for placement prep.",
  },
  {
    role: "Placement Cell Representative & CSTAR Member",
    company: "Rajagiri College of Social Sciences",
    period: "2023 — Present",
    description:
      "Organized a 20-challenge CTF covering steganography, forensics and OSINT.",
  },
  {
    role: "UGC NET Qualified for Assistant Professor",
    company: "National Testing Agency / UGC",
    period: "Qualified",
    description:
      "Qualified for Assistant Professor in Computer Science and Applications — teaching stayed on the table alongside building.",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Logistics Client (UAE)",
    period: "Freelance Project",
    description:
      "Scoped and built an end-to-end logistics management system covering the web dashboard, API, and mobile app.",
  },
];
