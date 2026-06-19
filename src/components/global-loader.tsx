"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NiteLogoMark } from "@/components/nite-logo-mark";

const initialDelay = 1750;
const routeDelay = 820;
const exitDuration = 720;

export function GlobalLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const firstPathname = useRef(pathname);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const removeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const beginExit = (delay: number) => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      if (removeTimer.current) {
        clearTimeout(removeTimer.current);
      }

      hideTimer.current = setTimeout(() => {
        setIsLeaving(true);
        removeTimer.current = setTimeout(() => {
          setIsVisible(false);
        }, exitDuration);
      }, delay);
    };

    beginExit(firstPathname.current === pathname ? initialDelay : routeDelay);

    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      if (removeTimer.current) {
        clearTimeout(removeTimer.current);
      }
    };
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");

      if (!link || link.target || event.metaKey || event.ctrlKey) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      const isInternal = destination.origin === window.location.origin;
      const isSamePage = destination.pathname === window.location.pathname;

      if (!isInternal || isSamePage) {
        return;
      }

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      if (removeTimer.current) {
        clearTimeout(removeTimer.current);
      }

      setIsLeaving(false);
      setIsVisible(true);
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`nite-loader ${isLeaving ? "nite-loader--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={pathname === "/inscricao" ? "Carregando formulário" : "Iniciando NITE"}
    >
      <div className="nite-loader__grain" />
      <div className="nite-loader__grid" />
      <div className="nite-loader__beam nite-loader__beam--top" />
      <div className="nite-loader__beam nite-loader__beam--bottom" />

      <div className="nite-loader__stage">
        <div className="nite-loader__kicker">NITE / UJ</div>
        <div className="nite-loader__mark">
          <div className="nite-loader__ring" />
          <NiteLogoMark size="sm" />
        </div>
        <div className="nite-loader__title">Núcleo em ignição</div>
        <div className="nite-loader__subtitle">
          {pathname === "/inscricao"
            ? "preparando candidatura"
            : "sincronizando inovação"}
        </div>
        <div className="nite-loader__progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
