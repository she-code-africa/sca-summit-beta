export const SUMMIT_CSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --sca-magenta:#b70369; --sca-magenta-dark:#8f024f; --sca-magenta-light:#f5e6ef; --sca-magenta-xlight:#fbcfe0;
  --sca-purple:#1f0a3c; --sca-purple-mid:#2d0f52;
  --sca-black:#0d0d0d; --sca-grey-900:#1a1a2e; --sca-grey-700:#4a4a6a; --sca-grey-500:#7a7a9a; --sca-grey-300:#c4c4d8; --sca-grey-100:#f4f4f8; --sca-white:#fff;
  --sca-gold:#f0a500;
  --font:'Figtree',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  --font-display:'Thunder',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  --max-w:1160px; --section-pad:96px 24px;
}
html { scroll-behavior:smooth; }
body { font-family:var(--font); color:var(--sca-black); background:var(--sca-white); overflow-x:hidden; -webkit-font-smoothing:antialiased; }

nav { position:fixed; top:0; left:0; right:0; z-index:100; height:96px; display:flex; align-items:center; justify-content:space-between; padding:0 40px; background:#fff; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-bottom:1px solid rgba(183,3,105,0.1); }
.nav-logo { display:flex; align-items:center; gap:12px; text-decoration:none; }
.nav-logo-img { height:26px; width:auto; display:block; }
.nav-logo-text { font-size:20px; font-weight:800; color:var(--sca-black); letter-spacing:-0.02em; line-height:1; font-family:var(--font-display); }
.nav-logo-text span { color:var(--sca-magenta); }
.nav-cta { background:var(--sca-magenta); color:#fff; padding:10px 22px; border-radius:100px; font-size:14px; font-weight:600; text-decoration:none; transition:background .18s, transform .18s; letter-spacing:-0.01em; font-family:var(--font); }
.nav-cta:hover { background:var(--sca-magenta-dark); transform:translateY(-1px); }
.nav-links { display:flex; align-items:center; gap:28px; }
.nav-link { font-size:14px; font-weight:600; color:var(--sca-black); text-decoration:none; font-family:var(--font); letter-spacing:-0.01em; transition:color .18s; }
.nav-link:hover { color:var(--sca-magenta); }

.hero { min-height:100vh; background:#fdfbf9; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:150px 24px 80px; position:relative; overflow:hidden; font-family:var(--font-display); }
.hero-glow { position:absolute; top:40%; left:50%; transform:translate(-50%,-50%); width:700px; height:500px; background:radial-gradient(ellipse at center, rgba(183,3,105,0.10) 0%, transparent 68%); pointer-events:none; }
.flower { position:absolute; pointer-events:none; z-index:0; }
.flower-1 { top:10%; left:8%; width:140px; height:140px; animation:flowerFloat 6s ease-in-out infinite; }
.flower-2 { bottom:18%; right:10%; width:100px; height:100px; animation:flowerFloat 7s ease-in-out infinite 1s; }
.flower-3 { top:28%; right:18%; width:70px; height:70px; animation:flowerFloat 5s ease-in-out infinite 0.5s; }
.petal { width:40px; height:40px; }
.petal-1 { bottom:22%; left:15%; animation:petalDrift 8s ease-in-out infinite; }
.petal-2 { top:18%; right:6%; animation:petalDrift 9s ease-in-out infinite 2s; }
@keyframes flowerFloat { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-12px) rotate(4deg);} }
@keyframes petalDrift { 0%,100%{transform:translateY(0) translateX(0) rotate(0deg);} 33%{transform:translateY(-8px) translateX(4px) rotate(3deg);} 66%{transform:translateY(-4px) translateX(-3px) rotate(-2deg);} }
.hero-eyebrow { position:relative; display:inline-flex; align-items:center; gap:10px; background:rgba(183,3,105,0.08); border:1px solid rgba(183,3,105,0.20); color:var(--sca-magenta); font-size:12px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; padding:7px 18px; border-radius:100px; margin-bottom:14px; font-family:var(--font-sans); }
.eyebrow-dot { width:6px; height:6px; background:var(--sca-magenta); border-radius:50%; animation:pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.5;transform:scale(.7);} }
.hero-title { position:relative; width:100%; max-width:min(1180px, calc(100vw - 32px)); font-size:clamp(42px,7vw,92px); font-weight:900; line-height:1.15; letter-spacing:0.04em; color:var(--sca-black); margin-bottom:10px; padding:0 32px; overflow:visible; font-family:var(--font-display); }
.hero-title .offwhite { display:inline-block; color:var(--sca-black); font-style:normal; font-family:var(--font-sans); font-size:clamp(20px,2.4vw,32px); font-weight:600; letter-spacing:0.22em; text-transform:uppercase; line-height:1.4; margin-bottom:18px; }
.hero-title .accent { display:inline-block; color:var(--sca-magenta); font-style:normal; padding-right:.06em; margin-right:-.06em; }
.hero-tagline { position:relative; font-family:var(--font-sans); font-size:clamp(15px,1.8vw,18px); font-weight:400; color:var(--sca-grey-700); max-width:520px; line-height:1.7; margin:20px auto 40px; letter-spacing:0.01em; }
.hero-tagline strong { color:var(--sca-black); font-weight:600; }
.event-pills { position:relative; display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:48px; font-family:var(--font-sans); }
.pill { display:inline-flex; align-items:center; gap:7px; background:rgba(183,3,105,0.06); border:1px solid rgba(183,3,105,0.12); color:#B70569; font-size:13px; font-weight:500; padding:8px 18px; border-radius:100px; letter-spacing:0.01em; }
.countdown { position:relative; display:flex; gap:16px; justify-content:center; flex-wrap:nowrap; margin-bottom:48px; font-family:var(--font-sans); }
.cd-unit { display:flex; flex-direction:column; align-items:center; gap:8px; }
.cd-num { font-family:var(--font-display); font-size:clamp(44px,6vw,76px); font-weight:800; letter-spacing:0.02em; line-height:1; color:var(--sca-black); min-width:86px; text-align:center; background:#fff; border:1px solid rgba(183,3,105,0.15); border-radius:14px; padding:14px 16px; box-shadow:0 0 0 1px rgba(183,3,105,0.05), inset 0 1px 0 rgba(255,255,255,0.05); }
.cd-label { font-family:var(--font-sans); font-size:10px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--sca-grey-700); }
.cd-sep { font-family:var(--font-sans); font-size:44px; font-weight:300; color:var(--sca-magenta-light); line-height:1; align-self:flex-start; padding-top:18px; }
.hero-actions { position:relative; display:flex; flex-wrap:wrap; gap:12px; justify-content:center; }
.hero-actions .btn-primary { font-family:var(--font-sans); }
.btn-primary { display:inline-flex; align-items:center; gap:8px; background:var(--sca-magenta); color:#fff; padding:15px 32px; border-radius:100px; font-size:15px; font-weight:700; text-decoration:none; letter-spacing:-0.01em; transition:background .18s, transform .18s, box-shadow .18s; box-shadow:0 4px 24px rgba(183,3,105,0.45); border:none; cursor:pointer; font-family:var(--font); }
.btn-primary:hover { background:var(--sca-magenta-dark); transform:translateY(-2px); box-shadow:0 8px 32px rgba(183,3,105,0.55); }
.btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:var(--sca-grey-700); padding:15px 32px; border-radius:100px; font-size:15px; font-weight:600; letter-spacing:-0.01em; border:1px solid rgba(0,0,0,0.15); transition:border-color .18s, color .18s; cursor:pointer; font-family:var(--font-sans); }
.btn-ghost:hover { border-color:var(--sca-magenta); color:var(--sca-magenta); }
.scroll-cue { position:absolute; bottom:36px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:6px; color:var(--sca-grey-700); animation:bob 2.2s ease-in-out infinite; }
.scroll-cue span { font-size:9px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; font-family:var(--font-sans); }
@keyframes bob { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(7px);} }

.section { padding:var(--section-pad); }
.container { max-width:var(--max-w); margin:0 auto; }
.section-label { display:block; font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:var(--sca-magenta); margin-bottom:16px; }
.section-title { font-size:clamp(28px,3.5vw,44px); font-weight:800; letter-spacing:0.03em; line-height:1.15; color:var(--sca-black); margin-bottom:20px; font-family:var(--font-display); }
.section-body { font-size:16px; line-height:1.75; color:var(--sca-grey-700); max-width:640px; }

.section-theme { background:var(--sca-magenta-xlight); }
.theme-layout { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:stretch; }
.theme-body p + p { margin-top:14px; }
.stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; grid-auto-rows:1fr; height:100%; }
.stat-card { background:#fff; border:1px solid var(--sca-magenta-light); border-radius:16px; padding:28px 24px; display:flex; flex-direction:column; justify-content:center; }
.stat-num { font-size:48px; font-weight:900; letter-spacing:0.02em; color:var(--sca-magenta); line-height:1; margin-bottom:6px; font-family:var(--font-display); }
.stat-label { font-size:13px; font-weight:500; color:var(--sca-grey-700); line-height:1.4; }

.section-about-summit { background:#0a0a0a; padding-bottom:40px; position:relative; }
.section-about-summit .about-summit-title { color:#fff; }
.section-about-summit .about-summit-copy .section-body p { color:rgba(255,255,255,0.72); }
.section-about-summit .as-label { color:rgba(255,255,255,0.55); }
.section-about-summit .about-summit-stats { border-top-color:rgba(183,3,105,0.35); }
.section-about-summit + .section-expect { padding-top:40px; }
.about-summit-layout { display:grid; grid-template-columns:1.05fr 1fr; gap:64px; align-items:center; }
.section-label-pill { display:inline-block; background:#fff; color:var(--sca-magenta); padding:8px 18px; border-radius:100px; font-weight:700; letter-spacing:.14em; font-size:11px; box-shadow:0 4px 14px -6px rgba(183,3,105,0.25); }
.about-summit-title { font-size:clamp(36px,4.6vw,56px); line-height:1.15; margin:22px 0 24px; letter-spacing:0.03em; font-family:var(--font-display); }
.magenta-grad { background:linear-gradient(135deg,var(--sca-magenta) 0%, #f06cac 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }
.about-summit-copy .section-body p { margin-bottom:16px; color:var(--sca-grey-700); }
.about-summit-stats { display:flex; gap:40px; margin-top:36px; padding-top:28px; border-top:1px solid rgba(183,3,105,0.18); flex-wrap:wrap; }
.as-num { font-size:42px; font-weight:800; color:var(--sca-magenta); letter-spacing:0.02em; line-height:1; font-family:var(--font-display); }
.as-label { font-size:11px; letter-spacing:.16em; color:var(--sca-grey-700); text-transform:uppercase; margin-top:8px; font-weight:600; }
.about-summit-media { border-radius:20px; overflow:hidden; border:6px solid var(--sca-magenta); box-shadow:0 30px 60px -20px rgba(183,3,105,0.45); aspect-ratio:4/3; }
.about-summit-media img { width:100%; height:100%; object-fit:cover; display:block; }

.section-expect { background:var(--sca-magenta-xlight); padding-bottom:48px; }
.section-recap { padding-top:48px; padding-bottom:48px; }
.expect-intro { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:48px; flex-wrap:wrap; gap:24px; }
.expect-intro-center { justify-content:center; text-align:center; }
.expect-intro .section-title { margin-bottom:8px; }
.section-subtitle { color:var(--sca-grey-700); font-size:16px; }
.expect-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.expect-card { position:relative; background:#fff; border:1px solid rgba(0,0,0,0.04); border-radius:20px; padding:32px 28px; transition:transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s; cursor:pointer; }
.expect-card:hover { transform:translateY(-6px); box-shadow:0 24px 50px -18px rgba(183,3,105,0.28); }
.expect-card:hover .expect-icon { background:linear-gradient(135deg,var(--sca-magenta) 0%, #f06cac 100%); color:#fff; box-shadow:0 10px 24px -8px rgba(183,3,105,0.55); transform:scale(1.05); }
.expect-card:hover h3 { color:var(--sca-magenta); }
.expect-icon { width:56px; height:56px; background:var(--sca-magenta-light); color:var(--sca-magenta); border-radius:14px; display:inline-flex; align-items:center; justify-content:center; margin-bottom:20px; transition:background .35s, color .35s, transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s; }
.expect-card h3 { font-size:17px; font-weight:700; color:var(--sca-black); margin-bottom:8px; letter-spacing:-0.01em; transition:color .35s; font-family:var(--font-sans); }
.expect-card p { font-size:14px; line-height:1.7; color:var(--sca-grey-700); }

.section-recap { background:var(--sca-magenta-xlight); }
.recap-layout { display:grid; grid-template-columns:1fr 420px; gap:56px; align-items:start; }
.video-wrap { aspect-ratio:16/9; border-radius:16px; overflow:hidden; background:var(--sca-grey-100); border:3px solid var(--sca-magenta); box-shadow:0 0 0 4px rgba(183,3,105,0.12), 0 8px 30px rgba(183,3,105,0.15); position:relative; }
.video-thumb { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; background:#0a0a0a; cursor:pointer; overflow:hidden; }
.video-thumb-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0; }
.video-badge { position:absolute; top:16px; left:16px; z-index:2; background:var(--sca-magenta-xlight); color:var(--sca-magenta-dark); font-size:12px; font-weight:700; letter-spacing:0.04em; padding:8px 16px; border-radius:100px; border:1px solid rgba(183,3,105,0.15); }
.video-thumb .play-btn, .video-thumb .video-caption { position:relative; z-index:1; }
.play-btn { width:64px; height:64px; background:var(--sca-magenta); border-radius:50%; display:flex; align-items:center; justify-content:center; transition:background .18s, transform .18s; box-shadow:0 0 0 8px rgba(183,3,105,0.2); color:#fff; font-size:20px; }
.play-btn:hover { background:var(--sca-magenta-dark); transform:scale(1.08); }
.video-caption { font-size:13px; color:rgba(255,255,255,0.5); font-weight:500; }
.video-iframe { width:100%; height:100%; border:0; }
.gallery-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.gallery-item { aspect-ratio:4/3; border-radius:12px; overflow:hidden; background:var(--sca-grey-100); border:1px solid rgba(0,0,0,0.06); position:relative; }
.gallery-placeholder { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#f5e6ef 0%, #ede0f7 100%); font-size:26px; color:var(--sca-magenta); opacity:.4; }
.marquee { margin-top:48px; overflow:hidden; position:relative; mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); -webkit-mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.marquee-track { display:flex; gap:16px; width:max-content; animation:marquee 80s linear infinite; }
.marquee:hover .marquee-track { animation-play-state:paused; }
.marquee-item { width:320px; aspect-ratio:4/3; border-radius:14px 40px 14px 40px; overflow:hidden; flex-shrink:0; background:var(--sca-grey-100); border:3px solid var(--sca-magenta); box-shadow:0 0 0 4px rgba(183,3,105,0.12), 0 8px 30px rgba(183,3,105,0.15); }
.marquee-item:nth-child(even) { border-radius:40px 14px 40px 14px; }
.marquee-item img { width:100%; height:100%; object-fit:cover; display:block; }
@keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }

.section-sponsors { background:#f8f6f4; }
.sponsors-header { display:flex; justify-content:center; align-items:center; text-align:center; margin-bottom:48px; flex-wrap:wrap; gap:20px; }
.sponsor-grid { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-bottom:8px; }
.sponsor-logo { background:#fff; border:1px solid rgba(0,0,0,0.08); border-radius:10px; height:72px; flex:0 1 220px; display:flex; align-items:center; justify-content:center; padding:12px 18px; transition:border-color .18s, box-shadow .18s; }
.sponsor-logo:hover { border-color:var(--sca-magenta); box-shadow:0 4px 16px rgba(183,3,105,0.1); }
.sponsor-logo img { max-width:100%; max-height:100%; object-fit:contain; display:block; }
@media (max-width:900px) { .sponsor-logo { flex:0 1 200px; } }
@media (max-width:600px) { .sponsor-logo { flex:0 1 calc(50% - 8px); max-width:220px; } }

.sponsor-cta-box { background:#0a0a0a; border-radius:20px; padding:40px 48px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; margin-top:48px; }
.sponsor-cta-box h3 { font-size:22px; font-weight:800; color:#fff; letter-spacing:0.02em; line-height:1.2; margin-bottom:6px; font-family:var(--font-display); }
.sponsor-cta-box p { font-size:14px; color:rgba(255,255,255,0.55); max-width:520px; line-height:1.6; }

.section-waitlist { background:#0a0a0a; padding:var(--section-pad); text-align:center; position:relative; overflow:hidden; }
.section-waitlist::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at center, rgba(183,3,105,0.18) 0%, transparent 65%); pointer-events:none; }
.section-waitlist > * { position:relative; }
.waitlist-card { background:rgba(15,5,10,0.75); border:1px solid rgba(183,3,105,0.30); border-radius:28px; padding:56px 48px; max-width:760px; margin:0 auto; box-shadow:0 0 60px rgba(183,3,105,0.12), inset 0 0 0 1px rgba(183,3,105,0.08); }
.waitlist-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(183,3,105,0.12); border:1px solid rgba(183,3,105,0.22); color:rgba(255,255,255,0.85); font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:8px 18px; border-radius:100px; margin-bottom:28px; }
.waitlist-badge::before { content:""; width:6px; height:6px; background:var(--sca-magenta); border-radius:50%; animation:pulse 2s ease-in-out infinite; }
.waitlist-title { font-size:clamp(32px,4.5vw,56px); font-weight:900; color:#fff; letter-spacing:0.03em; line-height:1.15; margin-bottom:8px; font-family:var(--font-display); }
.waitlist-accent { font-size:clamp(24px,3.5vw,40px); font-weight:800; color:var(--sca-magenta); letter-spacing:-0.02em; line-height:1.4; margin-bottom:24px; font-family:var(--font-sans); }
.waitlist-sub { font-size:16px; color:rgba(255,255,255,0.65); max-width:520px; margin:0 auto 36px; line-height:1.65; }
.waitlist-form { max-width:520px; margin:0 auto; }
.waitlist-input-bar { display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(183,3,105,0.25); border-radius:100px; padding:6px 6px 6px 18px; }
.waitlist-input-bar svg { color:rgba(255,255,255,0.35); flex-shrink:0; }
.waitlist-input-bar .waitlist-input { flex:1; min-width:0; padding:10px 4px; border-radius:0; border:none; background:transparent; color:#fff; font-family:var(--font); font-size:15px; outline:none; }
.waitlist-input-bar .waitlist-input::placeholder { color:rgba(255,255,255,0.35); }
.waitlist-input-bar .waitlist-input:focus { background:transparent; border:none; }
.waitlist-input-bar .btn-white { display:inline-flex; align-items:center; gap:8px; background:var(--sca-magenta); color:#fff; padding:12px 24px; border-radius:100px; font-size:14px; font-weight:700; border:none; cursor:pointer; letter-spacing:-0.01em; transition:background .18s, transform .18s; font-family:inherit; white-space:nowrap; }
.waitlist-input-bar .btn-white:hover { background:var(--sca-magenta-dark); transform:translateY(-1px); }
.waitlist-cta-btn { display:inline-flex; align-items:center; gap:8px; background:var(--sca-magenta); color:#fff; padding:16px 36px; border-radius:100px; font-size:15px; font-weight:700; border:none; cursor:pointer; letter-spacing:-0.01em; transition:background .18s, transform .18s; text-decoration:none; font-family:var(--font); }
.waitlist-cta-btn:hover { background:var(--sca-magenta-dark); transform:translateY(-1px); }
.waitlist-note { margin-top:16px; font-size:12px; color:rgba(255,255,255,0.55); }

.tickets-header { text-align:center; max-width:760px; margin:0 auto 48px; }
.tickets-header .waitlist-title { margin-bottom:6px; }
.tickets-header .waitlist-sub { margin-bottom:0; }
.tickets-group-title { font-family:var(--font-display); color:#fff; font-size:22px; letter-spacing:0.14em; text-transform:uppercase; text-align:center; margin:40px 0 24px; position:relative; display:flex; align-items:center; justify-content:center; gap:16px; }
.tickets-group-title::before, .tickets-group-title::after { content:""; flex:0 1 60px; height:1px; background:rgba(183,3,105,0.4); }
.tickets-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px; max-width:1120px; margin:0 auto; }
@media (max-width:820px) { .tickets-grid { grid-template-columns:1fr; } }

.ticket-card { display:flex; background:#faf7f2; border-radius:14px; overflow:hidden; box-shadow:0 20px 50px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(183,3,105,0.15); position:relative; min-height:230px; transition:transform .25s, box-shadow .25s; }
.ticket-card:hover { transform:translateY(-4px); box-shadow:0 30px 60px -20px rgba(183,3,105,0.4), 0 0 0 1px rgba(183,3,105,0.35); }
.ticket-left { flex:1 1 62%; padding:22px 22px 22px 26px; display:flex; flex-direction:column; justify-content:space-between; gap:16px; color:#1a0810; text-align:left; background:linear-gradient(135deg,#faf7f2 0%,#f3e6ee 100%); }
.ticket-brand { display:flex; align-items:center; gap:12px; }
.ticket-logo { height:38px; width:auto; object-fit:contain; }
.ticket-presents { font-family:var(--font-sans); font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--sca-magenta); }
.ticket-title-block { line-height:1; }
.ticket-title { font-family:var(--font-display); font-size:32px; font-weight:800; letter-spacing:0.03em; color:#0a0a0a; line-height:1; margin:0; }
.ticket-title span { color:var(--sca-magenta); }
.ticket-tag { font-family:var(--font-sans); font-size:12px; color:rgba(10,10,10,0.65); margin:6px 0 0; letter-spacing:0.02em; }
.ticket-meta { display:flex; gap:14px; align-items:stretch; }
.ticket-date-box { display:flex; flex-direction:column; align-items:center; justify-content:center; background:#0a0a0a; color:#fff; border-radius:10px; padding:8px 12px; min-width:64px; line-height:1.1; }
.ticket-date-box span:nth-child(1) { font-family:var(--font-display); font-size:22px; font-weight:800; letter-spacing:0.02em; }
.ticket-date-box span:nth-child(2) { font-family:var(--font-sans); font-size:10px; font-weight:700; letter-spacing:0.16em; margin-top:2px; }
.ticket-date-box span:nth-child(3) { font-family:var(--font-sans); font-size:9px; font-weight:600; letter-spacing:0.14em; color:rgba(255,255,255,0.6); margin-top:2px; }
.ticket-meta-details { display:flex; flex-direction:column; justify-content:center; gap:6px; }
.ticket-meta-row { display:inline-flex; align-items:center; gap:6px; font-family:var(--font-sans); font-size:12px; color:rgba(10,10,10,0.75); font-weight:500; }
.ticket-meta-row svg { color:var(--sca-magenta); }
.ticket-group-pill { background:var(--sca-magenta); color:#fff; padding:3px 10px; border-radius:100px; font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; align-self:flex-start; }
.ticket-perf { width:2px; background-image:radial-gradient(circle, rgba(10,10,10,0.35) 1px, transparent 1.5px); background-size:2px 8px; background-repeat:repeat-y; position:relative; }
.ticket-perf::before, .ticket-perf::after { content:""; position:absolute; left:50%; transform:translateX(-50%); width:16px; height:16px; background:#0a0a0a; border-radius:50%; }
.ticket-perf::before { top:-8px; }
.ticket-perf::after { bottom:-8px; }
.ticket-right { flex:0 0 34%; background:var(--tier-bg,#0f0509); color:#fff; padding:22px 20px; display:flex; flex-direction:column; align-items:center; justify-content:space-between; gap:12px; text-align:center; position:relative; }
.ticket-right[data-tier="next-gen"] { --tier-bg:#000000; --tier-price:#fbbf24; color:#fff; }
.ticket-right[data-tier="community"] { --tier-bg:#E17D3D; --tier-price:#fff5e6; color:#fff; }
.ticket-right[data-tier="leader"] { --tier-bg:#B70569; --tier-price:#fde68a; color:#fff; }
.ticket-right[data-tier="architect"] { --tier-bg:#9865FF; --tier-price:#fde68a; color:#fff; }
.ticket-type-label { font-family:var(--font-sans); font-size:10px; font-weight:700; letter-spacing:0.22em; color:rgba(255,255,255,0.7); text-transform:uppercase; }
.ticket-type-name { font-family:var(--font-display); font-size:22px; font-weight:800; letter-spacing:0.04em; line-height:1.05; text-transform:uppercase; color:#fff; }
.ticket-price { font-family:var(--font-display); font-size:30px; font-weight:800; letter-spacing:0.02em; color:var(--tier-price,var(--sca-magenta)); line-height:1; }
.ticket-barcode { display:flex; align-items:center; gap:2px; height:34px; background:#fff; padding:4px 8px; border-radius:4px; }
.ticket-barcode span { display:block; height:100%; background:#0a0a0a; }
.ticket-serial { font-family:var(--font-sans); font-size:9px; letter-spacing:0.18em; color:rgba(255,255,255,0.5); }

.tickets-cta-row { display:flex; flex-direction:column; align-items:center; gap:12px; margin-top:48px; text-align:center; }


.ql-socials { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
.ql-socials a { width:36px; height:36px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; background:#B70569; color:#fff; transition:background .2s, transform .25s cubic-bezier(.2,.7,.2,1); }
.ql-socials a:hover { background:#8a0450; transform:translateY(-3px) scale(1.05); }
footer { background:#fff; padding:72px 40px 0; color:var(--sca-grey-700); border-top:1px solid rgba(0,0,0,0.05); }
.footer-inner { display:grid; grid-template-columns:0.9fr 0.8fr 0.8fr 1fr; gap:48px; align-items:start; max-width:1240px; margin:0 auto; padding-bottom:56px; }
.footer-brand { display:flex; flex-direction:column; gap:16px; }
.footer-logo { height:130px; width:auto; object-fit:contain; display:block; }
.footer-links { display:flex; flex-direction:column; gap:8px; }
.footer-links h4 { font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--sca-black); margin-bottom:12px; font-family:var(--font-sans); }
.footer-links a { display:block; font-size:14px; color:var(--sca-grey-700); text-decoration:none; padding:5px 0; transition:color .15s; font-family:var(--font-sans); }
.footer-links a:hover { color:var(--sca-magenta); }
.footer-org { display:flex; flex-direction:column; gap:8px; }
.footer-org h4 { font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--sca-black); margin-bottom:12px; font-family:var(--font-sans); }
.footer-org a { display:block; font-size:14px; color:var(--sca-grey-700); text-decoration:none; padding:5px 0; transition:color .15s; font-family:var(--font-sans); }
.footer-org a:hover { color:var(--sca-magenta); }
.footer-social-col { display:flex; flex-direction:column; gap:0; }
.footer-social-col h4 { font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--sca-black); margin-bottom:12px; font-family:var(--font-sans); }
.footer-social-sub { font-size:14px; color:var(--sca-grey-500); line-height:1.6; margin-bottom:16px; max-width:320px; font-family:var(--font-sans); }
.footer-bottom { display:flex; justify-content:center; align-items:center; text-align:center; padding:20px 24px; background:#B70569; color:#fff; font-size:13px; font-family:var(--font-sans); letter-spacing:0.04em; margin:0 -40px; }

@media (max-width:900px) {
  .theme-layout { grid-template-columns:1fr; }
  .about-summit-layout { grid-template-columns:1fr; gap:40px; }
  .about-summit-stats { gap:28px; }
  .expect-grid { grid-template-columns:1fr 1fr; }
  .recap-layout { grid-template-columns:1fr; }
  .footer-inner { grid-template-columns:1fr; gap:48px; }
}
@media (max-width:600px) {
  nav { padding:0 20px; }
  .nav-logo-text { display:none; }
  .nav-links { gap:14px; }
  .nav-link { font-size:12px; }
  .nav-cta { padding:8px 14px; font-size:12px; }
  .expect-grid { grid-template-columns:1fr; }
  .stats-grid { grid-template-columns:1fr 1fr; }
  .gallery-grid { grid-template-columns:1fr 1fr; }
  .sponsor-cta-box { flex-direction:column; text-align:center; padding:32px 24px; }
  .waitlist-card { padding:40px 24px; }
  .waitlist-input-bar { flex-wrap:wrap; border-radius:16px; padding:12px; }
  .waitlist-input-bar .waitlist-input { width:100%; padding:8px 4px; text-align:center; }
  .waitlist-input-bar .btn-white { width:100%; justify-content:center; }
  footer { padding:40px 24px 0; }
  .footer-inner { grid-template-columns:1fr; gap:40px; padding-bottom:40px; }
  .footer-bottom { margin:0 -24px; }
  .countdown { gap:10px; }
  .cd-num { min-width:58px; padding:10px 12px; font-size:28px; border-radius:10px; }
  .cd-label { font-size:9px; letter-spacing:0.12em; }
  .cd-sep { font-size:28px; padding-top:10px; }

  /* Keep ticket cards in horizontal (tablet-like) layout on mobile */
  .ticket-card { flex-direction:row; min-height:200px; }
  .ticket-left { flex:1 1 60%; padding:16px 14px 16px 18px; gap:10px; }
  .ticket-logo { height:28px; }
  .ticket-presents { font-size:8px; letter-spacing:0.14em; }
  .ticket-title { font-size:20px; }
  .ticket-tag { font-size:10px; }
  .ticket-meta { gap:10px; }
  .ticket-date-box { min-width:48px; padding:6px 8px; border-radius:8px; }
  .ticket-date-box span:nth-child(1) { font-size:16px; }
  .ticket-date-box span:nth-child(2) { font-size:8px; }
  .ticket-date-box span:nth-child(3) { font-size:8px; }
  .ticket-meta-row { font-size:10px; gap:4px; }
  .ticket-group-pill { font-size:8px; padding:2px 8px; }
  .ticket-right { flex:0 0 38%; padding:16px 10px; gap:8px; }
  .ticket-type-label { font-size:8px; letter-spacing:0.16em; }
  .ticket-type-name { font-size:14px; }
  .ticket-price { font-size:20px; }
  .ticket-get-btn { padding:8px 14px; font-size:10px; }
  .ticket-barcode { height:22px; padding:2px 4px; }
  .ticket-serial { font-size:7px; letter-spacing:0.14em; }
}
@media (prefers-reduced-motion: reduce) { * { animation:none !important; transition:none !important; } }

.ticket-get-btn { background:#ec4899; color:#fff; border:none; padding:10px 18px; border-radius:100px; font-family:var(--font-sans); font-size:12px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; cursor:pointer; transition:background .18s, transform .18s; }
.ticket-get-btn:hover { background:#db2777; transform:translateY(-1px); }

.tickets-view-more-row { display:flex; justify-content:center; margin-top:24px; }
.tickets-view-more-btn { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#fff; border:1px solid rgba(183,3,105,0.5); padding:12px 24px; border-radius:100px; font-family:var(--font-sans); font-size:13px; font-weight:600; letter-spacing:0.04em; cursor:pointer; transition:background .2s, border-color .2s; }
.tickets-view-more-btn:hover { background:rgba(183,3,105,0.15); border-color:var(--sca-magenta); }

.ticket-modal-overlay { position:fixed; inset:0; background:rgba(5,2,6,0.82); backdrop-filter:blur(6px); z-index:100; display:flex; align-items:center; justify-content:center; padding:20px; animation:fadeIn .18s ease-out; }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
.ticket-modal { position:relative; background:linear-gradient(160deg,#15070d 0%,#0a0407 100%); border:1px solid rgba(183,3,105,0.35); border-radius:20px; padding:36px 32px 28px; max-width:460px; width:100%; color:#fff; box-shadow:0 40px 90px -20px rgba(183,3,105,0.35), 0 0 0 1px rgba(183,3,105,0.1); animation:slideUp .22s ease-out; max-height:90vh; overflow-y:auto; }
@keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
.ticket-modal-close { position:absolute; top:14px; right:14px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); color:#fff; width:32px; height:32px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; transition:background .18s; }
.ticket-modal-close:hover { background:rgba(255,255,255,0.18); }
.ticket-modal-header { text-align:center; padding-bottom:20px; border-bottom:1px dashed rgba(183,3,105,0.35); margin-bottom:20px; }
.ticket-modal-header .ticket-type-label { display:block; margin-bottom:8px; }
.ticket-modal-name { font-family:var(--font-display); font-size:30px; font-weight:800; letter-spacing:0.04em; text-transform:uppercase; margin:4px 0 10px; color:#fff; }
.ticket-modal-price { font-family:var(--font-display); font-size:36px; font-weight:800; color:var(--sca-magenta); letter-spacing:0.02em; }
.ticket-modal-body { margin-bottom:24px; }
.ticket-modal-perks-title { font-family:var(--font-sans); font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.55); margin-bottom:14px; text-align:center; }
.ticket-modal-perks { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
.ticket-modal-perks li { display:flex; align-items:flex-start; gap:10px; font-family:var(--font-sans); font-size:14px; color:rgba(255,255,255,0.85); line-height:1.5; }
.ticket-modal-perks li svg { color:var(--sca-magenta); flex-shrink:0; margin-top:4px; background:rgba(183,3,105,0.18); border-radius:50%; padding:2px; width:20px; height:20px; }
.ticket-modal-cta { width:100%; justify-content:center; }
`;
