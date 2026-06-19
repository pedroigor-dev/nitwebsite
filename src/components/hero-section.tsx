"use client";

import Link from "next/link";
import { ArrowDownRight, RadioTower } from "lucide-react";
import { useRef } from "react";
import { highlights } from "@/lib/recruitment-data";
import { NiteLogoMark } from "@/components/nite-logo-mark";
import { useGsapParallax } from "@/hooks/use-gsap-parallax";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  useGsapParallax(rootRef);

  return (
    <section
      id="topo"
      ref={rootRef}
      className="relative min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 circuit-grid opacity-55" />
      <div
        data-parallax="slow"
        className="absolute left-[8%] top-28 h-48 w-48 rounded-full bg-cyan-400/18 blur-3xl"
      />
      <div
        data-parallax="fast"
        className="absolute bottom-24 right-[8%] h-60 w-60 rounded-full bg-blue-500/18 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 border border-cyan-300/25 bg-cyan-300/8 px-3 py-2 font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
            <RadioTower className="h-4 w-4" />
            Recrutamento aberto
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Núcleo de Inovação e Tecnologia
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            Entre para o NITE da UJ e construa soluções digitais com estética,
            método e ambição técnica. Uma seleção feita para quem quer aprender
            criando.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/inscricao"
              className="inline-flex h-12 items-center justify-center gap-2 bg-cyan-300 px-5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
            >
              Quero participar
              <ArrowDownRight className="h-4 w-4" />
            </Link>
            <a
              href="#trilhas"
              className="inline-flex h-12 items-center justify-center border border-white/15 px-5 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Ver trilhas
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-8 border border-cyan-300/20" />
          <div data-parallax="float" className="relative cinematic-panel p-5">
            <NiteLogoMark />
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-white/72">
            <item.icon className="h-5 w-5 text-cyan-300" />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
