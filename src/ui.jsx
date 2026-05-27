// ─── UI PRIMITIVES ───────────────────────────────────────────
import { useState, useEffect, useRef } from "react";
import { COLORS } from "./art";


export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function Reveal({ children, delay = 0, className = "", as: As = "div", style = {} }) {
  const [ref, visible] = useInView();
  return (
    <As
      ref={ref}
      className={"reveal " + (visible ? "visible " : "") + className}
      style={{ transitionDelay: `${delay}s`, ...style }}>
      {children}
    </As>
  );
}

export function useCountUp(target, duration = 1500, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

// ─── CTA button with checkout link ──────────────────────────

const CHECKOUT_URL = "https://pay.kiwify.com.br/PEnm5AJ";

export function CheckoutCTA({ label = "QUERO COMEÇAR AGORA!", style = {}, checkout = false }) {
  if (checkout) {
    return (
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none", ...style }}>
        <button className="cta-btn" style={{ width: "100%" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center", width: "100%" }}>
            {label}
            <span>→</span>
          </span>
        </button>
      </a>
    );
  }
  return (
    <a
      href="#oferta"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      style={{ display: "block", textDecoration: "none", ...style }}>
      <button className="cta-btn" style={{ width: "100%" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center", width: "100%" }}>
          {label}
          <span>→</span>
        </span>
      </button>
    </a>
  );
}

export function CTAMeta({ dark = false, align = "center" }) {
  return (
    <div className={"cta-meta " + (dark ? "dark" : "")} style={{ display: "flex", justifyContent: "space-between", maxWidth: 280, width: "100%", margin: "12px auto 0", gap: 8, flexWrap: "wrap" }}>
      <span>⚡ Acesso imediato</span>
      <span>🛡 Garantia 7 dias</span>
    </div>
  );
}

// ─── Section eyebrow label ──────────────────────────────────
export function Eyebrow({ children, accent = COLORS.orange, bg = "rgba(255,107,0,0.1)", border = "rgba(255,107,0,0.25)" }) {
  return (
    <div style={{
      display: "inline-block",
      background: bg,
      border: `1px solid ${border}`,
      color: accent,
      padding: "6px 14px",
      borderRadius: 100,
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
      fontFamily: "'Barlow Condensed', sans-serif",
      marginBottom: 18
    }}>
      {children}
    </div>
  );
}

// ─── Stat block ─────────────────────────────────────────────
export function StatBlock({ n, label, accent = COLORS.orange, dark = false }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        color: accent,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
        fontWeight: 900,
        lineHeight: 1
      }}>{n}</div>
      <div style={{
        color: dark ? "rgba(255,255,255,0.6)" : COLORS.gray,
        fontSize: "0.75rem",
        marginTop: 6,
        textTransform: "uppercase",
        letterSpacing: 1,
        fontWeight: 600
      }}>{label}</div>
    </div>
  );
}

