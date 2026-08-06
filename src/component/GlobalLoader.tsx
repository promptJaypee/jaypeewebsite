"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GlobalLoader() {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const percentRef = useRef(0);

  // Drift the counter upward while the page is still loading. Capped below
  // 100 so it never falsely claims "done" before the load event fires.
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      percentRef.current = Math.min(
        percentRef.current + Math.random() * 9 + 2,
        92
      );
      setPercent(Math.floor(percentRef.current));
    }, 140);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Detect real page load, then race the counter up to 100.
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const rush = setInterval(() => {
      percentRef.current = Math.min(percentRef.current + 6, 100);
      setPercent(Math.floor(percentRef.current));
      if (percentRef.current >= 100) {
        clearInterval(rush);
      }
    }, 20);

    return () => clearInterval(rush);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && percent >= 100) {
      const timeout = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, percent]);

  if (!isVisible) return null;

  const isDone = !isLoading && percent >= 100;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#05070d] transition-opacity duration-500 ease-in-out overflow-hidden ${
        isDone ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={isDone}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Scanline sweep */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-transparent animate-scan" />
      </div>

      {/* Ambient glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute w-[280px] h-[280px] rounded-full bg-cyan-400/20 blur-[90px] translate-x-16 -translate-y-10" />

      <div className="relative flex flex-col items-center gap-6">
        {/* HUD-framed logo */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Corner brackets */}
          <span className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400" />
          <span className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400" />
          <span className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400" />
          <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400" />

          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin [animation-duration:1.4s]" />

          {/* Logo, pulsing glow */}
          <div className="relative w-14 h-14 rounded-full bg-[#0a0e18] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-pulse-glow">
            <Image
              src="/jaypeedraws-icon.png"
              alt="Jaypee Draws"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Status text */}
        <div className="flex flex-col items-center gap-2 font-mono">
          <p className="text-xs tracking-[0.3em] text-cyan-300/90 uppercase">
            {isDone ? "Ready" : "Initializing"}
            <span className="inline-block w-2 text-left">
              {!isDone && <span className="animate-blink">_</span>}
            </span>
          </p>

          {/* Progress bar */}
          <div className="w-48 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-[width] duration-150 ease-linear"
              style={{ width: `${percent}%` }}
            />
          </div>

          <p className="text-lg font-bold text-white tracking-widest tabular-nums">
            {Math.min(percent, 100)}%
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-6rem);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 12px rgba(34, 211, 238, 0.4);
          }
          50% {
            box-shadow: 0 0 26px rgba(34, 211, 238, 0.75);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 1.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
