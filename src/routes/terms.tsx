import { createFileRoute } from "@tanstack/react-router";
import { SUMMIT_CSS } from "@/lib/summit-css";
import { SiteNav, SiteFooter } from "@/components/site-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — SCA Summit 2026" },
      { name: "description", content: "Terms & Conditions governing participation in the She Code Africa Summit 2026." },
      { property: "og:title", content: "Terms & Conditions — SCA Summit 2026" },
      { property: "og:description", content: "Terms & Conditions governing participation in the She Code Africa Summit 2026." },
      { property: "og:url", content: "https://she-code-africa-elevate.lovable.app/terms" },
    ],
    links: [
      { rel: "canonical", href: "https://she-code-africa-elevate.lovable.app/terms" },
    ],
  }),
  component: TermsPage,
});

type Section = { title: string; intro?: string; body?: string[]; items?: { label: string; text: string }[]; outro?: string[] };

const SECTIONS: Section[] = [
  {
    title: "1. Registration & Tickets",
    items: [
      { label: "a", text: "Registration is confirmed only upon successful payment (where applicable) and receipt of an official confirmation email from She Code Africa or its designated ticketing platform." },
      { label: "b", text: "Each ticket admits one attendee only and may not be duplicated, resold, or transferred without prior written approval from She Code Africa." },
      { label: "c", text: "Tickets are non refundable except where otherwise communicated by She Code Africa or where required by applicable law." },
      { label: "d", text: "Attendees may be required to present a valid government-issued means of identification during check in for verification purposes." },
      { label: "e", text: "Access to certain experiences, including the Hiring Room and other exclusive activities, may be restricted to designated ticket categories." },
    ],
  },
  {
    title: "2. Event Admission",
    intro: "Admission is subject to compliance with these Terms.",
    items: [
      { label: "a", text: "She Code Africa reserves the right to refuse entry or remove any individual whose behaviour threatens the safety, security, comfort, or experience of others." },
      { label: "b", text: "Seating is generally available on a first come, first served basis unless otherwise stated or reserved for specified ticket categories." },
      { label: "c", text: "She Code Africa reserves the right to modify the event programme, speakers, venue, schedule, or activities where necessary. Reasonable efforts will be made to communicate any significant changes." },
    ],
  },
  {
    title: "3. Attendee Conduct",
    intro: "She Code Africa is committed to providing a welcoming, inclusive, respectful, and harassment-free environment for all participants. Participants are expected to:",
    items: [
      { label: "a", text: "Treat everyone with dignity, respect, and professionalism." },
      { label: "b", text: "Refrain from harassment, discrimination, intimidation, hate speech, bullying, or inappropriate physical or verbal conduct." },
      { label: "c", text: "Respect venue rules and comply with instructions from event staff and venue personnel." },
      { label: "d", text: "Wear event accreditation where required." },
      { label: "e", text: "Avoid disruptive behaviour during sessions and activities." },
      { label: "f", text: "Respect the privacy of other attendees." },
    ],
    outro: ["Anyone found violating these standards may be removed from the event without refund and may be prohibited from attending future She Code Africa events."],
  },
  {
    title: "4. Photography, Recording & Media Consent",
    body: [
      "The Summit will be photographed, filmed, livestreamed, and recorded.",
      "By attending, you grant She Code Africa and its authorised partners permission to photograph, film, record, reproduce, publish, distribute, and use your image, voice, likeness, comments, and participation in any media format for promotional, educational, reporting, archival, and marketing purposes without additional notice or compensation.",
    ],
  },
  {
    title: "5. Laptop Grant",
    intro: "The Laptop Grant is designed to support women in technology who require a laptop to further their learning, career development, or technical skills. The following conditions apply:",
    items: [
      { label: "a", text: "Only attendees who purchase the designated eligible ticket tier(s) will receive the Laptop Grant application form." },
      { label: "b", text: "The application form will be sent to the email address used during ticket purchase." },
      { label: "c", text: "Applications must be submitted before the communicated deadline." },
      { label: "d", text: "Submission of an application does not guarantee selection." },
      { label: "e", text: "Applications will be assessed against the published eligibility requirements and the review committee's evaluation criteria." },
      { label: "f", text: "The review committee's decision shall be final." },
      { label: "g", text: "Successful applicants will be announced during the She Code Africa Summit 2026." },
      { label: "h", text: "Winners may be required to provide valid identification and any supporting documentation requested before receiving the laptop." },
      { label: "i", text: "She Code Africa reserves the right to withdraw the award if any false, misleading, or fraudulent information is discovered." },
      { label: "j", text: "Laptop Grants are non-transferable, non-exchangeable, and cannot be redeemed for cash." },
      { label: "k", text: "Collection arrangements for successful recipients will be communicated by the organisers." },
    ],
  },
  {
    title: "6. Hiring Room",
    intro: "The Hiring Room is designed to facilitate introductions between employers and qualified candidates. Participation is subject to the following conditions:",
    items: [
      { label: "a", text: "Access is available only to eligible ticket holders." },
      { label: "b", text: "Participation is on a first come, first served basis." },
      { label: "c", text: "Candidates will be assigned interview or engagement time slots." },
      { label: "d", text: "Sessions will be conducted in batches throughout the event." },
      { label: "e", text: "Candidates should report to the Hiring Room before their scheduled time." },
      { label: "f", text: "Late arrival may result in forfeiture of the allocated slot." },
      { label: "g", text: "Due to limited recruiter availability and event scheduling, not every participant will have the opportunity to meet every hiring organisation." },
      { label: "h", text: "Where interviews cannot be accommodated within the available timeframe, participants may submit their CVs during the event. Submitted CVs will be shared with participating hiring organisations for future consideration." },
      { label: "i", text: "By submitting a CV, participants consent to She Code Africa sharing their CV with participating hiring organisations for recruitment purposes." },
      { label: "j", text: "Participation in the Hiring Room does not guarantee an interview, internship, employment, or any further engagement." },
      { label: "k", text: "All recruitment and hiring decisions remain solely at the discretion of the participating employers." },
    ],
  },
  {
    title: "7. Awards, Giveaways & Competitions",
    intro: "The Summit may feature awards, competitions, raffles, and promotional giveaways. Unless otherwise stated:",
    items: [
      { label: "a", text: "Eligibility requirements must be met." },
      { label: "b", text: "Winners must comply with any verification requirements before receiving a prize." },
      { label: "c", text: "Decisions of the judging or review panel are final." },
      { label: "d", text: "Prizes are non transferable and may not be exchanged for cash unless otherwise stated." },
      { label: "e", text: "If a winner cannot be contacted, is absent during prize collection without prior arrangement, or is found to be ineligible, She Code Africa reserves the right to select another recipient." },
    ],
  },
  {
    title: "8. Sponsor & Partner Activations",
    body: [
      "Sponsors and partners may host exhibitions, demonstrations, networking sessions, product showcases, career opportunities, or promotional activities during the Summit.",
      "Participation in these activities is entirely voluntary.",
      "Where attendees choose to share their personal information directly with a sponsor or partner, the collection and processing of that information will be governed by the sponsor's or partner's own privacy policy.",
    ],
  },
  {
    title: "9. Personal Data",
    intro: "By registering for the Summit, you consent to She Code Africa collecting and processing your personal information for purposes including:",
    items: [
      { label: "a", text: "Event registration and administration." },
      { label: "b", text: "Ticket verification." },
      { label: "c", text: "Event communications." },
      { label: "d", text: "Hiring Room coordination." },
      { label: "e", text: "Laptop Grant administration." },
      { label: "f", text: "Awards and giveaway administration." },
      { label: "g", text: "Monitoring, evaluation, learning, and reporting." },
      { label: "h", text: "Future communications about She Code Africa programmes and events, from which you may unsubscribe at any time." },
    ],
    outro: ["Personal information will be handled responsibly and shared only where necessary for the administration of Summit activities or where required by law."],
  },
  {
    title: "10. Health & Safety",
    body: [
      "Attendees agree to comply with all venue health, safety, security, and emergency procedures.",
      "She Code Africa reserves the right to implement additional health or safety measures where required by law, venue policy, or public health guidance.",
    ],
  },
  {
    title: "11. Personal Property",
    body: [
      "Attendees remain solely responsible for their personal belongings throughout the Summit.",
      "She Code Africa shall not be liable for the loss, theft, or damage of personal property brought to or left at the event venue.",
    ],
  },
  {
    title: "12. Intellectual Property",
    body: [
      "All Summit content, including presentations, branding, graphics, publications, recordings, session materials, and other intellectual property, remains the property of She Code Africa or the respective rights holder.",
      "Attendees may not reproduce, record, distribute, publish, sell, or commercially exploit Summit content without prior written permission from She Code Africa or the relevant rights holder.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, She Code Africa shall not be liable for any indirect, incidental, consequential, or special damages arising from participation in the Summit or related activities, including outcomes associated with recruitment, networking, sponsorship opportunities, competitions, giveaways, or the Laptop Grant.",
    ],
  },
  {
    title: "14. Amendments",
    body: [
      "She Code Africa reserves the right to amend these Terms at any time. Updated Terms will be published through official Summit communication channels and will take effect immediately upon publication.",
    ],
  },
  {
    title: "15. Governing Law",
    body: [
      "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.",
    ],
  },
  {
    title: "16. Contact",
    body: [
      "Questions regarding these Terms or the Summit may be directed to the She Code Africa team through the official Summit communication channels.",
    ],
  },
  {
    title: "17. Acceptance",
    body: [
      "By purchasing a ticket, registering for, or attending the She Code Africa Summit 2026, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
    ],
  },
];

function TermsPage() {
  return (
    <>
      <style>{SUMMIT_CSS}</style>
      <style>{PAGE_CSS}</style>
      <SiteNav />

      <header className="tc-hero">
        <div className="tc-hero-gradient" aria-hidden="true" />
        <div className="tc-hero-inner">
          
          <h1>Terms &amp; Conditions</h1>
          <p>
            These Terms &amp; Conditions ("Terms") govern participation in the She Code Africa (SCA) Summit 2026 ("the Summit").
            By purchasing a ticket, registering for, attending, speaking at, exhibiting at, sponsoring, volunteering, or
            participating in any Summit-related activity, you agree to be bound by these Terms.
          </p>
        </div>
      </header>

      <main className="tc-body">
        <div className="tc-body-inner">
          {SECTIONS.map((s) => (
            <section key={s.title} className="tc-section">
              <h2>{s.title}</h2>
              {s.intro && <p className="tc-intro">{s.intro}</p>}
              {s.body?.map((p) => <p key={p} className="tc-p">{p}</p>)}
              {s.items && (
                <ul className="tc-list">
                  {s.items.map((it) => (
                    <li key={it.label}>
                      <span className="tc-label">{it.label}.</span>
                      <span>{it.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.outro?.map((p) => <p key={p} className="tc-p">{p}</p>)}
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

const PAGE_CSS = `
.tc-hero { position:relative; padding:160px 24px 70px; overflow:hidden; background:#fff; }
.tc-hero-gradient { position:absolute; inset:0; z-index:0; background:
  radial-gradient(ellipse 60% 55% at 50% 40%, rgba(183,3,105,0.20), transparent 70%),
  radial-gradient(ellipse 45% 40% at 85% 15%, rgba(240,165,0,0.14), transparent 70%),
  linear-gradient(180deg, #fdf2f7 0%, #ffffff 100%);
}
.tc-hero-inner { position:relative; max-width:820px; margin:0 auto; text-align:center; z-index:1; }
.tc-eyebrow { display:inline-block; font-family:var(--font); font-weight:700; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:var(--sca-magenta); background:rgba(183,3,105,0.08); padding:8px 16px; border-radius:100px; margin-bottom:20px; }
.tc-hero h1 { font-family:var(--font-display); font-size:clamp(40px,6vw,72px); font-weight:800; letter-spacing:0.02em; line-height:1.05; margin:0 0 20px; color:var(--sca-black); }
.tc-hero p { font-family:var(--font); font-size:clamp(15px,1.5vw,17px); line-height:1.75; color:var(--sca-grey-700); margin:0 auto; max-width:680px; }

.tc-body { padding:60px 24px 100px; background:#fff; }
.tc-body-inner { max-width:820px; margin:0 auto; display:flex; flex-direction:column; gap:56px; }
.tc-section h2 { font-family:var(--font-display); font-size:clamp(24px,2.6vw,32px); font-weight:800; letter-spacing:0.02em; color:var(--sca-magenta); margin:0 0 18px; line-height:1.15; }
.tc-intro { font-family:var(--font); font-size:16px; line-height:1.75; color:var(--sca-grey-700); margin:0 0 16px; }
.tc-p { font-family:var(--font); font-size:16px; line-height:1.75; color:var(--sca-grey-700); margin:0 0 14px; }
.tc-list { list-style:none; padding:0; margin:8px 0 0; display:flex; flex-direction:column; gap:14px; }
.tc-list li { display:grid; grid-template-columns:28px 1fr; gap:8px; font-family:var(--font); font-size:16px; line-height:1.75; color:var(--sca-grey-700); }
.tc-label { font-weight:700; color:var(--sca-magenta); }

@media (max-width:720px) {
  .tc-hero { padding:130px 20px 50px; }
  .tc-body { padding:40px 20px 70px; }
  .tc-body-inner { gap:42px; }
}
`;
