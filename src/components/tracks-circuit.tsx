"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function TracksCircuit() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const context = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>("[data-circuit-path]");

      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
          end: "bottom 28%",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".circuit-node",
        { autoAlpha: 0, scale: 0.35 },
        {
          autoAlpha: 1,
          scale: 1,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: root,
            start: "top 58%",
            end: "center 28%",
            scrub: 0.8,
          },
        },
      );

      gsap.fromTo(
        ".track-card",
        { y: 34, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root,
            start: "top 62%",
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="tracks-circuit" aria-hidden="true">
      <svg
        className="tracks-circuit__svg"
        viewBox="0 0 1200 920"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="track-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1789ff" />
            <stop offset="45%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="track-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          data-circuit-path
          className="tracks-circuit__path tracks-circuit__path--ghost"
          d="M78 0 V138 C78 188 122 210 172 210 H470 C538 210 566 247 566 304 V366 C566 423 608 462 672 462 H1040 C1095 462 1126 498 1126 550 V920"
        />
        <path
          data-circuit-path
          className="tracks-circuit__path"
          d="M78 0 V138 C78 188 122 210 172 210 H470 C538 210 566 247 566 304 V366 C566 423 608 462 672 462 H1040 C1095 462 1126 498 1126 550 V920"
        />

        <path
          data-circuit-path
          className="tracks-circuit__branch"
          d="M566 304 H730 C770 304 790 278 826 278 H1110"
        />
        <path
          data-circuit-path
          className="tracks-circuit__branch"
          d="M566 366 H745 C790 366 798 410 844 410 H1120"
        />
        <path
          data-circuit-path
          className="tracks-circuit__branch"
          d="M672 462 V590 C672 632 708 650 750 650 H1120"
        />
        <path
          data-circuit-path
          className="tracks-circuit__branch"
          d="M932 462 V742 C932 790 970 812 1030 812 H1126"
        />

        {[
          [78, 138],
          [566, 304],
          [566, 366],
          [672, 462],
          [826, 278],
          [844, 410],
          [750, 650],
          [1030, 812],
          [1126, 550],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`} className="circuit-node">
            <circle cx={cx} cy={cy} r="12" />
            <circle cx={cx} cy={cy} r="4" />
          </g>
        ))}
      </svg>
    </div>
  );
}
