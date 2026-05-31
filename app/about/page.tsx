import Link from "next/link";

export const metadata = { title: "About LeadOS" };

export default function AboutPage() {
  return (
    <section className="legal-page">
      <div className="legal-shell">
        <span className="eyebrow">About LeadOS</span>
        <h1>Built for businesses that turn conversations into revenue.</h1>
        <p>
          LeadOS is an AI CRM designed around real business operations: missed inquiries,
          WhatsApp conversations, appointment booking, follow-ups, voice calls, team handoff,
          no-show recovery, and revenue reporting.
        </p>
        <p>
          We help clinics, medical centers, service businesses, restaurants, real estate teams,
          and professional service companies capture every lead, respond faster, book more
          appointments, and understand exactly which conversations create growth.
        </p>
        <div className="legal-card-grid">
          <div className="legal-card"><h3>AI Revenue Brain</h3><p>LeadOS brings conversations, booking, follow-up, and reporting into one operating system.</p></div>
          <div className="legal-card"><h3>Built for operators</h3><p>The platform is designed for teams who need practical workflows, not complex software.</p></div>
          <div className="legal-card"><h3>Multi-industry</h3><p>Clinics are a strong showcase, but LeadOS works for any business that grows through leads.</p></div>
        </div>
        <Link href="/contact" className="legal-cta">Contact LeadOS</Link>
      </div>
    </section>
  );
}
