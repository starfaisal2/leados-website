"use client";

import { useEffect, useRef, useState } from "react";

// Animated ranking-over-time chart. Position goes from ~45 → 1 over 7 months.
// Y axis is inverted: position 1 is at the top (good). Canvas-drawn for clean animation.

const DATA_POINTS = [
  { month: "Jan", pos: 48 },
  { month: "Feb", pos: 41 },
  { month: "Mar", pos: 29 },
  { month: "Apr", pos: 17 },
  { month: "May", pos: 8 },
  { month: "Jun", pos: 3 },
  { month: "Jul", pos: 1 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function RankingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DURATION = 2200;
    const PAD_L = 48, PAD_R = 28, PAD_T = 24, PAD_B = 48;
    const MAX_POS = 50;

    function draw(progress: number) {
      const dpr = window.devicePixelRatio || 1;
      const W = canvas!.clientWidth;
      const H = canvas!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.scale(dpr, dpr);

      const plotW = W - PAD_L - PAD_R;
      const plotH = H - PAD_T - PAD_B;

      ctx!.clearRect(0, 0, W, H);

      // Grid lines (horizontal)
      const gridPositions = [1, 10, 20, 30, 40, 50];
      ctx!.strokeStyle = "rgba(99,120,160,0.12)";
      ctx!.lineWidth = 1;
      gridPositions.forEach((gp) => {
        const y = PAD_T + ((gp - 1) / (MAX_POS - 1)) * plotH;
        ctx!.beginPath();
        ctx!.moveTo(PAD_L, y);
        ctx!.lineTo(PAD_L + plotW, y);
        ctx!.stroke();

        // Y labels
        ctx!.fillStyle = "rgba(100,116,139,0.6)";
        ctx!.font = "10px system-ui, sans-serif";
        ctx!.textAlign = "right";
        ctx!.fillText(`#${gp}`, PAD_L - 6, y + 4);
      });

      // X labels
      const n = DATA_POINTS.length;
      DATA_POINTS.forEach((d, i) => {
        const x = PAD_L + (i / (n - 1)) * plotW;
        ctx!.fillStyle = "rgba(100,116,139,0.6)";
        ctx!.font = "10px system-ui, sans-serif";
        ctx!.textAlign = "center";
        ctx!.fillText(d.month, x, H - PAD_B + 16);
      });

      // How many segments are visible based on progress
      const visibleCount = progress * (n - 1);

      // Build animated points
      const points: { x: number; y: number }[] = [];
      for (let i = 0; i < n; i++) {
        if (i > visibleCount) break;
        const frac = i < Math.floor(visibleCount)
          ? 1
          : visibleCount - Math.floor(visibleCount);
        const prevPt = DATA_POINTS[Math.max(0, i - 1)];
        const curPt = DATA_POINTS[i];
        const pos = i === 0 ? curPt.pos : lerp(prevPt.pos, curPt.pos, frac);
        const x = PAD_L + (i === 0 ? 0 : lerp(
          (i - 1) / (n - 1),
          i / (n - 1),
          frac
        )) * plotW;
        const y = PAD_T + ((pos - 1) / (MAX_POS - 1)) * plotH;
        points.push({ x, y });
      }

      if (points.length < 2) return;

      // Area fill (gradient green)
      const grad = ctx!.createLinearGradient(0, PAD_T, 0, PAD_T + plotH);
      grad.addColorStop(0, "rgba(22,163,74,0.22)");
      grad.addColorStop(1, "rgba(22,163,74,0.02)");
      ctx!.beginPath();
      ctx!.moveTo(points[0].x, PAD_T + plotH);
      points.forEach((p) => ctx!.lineTo(p.x, p.y));
      ctx!.lineTo(points[points.length - 1].x, PAD_T + plotH);
      ctx!.closePath();
      ctx!.fillStyle = grad;
      ctx!.fill();

      // Line
      ctx!.beginPath();
      ctx!.moveTo(points[0].x, points[0].y);
      points.forEach((p, i) => { if (i > 0) ctx!.lineTo(p.x, p.y); });
      ctx!.strokeStyle = "#16a34a";
      ctx!.lineWidth = 2.5;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";
      ctx!.stroke();

      // Dots on each full data point
      for (let i = 0; i < points.length; i++) {
        const isLast = i === points.length - 1;
        const p = points[i];
        const fullPoint = i < Math.floor(visibleCount) || (i === 0);

        if (!fullPoint && i < n - 1) continue;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, isLast ? 6 : 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = isLast ? "#16a34a" : "rgba(22,163,74,0.6)";
        ctx!.fill();
        if (isLast) {
          ctx!.strokeStyle = "rgba(22,163,74,0.3)";
          ctx!.lineWidth = 6;
          ctx!.stroke();
        }
      }

      // "#1" badge at end point (only when close to done)
      if (progress > 0.9) {
        const last = points[points.length - 1];
        const badgeAlpha = Math.min(1, (progress - 0.9) / 0.1);

        ctx!.globalAlpha = badgeAlpha;
        const bW = 56, bH = 24, bX = last.x - bW / 2, bY = last.y - bH - 14;
        ctx!.fillStyle = "#16a34a";
        ctx!.beginPath();
        ctx!.roundRect(bX, bY, bW, bH, 6);
        ctx!.fill();

        ctx!.fillStyle = "white";
        ctx!.font = "bold 11px system-ui, sans-serif";
        ctx!.textAlign = "center";
        ctx!.fillText("RANK #1", bX + bW / 2, bY + bH / 2 + 4);
        ctx!.globalAlpha = 1;
      }
    }

    function animate(now: number) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const rawProgress = Math.min(elapsed / DURATION, 1);
      const progress = easeOut(rawProgress);
      draw(progress);
      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [inView]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: 260, display: "block" }}
      aria-label="Google ranking climbing from position 48 to position 1 over 7 months"
    />
  );
}

// Simple bar chart for cost comparison.
// Uses CSS @keyframes (not inline transitions) to avoid React's shorthand/longhand
// style-diffing warnings that occur when mixing `transition` with `transitionDelay`.
export function CostCompareChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "1");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bars = [
    { label: "SEO Agency", amount: "$3,000+/mo", pct: 100, color: "#ef4444", subtext: "Average monthly retainer", delay: "0ms" },
    { label: "Content Writer", amount: "$1,500/mo", pct: 50, color: "#f97316", subtext: "1–2 articles per month", delay: "150ms" },
    { label: "Auto SEO", amount: "$99/mo", pct: 3.3, color: "#16a34a", subtext: "Unlimited articles weekly", delay: "300ms" },
  ];

  return (
    <>
      <style>{`
        @keyframes bar-grow-100 { from { width: 0% } to { width: 100% } }
        @keyframes bar-grow-50  { from { width: 0% } to { width: 50% } }
        @keyframes bar-grow-3   { from { width: 0% } to { width: 3.3% } }
        [data-visible="1"] .bar-100 { animation: bar-grow-100 1.2s cubic-bezier(0.16,1,0.3,1) 0ms   both; }
        [data-visible="1"] .bar-50  { animation: bar-grow-50  1.2s cubic-bezier(0.16,1,0.3,1) 150ms both; }
        [data-visible="1"] .bar-3   { animation: bar-grow-3   1.2s cubic-bezier(0.16,1,0.3,1) 300ms both; }
        @media (prefers-reduced-motion: reduce) {
          [data-visible="1"] .bar-100,
          [data-visible="1"] .bar-50,
          [data-visible="1"] .bar-3  { animation: none; width: var(--bar-end-w); }
        }
      `}</style>
      <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {bars.map(({ label, amount, pct, color, subtext, delay }, i) => {
          const cls = i === 0 ? "bar-100" : i === 1 ? "bar-50" : "bar-3";
          return (
            <div key={label}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9" }}>{label}</span>
                <span style={{ fontSize: 14, fontWeight: 800, color, fontVariantNumeric: "tabular-nums" }}>{amount}</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 4, height: 8, overflow: "hidden" }}>
                <div
                  className={cls}
                  style={{ height: "100%", background: color, borderRadius: 4, width: 0 }}
                />
              </div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>{subtext}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
