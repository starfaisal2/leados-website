'use client';
import { useEffect, useRef } from 'react';

export default function AutoSeoIframe() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    function revealInViewport(doc: Document) {
      const h = window.innerHeight;
      doc.querySelectorAll<HTMLElement>('.reveal,.reveal-left,.reveal-right').forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.96 && r.bottom > 0) el.classList.add('in');
      });
    }

    function handleLoad() {
      const doc = iframe!.contentDocument;
      if (!doc) return;
      // Reveal above-fold elements immediately
      revealInViewport(doc);
      // Scroll-triggered reveals for below-fold sections
      doc.addEventListener('scroll', () => revealInViewport(doc!), { passive: true });
      // Safety net for elements missed by first pass
      setTimeout(() => revealInViewport(doc!), 300);
    }

    // Handle race: iframe may already be loaded before React hydrates
    if (iframe.contentDocument?.readyState === 'complete') {
      handleLoad();
    } else {
      iframe.addEventListener('load', handleLoad);
    }

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
