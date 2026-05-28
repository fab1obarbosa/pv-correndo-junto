// ─── SVG ART & ILLUSTRATIONS ─────────────────────────────────
// All custom, themed to running. No emoji-style shortcuts.

export const COLORS = {
  blue: "#1A3BCC",
  blueDark: "#0F2490",
  blueLight: "#2B4FE8",
  blueSoft: "#E8EBFF",
  orange: "#FF6B00",
  orangeLight: "#FF8C33",
  orangeSoft: "#FFE6D1",
  white: "#FFFFFF",
  offWhite: "#F5F6FB",
  ink: "#0D1B2A",
  inkSoft: "#1E2A3D",
  gray: "#6B7280",
  grayLine: "#E2E5F0",
  good: "#16A34A",
  bad: "#DC2626",
};

// ─── Animated runner (used in hero) ─────────────────────────
export function AnimatedRunner({ size = 360 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 360 360" style={{ display: "block" }}>
      <defs>
        <radialGradient id="ground-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8C33" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
        <linearGradient id="body-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8C33" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>

      {/* Sun behind */}
      <circle cx="270" cy="80" r="42" fill="url(#sun)" opacity="0.95" />
      <g stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <line x1="270" y1="20" x2="270" y2="30" />
        <line x1="270" y1="130" x2="270" y2="140" />
        <line x1="210" y1="80" x2="220" y2="80" />
        <line x1="320" y1="80" x2="330" y2="80" />
        <line x1="226" y1="36" x2="233" y2="43" />
        <line x1="307" y1="117" x2="314" y2="124" />
        <line x1="226" y1="124" x2="233" y2="117" />
        <line x1="307" y1="43" x2="314" y2="36" />
      </g>

      {/* Distant city silhouette */}
      <g fill="#1A3BCC" opacity="0.18">
        <rect x="20" y="170" width="40" height="80" />
        <rect x="50" y="155" width="28" height="95" />
        <rect x="75" y="180" width="36" height="70" />
        <rect x="220" y="160" width="30" height="90" />
        <rect x="245" y="145" width="42" height="105" />
        <rect x="285" y="170" width="34" height="80" />
        <rect x="315" y="155" width="28" height="95" />
      </g>

      {/* Ground */}
      <ellipse cx="180" cy="312" rx="140" ry="14" fill="url(#ground-shadow)" />
      <line x1="0" y1="290" x2="360" y2="290" stroke="#0D1B2A" strokeWidth="3" />
      <line
        x1="0" y1="306" x2="360" y2="306"
        stroke="#FF6B00" strokeWidth="4" strokeDasharray="20 12"
        style={{ animation: "road-scroll 1.2s linear infinite" }}
      />

      {/* Runner */}
      <g style={{ animation: "runner-bob 0.45s ease-in-out infinite", transformOrigin: "180px 240px" }}>
        {/* Back leg */}
        <g style={{ transformOrigin: "180px 198px", animation: "stride-right 0.45s ease-in-out infinite" }}>
          <line x1="180" y1="198" x2="158" y2="252" stroke="#0D1B2A" strokeWidth="11" strokeLinecap="round" />
          <line x1="158" y1="252" x2="172" y2="284" stroke="#0D1B2A" strokeWidth="10" strokeLinecap="round" />
          <ellipse cx="170" cy="288" rx="14" ry="5" fill="#FF6B00" />
        </g>
        {/* Back arm */}
        <g style={{ transformOrigin: "180px 152px", animation: "arm-right 0.45s ease-in-out infinite" }}>
          <line x1="180" y1="152" x2="158" y2="180" stroke="url(#body-grad)" strokeWidth="9" strokeLinecap="round" />
          <line x1="158" y1="180" x2="148" y2="200" stroke="url(#body-grad)" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* Body */}
        <line x1="180" y1="150" x2="180" y2="200" stroke="url(#body-grad)" strokeWidth="22" strokeLinecap="round" />
        {/* Logo dot on chest */}
        <circle cx="180" cy="172" r="4" fill="#fff" opacity="0.9" />

        {/* Head */}
        <circle cx="180" cy="128" r="18" fill="#0D1B2A" />
        {/* Headband */}
        <rect x="162" y="120" width="36" height="6" fill="#FF6B00" rx="2" />

        {/* Front leg */}
        <g style={{ transformOrigin: "180px 198px", animation: "stride-left 0.45s ease-in-out infinite" }}>
          <line x1="180" y1="198" x2="200" y2="250" stroke="#0D1B2A" strokeWidth="11" strokeLinecap="round" />
          <line x1="200" y1="250" x2="218" y2="276" stroke="#0D1B2A" strokeWidth="10" strokeLinecap="round" />
          <ellipse cx="218" cy="282" rx="14" ry="5" fill="#FF6B00" />
        </g>
        {/* Front arm */}
        <g style={{ transformOrigin: "180px 152px", animation: "arm-left 0.45s ease-in-out infinite" }}>
          <line x1="180" y1="152" x2="202" y2="180" stroke="url(#body-grad)" strokeWidth="9" strokeLinecap="round" />
          <line x1="202" y1="180" x2="216" y2="170" stroke="url(#body-grad)" strokeWidth="8" strokeLinecap="round" />
        </g>
      </g>

      {/* Speed lines */}
      <g stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <line x1="40" y1="180" x2="90" y2="180" />
        <line x1="50" y1="200" x2="110" y2="200" />
        <line x1="35" y1="220" x2="80" y2="220" />
      </g>
    </svg>
  );
}

// ─── 3D-looking ebook mockup ────────────────────────────────
export function EbookCover({ size = 280 }) {
  const w = size * 0.7;
  const h = size;
  return (
    <div style={{
      perspective: "1200px",
      width: w + 30,
      height: h,
      display: "inline-block",
    }}>
      <div style={{
        position: "relative",
        width: w,
        height: h,
        transformStyle: "preserve-3d",
        transform: "rotateY(-18deg) rotateX(4deg)",
        animation: "float-up 4s ease-in-out infinite",
      }}>
        {/* Shadow */}
        <div style={{
          position: "absolute",
          left: 6, top: 14, width: w, height: h,
          background: COLORS.blueDark,
          borderRadius: "4px 10px 10px 4px",
          transform: "translateZ(-1px)",
          filter: "blur(2px)",
          opacity: 0.4,
        }} />
        {/* Spine */}
        <div style={{
          position: "absolute",
          left: -8, top: 4, width: 14, height: h - 8,
          background: `linear-gradient(90deg, ${COLORS.blueDark}, ${COLORS.blue})`,
          borderRadius: "3px 0 0 3px",
          transform: "rotateY(-90deg) translateZ(7px)",
        }} />
        {/* Front cover */}
        <svg width={w} height={h} viewBox="0 0 200 285" style={{
          position: "absolute", inset: 0,
          borderRadius: "4px 10px 10px 4px",
          boxShadow: "0 30px 60px rgba(15,36,144,0.4), 0 0 0 1px rgba(255,255,255,0.06) inset",
          display: "block",
        }}>
          <defs>
            <linearGradient id="cover-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={COLORS.blueLight} />
              <stop offset="60%" stopColor={COLORS.blue} />
              <stop offset="100%" stopColor={COLORS.blueDark} />
            </linearGradient>
            <linearGradient id="cover-shine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <rect width="200" height="285" rx="4" fill="url(#cover-bg)" />
          <rect width="200" height="285" rx="4" fill="url(#cover-shine)" />

          {/* Brand */}
          <text x="100" y="40" textAnchor="middle" fill={COLORS.orange} fontSize="9" fontWeight="800" fontFamily="'Barlow Condensed', sans-serif" letterSpacing="3">CORRE JUNTO</text>
          <line x1="60" y1="48" x2="140" y2="48" stroke={COLORS.orange} strokeWidth="1.5" />

          {/* Number 5 */}
          <text x="100" y="120" textAnchor="middle" fill={COLORS.orange} fontSize="70" fontWeight="900" fontFamily="'Barlow Condensed', sans-serif" opacity="0.18">5</text>

          {/* Title */}
          <text x="100" y="138" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900" fontFamily="'Barlow Condensed', sans-serif" letterSpacing="0.5">DO SOFÁ</text>
          <text x="100" y="164" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900" fontFamily="'Barlow Condensed', sans-serif" letterSpacing="0.5">AOS 5KM</text>

          {/* Bar */}
          <rect x="60" y="178" width="80" height="3" fill={COLORS.orange} />

          {/* Subtitle */}
          <text x="100" y="202" textAnchor="middle" fill="rgba(255,255,255,0.78)" fontSize="7.2" fontFamily="'Inter', sans-serif" fontWeight="500">O PLANO DE 28 DIAS</text>
          <text x="100" y="214" textAnchor="middle" fill="rgba(255,255,255,0.78)" fontSize="7.2" fontFamily="'Inter', sans-serif" fontWeight="500">PARA INICIANTE ABSOLUTO</text>

          {/* Mini runner icon */}
          <g transform="translate(78, 235)">
            <circle cx="22" cy="6" r="5" fill={COLORS.orange} />
            <line x1="22" y1="11" x2="22" y2="24" stroke={COLORS.orange} strokeWidth="3" strokeLinecap="round" />
            <line x1="22" y1="15" x2="15" y2="20" stroke={COLORS.orange} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="22" y1="15" x2="29" y2="20" stroke={COLORS.orange} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="22" y1="24" x2="16" y2="33" stroke={COLORS.orange} strokeWidth="3" strokeLinecap="round" />
            <line x1="22" y1="24" x2="29" y2="32" stroke={COLORS.orange} strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Badge */}
          <g transform="translate(150, 250)">
            <circle cx="0" cy="0" r="22" fill={COLORS.orange} />
            <text x="0" y="-3" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="'Barlow Condensed', sans-serif">PLANO</text>
            <text x="0" y="8" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="900" fontFamily="'Barlow Condensed', sans-serif">28 DIAS</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─── 4 erros illustrations ──────────────────────────────────
export function IconBadShoe({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path d="M8 42 L8 36 Q10 28 22 28 L36 26 Q44 24 50 30 L56 36 L56 42 Z" fill={COLORS.bad} opacity="0.15" />
      <path d="M8 42 L8 36 Q10 28 22 28 L36 26 Q44 24 50 30 L56 36 L56 42 Z" fill="none" stroke={COLORS.bad} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="8" y1="42" x2="56" y2="42" stroke={COLORS.bad} strokeWidth="2.5" />
      <line x1="10" y1="48" x2="54" y2="48" stroke={COLORS.bad} strokeWidth="3" strokeDasharray="2 3" />
      <circle cx="50" cy="14" r="9" fill={COLORS.bad} />
      <path d="M46 10 L54 18 M54 10 L46 18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconFootStrike({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path d="M14 40 Q14 30 22 30 L34 30 Q42 30 46 36 L46 40 Z" fill={COLORS.orange} opacity="0.15" />
      <path d="M14 40 Q14 30 22 30 L34 30 Q42 30 46 36 L46 40 Z" fill="none" stroke={COLORS.orange} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="18" cy="40" r="6" fill={COLORS.bad} opacity="0.4" />
      <circle cx="18" cy="40" r="4" fill={COLORS.bad} />
      <g stroke={COLORS.bad} strokeWidth="2" strokeLinecap="round">
        <line x1="10" y1="50" x2="6" y2="56" />
        <line x1="18" y1="52" x2="18" y2="58" />
        <line x1="26" y1="50" x2="30" y2="56" />
      </g>
      <line x1="14" y1="40" x2="46" y2="40" stroke={COLORS.orange} strokeWidth="2" />
    </svg>
  );
}

export function IconBreath({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path d="M20 24 Q20 18 26 18 Q30 18 32 22 Q34 18 38 18 Q44 18 44 24 Q44 30 32 38 Q20 30 20 24 Z" fill={COLORS.orange} opacity="0.15" />
      <path d="M20 24 Q20 18 26 18 Q30 18 32 22 Q34 18 38 18 Q44 18 44 24 Q44 30 32 38 Q20 30 20 24 Z" fill="none" stroke={COLORS.orange} strokeWidth="2.5" />
      <path d="M8 50 Q14 44 20 50 T32 50 T44 50 T56 50" fill="none" stroke={COLORS.bad} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconEnergy({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path d="M30 8 L18 36 H30 L26 56 L46 28 H32 L36 8 Z" fill={COLORS.orange} opacity="0.2" />
      <path d="M30 8 L18 36 H30 L26 56 L46 28 H32 L36 8 Z" fill="none" stroke={COLORS.orange} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Footstrike comparison (calcanhar vs meio do pé) ───────
// ─── 28-day progression chart ───────────────────────────────
export function ProgressionChart() {
  const weeks = [
    { label: "Semana 1", h: 25, txt: "1 min corre · 2 min anda" },
    { label: "Semana 2", h: 50, txt: "2 min corre · 1 min anda" },
    { label: "Semana 3", h: 75, txt: "Corrida contínua" },
    { label: "Semana 4", h: 100, txt: "5km completos" },
  ];
  return (
    <div style={{ width: "100%", maxWidth: 560, margin: "0 auto" }}>
      <svg viewBox="0 0 560 260" style={{ width: "100%", display: "block" }}>
        <defs>
          <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.orangeLight} />
            <stop offset="100%" stopColor={COLORS.orange} />
          </linearGradient>
        </defs>
        <line x1="40" y1="200" x2="540" y2="200" stroke={COLORS.grayLine} strokeWidth="2" />
        {[0,1,2,3].map(i => (
          <line key={i} x1="40" y1={200 - i*40} x2="540" y2={200 - i*40} stroke={COLORS.grayLine} strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
        ))}
        {["0", "1km", "3km", "5km"].map((t, i) => (
          <text key={t} x="32" y={205 - i*40} fill={COLORS.gray} fontSize="10" textAnchor="end" fontFamily="'Inter', sans-serif">{t}</text>
        ))}
        {weeks.map((w, i) => {
          const x = 80 + i * 120;
          const h = (w.h / 100) * 160;
          return (
            <g key={i}>
              <rect x={x} y={200 - h} width="80" height={h} rx="6" fill="url(#bar-grad)"
                style={{
                  transformOrigin: `${x + 40}px 200px`,
                  animation: `fill-bar 0.9s ${0.15 * i}s cubic-bezier(.2,.8,.2,1) both`,
                }}
              />
              <text x={x + 40} y={195 - h} textAnchor="middle" fill={COLORS.ink} fontSize="14" fontWeight="800" fontFamily="'Barlow Condensed', sans-serif">{w.h === 100 ? "5KM" : `${Math.round(w.h * 0.05 * 10) / 10}km`}</text>
              <text x={x + 40} y={220} textAnchor="middle" fill={COLORS.ink} fontSize="12" fontWeight="700" fontFamily="'Barlow Condensed', sans-serif">{w.label.toUpperCase()}</text>
              <text x={x + 40} y={238} textAnchor="middle" fill={COLORS.gray} fontSize="10" fontFamily="'Inter', sans-serif">{w.txt}</text>
            </g>
          );
        })}
        <path d="M80 180 Q260 60 480 50" fill="none" stroke={COLORS.blue} strokeWidth="2.5" strokeDasharray="6 5" opacity="0.45" />
        <circle cx="480" cy="50" r="6" fill={COLORS.blue} />
        <text x="495" y="54" fill={COLORS.blue} fontSize="11" fontWeight="700" fontFamily="'Barlow Condensed', sans-serif">META</text>
      </svg>
    </div>
  );
}

// ─── 28-day calendar ────────────────────────────────────────
export function DayCalendar() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const trainingDays = new Set([1,3,5, 8,10,12, 15,17,19, 22,24,26]);
  const milestone = 28;

  return (
    <div style={{
      background: COLORS.white,
      borderRadius: 12,
      padding: 20,
      border: `1px solid ${COLORS.grayLine}`,
      boxShadow: "0 8px 30px rgba(15,36,144,0.07)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 800, color: COLORS.ink, letterSpacing: 0.5 }}>SEU CALENDÁRIO DE 28 DIAS</div>
        <div style={{ display: "flex", gap: 12, fontSize: 11, color: COLORS.gray }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 12, height: 12, background: COLORS.orange, borderRadius: 3, display: "inline-block" }} /> Treino
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 12, height: 12, background: COLORS.blueSoft, borderRadius: 3, display: "inline-block" }} /> Descanso
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 12, height: 12, background: COLORS.blue, borderRadius: 3, display: "inline-block" }} /> Conquista
          </span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
        {days.map(d => {
          const isTrain = trainingDays.has(d);
          const isMile = d === milestone;
          const bg = isMile ? COLORS.blue : isTrain ? COLORS.orange : COLORS.blueSoft;
          const color = isMile || isTrain ? "#fff" : COLORS.blue;
          return (
            <div key={d} className="day-cal-cell" style={{
              aspectRatio: "1/1",
              background: bg,
              color,
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 16,
              position: "relative",
            }}>
              {d}
              {isMile && <div style={{ fontSize: 8, marginTop: -2, fontWeight: 700, letterSpacing: 0.5 }}>5KM ✦</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Heart rate / pulse strip ───────────────────────────────
export function HeartStrip() {
  return (
    <svg viewBox="0 0 320 80" style={{ width: "100%", maxWidth: 320 }}>
      <path
        d="M0 40 L60 40 L70 20 L82 60 L94 30 L106 50 L116 40 L320 40"
        fill="none"
        stroke={COLORS.orange}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="600"
        style={{ animation: "ekg 2s linear infinite" }}
      />
      <circle cx="116" cy="40" r="4" fill={COLORS.orange} style={{ animation: "blink-dot 2s infinite" }} />
    </svg>
  );
}

// ─── 3D floating book with real cover image ─────────────────
export function BookCover3D() {
  return (
    <>
      <style>{`
        .book3d-scene {
          position: relative;
          height: min(380px, 72vw);
          aspect-ratio: 605 / 932;
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .book3d-book {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform: rotateY(-14deg) rotateX(2deg);
          animation: floatBook 4.2s ease-in-out infinite;
          will-change: transform;
        }
        .book3d-cover {
          position: absolute;
          inset: 0;
          background-image: url("${import.meta.env.BASE_URL}assets/capa-ebook.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 4px 10px 10px 4px;
          box-shadow:
            inset 8px 0 12px -8px rgba(0,0,0,0.55),
            inset -2px 0 4px -2px rgba(255,255,255,0.15),
            0 30px 40px -20px rgba(15,23,60,0.45),
            0 10px 20px -10px rgba(15,23,60,0.25);
        }
        .book3d-cover::before {
          content: "";
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 14px;
          background: linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(255,255,255,0.08) 70%, rgba(0,0,0,0) 100%);
          border-radius: 4px 0 0 4px;
          pointer-events: none;
        }
        .book3d-cover::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.10) 48%, rgba(255,255,255,0) 62%);
          border-radius: inherit;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .book3d-spine {
          position: absolute;
          top: 1.2%; bottom: 1.2%;
          left: -10px;
          width: 14px;
          background: linear-gradient(90deg, #1b2a8a 0%, #2a3fb8 25%, #1d2c91 60%, #11186a 100%);
          border-radius: 3px 0 0 3px;
          transform: translateZ(-6px);
          box-shadow:
            inset 1px 0 0 rgba(255,255,255,0.08),
            inset -1px 0 2px rgba(0,0,0,0.4),
            -4px 6px 14px -6px rgba(0,0,0,0.45);
        }
        .book3d-pages {
          position: absolute;
          top: 1%; bottom: 1%;
          right: -5px;
          width: 7px;
          background: linear-gradient(90deg, #ffffff 0%, #e9eaf0 40%, #c9ccd6 100%);
          border-radius: 0 2px 2px 0;
          box-shadow:
            inset 0 1px 0 rgba(0,0,0,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.08),
            4px 4px 10px -4px rgba(0,0,0,0.3);
        }
        .book3d-shadow {
          position: absolute;
          left: 50%;
          bottom: -8%;
          width: 78%;
          height: 24px;
          background: radial-gradient(ellipse at center, rgba(15,23,60,0.45) 0%, rgba(15,23,60,0.25) 35%, rgba(15,23,60,0) 75%);
          border-radius: 50%;
          transform: translateX(-50%);
          filter: blur(4px);
          animation: floatShadow 4.2s ease-in-out infinite;
          will-change: transform, opacity;
        }
        @keyframes floatBook {
          0%, 100% { transform: rotateY(-14deg) rotateX(2deg) translateY(0); }
          50%       { transform: rotateY(-14deg) rotateX(2deg) translateY(-18px); }
        }
        @keyframes floatShadow {
          0%, 100% { transform: translateX(-50%) scale(1);    opacity: 0.9; }
          50%       { transform: translateX(-50%) scale(0.78); opacity: 0.55; }
        }
      `}</style>
      <div style={{ perspective: "1600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="book3d-scene">
          <div className="book3d-book">
            <div className="book3d-spine" />
            <div className="book3d-pages" />
            <div className="book3d-cover" />
          </div>
          <div className="book3d-shadow" />
        </div>
      </div>
    </>
  );
}

// ─── Trophy / medal SVG ─────────────────────────────────────
export function MedalSVG({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72">
      <defs>
        <linearGradient id="medal-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD27A" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
      <path d="M24 4 L20 30 L36 22 Z" fill={COLORS.blue} />
      <path d="M48 4 L52 30 L36 22 Z" fill={COLORS.blueLight} />
      <circle cx="36" cy="44" r="22" fill="url(#medal-g)" />
      <circle cx="36" cy="44" r="22" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
      <circle cx="36" cy="44" r="15" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
      <text x="36" y="49" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="900" fontFamily="'Barlow Condensed', sans-serif">5KM</text>
    </svg>
  );
}
