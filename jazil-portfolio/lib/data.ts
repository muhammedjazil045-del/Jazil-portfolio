// ===== EDIT HERE: everything on the site comes from this file =====
export const SITE = {
  available: true,
  showreelId: "1VtXiyuI07FTGF6uOPbkEuG3MZg09fQb0", // Google Drive file ID of your showreel (from …/file/d/<ID>/preview)
  contact: {
    email: "muhammedjazil045@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammed-jazil-114031445",
    whatsapp: "https://wa.me/918921826716",
  },
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
};

export type Cat = "social" | "ai" | "motion";
export type Project = { id: string; title: string; kind: string; cat: Cat; drive: string; ratio: "9/16" | "16/9"; desc: string; thumb?: string };

export const CATS = [
  { id: "all", label: "All", desc: "Short-form stories, AI visuals and motion design, selected for impact." },
  { id: "social", label: "Social", desc: "Stories made for brands. Short-form content designed to capture attention and create impact." },
  { id: "ai", label: "AI Visuals", desc: "Exploring the possibilities of AI to create extraordinary cinematic visuals for clients." },
  { id: "motion", label: "Motion", desc: "Bringing ideas, typography and visual identities to life through motion." },
];

// "drive" = the ID inside the Drive link (…/file/d/<ID>/view). "thumb" = optional custom thumbnail URL.
export const PROJECTS: Project[] = [
  { id: "01", title: "Branded Content 01", kind: "Instagram Reel", cat: "social", drive: "188YpoBLO5EmpNbsPmb2bKEJLRcgsKxx9", ratio: "9/16", desc: "Branded content created for social media." },
  { id: "02", title: "Branded Content 02", kind: "Instagram Reel", cat: "social", drive: "1yDKCM-euOFilfx57uasmi0AxCdkrk3bX", ratio: "9/16", desc: "Branded content created for social media." },
  { id: "03", title: "Branded Content 03", kind: "Instagram Reel", cat: "social", drive: "1VtXiyuI07FTGF6uOPbkEuG3MZg09fQb0", ratio: "9/16", desc: "Branded content created for social media." },
  { id: "04", title: "AI Visual 01", kind: "AI Video", cat: "ai", drive: "13rDnSKyGU8ZEGGCV55JOxj1h9_k8AByl", ratio: "16/9", desc: "AI-generated cinematic visuals. Edit this description." },
  { id: "05", title: "AI Visual 02", kind: "AI Video", cat: "ai", drive: "15Vd9aI1yshdj5nUa64rc4jis29U7Cw9j", ratio: "16/9", desc: "AI-generated cinematic visuals. Edit this description." },
  { id: "06", title: "Motion Graphics 01", kind: "Motion Graphics", cat: "motion", drive: "1R7hozlpaf0PjCuHwp4t72bCZxJeYPap_", ratio: "16/9", desc: "Typography and graphic animation. Edit this description." },
  { id: "07", title: "Logo Animation 01", kind: "Logo Animation", cat: "motion", drive: "1ozjJViE3uW4pgf80BkFb7-za82POFAcY", ratio: "16/9", desc: "Brand logo brought to life with motion. Edit this description." },
];

export const SERVICES = [
  { t: "Video Editing", d: "Clean, rhythmic cuts with sound and color that serve the story." },
  { t: "Instagram Reels & Social Media Content", d: "Vertical, scroll-stopping edits tuned to each brand’s voice." },
  { t: "AI Video Production", d: "AI-generated cinematic visuals, directed and polished into finished films." },
  { t: "Motion Graphics", d: "Typography and graphic animation that explains and elevates." },
  { t: "Logo Animation", d: "Brand marks brought to life with crisp, memorable motion." },
  { t: "Cinematic Storytelling", d: "Structure, pacing and mood that turn footage into a story worth remembering." },
];
export const PROCESS = [
  { t: "Understand the Vision", d: "Goals, audience and references come first." },
  { t: "Plan the Story", d: "Structure, pacing and style are mapped before the first cut." },
  { t: "Edit & Create", d: "Editing, motion and sound come together in focused drafts." },
  { t: "Polish & Deliver", d: "Final color, mix and export, ready for every platform." },
];
