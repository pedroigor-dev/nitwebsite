import Link from "next/link";
import { InstagramGallerySection } from "@/components/instagram-gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteHeader } from "@/components/site-header";
import { TracksSection } from "@/components/tracks-section";
import { metrics } from "@/lib/recruitment-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030506] text-white">
      <SiteHeader />
      <HeroSection />

      <SectionWrapper
        eyebrow="Por que entrar"
        title="Um núcleo para criar tecnologia com impacto real na universidade."
        description="O NITE reúne gente curiosa, técnica e criativa para transformar ideias em produtos, pesquisas aplicadas, automações e experiências digitais."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border border-white/10 bg-white/[0.035] p-5 backdrop-blur"
            >
              <p className="text-3xl font-semibold text-cyan-200">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <TracksSection />
      <ProcessSection />

      <section id="inscricao" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl border border-cyan-300/20 bg-cyan-300/[0.06] p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            Inscrição
          </p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Pronto para mostrar como você pensa?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/62">
                A candidatura agora acontece em uma página própria, com 10
                perguntas divididas em etapas para ficar mais organizado que um
                formulário comum.
              </p>
            </div>
            <Link
              href="/inscricao"
              className="inline-flex h-12 items-center justify-center bg-cyan-300 px-5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
            >
              Começar inscrição
            </Link>
          </div>
        </div>
      </section>

      <InstagramGallerySection />
    </main>
  );
}
