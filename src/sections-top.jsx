// ─── TOP SECTIONS ────────────────────────────────────────────
import {
  COLORS, AnimatedRunner, EbookCover,
  IconBadShoe, IconFootStrike, IconBreath, IconEnergy,
  HeartStrip,
} from "./art";
import { useInView, useCountUp, Reveal, CheckoutCTA, CTAMeta, Eyebrow, StatBlock } from "./ui";

// HERO
export function HeroSection() {
  const [ref, inView] = useInView(0.05);
  const days = useCountUp(28, 1600, inView);
  const kms = useCountUp(5, 1400, inView);

  return (
    <section
      ref={ref}
      data-screen-label="01 Hero"
      style={{
        background: `radial-gradient(1200px 600px at 20% -10%, rgba(255,107,0,0.18), transparent 60%),
                     radial-gradient(900px 500px at 110% 10%, rgba(43,79,232,0.6), transparent 60%),
                     linear-gradient(180deg, #0F2490 0%, #1A3BCC 100%)`,
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
        overflow: "hidden"
      }}>

      {/* subtle grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 48,
        alignItems: "center",
        position: "relative"
      }}>
        <style>{`
          @media (min-width: 900px) {
            .hero-grid { grid-template-columns: 1.15fr 1fr !important; }
          }
          @media (max-width: 899px) {
            .hero-right { justify-content: center !important; }
            .hero-runner-wrap { max-width: 280px !important; }
            .hero-cta-wrap { align-items: center !important; }
            .hero-cta-inner { max-width: 100% !important; }
          }
          @media (max-width: 480px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        <div className="hero-grid" style={{
          display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center"
        }}>

          <div className="hero-text">
            <Reveal>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,107,0,0.16)",
                border: "1px solid rgba(255,107,0,0.4)",
                color: COLORS.orange,
                padding: "8px 16px",
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 24,
                fontFamily: "'Barlow Condensed', sans-serif"
              }}>
                <span style={{
                  width: 8, height: 8, background: COLORS.orange, borderRadius: "50%",
                  animation: "pulse-orange 1.2s ease-in-out infinite"
                }} />
                Método Corre Junto · Lançamento R$27
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                marginBottom: 24
              }}>
                Do sofá aos <span style={{
                  position: "relative",
                  color: COLORS.orange
                }}>
                  5km em 28 dias
                  <svg viewBox="0 0 300 14" preserveAspectRatio="none" style={{
                    position: "absolute", left: 0, right: 0, bottom: "-8px",
                    width: "100%", height: 12
                  }}>
                    <path d="M2 8 Q 75 0 150 6 T 298 6" stroke={COLORS.orange} strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                <span style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.55em",
                  display: "block",
                  marginTop: 14,
                  fontWeight: 700,
                  lineHeight: 1.15
                }}>
                  mesmo que você tenha tentado antes e desistido.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "clamp(1rem, 1.6vw, 1.18rem)",
                lineHeight: 1.6,
                maxWidth: 580,
                marginBottom: 32
              }}>
                O plano de treino do <strong style={{ color: "#fff" }}>iniciante absoluto</strong> ao primeiro 5km. Sem dor no joelho, sem sufocar nos 2 primeiros minutos e sem precisar de assessor esportivo.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <ul style={{
                padding: 0, margin: "0 0 36px",
                listStyle: "none",
                display: "grid", gap: 10,
                color: "rgba(255,255,255,0.92)",
                fontSize: "0.97rem"
              }}>
                {[
                  "Chega de tentar sozinho sem saber se está fazendo certo",
                  "Do primeiro minuto correndo até cruzar a linha dos 5km",
                  "Em 28 dias você vai olhar pra trás e não reconhecer quem estava no sofá"
                ].map((t, i) =>
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: COLORS.orange, color: "#fff",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 13, fontWeight: 800, marginTop: 1
                    }}>✓</span>
                    {t}
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="hero-cta-wrap" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div className="hero-cta-inner" style={{ width: "100%", maxWidth: 460 }}>
                  <CheckoutCTA />
                </div>
                <div className="hero-cta-inner" style={{ width: "100%", maxWidth: 460 }}>
                  <CTAMeta align="flex-start" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="stats-grid" style={{
                display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12, marginTop: 40,
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,0.1)"
              }}>
                <StatBlock n={`${days}`} label="Dias de plano" dark />
                <StatBlock n={`${kms}km`} label="Meta" dark />
                <StatBlock n="10" label="Capítulos" dark />
                <StatBlock n="3x" label="Por semana" dark />
              </div>
            </Reveal>
          </div>

          {/* Right side: runner illustration + floating cards */}
          <div className="hero-right" style={{ position: "relative", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <Reveal delay={0.3} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <div className="hero-runner-wrap" style={{
                width: "100%",
                maxWidth: 560,
                aspectRatio: "1/1",
                background: `radial-gradient(circle at 50% 50%, rgba(255,140,51,0.18), transparent 70%)`,
                position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <AnimatedRunner size={460} />

                {/* Floating: ebook */}
                <div className="hero-float" style={{
                  position: "absolute",
                  right: 0, top: 20,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 14,
                  padding: 12,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  animation: "float-up 5s ease-in-out infinite"
                }}>
                  <EbookCover size={150} />
                </div>

                {/* Floating: pulse */}
                <div className="hero-float" style={{
                  position: "absolute",
                  left: 0, bottom: 30,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 14,
                  padding: "10px 14px",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  display: "flex", alignItems: "center", gap: 10,
                  animation: "float-up 4.2s ease-in-out 0.3s infinite"
                }}>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Pace ideal</div>
                    <div style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>7'30"/km</div>
                  </div>
                  <HeartStrip />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Marquee of pain points */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "rgba(13,27,42,0.55)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "14px 0"
      }}>
        <div className="marquee" style={{ whiteSpace: "nowrap" }}>
          {Array(2).fill(null).map((_, k) =>
            <div key={k} style={{ display: "flex", gap: 48, paddingRight: 48 }}>
              {["DOR NO JOELHO", "FALTA DE FÔLEGO", "VERGONHA DE CORRER DEVAGAR", "JÁ TENTOU E DESISTIU", "MEDO DE CANELITE", "SEM MÉTODO", "SEM TEMPO"].map((t, i) =>
                <span key={i} style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 12, letterSpacing: 3, fontWeight: 700,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textTransform: "uppercase",
                  display: "inline-flex", alignItems: "center", gap: 16
                }}>
                  {t} <span style={{ color: COLORS.orange }}>✦</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEM AGITATION: "Isso é você?" ──────────────────────
export function IdentificationSection() {
  const pains = [
    { icon: "🦵", text: "Você tentou correr antes e o joelho começou a doer depois de poucos dias." },
    { icon: "💨", text: "Você fica sem fôlego em menos de 2 minutos e pensa que não tem jeito." },
    { icon: "📉", text: "Você já desistiu na segunda semana, provavelmente mais de uma vez." },
    { icon: "👀", text: "Você sente vergonha de correr devagar ou de ser visto na rua." },
    { icon: "❓", text: "Você não sabe por onde começar sem se machucar." },
    { icon: "🌀", text: "Você tenta sozinho, sem método, e o resultado nunca vem." },
  ];

  return (
    <section data-screen-label="02 Identificação" style={{ background: "#fff", padding: "100px 20px 80px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Reveal>
            <Eyebrow accent={COLORS.blue} bg="rgba(26,59,204,0.08)" border="rgba(26,59,204,0.2)">Isso é você?</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{
              fontSize: "clamp(2rem, 4.4vw, 3.2rem)",
              fontWeight: 900, color: COLORS.ink,
              lineHeight: 1.05,
              maxWidth: 760, margin: "0 auto"
            }}>
              Se você se reconhece em <span style={{ color: COLORS.orange }}>pelo menos um</span> desses pontos, você está no lugar certo.
            </h2>
          </Reveal>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16
        }}>
          {pains.map((p, i) =>
            <Reveal key={i} delay={i * 0.06}>
              <div style={{
                background: COLORS.offWhite,
                border: `1px solid ${COLORS.grayLine}`,
                borderLeft: `4px solid ${COLORS.orange}`,
                padding: "20px 22px",
                borderRadius: 12,
                display: "flex", gap: 14,
                alignItems: "flex-start",
                height: "100%"
              }}>
                <span style={{ fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 }}>{p.icon}</span>
                <span style={{ color: COLORS.inkSoft, lineHeight: 1.55, fontSize: "0.97rem", fontWeight: 500 }}>{p.text}</span>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.4}>
          <div style={{
            marginTop: 48,
            background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueDark})`,
            color: "#fff",
            borderRadius: 18,
            padding: "32px 28px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", top: -40, right: -40,
              width: 200, height: 200, borderRadius: "50%",
              background: "rgba(255,107,0,0.12)"
            }} />
            <div style={{ position: "relative" }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 900,
                color: COLORS.orange,
                lineHeight: 1,
                marginBottom: 8
              }}>80%</div>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.6, maxWidth: 560, margin: "0 auto" }}>
                das pessoas que tentam começar a correr <strong style={{ color: "#fff" }}>desistem na segunda semana</strong>.
                Não porque não querem. Porque <strong style={{ color: COLORS.orange }}>ninguém ensinou o método certo.</strong>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PROBLEM: 4 ERROS ───────────────────────────────────────
export function ProblemSection() {
  const errors = [
    {
      n: "01", Icon: IconBadShoe, title: "Tênis inadequado",
      desc: "Tênis de sola reta (aquele de academia, tênis casual) concentra o impacto no joelho e na canela. É o agressor número um da canelite no iniciante.",
      tag: "Causa: lesão"
    },
    {
      n: "02", Icon: IconFootStrike, title: "Pisada de calcanhar",
      desc: "Pisar no calcanhar joga o impacto direto no joelho. O correto é o meio do pé: gera mais impulso e protege a articulação. Dá pra corrigir em dias.",
      tag: "Causa: dor"
    },
    {
      n: "03", Icon: IconBreath, title: "Respiração descontrolada",
      desc: "Respirar pela boca sem ritmo drena energia e cria aquela sensação de sufoco em 2 minutos. Não é falta de preparo: é falta de técnica.",
      tag: "Causa: cansaço"
    },
    {
      n: "04", Icon: IconEnergy, title: "Energia mal distribuída",
      desc: "Sair na raça no início e travar no meio do percurso. \"Bater no muro\" é resultado de estratégia errada, não fraqueza.",
      tag: "Causa: desistência"
    },
  ];

  return (
    <section data-screen-label="03 Problema" style={{ background: COLORS.ink, color: "#fff", padding: "100px 20px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Reveal>
            <Eyebrow>O problema real</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{
              fontSize: "clamp(2rem, 4.6vw, 3.4rem)",
              fontWeight: 900, lineHeight: 1.05,
              maxWidth: 800, margin: "0 auto 16px"
            }}>
              Não é falta de esforço.<br />
              São <span style={{ color: COLORS.orange }}>4 erros técnicos</span> que ninguém te contou.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto", fontSize: "1.05rem" }}>
              Você não desistiu porque é fraco. Você desistiu porque tentou correr do jeito errado. Esses 4 erros respondem por <strong style={{ color: "#fff" }}>quase todas as lesões e desistências</strong> de iniciantes.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18
        }}>
          {errors.map((e, i) =>
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "26px 22px",
                height: "100%",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: 14, right: 16,
                  color: "rgba(255,107,0,0.5)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "2.4rem", fontWeight: 900,
                  lineHeight: 1
                }}>{e.n}</div>
                <div style={{ marginBottom: 18 }}>
                  <e.Icon size={56} />
                </div>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "#fff", fontSize: "1.4rem", fontWeight: 800,
                  marginBottom: 10
                }}>{e.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: 16 }}>
                  {e.desc}
                </p>
                <div style={{
                  display: "inline-block",
                  background: "rgba(220,38,38,0.12)",
                  color: "#FCA5A5",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 100
                }}>{e.tag}</div>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.5}>
          <div style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
            alignItems: "center",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 18,
            padding: "32px 28px"
          }}>
            <style>{`@media (min-width: 800px) { .strike-grid { grid-template-columns: 1.2fr 1fr !important; } }`}</style>
            <div className="strike-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32, alignItems: "center" }}>
              <div>
                <Eyebrow accent={COLORS.blueLight} bg="rgba(43,79,232,0.15)" border="rgba(43,79,232,0.3)">Exemplo prático</Eyebrow>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 900, color: "#fff",
                  lineHeight: 1.1, marginBottom: 14
                }}>
                  A diferença entre <span style={{ color: COLORS.bad }}>destruir o joelho</span> e <span style={{ color: COLORS.good }}>correr leve</span> está em 1 cm de diferença na pisada.
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.65, fontSize: "0.95rem" }}>
                  Quando o calcanhar bate primeiro no chão, o impacto sobe direto pela tíbia até o joelho, sem amortecimento. Pisar com o meio do pé, levemente inclinado pra frente, distribui o impacto na musculatura e te dá impulso pro próximo passo.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 0, overflow: "hidden" }}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/pisada-comparacao.png`}
                  alt="Comparação de pisada: calcanhar primeiro (errado) vs. meio do pé (certo)"
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 14 }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
