import type { ReactNode } from "react";

type SectionWrapperProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
};

export function SectionWrapper({
  eyebrow,
  title,
  description,
  children,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className="relative px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
            {description}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
