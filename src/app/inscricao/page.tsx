import { PaginatedApplicationForm } from "@/components/paginated-application-form";
import { SiteHeader } from "@/components/site-header";

export default function InscricaoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030506] text-white">
      <SiteHeader />
      <section className="relative px-5 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="absolute inset-0 circuit-grid opacity-45" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            Candidatura NITE
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
                10 perguntas para conhecer seu jeito de criar.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
                Responda em etapas. São 3 perguntas por página nas três
                primeiras telas e uma pergunta final para fechar a candidatura.
              </p>
            </div>
            <PaginatedApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
