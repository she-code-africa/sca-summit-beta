/* eslint-disable prettier/prettier */
import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  ChevronDown,
  X,
  Check,
  Menu,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";

import { scaLogo, shecodeAfricaLogo } from "@/Assests";

export const BUY_TICKET_URL =
  "https://tix.africa/discover/she-code-africa-summit-2026/checkout?step=tickets";

function scrollToTickets(
  e: React.MouseEvent,
  router: ReturnType<typeof useRouter>,
  onDone?: () => void,
) {
  e.preventDefault();
  const doScroll = () => {
    const el = document.getElementById("tickets");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  if (router.state.location.pathname === "/" || document.getElementById("tickets")) {
    doScroll();
  } else {
    router.navigate({ to: "/", hash: "tickets" }).then(() => setTimeout(doScroll, 60));
  }
  onDone?.();
}

export function SiteNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <style>{NAV_CSS}</style>
      <nav>
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={scaLogo} alt="She Code Africa" className="nav-logo-img" />
          <span className="nav-logo-text">
            <br />
          </span>
        </Link>
        <div className="nav-links nav-links-desktop">
          <Link to="/get-involved" className="nav-link">
            Get Involved
          </Link>
          <Link to="/faqs" className="nav-link">
            FAQs
          </Link>
          <a href="#tickets" className="nav-cta" onClick={(e) => scrollToTickets(e, router)}>
            Get Ticket
          </a>
        </div>
        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="nav-mobile-panel" role="dialog" aria-modal="true">
          <Link to="/" className="nav-mobile-link" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/get-involved" className="nav-mobile-link" onClick={() => setOpen(false)}>
            Get Involved
          </Link>
          <Link to="/faqs" className="nav-mobile-link" onClick={() => setOpen(false)}>
            FAQs
          </Link>
          <a
            href="#tickets"
            className="nav-cta nav-mobile-cta"
            onClick={(e) => scrollToTickets(e, router, () => setOpen(false))}
          >
            Get Ticket
          </a>
        </div>
      )}
    </>
  );
}

const NAV_CSS = `
.nav-burger { display:none; background:transparent; border:0; padding:8px; color:var(--sca-black); cursor:pointer; border-radius:8px; }
.nav-burger:hover { background:rgba(183,3,105,0.08); color:var(--sca-magenta); }
.nav-mobile-panel { position:fixed; top:96px; left:0; right:0; bottom:0; z-index:99; background:#fff; padding:24px; display:flex; flex-direction:column; gap:4px; border-top:1px solid rgba(183,3,105,0.1); animation:navSlide .18s ease-out; }
@keyframes navSlide { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
.nav-mobile-link { font-family:var(--font); font-size:18px; font-weight:600; color:var(--sca-black); text-decoration:none; padding:18px 8px; border-bottom:1px solid rgba(183,3,105,0.08); letter-spacing:-0.01em; }
.nav-mobile-link:hover { color:var(--sca-magenta); }
.nav-mobile-cta { margin-top:20px; align-self:flex-start; padding:14px 28px; font-size:15px; }
@media (max-width:820px) {
  .nav-links-desktop { display:none !important; }
  .nav-burger { display:inline-flex; align-items:center; justify-content:center; }
  nav { padding:0 20px; }
}
`;

export function SiteFooter() {
  return (
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
  );
}

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

export function TicketsSection() {
  return (
    <section className="section section-waitlist" id="tickets">
      <div className="container">
        <div className="tickets-header">
          <h2 className="waitlist-title" style={{ color: "var(--sca-magenta)" }}>
            Get Your Summit Ticket
          </h2>
          <p className="waitlist-sub">
            Early bird pricing is live for a limited window. Choose the pass that fits your journey.
          </p>
        </div>
        <TicketGroup title="Individual Tickets" tickets={INDIVIDUAL_TICKETS} />
        <TicketGroup title="Group Tickets" tickets={GROUP_TICKETS} />
        <div className="tickets-cta-row">
          <p className="waitlist-note">
            Early bird pricing is limited. All tickets include summit access, meals, and the
            community experience. By purchasing, you agree to our{" "}
            <Link to="/terms" style={{ color: "var(--sca-magenta)", textDecoration: "underline" }}>
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

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
  const tier =
    code.startsWith("NXTG") || code.startsWith("NGX")
      ? "next-gen"
      : code.startsWith("CMBD") || code.startsWith("CBX")
        ? "community"
        : code.startsWith("IMLD") || code.startsWith("ILX")
          ? "leader"
          : "architect";
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
      <div className="ticket-right" data-tier={tier}>
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
