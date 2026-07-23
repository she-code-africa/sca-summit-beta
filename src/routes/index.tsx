/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Globe,
  ChevronDown,
  Mic,
  Briefcase,
  Cog,
  Handshake,
  Trophy,
  Rocket,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  ExternalLink,
  X,
  Check,
} from "lucide-react";

import scaLogomarkBlack from "@/assets/SCA_Logomark_Black.svg.asset.json";

import { SiteNav } from "@/components/site-shell";


// import scaChapter from "@/assets/sca-chapter.webp.asset.json";

// import summitEvent from "@/assets/summit-event.png.asset.json";


import {
  scaLogo,
  shecodeAfricaLogo,
  aboutTheSummit,
  sca25,
  sca13,
  sca18,
  sca12,
  sca35,
  sca22,
  sca46,
  sca15,
  sca37,
  sca18b,
  sca46b,
  sca13c,
  scaExtra42,
  scaExtra40,
  scaExtra38,
  scaExtra33,
  scaExtra23,
  scaExtra17,
  scaExtra11,
  scaSca40,
  scaSca6,
  scaSca182,
  scaSca176,
  scaSca175,
  scaSca95,
  scaSca51,
  scaSca29,
  scaSca15,
  shecodeAfrica43,
  growWithGoogle,
  techcabalLogo,
  propelLogo,
  africaLogo,
  zaycodesLogo,
  chaossAfricaLogo,
  mycovergeniusLogo,
  wetechLogo,
  sca13b,
  sca8,
} from "../Assests";


const SITE_URL = "https://she-code-africa-elevate.lovable.app";
const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/B2FviPrayEW58D2abBZnILCdsTz1/social-images/social-1781116275761-SCA_Avatar_Square_White_BG.webp";
const HOME_DESCRIPTION =
  "The flagship summit of African women in tech. Talent, builders, leaders and funders shaping the ecosystem. Lagos, 19th September 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCA Summit 2026 — A Decade of Impact" },
      { name: "description", content: HOME_DESCRIPTION },
      { name: "theme-color", content: "#b70369" },
      { property: "og:title", content: "SCA Summit 2026 — A Decade of Impact" },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { name: "twitter:title", content: "SCA Summit 2026 — A Decade of Impact" },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=thunder@200,300,400,500,600,700,800,900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "She Code Africa Summit 2026",
          description: HOME_DESCRIPTION,
          startDate: "2026-09-19T09:00:00+01:00",
          endDate: "2026-09-19T18:00:00+01:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Lagos, Nigeria",
            address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          },
          image: [SOCIAL_IMAGE],
          organizer: {
            "@type": "Organization",
            name: "She Code Africa",
            url: "https://shecodeafrica.org",
          },
          url: `${SITE_URL}/`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "She Code Africa",
          url: "https://shecodeafrica.org",
          logo: SOCIAL_IMAGE,
          sameAs: [
            "https://x.com/shecodeafrica",
            "https://instagram.com/shecodeafrica",
            "https://linkedin.com/company/shecodeafrica",
            "https://youtube.com/@shecodeafrica",
            "https://facebook.com/shecodeafrica",
          ],
        }),
      },
    ],
  }),
  component: SummitLanding,
});

const SUMMIT_DATE = new Date("2026-09-19T09:00:00").getTime();

function useCountdown() {
  const [t, setT] = useState({ d: "—", h: "—", m: "—", s: "—" });
  useEffect(() => {
    const tick = () => {
      const diff = SUMMIT_DATE - Date.now();
      if (diff <= 0) {
        setT({ d: "00", h: "00", m: "00", s: "00" });
        return;
      }
      const d = Math.floor(diff / 864e5);
      const h = Math.floor((diff % 864e5) / 36e5);
      const m = Math.floor((diff % 36e5) / 6e4);
      const s = Math.floor((diff % 6e4) / 1e3);
      setT({
        d: String(d).padStart(2, "0"),
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function SummitLanding() {
  const cd = useCountdown();
  const [videoOpen, setVideoOpen] = useState(false);
  const WAITLIST_URL =
    "https://83242d19.sibforms.com/v2/serve/MUIFAKA5_BlIOXr3eqVP-DJK8tIgo4GfB-ET2EFqFYHPhelj5zJF0dvqdw-cujXVM_fVRhuFBnd5do0JDyblj5OYC0-LlMNMrb7QeQwHJtiKDBy7p-zFQLOzu3lhOZ05-69_4sXjRf2bY6q7SQBYve-f_M2qZNshtXh_0v63NYAQaWXI80msEqNiI5g0hbodcWYY5p91onwfH2Hi";

  const loadVideo = () => {
    setVideoOpen(true);
  };

  return (
    <>
      <style>{CSS}</style>

      <SiteNav />

      <main>
        <header className="hero">
          <div className="hero-glow" />

          {/* Decorative floral elements */}
          <svg
            className="flower flower-1"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="14" fill="var(--sca-magenta)" opacity="0.9" />
            <ellipse cx="60" cy="28" rx="12" ry="22" fill="var(--sca-magenta)" opacity="0.45" />
            <ellipse cx="60" cy="92" rx="12" ry="22" fill="var(--sca-magenta)" opacity="0.45" />
            <ellipse cx="28" cy="60" rx="22" ry="12" fill="var(--sca-magenta)" opacity="0.45" />
            <ellipse cx="92" cy="60" rx="22" ry="12" fill="var(--sca-magenta)" opacity="0.45" />
            <ellipse
              cx="37"
              cy="37"
              rx="12"
              ry="20"
              transform="rotate(-45 37 37)"
              fill="var(--sca-magenta)"
              opacity="0.35"
            />
            <ellipse
              cx="83"
              cy="83"
              rx="12"
              ry="20"
              transform="rotate(-45 83 83)"
              fill="var(--sca-magenta)"
              opacity="0.35"
            />
            <ellipse
              cx="83"
              cy="37"
              rx="12"
              ry="20"
              transform="rotate(45 83 37)"
              fill="var(--sca-magenta)"
              opacity="0.35"
            />
            <ellipse
              cx="37"
              cy="83"
              rx="12"
              ry="20"
              transform="rotate(45 37 83)"
              fill="var(--sca-magenta)"
              opacity="0.35"
            />
          </svg>

          <svg
            className="flower flower-2"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="10" fill="var(--sca-magenta-dark)" opacity="0.85" />
            <ellipse cx="50" cy="25" rx="10" ry="18" fill="var(--sca-magenta)" opacity="0.4" />
            <ellipse cx="50" cy="75" rx="10" ry="18" fill="var(--sca-magenta)" opacity="0.4" />
            <ellipse cx="25" cy="50" rx="18" ry="10" fill="var(--sca-magenta)" opacity="0.4" />
            <ellipse cx="75" cy="50" rx="18" ry="10" fill="var(--sca-magenta)" opacity="0.4" />
            <ellipse
              cx="32"
              cy="32"
              rx="10"
              ry="16"
              transform="rotate(-45 32 32)"
              fill="var(--sca-magenta)"
              opacity="0.3"
            />
            <ellipse
              cx="68"
              cy="68"
              rx="10"
              ry="16"
              transform="rotate(-45 68 68)"
              fill="var(--sca-magenta)"
              opacity="0.3"
            />
            <ellipse
              cx="68"
              cy="32"
              rx="10"
              ry="16"
              transform="rotate(45 68 32)"
              fill="var(--sca-magenta)"
              opacity="0.3"
            />
            <ellipse
              cx="32"
              cy="68"
              rx="10"
              ry="16"
              transform="rotate(45 32 68)"
              fill="var(--sca-magenta)"
              opacity="0.3"
            />
          </svg>

          <svg
            className="flower flower-3"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="8" fill="var(--sca-magenta)" opacity="0.75" />
            <ellipse cx="40" cy="20" rx="8" ry="15" fill="var(--sca-magenta)" opacity="0.35" />
            <ellipse cx="40" cy="60" rx="8" ry="15" fill="var(--sca-magenta)" opacity="0.35" />
            <ellipse cx="20" cy="40" rx="15" ry="8" fill="var(--sca-magenta)" opacity="0.35" />
            <ellipse cx="60" cy="40" rx="15" ry="8" fill="var(--sca-magenta)" opacity="0.35" />
            <ellipse
              cx="26"
              cy="26"
              rx="8"
              ry="14"
              transform="rotate(-45 26 26)"
              fill="var(--sca-magenta)"
              opacity="0.25"
            />
            <ellipse
              cx="54"
              cy="54"
              rx="8"
              ry="14"
              transform="rotate(-45 54 54)"
              fill="var(--sca-magenta)"
              opacity="0.25"
            />
            <ellipse
              cx="54"
              cy="26"
              rx="8"
              ry="14"
              transform="rotate(45 54 26)"
              fill="var(--sca-magenta)"
              opacity="0.25"
            />
            <ellipse
              cx="26"
              cy="54"
              rx="8"
              ry="14"
              transform="rotate(45 26 54)"
              fill="var(--sca-magenta)"
              opacity="0.25"
            />
          </svg>

          <svg
            className="flower petal petal-1"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="20"
              cy="20"
              rx="16"
              ry="10"
              transform="rotate(30 20 20)"
              fill="var(--sca-magenta)"
              opacity="0.25"
            />
          </svg>
          <svg
            className="flower petal petal-2"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="20"
              cy="20"
              rx="14"
              ry="9"
              transform="rotate(-20 20 20)"
              fill="var(--sca-magenta-light)"
              opacity="0.3"
            />
          </svg>

          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            SHE CODE AFRICA SUMMIT 2026
          </div>

          <h1 className="hero-title">
            <span className="offwhite">A DECADE OF IMPACT</span>
            <br />
            <span className="accent">African Women Architecting</span>
            <br />
            <span className="accent">the Digital Future</span>
          </h1>

          <p className="hero-tagline">
            <strong>The flagship summit of African women in tech.</strong>
            <br />
            Talent. Builders. Leaders. Funders shaping the ecosystem.
          </p>

          <div className="event-pills">
            <span className="pill">
              <Calendar size={15} strokeWidth={2} /> 19 September 2026
            </span>
            <span className="pill">
              <MapPin size={15} strokeWidth={2} /> Lagos, Nigeria
            </span>
            <span className="pill">
              <Globe size={15} strokeWidth={2} /> In-Person + Virtual
            </span>
          </div>

          <div className="countdown" aria-label="Countdown to summit">
            <div className="cd-unit">
              <div className="cd-num">{cd.d}</div>
              <div className="cd-label">Days</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-unit">
              <div className="cd-num">{cd.h}</div>
              <div className="cd-label">Hours</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-unit">
              <div className="cd-num">{cd.m}</div>
              <div className="cd-label">Mins</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-unit">
              <div className="cd-num">{cd.s}</div>
              <div className="cd-label">Secs</div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#tickets" className="btn-primary">
              Purchase Early Bird
            </a>
            <a
              href="#partners"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("partners")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Partner with Us
            </a>
          </div>

          <div className="scroll-cue">
            <span>Scroll</span>
            <ChevronDown size={18} strokeWidth={2} />
          </div>
        </header>

        <section className="section section-theme">
          <div className="container">
            <div className="theme-layout">
              <div>
                <span className="section-label">The 10th Anniversary Summit</span>
                <h2 className="section-title">Ten Years of Building What Didn't Exist For Us.</h2>
                <div className="section-body theme-body">
                  <p>
                    For ten years, She Code Africa has helped thousands of women access
                    opportunities, build careers, launch businesses, and grow into leaders across
                    Africa's technology ecosystem.
                  </p>
                  <p>
                    SCA Summit 2026 is both a celebration of that journey and a call to action,
                    bringing together the people, organisations, and ideas that will shape what the
                    next ten years look like.
                  </p>
                  <p>
                    Whether you're looking for your next opportunity, your next hire, your next
                    investment, or your next big idea, you'll find your people here.
                  </p>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-num">50K+</div>
                  <div className="stat-label">Community Members Across Africa</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">10</div>
                  <div className="stat-label">Years of Programs, Scholarships & Impact</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">20+</div>
                  <div className="stat-label">Countries Represented</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">65k+</div>
                  <div className="stat-label">Women Trained & impacted</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-about-summit">
          <div className="container">
            <div className="about-summit-layout">
              <div className="about-summit-copy">
                <span className="section-label section-label-pill">About the Summit</span>
                <h2 className="section-title about-summit-title">
                  What to Expect at <span className="magenta-grad">SCA Summit 2026</span>
                </h2>
                <div className="section-body">
                  <p>
                    Come ready to learn, connect, celebrate, and dream bigger! SCA Summit 2026 is
                    packed with inspiring speakers, career opportunities, meaningful networking,
                    community moments, and exciting announcements that look ahead to the next decade
                    of impact.
                  </p>
                  <p>
                    Whether you're searching for your next opportunity, looking to meet incredible
                    people, or simply want to be part of the conversation shaping the future of
                    technology in Africa, this is the room you want to be in.
                  </p>
                </div>

                <div className="about-summit-stats">
                  <div className="as-stat">
                    <div className="as-num">500+</div>
                    <div className="as-label">Attendees</div>
                  </div>
                  <div className="as-stat">
                    <div className="as-num">20+</div>
                    <div className="as-label">Speakers</div>
                  </div>
                  <div className="as-stat">
                    <div className="as-num">10+</div>
                    <div className="as-label">Sessions</div>
                  </div>
                </div>
              </div>

              <div className="about-summit-media">
                <img
                  src={aboutTheSummit}
                  alt="She Code Africa Summit attendees and community"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-expect">
          <div className="container">
            <div className="expect-intro expect-intro-center">
              <div>
                <h2 className="section-title">
                  The Summit <span className="magenta-grad">Experience</span>
                </h2>
                <p className="section-subtitle">Every element is designed to amplify your growth</p>
              </div>
            </div>

            <div className="expect-grid">
              {EXPECT.map((c) => (
                <div className="expect-card" key={c.title}>
                  <div className="expect-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recap" className="section section-recap">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="section-label">SCA SUMMIT 2024</span>
            <h2 className="section-title">See What We Built Last Summit.</h2>

            <div
              className="video-wrap"
              style={{ marginTop: 40, maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}
            >
              {!videoOpen && (
                <div className="video-thumb" onClick={loadVideo}>
                  <img
                    src="https://i.ytimg.com/vi/j_oGekQqj34/hq2.jpg"
                    alt="SCA Summit 2024 Recap thumbnail"
                    className="video-thumb-img"
                    loading="lazy"
                  />
                  <div className="video-badge">SCA Summit 2024 Recap</div>
                  <div className="play-btn">▶</div>
                  <div className="video-caption">SCA Summit 2024 Official Recap</div>
                </div>
              )}
              {videoOpen && (
                <iframe
                  className="video-iframe"
                  style={{ display: "block" }}
                  src="https://www.youtube.com/embed/j_oGekQqj34"
                  title="SCA Summit 2024 Recap"
                  allow="encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          <div className="marquee" aria-label="Past summit highlights">
            <div className="marquee-track">
              {[...GALLERY, ...GALLERY].map((src, i) => (
                <div className="marquee-item" key={i}>
                  <img
                    src={src}
                    alt={`SCA Summit moment ${(i % GALLERY.length) + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="container" style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="https://youtube.com/playlist?list=PLe_ivkWIZCj_cZajO2U4BfVIaltop4ywI&si=jNOk_p7EmxrM2oFr"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              View Previous Summits →
            </a>
          </div>
        </section>

        <section id="partners" className="section section-sponsors">
          <div className="container">
            <div className="sponsors-header">
              <div>
                <span className="section-label">Past Summit Partners</span>
                <h2 className="section-title">
                  Trusted by Organisations Committed to Advancing African Women in Tech.
                </h2>
              </div>
            </div>

            <div className="sponsor-grid">
              {[
                { url: growWithGoogle, alt: "Grow with Google partner logo" },
                { url: techcabalLogo, alt: "TechCabal media partner logo" },
                { url: propelLogo, alt: "Propel partner logo" },
                { url: africaLogo, alt: "Africa ecosystem partner logo" },
                { url: zaycodesLogo, alt: "Zaycodes partner logo" },
                { url: chaossAfricaLogo, alt: "CHAOSS Africa partner logo" },
                { url: mycovergeniusLogo, alt: "MyCoverGenius partner logo" },
                { url: wetechLogo, alt: "Wetech partner logo" },
              ].map((logo) => (
                <div className="sponsor-logo" key={logo.alt}>
                  <img src={logo.url} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="sponsor-cta-box">
              <div>
                <h3>Become a 2026 Summit Partner</h3>
                <p>
                  Reach 50,000+ community members and 500+ in-person attendees across Africa.
                  Position your organisation alongside one of Africa's most recognised women-in-tech
                  movements while connecting directly with ambitious talent, founders,
                  professionals, and ecosystem leaders.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/1pZxpSxCmeiPC6sYWyuVNPPlzI30NRdfc/view"
                target="_blank"
                rel="noopener"
                className="btn-primary"
                style={{ whiteSpace: "nowrap" }}
              >
                View Partnership Deck →
              </a>
            </div>
          </div>
        </section>

        <section className="section section-waitlist" id="tickets">
          <div className="container">
            <div className="tickets-header">
              <h2 className="waitlist-title" style={{ color: "var(--sca-magenta)" }}>
                Get Your Summit Ticket
              </h2>
              <p className="waitlist-sub">
                Early bird pricing is live for a limited window. Choose the pass that fits your
                journey.
              </p>
            </div>

            <TicketGroup title="Individual Tickets" tickets={INDIVIDUAL_TICKETS} />

            <TicketGroup title="Group Tickets" tickets={GROUP_TICKETS} />

            <div className="tickets-cta-row">
              <p className="waitlist-note">
                Early bird pricing is limited. All tickets include summit access, meals, and the
                community experience. By purchasing, you agree to our{" "}
                <Link
                  to="/terms"
                  style={{ color: "var(--sca-magenta)", textDecoration: "underline" }}
                >
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner container">
          <div className="footer-brand">
            <img src={shecodeAfricaLogo} alt="She Code Africa" className="footer-logo" />
          </div>

          <div className="footer-links">
            <h4>Summit</h4>
            <a
              href="https://youtube.com/playlist?list=PLe_ivkWIZCj_cZajO2U4BfVIaltop4ywI&si=jNOk_p7EmxrM2oFr"
              target="_blank"
              rel="noopener"
            >
              Previous Summits
            </a>
            <a href="mailto:partnerships@shecodeafrica.org">partnerships@shecodeafrica.org</a>
            <a href="mailto:summit@shecodeafrica.org">summit@shecodeafrica.org</a>
          </div>

          <div className="footer-org">
            <h4>Organisation</h4>
            <a href="https://shecodeafrica.org" target="_blank" rel="noopener">
              Our Website
            </a>
            <a href="https://shecodeafrica.org/programs" target="_blank" rel="noopener">
              Programs
            </a>
            <a href="https://shecodeafrica.org/donate" target="_blank" rel="noopener">
              Donate
            </a>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

          <div className="footer-social-col">
            <h4>Follow Our Community</h4>
            <p className="footer-social-sub">
              Stay updated with event alerts, speaker opportunities, and new initiatives.
            </p>
            <div className="ql-socials">
              <a href="https://x.com/shecodeafrica" target="_blank" rel="noopener" aria-label="X">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/shecodeafrica"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/shecodeafrica"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://youtube.com/@shecodeafrica"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://tiktok.com/@shecodeafrica"
                target="_blank"
                rel="noopener"
                aria-label="TikTok"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.14V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.12z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/shecodeafrica"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>All rights reserved. She Code Africa 2026</span>
        </div>
      </footer>
    </>
  );
}

const BUY_TICKET_URL =
  "https://tix.africa/discover/she-code-africa-summit-2026/checkout?step=tickets";

type Ticket = { name: string; price: string; code: string; groupLabel?: string; perks: string[] };

const NEXT_GEN_PERKS = ["Summit access", "Networking", "Breakfast & lunch"];
const COMMUNITY_BUILDER_PERKS = [
  "Summit access",
  "Networking",
  "Breakfast & lunch",
  "Hiring Room access",
  "Entry into the raffle draw",
  "Opportunity to win a laptop",
];
const IMPACT_LEADER_PERKS = [...COMMUNITY_BUILDER_PERKS, "Reserved seating", "Summit merchandise"];
const IMPACT_ARCHITECT_PERKS = [...IMPACT_LEADER_PERKS, "Speakers Networking Access"];

const INDIVIDUAL_TICKETS: Ticket[] = [
  { name: "Next Gen", price: "₦18,460", code: "NXTG", perks: NEXT_GEN_PERKS },
  { name: "Community Builder", price: "₦27,640", code: "CMBD", perks: COMMUNITY_BUILDER_PERKS },
  { name: "Impact Leader", price: "₦41,410", code: "IMLD", perks: IMPACT_LEADER_PERKS },
  { name: "Impact Architect", price: "₦64,360", code: "IMAR", perks: IMPACT_ARCHITECT_PERKS },
];

const GROUP_TICKETS: Ticket[] = [
  {
    name: "Next Gen",
    price: "₦82,720",
    groupLabel: "Group of 5",
    code: "NGX5",
    perks: NEXT_GEN_PERKS,
  },
  {
    name: "Community Builder",
    price: "₦128,620",
    groupLabel: "Group of 5",
    code: "CBX5",
    perks: COMMUNITY_BUILDER_PERKS,
  },
  {
    name: "Impact Leader",
    price: "₦116,001",
    groupLabel: "Group of 3",
    code: "ILX3",
    perks: IMPACT_LEADER_PERKS,
  },
  {
    name: "Impact Architect",
    price: "₦120,600",
    groupLabel: "Group of 2",
    code: "IAX2",
    perks: IMPACT_ARCHITECT_PERKS,
  },
];

function TicketGroup({ title, tickets }: { title: string; tickets: Ticket[] }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);
  const visible = expanded ? tickets : tickets.slice(0, 2);
  return (
    <>
      <h3 className="tickets-group-title">{title}</h3>
      <div className="tickets-grid">
        {visible.map((t) => (
          <TicketCard
            key={t.name + (t.groupLabel ?? "")}
            logo={shecodeAfricaLogo}
            name={t.name}
            price={t.price}
            code={t.code}
            groupLabel={t.groupLabel}
            onGetTicket={() => setActiveTicket(t)}
          />
        ))}
      </div>
      {tickets.length > 2 && (
        <div className="tickets-view-more-row">
          <button className="tickets-view-more-btn" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "View Less" : `View More (${tickets.length - 2})`}
            <ChevronDown
              size={16}
              style={{
                transform: expanded ? "rotate(180deg)" : "none",
                transition: "transform .2s",
              }}
            />
          </button>
        </div>
      )}
      {activeTicket && <TicketModal ticket={activeTicket} onClose={() => setActiveTicket(null)} />}
    </>
  );
}

function TicketModal({ ticket, onClose }: { ticket: Ticket; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div className="ticket-modal-overlay" onClick={onClose}>
      <div
        className="ticket-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${ticket.name} ticket details`}
      >
        <button className="ticket-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <div className="ticket-modal-header">
          <span className="ticket-type-label">
            {ticket.groupLabel ? ticket.groupLabel.toUpperCase() : "ADMIT ONE"}
          </span>
          <h4 className="ticket-modal-name">{ticket.name}</h4>
          <div className="ticket-modal-price">{ticket.price}</div>
        </div>
        <div className="ticket-modal-body">
          <div className="ticket-modal-perks-title">What's Included</div>
          <ul className="ticket-modal-perks">
            {ticket.perks.map((p) => (
              <li key={p}>
                <Check size={14} /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={BUY_TICKET_URL}
          target="_blank"
          rel="noopener"
          className="waitlist-cta-btn ticket-modal-cta"
        >
          Buy Ticket →
        </a>
      </div>
    </div>
  );
}

function TicketCard({
  logo,
  name,
  price,
  code,
  groupLabel,
  onGetTicket,
}: {
  logo: string;
  name: string;
  price: string;
  code: string;
  groupLabel?: string;
  onGetTicket: () => void;
}) {
  return (
    <div className="ticket-card">
      <div className="ticket-left">
        <div className="ticket-brand">
          <img src={logo} alt="She Code Africa" className="ticket-logo" />
          <span className="ticket-presents">She Code Africa presents</span>
        </div>
        <div className="ticket-title-block">
          <h4 className="ticket-title">
            SCA Summit <span>2026</span>
          </h4>
          <p className="ticket-tag">A Decade of Impact</p>
        </div>
        <div className="ticket-meta">
          <div className="ticket-date-box">
            <span>19</span>
            <span>SEPT</span>
            <span>2026</span>
          </div>
          <div className="ticket-meta-details">
            <div className="ticket-meta-row">
              <MapPin size={13} /> Lagos, Nigeria
            </div>
            <div className="ticket-meta-row">
              <Calendar size={13} /> Early Bird Access
            </div>
            {groupLabel && <div className="ticket-meta-row ticket-group-pill">{groupLabel}</div>}
          </div>
        </div>
      </div>
      <div className="ticket-perf" aria-hidden="true" />
      <div
        className="ticket-right"
        data-tier={
          code.startsWith("NXTG") || code.startsWith("NGX")
            ? "next-gen"
            : code.startsWith("CMBD") || code.startsWith("CBX")
              ? "community"
              : code.startsWith("IMLD") || code.startsWith("ILX")
                ? "leader"
                : "architect"
        }
      >
        <div className="ticket-type-label">{groupLabel ? "GROUP" : "ADMIT ONE"}</div>
        <div className="ticket-type-name">{name}</div>
        <div className="ticket-price">{price}</div>
        <button className="ticket-get-btn" onClick={onGetTicket}>
          Register
        </button>
        <div className="ticket-serial">#{code}·2026·SCA</div>
      </div>
    </div>
  );
}

const EXPECT = [
  {
    icon: <Mic size={22} strokeWidth={2} />,
    title: "Keynotes & Vision Sessions",
    body: "Real conversations from global leaders who have built careers, companies, and impact across Africa and beyond.",
  },
  {
    icon: <Briefcase size={22} strokeWidth={2} />,
    title: "Careers, Leadership & Scale",
    body: "Practical insights and conversations on growth, influence, leadership, and building a career that creates impact.",
  },
  {
    icon: <Cog size={22} strokeWidth={2} />,
    title: "Capital & Opportunity",
    body: "Gain insider perspectives on funding, investment, entrepreneurship, and how opportunities are created and accessed.",
  },
  {
    icon: <Handshake size={22} strokeWidth={2} />,
    title: "Hiring & Connections",
    body: "Meet recruiters, discover opportunities, participate in career experiences, and connect with people who can help move your journey forward.",
  },
  {
    icon: <Trophy size={22} strokeWidth={2} />,
    title: "The Decade Awards",
    body: "Honouring the individuals and organisations who have shaped African women's participation in technology over the last ten years.",
  },
  {
    icon: <Rocket size={22} strokeWidth={2} />,
    title: "Landmark Launches & What's Next",
    body: "Exciting launches, community milestones, and a first look at what's next for the future of She Code Africa.",
  },
];

const GALLERY = [
  sca25,
  sca13,
  sca18,
  sca12,
  sca35,
  sca22,
  sca46,
  sca37,
  sca15,
  sca8,
  sca13b,
  sca18b,
  sca46b,
  sca13c,
  // scaChapter,
  scaExtra42,
  scaExtra40,
  scaExtra38,
  scaExtra33,
  scaExtra23,
  scaExtra17,
  scaExtra11,
  scaSca40,
  scaSca6,
  scaSca182,
  scaSca176,
  scaSca175,
  scaSca95,
  scaSca51,
  scaSca29,
  scaSca15,
];

import { SUMMIT_CSS as CSS } from "@/lib/summit-css";

