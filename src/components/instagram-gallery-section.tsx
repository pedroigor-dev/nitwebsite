"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Images, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { instagramGallery } from "@/lib/recruitment-data";

gsap.registerPlugin(ScrollTrigger);

export function InstagramGallerySection() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".instagram-card",
        { autoAlpha: 0, y: 48, rotateX: -10 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root,
            start: "top 64%",
          },
        },
      );

    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="galeria"
      className="instagram-section relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
              Galeria
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Um feed vivo para mostrar o NITE acontecendo.
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-8 text-white/62">
              A galeria aponta para o Instagram oficial e já está pronta para
              receber as imagens reais do feed. Sem depender de Google Forms,
              sem cara de template: aqui o núcleo aparece como comunidade.
            </p>
            <a
              href="https://www.instagram.com/nite.uj/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center gap-2 border border-cyan-300/35 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/18"
            >
              <Instagram className="h-4 w-4" />
              @nite.uj
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {instagramGallery.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`instagram-card instagram-card--${item.tone} ${
                index === 0 || index === 5 ? "sm:row-span-2" : ""
              } ${index === 1 ? "lg:col-span-2" : ""}`}
            >
              <div className="instagram-card__media">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`Capa do post ${item.title} do Instagram do NITE`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="instagram-card__noise" />
                <div className="instagram-card__mark">
                  {item.type === "Reel" ? (
                    <Play className="h-5 w-5 fill-current" />
                  ) : (
                    <Images className="h-5 w-5" />
                  )}
                </div>
              </div>
              <div className="instagram-card__content">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-100/72">
                  {item.type}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  {item.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

type InstagramGlyphProps = {
  className?: string;
};

function Instagram({ className }: InstagramGlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}
