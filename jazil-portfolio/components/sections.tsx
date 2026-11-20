"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Linkedin, Mail, Menu, MessageCircle, Play, X } from "lucide-react";
import { CATS, PROCESS, PROJECTS, SERVICES, SITE, type Project } from "@/lib/data";
import { Magnetic, Player, Reveal } from "./ui";

const H2 = "font-display text-[clamp(2.2rem,6vw,6rem)] font-light uppercase leading-none";
const EYE = "mb-6 text-xs uppercase tracking-[.3em] text-gold";
const BTN = "inline-block px-8 py-4 text-xs font-medium uppercase tracking-[.2em] transition-colors ";
const WRAP = "mx-auto max-w-[1500px]";
const LINKS = ["Home", "Work", "About", "Services", "Contact"];

export function Nav() {
  const [o, setO] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/60 backdrop-blur-md">
      <nav aria-label="Main" className={`${WRAP} flex items-center justify-between px-6 py-5 md:px-12`}>
        <a href="#home" className="font-display tracking-[.2em]">MUHAMMED JAZIL</a>
        <ul className="hidden gap-10 text-xs uppercase tracking-[.25em] text-mute md:flex">
          {LINKS.map((l) => <li key={l}><a href={"#" + l.toLowerCase()} className="transition-colors hover:text-gold">{l}</a></li>)}
        </ul>
        <button className="md:hidden" aria-label="Menu" aria-expanded={o} onClick={() => setO(!o)}>{o ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {o && <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-ink px-6 md:hidden">
          {LINKS.map((l) => <li key={l}><a onClick={() => setO(false)} href={"#" + l.toLowerCase()} className="block border-t border-white/5 py-5 font-display text-3xl">{l}</a></li>)}
        </motion.ul>}
      </AnimatePresence>
    </header>
  );
}

export function Hero() {
  const L = [<>I turn raw footage</>, <>into <em className="text-gold">visual stories.</em></>];
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-14 pt-32 md:px-12">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,#2b2216_0%,#080808_62%)]" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      <div className={`relative w-full ${WRAP}`}>
        <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[.3em] text-gold"><span className="h-px w-10 bg-gold" />Independent Video Editor</p>
        <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] font-light uppercase leading-[.95]">
          {L.map((l, i) => (
            <span key={i} className="block overflow-hidden pb-2">
              <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}>{l}</motion.span>
            </span>
          ))}
        </h1>
        <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="text-mute">I’m Muhammed Jazil, a video editor passionate about creating engaging, cinematic and meaningful visual experiences.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic><a href="#work" className={BTN + "bg-gold text-ink"}>Explore My Work</a></Magnetic>
              <Magnetic><a href="#contact" className={BTN + "border border-white/20 hover:border-gold hover:text-gold"}>Let’s Work Together</a></Magnetic>
            </div>
          </div>
          <div className="flex items-center gap-8 text-xs uppercase tracking-[.25em] text-mute">
            {SITE.available && <span className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />Available for projects</span>}
            <a href="#showreel" className="flex items-center gap-2">Scroll<span className="h-10 w-px animate-pulse bg-gold" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Showreel() {
  const [p, setP] = useState(false);
  const id = SITE.showreelId;
  return (
    <section id="showreel" className="px-6 py-32 md:px-12"><div className={WRAP}>
      <Reveal><h2 className={H2}>My visual world</h2></Reveal>
      <Reveal d={0.1}>
        <div className="relative mt-12 aspect-video overflow-hidden border border-white/10 bg-panel">
          {p && id ? (
            <iframe src={`https://drive.google.com/file/d/${id}/preview`} title="Showreel" allow="autoplay; fullscreen" allowFullScreen className="absolute inset-0 h-full w-full" />
          ) : (
            <button aria-label="Play showreel" onClick={() => setP(true)} className="group absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_30%,#2b2216,#111)]">
              <span className="grid h-24 w-24 place-items-center rounded-full border border-gold text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink"><Play fill="currentColor" /></span>
              {p && <span className="absolute bottom-6 px-4 text-center text-xs tracking-widest text-mute">Showreel coming soon. Add its Drive ID in lib/data.ts.</span>}
            </button>
          )}
        </div>
      </Reveal>
    </div></section>
  );
}

function Thumb({ p }: { p: Project }) {
  const [ok, setOk] = useState(true);
  return ok ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={p.thumb ?? `https://drive.google.com/thumbnail?id=${p.drive}&sz=w1000`} alt="" loading="lazy" onError={() => setOk(false)}
      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
  ) : <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#2b2216,#111)] font-display text-7xl text-gold/30">{p.id}</div>;
}

export function Work() {
  const [f, setF] = useState("all");
  const [open, setOpen] = useState<Project | null>(null);
  const list = PROJECTS.filter((p) => f === "all" || p.cat === f);
  return (
    <section id="work" className="px-6 py-32 md:px-12"><div className={WRAP}>
      <Reveal><h2 className={H2}>Selected works</h2></Reveal>
      <div role="tablist" className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-white/10 pb-4 text-xs uppercase tracking-[.25em]">
        {CATS.map((c) => <button key={c.id} role="tab" aria-selected={f === c.id} onClick={() => setF(c.id)} className={f === c.id ? "text-gold" : "text-mute hover:text-bone"}>{c.label}</button>)}
      </div>
      <p className="mt-6 max-w-xl text-mute">{CATS.find((c) => c.id === f)?.desc}</p>
      <div className="mt-14 grid grid-cols-12 items-start gap-x-6 gap-y-16">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => {
            const v = p.ratio === "9/16";
            return (
              <motion.article layout key={p.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} onClick={() => setOpen(p)}
                className={`group col-span-12 ${v ? "sm:col-span-6 lg:col-span-4" : "lg:col-span-8"} ${i % 2 ? "lg:mt-24" : ""} ${!v && i % 2 ? "lg:col-start-5" : ""}`}>
                <button aria-label={`Play ${p.title}`} className="relative block w-full overflow-hidden border border-white/10 bg-panel" style={{ aspectRatio: p.ratio }}>
                  <Thumb p={p} />
                  <span className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-ink"><Play size={20} fill="currentColor" /></span>
                  </span>
                </button>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-[.25em] text-gold">{p.kind}</span>
                </div>
                <p className="mt-1 max-w-md text-sm text-mute">{p.desc}</p>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
      <AnimatePresence>{open && <Player id={open.drive} ratio={open.ratio} title={open.title} onClose={() => setOpen(null)} />}</AnimatePresence>
    </div></section>
  );
}

export function Services() {
  return (
    <section id="services" className="px-6 py-32 md:px-12"><div className={WRAP}>
      <Reveal><h2 className={H2}>What I bring to the frame.</h2></Reveal>
      <Reveal d={0.1}>
        <ul className="mt-16 border-t border-white/10">
          {SERVICES.map((s, i) => (
            <li key={s.t} className="group grid gap-4 border-b border-white/10 py-8 transition-colors hover:bg-panel md:grid-cols-12 md:px-4">
              <span className="text-gold md:col-span-1">0{i + 1}</span>
              <h3 className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-3 md:col-span-6 md:text-4xl">{s.t}</h3>
              <p className="text-mute md:col-span-5">{s.d}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div></section>
  );
}

export function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="md:col-span-12">
          <h2 className={H2}>Behind the frames.</h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-mute">
            <p>I’m Muhammed Jazil, a creative video editor focused on transforming ideas into engaging visual experiences.</p>
            <p>From short-form social media content to AI-powered visuals and motion graphics, I enjoy experimenting with different styles of visual storytelling.</p>
            <p className="text-bone">My goal is simple: create videos that make people stop, watch and remember.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="px-6 py-32 md:px-12"><div className={WRAP}>
      <Reveal><p className={EYE}>Creative process</p><h2 className={H2}>From idea to final frame.</h2></Reveal>
      <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-4">
        {PROCESS.map((s, i) => (
          <Reveal key={s.t} d={i * 0.1} className="bg-ink p-8 md:pb-24">
            <span className="font-display text-6xl text-gold/40">0{i + 1}</span>
            <h3 className="mt-8 font-display text-2xl">{s.t}</h3>
            <p className="mt-3 text-sm text-mute">{s.d}</p>
          </Reveal>
        ))}
      </div>
    </div></section>
  );
}

export function Contact() {
  const [st, setSt] = useState("idle");
  const C = SITE.contact;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!SITE.formspreeId) return setSt("unset");
    setSt("sending");
    try {
      const r = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(f) });
      setSt(r.ok ? "ok" : "err");
      if (r.ok) f.reset();
    } catch { setSt("err"); }
  }
  const msg: Record<string, string> = {
    ok: "Thank you. Your inquiry was sent.",
    err: "Sending failed. Please try again or use email.",
    unset: "Form not connected yet. Set NEXT_PUBLIC_FORMSPREE_ID (see setup notes).",
  };
  const F = "w-full border-b border-white/20 bg-transparent py-4 outline-none transition-colors placeholder:text-mute focus:border-gold";
  const links = [{ I: Mail, l: "Email", h: `mailto:${C.email}` }, { I: Linkedin, l: "LinkedIn", h: C.linkedin }, { I: MessageCircle, l: "WhatsApp", h: C.whatsapp }];
  return (
    <section id="contact" className="px-6 pb-12 pt-32 md:px-12"><div className={WRAP}>
      <Reveal>
        <h2 className={H2}>Have a story to tell?</h2>
        <p className="mt-6 font-display text-2xl italic text-gold">Let’s create something worth watching.</p>
      </Reveal>
      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <form onSubmit={submit} className="space-y-6 md:col-span-7">
          <input name="name" required placeholder="Name" aria-label="Name" className={F} />
          <input name="email" type="email" required placeholder="Email" aria-label="Email" className={F} />
          <textarea name="details" required rows={4} placeholder="Project details" aria-label="Project details" className={F} />
          <Magnetic><button type="submit" disabled={st === "sending"} className={BTN + "bg-gold text-ink"}>{st === "sending" ? "Sending…" : "Send Inquiry"}</button></Magnetic>
          <p role="status" className="text-sm text-mute">{msg[st]}</p>
        </form>
        <ul className="space-y-6 md:col-span-4 md:col-start-9">
          {links.map((x) => (
            <li key={x.l}><a href={x.h} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-white/10 pb-4 hover:text-gold">
              <span className="flex items-center gap-3"><x.I size={18} />{x.l}</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a></li>
          ))}
        </ul>
      </div>
      <footer className="mt-32 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[.25em] text-mute">
        <span>Muhammed Jazil — Video Editor & Visual Storyteller</span><span>© 2026</span>
      </footer>
    </div></section>
  );
}
