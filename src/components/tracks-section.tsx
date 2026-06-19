import { TracksCircuit } from "@/components/tracks-circuit";
import { tracks } from "@/lib/recruitment-data";

export function TracksSection() {
  return (
    <section
      id="trilhas"
      className="tracks-section relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <TracksCircuit />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            Trilhas
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Escolha uma porta de entrada. Você não precisa chegar pronto.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
            A seleção valoriza curiosidade, consistência e vontade de aprender.
            As trilhas ajudam a direcionar projetos e mentorias.
          </p>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2">
          {tracks.map((track, index) => (
            <article
              key={track.title}
              className="track-card group relative min-h-56 overflow-hidden border border-white/10 bg-black/45 p-5 backdrop-blur transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.06]"
              style={{ ["--track-index" as string]: index }}
            >
              <div className="track-card__scan" />
              <div className="relative z-10">
                <track.icon className="h-7 w-7 text-cyan-300" />
                <h3 className="mt-8 text-xl font-semibold text-white">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  {track.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
