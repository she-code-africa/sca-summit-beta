/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { SUMMIT_CSS } from "@/lib/summit-css";
import { SiteNav, SiteFooter, TicketsSection } from "@/components/site-shell";
import {
  
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
} from "@/Assests";


export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — She Code Africa Summit 2026" },
      {
        name: "description",
        content:
          "Sponsor, exhibit, partner, fund tickets, or volunteer at the She Code Africa Summit 2026 in Lagos.",
      },
      { property: "og:title", content: "Get Involved — She Code Africa Summit 2026" },
      {
        property: "og:description",
        content:
          "Sponsor, exhibit, partner, fund tickets, or volunteer at the She Code Africa Summit 2026 in Lagos.",
      },
      { property: "og:url", content: "https://she-code-africa-elevate.lovable.app/get-involved" },
    ],
    links: [{ rel: "canonical", href: "https://she-code-africa-elevate.lovable.app/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const SPONSOR_DECK_URL = "https://drive.google.com/file/d/1pZxpSxCmeiPC6sYWyuVNPPlzI30NRdfc/view";
const VOLUNTEER_FORM_URL =
  "https://docs.google.com/document/d/1wrC5YiB4_z8Q2oKXw58ZLxFmL6InUIK7A7f57-gbxjY/edit?usp=sharing";
const PARTNER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfSuV3CUIURFTOJmABNKaX1WefWm23roIGGeLF0PuiW1duwew/viewform?usp=header";

type Way = {
  title: string;
  body: string[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

const WAYS: Way[] = [
  {
    title: "Sponsor SCA Summit 2026",
    body: [
      "Support the flagship summit of African women in tech while connecting your organisation with a highly engaged community of technology professionals, emerging talent, founders and industry leaders.",
      "As a sponsor, you'll have the opportunity to increase brand visibility before, during and after the Summit, connect with top technology talent across Africa, showcase your products, services or initiatives, demonstrate your commitment to diversity, inclusion and innovation, and contribute to building a more inclusive technology ecosystem.",
    ],
    cta: "Become a Sponsor",
    href: PARTNER_FORM_URL,
    image: img1,
    imageAlt: "Sponsors and partners at the SCA Summit",
  },
  {
    title: "Book an Exhibition Booth",
    body: [
      "Showcase your products, services or innovations to a vibrant audience of technology professionals, founders, students and decision-makers.",
      "Exhibiting at the Summit provides an opportunity to engage directly with attendees, generate leads and increase brand awareness.",
    ],
    cta: "Reserve a Booth",
    href: PARTNER_FORM_URL,
    image: img2,
    imageAlt: "Exhibition booth activation at the summit",
  },
  {
    title: "Become a Media Partner",
    body: [
      "Partner with us to spotlight the voices, ideas and innovations emerging from Africa's largest gathering of women in technology.",
      "If you're a media organisation, publication, content creator or storyteller passionate about technology, innovation and impact, we'd love to work with you to share these stories with the world.",
    ],
    cta: "Become a Media Partner",
    href: PARTNER_FORM_URL,
    image: img3,
    imageAlt: "Speakers being covered on stage",
  },
  {
    title: "Sponsor an Attendee",
    body: [
      "Help make the Summit accessible to more women across our community.",
      "By sponsoring an attendee, you're creating an opportunity for someone to learn, connect, and be part of one of Africa's biggest gatherings for women in technology.",
    ],
    cta: "Sponsor a Ticket",
    href: PARTNER_FORM_URL,
    image: img4,
    imageAlt: "Community members at a previous SCA Summit",
  },
  {
    title: "Become a Logistics Partner",
    body: [
      "Every great Summit experience is made possible through collaboration.",
      "If your organisation provides event, hospitality, transportation, production, catering, technology or other event support services, we'd love to explore how we can work together to deliver an exceptional experience for our attendees.",
    ],
    cta: "Partner With Us",
    href: PARTNER_FORM_URL,
    image: img5,
    imageAlt: "Summit operations and on-ground team",
  },
  {
    title: "Join the Hiring Room",
    body: [
      "The Hiring Room connects recruiters and talent teams directly with a curated pool of skilled African women in tech at no cost. From early-career builders to senior engineers, designers, and product leaders.",
      "Participate as a recruiting partner to run on-ground interviews, collect CVs and meet candidates ready for their next role within your team.",
    ],
    cta: "Recruit With Us",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd1qfzsxRT87iHqkWhZQOoq-8SQ0wGMgXAgpWZmucu1vehx1Q/viewform",
    image: img7,
    imageAlt: "Recruiters meeting candidates at the summit hiring room",
  },
  {
    title: "Volunteer With Us",
    body: [
      "Be part of the support team that brings the She Code Africa Summit to life.",
      "From welcoming attendees and supporting speakers to creating memorable behind-the-scenes experiences, our volunteers play an important role in making the Summit a success.",
      "If you are looking to give back, gain hands-on event experience, or connect with like-minded people, we'd love to have you on the team.",
    ],
    cta: "Apply to Volunteer",
    href: VOLUNTEER_FORM_URL,
    image: img6,
    imageAlt: "Volunteer team supporting the summit",
  },
];

function GetInvolvedPage() {
  return (
    <>
      <style>{SUMMIT_CSS}</style>
      <style>{PAGE_CSS}</style>
      <SiteNav />

      <main>
        <header className="gi-hero">
          <div className="gi-hero-gradient" aria-hidden="true" />
          <div className="gi-hero-inner">
            <h1>
              Get Involved
              <br />
              There's a Place for You at #SCASummit26
            </h1>
            <p>
              As we celebrate our 10th year milestone at this year's Summit, we're inviting
              individuals, organisations, and communities to play a part in shaping the next decade
              of impact. 
            </p>
            <p>
              No matter how you would like to contribute, there are many ways to be part of the She
              Code Africa Summit 2026, from attending and volunteering to sponsoring, partnering, or
              supporting someone else's journey.
            </p>
            <p>{"\n"}</p>
            <div className="gi-hero-cta">
              <a
                href="#tickets"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("tickets")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Purchase Early Bird
              </a>
              <a href={SPONSOR_DECK_URL} target="_blank" rel="noopener" className="btn-ghost">
                Talk to Partnerships
              </a>
            </div>
          </div>
        </header>

        <section className="gi-ways">
          {WAYS.map((w, i) => (
            <WayRow key={w.title} way={w} reverse={i % 2 === 1} index={i} />
          ))}
        </section>

        <TicketsSection />
      </main>
      <SiteFooter />
    </>
  );
}

function WayRow({ way, reverse, index }: { way: Way; reverse: boolean; index: number }) {
  return (
    <div className={`gi-row ${reverse ? "gi-row-reverse" : ""}`}>
      <div className="gi-row-media">
        <div className="gi-media-blob" aria-hidden="true" />
        <img src={way.image} alt={way.imageAlt} loading={index < 2 ? "eager" : "lazy"} />
      </div>
      <div className="gi-row-copy">
        <span className="gi-row-index">0{index + 1}</span>
        <h2>{way.title}</h2>
        {way.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <a href={way.href} className="gi-row-cta">
          {way.cta}
        </a>
      </div>
    </div>
  );
}

const PAGE_CSS = `
.gi-hero { position:relative; padding:170px 24px 90px; overflow:hidden; background:#fff; }
.gi-hero-gradient { position:absolute; inset:0; z-index:0; background:
  radial-gradient(ellipse 60% 55% at 50% 45%, rgba(183,3,105,0.22), transparent 70%),
  radial-gradient(ellipse 50% 40% at 80% 20%, rgba(183,3,105,0.18), transparent 70%),
  radial-gradient(ellipse 45% 40% at 20% 80%, rgba(183,3,105,0.12), transparent 70%),
  linear-gradient(180deg, #fdf2f7 0%, #ffffff 100%);
}
.gi-hero-squiggle { position:absolute; inset:0; width:100%; height:100%; z-index:1; pointer-events:none; }
.gi-flower { position:absolute; z-index:1; pointer-events:none; }
.gi-flower-tr-1 { top:-40px; right:-30px; width:230px; height:230px; }
.gi-flower-tr-2 { top:150px; right:40px; width:200px; height:200px; }
.gi-flower-bl { bottom:-70px; left:-60px; width:260px; height:260px; }
.gi-hero-inner { position:relative; max-width:880px; margin:0 auto; text-align:center; z-index:2; }
.gi-hero h1 { font-family:var(--font-display); font-size:clamp(40px,6.4vw,80px); font-weight:800; letter-spacing:0.02em; line-height:1.05; margin:0 0 22px; color:var(--sca-black); }
.gi-hero p { font-family:var(--font); font-size:clamp(15px,1.6vw,18px); line-height:1.7; color:var(--sca-grey-700); max-width:640px; margin:0 auto 32px; }
.gi-hero-cta { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }

.gi-ways { padding:80px 24px 60px; max-width:1180px; margin:0 auto; display:flex; flex-direction:column; gap:110px; }
.gi-row { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
.gi-row-reverse { direction:rtl; }
.gi-row-reverse > * { direction:ltr; }

.gi-row-media { position:relative; aspect-ratio:4/3; }
.gi-media-blob { position:absolute; inset:-24px -24px auto auto; width:70%; height:70%; background:var(--sca-magenta-light); border-radius:40% 60% 55% 45% / 45% 40% 60% 55%; z-index:0; }
.gi-row:nth-child(even) .gi-media-blob { background:rgba(240,165,0,0.18); inset:auto auto -24px -24px; border-radius:60% 40% 45% 55% / 55% 60% 40% 45%; }
.gi-row-media img { position:relative; z-index:1; width:100%; height:100%; object-fit:cover; border-radius:24px; box-shadow:0 30px 60px -30px rgba(31,10,60,0.35); }

.gi-row-copy { display:flex; flex-direction:column; gap:16px; }
.gi-row-index { font-family:var(--font-display); font-size:56px; font-weight:800; color:var(--sca-magenta); letter-spacing:0.04em; line-height:1; opacity:0.35; }
.gi-row-copy h2 { font-family:var(--font-display); font-size:clamp(30px,3.4vw,44px); font-weight:800; letter-spacing:0.02em; line-height:1.1; margin:0; color:var(--sca-black); }
.gi-row-copy p { font-family:var(--font); font-size:16px; line-height:1.75; color:var(--sca-grey-700); margin:0; }
.gi-row-cta { align-self:flex-start; margin-top:12px; display:inline-flex; align-items:center; gap:8px; background:var(--sca-magenta); color:#fff; padding:14px 28px; border-radius:100px; font-family:var(--font); font-weight:700; font-size:14px; text-decoration:none; letter-spacing:0.01em; transition:background .18s, transform .18s, box-shadow .18s; box-shadow:0 8px 24px -8px rgba(183,3,105,0.55); }
.gi-row-cta:hover { background:var(--sca-magenta-dark); transform:translateY(-2px); box-shadow:0 12px 30px -8px rgba(183,3,105,0.65); }

@media (max-width:860px) {
  .gi-ways { gap:72px; padding:60px 20px 40px; }
  .gi-row { grid-template-columns:1fr; gap:32px; }
  .gi-row-reverse { direction:ltr; }
  .gi-row-media { aspect-ratio:5/4; }
  .gi-row-index { font-size:44px; }
}
`;
