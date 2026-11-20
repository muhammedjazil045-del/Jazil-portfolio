"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

export const Reveal = ({ children, d = 0, className = "" }: { children: ReactNode; d?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
);

export function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div className="inline-block" style={{ x: sx, y: sy }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.3); y.set((e.clientY - r.top - r.height / 2) * 0.3); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>
  );
}

export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [h, setH] = useState(false);
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const m = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setH(!!(e.target as HTMLElement).closest("a,button,article")); };
    addEventListener("mousemove", m);
    return () => removeEventListener("mousemove", m);
  }, [x, y]);
  return <motion.div aria-hidden animate={{ scale: h ? 4 : 1 }} style={{ x: sx, y: sy }}
    className="pointer-events-none fixed left-0 top-0 z-[70] -ml-1.5 -mt-1.5 hidden h-3 w-3 rounded-full border border-gold bg-gold/20 [@media(pointer:fine)]:block" />;
}

export function Player({ id, ratio, title, onClose }: { id: string; ratio: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div role="dialog" aria-modal="true" aria-label={title} onClick={onClose}
      className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button aria-label="Close video" onClick={onClose} className="absolute right-5 top-5 z-10 text-bone"><X /></button>
      <div onClick={(e) => e.stopPropagation()} style={{ aspectRatio: ratio }} className={ratio === "9/16" ? "h-[82vh] max-w-full" : "w-full max-w-5xl"}>
        <iframe src={`https://drive.google.com/file/d/${id}/preview`} title={title} allow="autoplay; fullscreen" allowFullScreen className="h-full w-full border border-white/10" />
      </div>
      <a href={`https://drive.google.com/file/d/${id}/view`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
        className="absolute bottom-4 text-xs tracking-widest text-mute hover:text-gold">Video not loading? Open in Google Drive ↗</a>
    </motion.div>
  );
}

