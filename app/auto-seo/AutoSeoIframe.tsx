'use client';
import { useEffect, useRef } from 'react';

export default function AutoSeoIframe() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    function revealInViewport(doc: Document, winH: number) {
      doc.querySelectorAll<HTMLElement>('.reveal,.reveal-left,.reveal-right').forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < winH * 0.96 && r.bottom > 0) el.classList.add('in');
      });
    }

    function handleLoad() {
      const doc = iframe!.contentDocument;
      if (!doc) return;
      const h = iframe!.contentWindow?.innerHeight || window.innerHeight;

      // Reveal above-fold elements immediately
      revealInViewport(doc, h);

      // Scroll-triggered reveals for below-fold sections
      function onScroll() {
        const wh = iframe!.contentWindow?.innerHeight || window.innerHeight;
        revealInViewport(doc!, wh);
      }
      doc.addEventListener('scroll', onScroll, { passive: true });

      // Safety net after 400ms for anything missed
      setTimeout(() => revealInViewport(doc!, h), 400);
    }

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, []);

  return (
    <iframe
      ref={ref}
      src="/auto-seo.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
      title="Auto SEO by LeadOS"
    />
  );
}
