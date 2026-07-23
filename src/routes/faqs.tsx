import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SUMMIT_CSS } from "@/lib/summit-css";
import { SiteNav, SiteFooter, TicketsSection } from "@/components/site-shell";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — She Code Africa Summit 2026" },
      { name: "description", content: "Answers to common questions about tickets, venue, and access for the She Code Africa Summit 2026." },
      { property: "og:title", content: "FAQs — She Code Africa Summit 2026" },
      { property: "og:description", content: "Answers to common questions about tickets, venue, and access for the She Code Africa Summit 2026." },
      { property: "og:url", content: "https://she-code-africa-elevate.lovable.app/faqs" },
    ],
    links: [
      { rel: "canonical", href: "https://she-code-africa-elevate.lovable.app/faqs" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.text },
          })),
        }),
      },
    ],
  }),
  component: FaqsPage,
});

const FAQS: { q: string; a: React.ReactNode; text: string }[] = [
  {
    q: "What is the She Code Africa Summit 2026?",
    text: "The She Code Africa Summit 2026 is the flagship summit of African women in tech. Under the theme \"A Decade of Impact: African Women Architecting the Digital Future,\" the Summit will bring together hundreds of women in technology, founders, professionals, students, ecosystem leaders, partners, and innovators from across Africa for a day of learning, networking, collaboration, and celebration.",
    a: "The She Code Africa Summit 2026 is the flagship summit of African women in tech. Under the theme \u201CA Decade of Impact: African Women Architecting the Digital Future,\u201D the Summit will bring together hundreds of women in technology, founders, professionals, students, ecosystem leaders, partners, and innovators from across Africa for a day of learning, networking, collaboration, and celebration.",
  },
  {
    q: "When and where will the Summit take place?",
    text: "Date: Saturday, 19 September 2026. Venue: Lagos, Nigeria.",
    a: (
      <>
        <strong>Date:</strong> Saturday, 19 September 2026<br />
        <strong>Venue:</strong> Lagos, Nigeria
      </>
    ),
  },
  {
    q: "Who should attend?",
    text: "The Summit is designed for students interested in technology, aspiring and early-career professionals, software engineers, product managers, designers, data professionals, cybersecurity professionals, AI and machine learning enthusiasts, founders and entrepreneurs, career switchers, tech executives and leaders, and anyone passionate about advancing women in technology.",
    a: (
      <>
        The Summit is designed for:
        <ul className="faq-ul">
          <li>Students interested in technology</li>
          <li>Aspiring and early-career professionals</li>
          <li>Software Engineers</li>
          <li>Product Managers</li>
          <li>Designers</li>
          <li>Data Professionals</li>
          <li>Cybersecurity Professionals</li>
          <li>AI and Machine Learning enthusiasts</li>
          <li>Founders and entrepreneurs</li>
          <li>Career switchers</li>
          <li>Tech executives and leaders</li>
          <li>Anyone passionate about advancing women in technology</li>
        </ul>
      </>
    ),
  },
  {
    q: "Is the Summit free?",
    text: "The Summit is a ticketed event. Multiple ticket categories will be available to suit different attendees' needs and experiences.",
    a: "The Summit is a ticketed event. Multiple ticket categories will be available to suit different attendees\u2019 needs and experiences.",
  },
  {
    q: "What is included in my ticket?",
    text: "Benefits vary by ticket tier and may include access to keynote sessions, panel discussions, networking opportunities, sponsor exhibition area, access to recruiting partners & onsite interviews, opportunity to win a scholarship (laptop device, course scholarship etc), summit merchandise, refreshments, and exclusive experiences. Full details are available on the Tickets page.",
    a: (
      <>
        Benefits vary depending on the ticket tier and may include:
        <ul className="faq-ul">
          <li>Access to keynote sessions</li>
          <li>Panel discussions</li>
          <li>Networking opportunities</li>
          <li>Sponsor exhibition area</li>
          <li>Access to recruiting partners & onsite interviews</li>
          <li>Opportunity to win a scholarship (laptop device, course scholarship etc)</li>
          <li>Summit merchandise (selected tiers)</li>
          <li>Refreshments</li>
          <li>Access to exclusive experiences (selected tiers)</li>
        </ul>
        Full details will be available on the{" "}
        <a href="#tickets" className="faq-link" onClick={scrollToTicketsFromFaq}>Tickets page</a>.
      </>
    ),
  },
  {
    q: "How do I purchase a ticket?",
    text: "Tickets can be purchased directly through our Summit website. Once payment is successful, you'll receive a confirmation email with your ticket details and next steps.",
    a: (
      <>
        Tickets can be purchased directly through our{" "}
        <a href="#tickets" className="faq-link" onClick={scrollToTicketsFromFaq}>Summit website</a>.
        Once payment is successful, you’ll receive a confirmation email with your ticket details and next steps.
      </>
    ),
  },

  {
    q: "Will there be virtual access?",
    text: "Yes. Virtual access will be available through a paid virtual ticket. Details about pricing and access will be announced soon.",
    a: "Yes. Virtual access will be available through a paid virtual ticket. Details about pricing and access will be announced soon.",
  },
  {
    q: "Will there be childcare (daycare)?",
    text: "Yes. A dedicated daycare space will be available for parents attending the Summit. More information, including registration requirements, will be shared closer to the event.",
    a: "Yes. A dedicated daycare space will be available for parents attending the Summit. More information, including registration requirements, will be shared closer to the event.",
  },
  {
    q: "Will transportation be provided?",
    text: "She Code Africa plans to provide transportation support from selected locations in Lagos. Routes and pickup information will be communicated to registered attendees ahead of the Summit.",
    a: "She Code Africa plans to provide transportation support from selected locations in Lagos. Routes and pickup information will be communicated to registered attendees ahead of the Summit.",
  },
  {
    q: "Will sessions be recorded?",
    text: "Yes. Selected keynote sessions and panel discussions will be recorded and published on our YouTube channel.",
    a: "Yes. Selected keynote sessions and panel discussions will be recorded and published on our YouTube channel.",
  },
  {
    q: "Can I volunteer?",
    text: "Yes. Volunteer applications will open ahead of the Summit. Visit the Get Involved page for updates.",
    a: (
      <>
        Yes. Volunteer applications will open ahead of the Summit. Visit the{" "}
        <Link to="/get-involved" className="faq-link">Get Involved</Link> page for updates.
      </>
    ),
  },
  {
    q: "How can my organisation sponsor or partner with the Summit?",
    text: "We welcome organisations interested in sponsoring or partnering with the Summit. Please visit the Get Involved page or contact us via partnerships@shecodeafrica.org for more information.",
    a: (
      <>
        We welcome organisations interested in sponsoring or partnering with the Summit. Please visit the{" "}
        <Link to="/get-involved" className="faq-link">Get Involved</Link> page or contact us via{" "}
        <a href="mailto:partnerships@shecodeafrica.org" className="faq-link">partnerships@shecodeafrica.org</a>{" "}
        for more information.
      </>
    ),
  },
  {
    q: "How can I stay updated?",
    text: "Join our newsletter and follow She Code Africa across our social media platforms for the latest announcements, speaker reveals, ticket updates, and Summit news.",
    a: "Join our newsletter and follow She Code Africa across our social media platforms for the latest announcements, speaker reveals, ticket updates, and Summit news.",
  },
];

function scrollToTicketsFromFaq(e: React.MouseEvent) {
  e.preventDefault();
  const el = document.getElementById("tickets");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function FaqsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <style>{SUMMIT_CSS}</style>
      <style>{PAGE_CSS}</style>
      <SiteNav />

      <main>
      <header className="subpage-hero">
        <h1>Frequently Asked Questions <span className="faq-title-accent">(FAQs)</span></h1>
        <p>Got questions about the She Code Africa Summit 2026? Find quick answers below.</p>
      </header>

      <section className="faq-list container">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden>
                  {isOpen ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="16 17 7 17 7 8"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/></svg>
                  )}
                </span>
              </button>
              {isOpen && <div className="faq-a">{f.a}</div>}
            </div>
          );
        })}
      </section>

      <div className="subpage-back">
        <Link to="/" className="subpage-back-link">← Back to Summit home</Link>
      </div>

      <TicketsSection />
      </main>
      <SiteFooter />
    </>
  );
}

const PAGE_CSS = `
.subpage-hero { padding:160px 24px 50px; max-width:960px; margin:0 auto; text-align:center; }
.subpage-hero h1 { font-family:var(--font-display); font-size:clamp(40px,6vw,72px); font-weight:800; letter-spacing:0.01em; margin:0 0 20px; line-height:1.1; color:var(--sca-black); }
.faq-title-accent { color:var(--sca-magenta); }
.subpage-hero p { font-size:17px; color:var(--sca-grey-700); margin:0 auto; max-width:640px; line-height:1.6; }
.faq-list { max-width:1040px; padding:32px 24px 60px; display:flex; flex-direction:column; gap:16px; }
.faq-item { background:var(--sca-magenta-light); border:1px solid transparent; border-radius:18px; overflow:hidden; transition:background .2s, border-color .2s; }
.faq-item.open { background:var(--sca-magenta-xlight); border-color:rgba(183,3,105,0.18); }
.faq-q { width:100%; background:none; border:0; padding:26px 30px; display:flex; align-items:center; justify-content:space-between; gap:20px; text-align:left; font-family:var(--font); font-size:18px; font-weight:700; color:var(--sca-black); cursor:pointer; }
.faq-icon { flex-shrink:0; width:42px; height:42px; border-radius:50%; background:#fff; color:var(--sca-black); display:inline-flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.06); transition:background .2s, color .2s, transform .2s; }
.faq-item.open .faq-icon { background:var(--sca-magenta); color:#fff; }
.faq-item:hover .faq-icon { transform:scale(1.05); }
.faq-a { padding:0 30px 26px; color:var(--sca-grey-700); line-height:1.7; font-size:15px; max-width:900px; }
.faq-ul { margin:8px 0 12px; padding-left:20px; display:flex; flex-direction:column; gap:4px; }
.faq-link { color:var(--sca-magenta); text-decoration:underline; font-weight:600; cursor:pointer; }
.faq-link:hover { opacity:.8; }
.subpage-back { text-align:center; padding:0 24px 60px; }
.subpage-back-link { color:var(--sca-magenta); text-decoration:none; font-weight:600; font-size:14px; }
@media (max-width:720px) {
  .subpage-hero { padding:130px 20px 30px; }
  .faq-q { padding:20px 22px; font-size:15px; gap:12px; }
  .faq-icon { width:36px; height:36px; }
  .faq-a { padding:0 22px 20px; font-size:14px; }
}
`;

