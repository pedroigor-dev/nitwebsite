"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ProcessLab() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const context = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>("[data-lab-path]");

      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "bottom 25%",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".lab-bubble",
        { autoAlpha: 0, y: 34, scale: 0.55 },
        {
          autoAlpha: 1,
          y: -20,
          scale: 1,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 62%",
            end: "bottom 38%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".process-step",
        { autoAlpha: 0, x: 42 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: root,
            start: "top 58%",
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="process-lab" aria-hidden="true">
      <svg
        className="process-lab__svg"
        viewBox="0 0 1200 940"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lab-fluid" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#1789ff" />
          </linearGradient>
          <filter id="lab-glow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          data-lab-path
          className="process-lab__tube process-lab__tube--ghost"
          d="M205 0 V100 C205 160 260 170 318 170 H890 C965 170 1010 215 1010 286 V708 C1010 786 958 830 880 830 H312 C246 830 205 872 205 940"
        />
        <path
          data-lab-path
          className="process-lab__tube"
          d="M205 0 V100 C205 160 260 170 318 170 H890 C965 170 1010 215 1010 286 V708 C1010 786 958 830 880 830 H312 C246 830 205 872 205 940"
        />

        <path
          data-lab-path
          className="process-lab__connector"
          d="M1010 286 H780 C734 286 708 322 708 362 H595"
        />
        <path
          data-lab-path
          className="process-lab__connector"
          d="M1010 432 H848 C804 432 790 470 746 470 H595"
        />
        <path
          data-lab-path
          className="process-lab__connector"
          d="M1010 578 H806 C760 578 734 616 690 616 H595"
        />
        <path
          data-lab-path
          className="process-lab__connector"
          d="M1010 708 H822 C770 708 746 748 694 748 H595"
        />

        <g className="lab-flask">
          <path d="M168 228 h74 v42 l54 114 c20 43-10 92-58 92h-66c-48 0-78-49-58-92l54-114Z" />
          <path d="M136 394 C162 374 202 414 232 392 C256 374 278 384 292 398" />
        </g>

        {[
          [156, 354, 7],
          [246, 342, 5],
          [214, 292, 4],
          [178, 512, 6],
          [250, 560, 4],
          [1000, 286, 9],
          [1000, 432, 7],
          [1000, 578, 7],
          [1000, 708, 9],
        ].map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} className="lab-bubble" cx={cx} cy={cy} r={r} />
        ))}
      </svg>
    </div>
  );
}
