"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useGsapParallax(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-parallax='slow']", {
        y: -30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to("[data-parallax='fast']", {
        yPercent: -35,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-parallax='float']", {
        y: -42,
        rotate: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => context.revert();
  }, [rootRef]);
}
