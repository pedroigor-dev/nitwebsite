import { ProcessLab } from "@/components/process-lab";
import { processSteps } from "@/lib/recruitment-data";

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="process-section relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <ProcessLab />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            Processo
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Seleção clara, prática e com cara de laboratório.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
            A ideia é substituir formulários frios por uma jornada própria,
            bonita e objetiva para candidatos e coordenação.
          </p>

          <div className="process-readout mt-9 hidden max-w-sm border border-white/10 bg-black/35 p-4 backdrop-blur lg:block">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-white/44">
              <span>Lab status</span>
              <span className="text-cyan-300">Online</span>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {["input", "test", "sync", "join"].map((label) => (
                <div key={label} className="process-readout__cell">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="process-steps relative space-y-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="process-step group relative grid grid-cols-[auto_1fr] gap-4 overflow-hidden border border-white/10 bg-black/42 p-5 backdrop-blur transition hover:border-cyan-300/45"
              style={{ ["--step-index" as string]: index }}
            >
              <div className="process-step__liquid" />
              <div className="process-step__icon relative z-10 flex h-12 w-12 items-center justify-center border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                <step.icon className="h-5 w-5" />
              </div>
              <div className="relative z-10">
                <p className="font-mono text-xs text-white/42">
                  0{index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/62">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
