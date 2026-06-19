import Link from "next/link";
import { NiteLogoMark } from "@/components/nite-logo-mark";

export function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/35 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/#topo" className="flex items-center gap-3">
          <NiteLogoMark size="sm" />
          <span className="font-mono text-sm font-semibold tracking-[0.28em] text-white">
            NITE
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/68 sm:flex">
          <Link className="transition hover:text-cyan-200" href="/#trilhas">
            Trilhas
          </Link>
          <Link className="transition hover:text-cyan-200" href="/#processo">
            Processo
          </Link>
          <Link className="transition hover:text-cyan-200" href="/inscricao">
            Inscrição
          </Link>
        </div>
        <Link
          href="/inscricao"
          className="inline-flex h-10 items-center gap-2 border border-cyan-300/40 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/18"
        >
          Aplicar
        </Link>
      </nav>
    </header>
  );
}
