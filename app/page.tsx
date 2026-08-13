'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Camera,
  Menu,
  MessageCircle,
  Send,
  Trophy,
  Link,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Community', href: '#community' },
  { label: 'Leadership', href: '/leadership' },
]

const timeline = [
  { year: '2007', title: 'The beginning', text: 'A group of Madridistas in Baku came together around one shared feeling: Real Madrid is more than a club.' },
  { year: '2008', title: 'Officially recognised', text: 'We became the first official Real Madrid Peña in Azerbaijan — a home for the white family.' },
  { year: 'Today', title: 'Still together', text: 'Every match, every generation, every unforgettable night. The legacy keeps growing in Baku.' },
]

const values = [
  { number: '01', title: 'Loyalty', text: 'We stand with the team through every minute, every season, every result.' },
  { number: '02', title: 'Unity', text: 'Different stories. One crest. One voice when the whistle blows.' },
  { number: '03', title: 'Respect', text: 'For the game, for our opponents, and for the people beside us.' },
  { number: '04', title: 'Legacy', text: 'We protect what started in 2007 and pass it on to the next generation.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Peña Madridista Baku home">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pena%20Baku%20Emblem%20Logo%20Color-SINefnQFGiOhDD2c8DTUnDilxUk61b.png" alt="Peña Baku emblem" width={52} height={52} className="h-12 w-auto object-contain transition-transform group-hover:rotate-6" />
            <span className="hidden text-[11px] font-semibold uppercase leading-tight tracking-[0.2em] sm:block">Peña Madridista<br />Baku</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-gold">{item.label}</a>)}
          </nav>
          <button type="button" className="rounded-full p-2 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-white/15 bg-ink px-5 py-6 md:hidden" aria-label="Mobile navigation">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">{item.label}</a>)}</nav>}
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end bg-ink text-white lg:min-h-[860px]">
        <Image src="/images/hero-match-night.png" alt="Real Madrid supporters raising scarves together" fill priority className="object-cover object-center opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-gold"><span className="h-px w-10 bg-gold" /> Since 2007 · Baku, Azerbaijan</div>
          <h1 className="max-w-5xl font-display text-[clamp(4rem,10vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-balance">One city.<br /><span className="text-gold">One badge.</span><br />One family.</h1>
          <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-7 text-white/75 md:text-lg">The first official Real Madrid Peña in Azerbaijan. A home for every Madridista in Baku — where match nights become memories.</p>
            <div className="flex flex-wrap gap-3"><a href="#join" className="inline-flex items-center justify-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-white">Join the family <ArrowUpRight className="size-4" /></a><a href="#about" className="inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-gold hover:text-gold">Our story <ChevronDown className="size-4" /></a></div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-background px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><p className="eyebrow">Our story</p><h2 className="mt-5 max-w-md font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">Born from <span className="text-gold">belief.</span></h2><p className="mt-8 max-w-sm text-base leading-7 text-muted-foreground">What started as a few friends watching together has become a living piece of Real Madrid in Azerbaijan.</p></div>
            <div className="border-t border-foreground/20">{timeline.map((item, index) => <div key={item.year} className="grid gap-4 border-b border-foreground/20 py-8 md:grid-cols-[120px_1fr] md:gap-8"><p className="font-display text-3xl font-black tracking-tight text-gold">{item.year}</p><div><h3 className="font-display text-2xl font-bold uppercase tracking-tight">{item.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{item.text}</p>{index === 1 && <div className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink"><Trophy className="size-4 text-gold" /> First official Peña in Azerbaijan</div>}</div></div>)}</div>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-surface px-5 py-20 md:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">{[{ value: '2007', label: 'Founded in Baku' }, { value: '01', label: 'First official Peña' }, { value: '∞', label: 'Shared passion' }, { value: '1', label: 'Madridista family' }].map((stat) => <div key={stat.label} className="border-l-2 border-gold pl-5"><p className="font-display text-5xl font-black tracking-tight">{stat.value}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p></div>)}</div></section>

      <section id="experience" className="bg-ink px-5 py-24 text-white md:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-gold">The match experience</p><h2 className="mt-5 max-w-3xl font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-8xl">Ninety minutes.<br /><span className="text-gold">A lifetime</span> together.</h2></div><p className="max-w-xs text-sm leading-6 text-white/60">The pre-match anticipation. The roar after a goal. The silence before a penalty. We feel it all, together.</p></div><div className="mt-16 grid gap-4 md:grid-cols-3"><div className="relative min-h-80 overflow-hidden md:col-span-2"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1234.JPG-aWVfnO9mfitNnJMqtb7gz7wHgYCkcj.jpeg" alt="Peña Madridista Baku supporters gathered for a match night" fill className="object-cover" sizes="(min-width: 768px) 66vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" /><p className="absolute bottom-6 left-6 text-sm font-bold uppercase tracking-[0.14em]">The roar</p></div><div className="flex min-h-80 flex-col justify-between bg-gold p-7 text-ink"><p className="font-display text-6xl font-black">Hala<br />Madrid.</p><div><p className="text-sm font-semibold leading-6">Not just a chant. A promise we make to each other, every match night.</p><ArrowDownRight className="mt-6 size-7" /></div></div></div></div></section>

      <section id="community" className="bg-background py-24 md:py-32"><div><div className="relative min-h-[520px] overflow-hidden bg-ink md:min-h-[620px]"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pen%CC%83a%20Baku%202022%2C%20Final%20Liver-RM-hyNCIcvArIqDYHdWbXMtx8jgOyu2h3.jpeg" alt="Peña Madridista Baku community celebrating together" fill className="object-cover" sizes="100vw" /><div className="absolute inset-0 bg-ink/60" /><div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" /><div className="absolute inset-0 flex items-end p-7 md:p-12 lg:p-16"><div className="max-w-xl text-white"><p className="eyebrow text-gold">More than a match</p><h2 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">One badge.<br />One city.<br /><span className="text-gold">One family.</span></h2><p className="mt-7 max-w-md text-base leading-7 text-white/75">Students, parents, lifelong supporters, and new believers — together in the heart of Baku.</p><p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Peña Madridista Baku · Together since 2007</p></div></div></div></div></section>

      <section className="bg-surface px-5 py-24 md:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">In the stands</p><h2 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">Our <span className="text-gold">nights.</span></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Every frame holds a feeling. Every feeling brings us closer.</p></div><div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-4"><div className="relative col-span-2 row-span-2 overflow-hidden"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1242.JPG-HbM3O2LAeDPiICgVa8Uhvu6UuAiqmB.jpeg" alt="Large Peña Madridista Baku street gathering" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div><div className="relative overflow-hidden"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1238.JPG-5azrAaOewrFy7OA2E4gFoIOCf2Uv43.jpeg" alt="Peña Madridista Baku supporters celebrating outside" fill className="object-cover" sizes="25vw" /></div><div className="relative overflow-hidden"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1233.JPG-dK9WFBolzJUrtjDTioeWjZ86pKJBwy.jpeg" alt="Peña Madridista Baku watch party" fill className="object-cover" sizes="25vw" /></div><div className="relative col-span-2 overflow-hidden"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1235.JPG-TPDpz9AwvUctao4OiJ3LCcuA7AZ1f1.jpeg" alt="Peña Madridista Baku night celebration" fill className="object-cover" sizes="50vw" /></div></div></div></section>

      <section className="bg-background px-5 py-24 md:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-7xl"><div className="mb-14 max-w-xl"><p className="eyebrow">What guides us</p><h2 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">The <span className="text-gold">white</span> way.</h2></div><div className="grid border-t border-foreground/20 md:grid-cols-2">{values.map((value) => <div key={value.number} className="grid gap-5 border-b border-foreground/20 py-8 md:grid-cols-[64px_1fr] md:gap-8 md:pr-12"><p className="font-mono text-xs font-bold text-gold">{value.number}</p><div><h3 className="font-display text-2xl font-bold uppercase">{value.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{value.text}</p></div></div>)}</div></div></section>

      <section id="join" className="bg-gold px-5 py-20 text-ink md:px-8 md:py-28 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="eyebrow text-ink/60">Your place is here</p><h2 className="mt-5 max-w-3xl font-display text-6xl font-black uppercase leading-[0.85] tracking-[-0.05em] md:text-8xl">Come chant<br />with us.</h2></div><div className="flex flex-col gap-3 sm:flex-row lg:pb-2"><a href="https://wa.me/994000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-ink"><MessageCircle className="size-4" /> WhatsApp</a><a href="https://instagram.com/penamadridistabaku" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-ink/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-white"><Camera className="size-4" /> Instagram</a><a href="https://t.me/penabaku" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-ink/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-white"><Send className="size-4" /> Telegram</a><a href="https://twitter.com/BakuRealmadrid" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-ink/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-white"><Link className="size-4" /> Twitter</a><a href="https://www.youtube.com/@PenaMadridistaBaku" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-ink/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-white"><Link className="size-4" /> YouTube</a></div></div></section>

      <footer className="bg-ink px-5 py-10 text-white md:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="flex items-center gap-3"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pena%20Baku%20Emblem%20Logo%20Color-SINefnQFGiOhDD2c8DTUnDilxUk61b.png" alt="Peña Baku emblem" width={52} height={52} className="h-12 w-auto object-contain" /><p className="text-[11px] font-semibold uppercase leading-tight tracking-[0.2em]">Peña Madridista<br />Baku</p></div><p className="mt-6 text-xs text-white/45">The first official Real Madrid Peña in Azerbaijan.<br />Baku · Est. 2007</p></div><div className="flex flex-col gap-4 text-right"><a href="#top" className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Back to top ↑</a><p className="text-[10px] uppercase tracking-[0.16em] text-white/35">Hala Madrid y nada más.</p></div></div></footer>
    </main>
  )
}
