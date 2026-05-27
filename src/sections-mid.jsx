// ─── MID SECTIONS ────────────────────────────────────────────
import { COLORS, BookCover3D, ProgressionChart, DayCalendar } from "./art";
import { Reveal, CheckoutCTA, CTAMeta, Eyebrow } from "./ui";

// SOLUTION
export function SolutionSection() {
  return (
    <section data-screen-label="04 Solução" style={{
      background: `linear-gradient(180deg, #fff 0%, ${COLORS.offWhite} 100%)`,
      padding: "100px 20px"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Reveal>
            <Eyebrow accent={COLORS.blue} bg="rgba(26,59,204,0.08)" border="rgba(26,59,204,0.2)">A virada</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{
              fontSize: "clamp(2rem, 4.6vw, 3.4rem)",
              fontWeight: 900, color: COLORS.ink,
              lineHeight: 1.05,
              maxWidth: 820, margin: "0 auto 18px"
            }}>
              Existe um caminho que <span style={{ color: COLORS.blue }}>respeita seu corpo</span> e te leva do zero aos 5km <span style={{ color: COLORS.orange }}>em 28 dias.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: COLORS.gray, fontSize: "1.05rem", lineHeight: 1.65, maxWidth: 700, margin: "0 auto" }}>
              Caminhada alternada com corrida, progressão gradual, 3 dias por semana com descanso ativo entre eles. Mesma base do método <em>Couch to 5K</em>, adaptado pro corredor brasileiro iniciante absoluto.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div style={{
            background: "#fff",
            borderRadius: 20,
            padding: "32px 28px",
            boxShadow: "0 20px 60px rgba(15,36,144,0.08)",
            border: `1px solid ${COLORS.grayLine}`,
            marginBottom: 32
          }}>
            <div style={{ marginBottom: 24, textAlign: "center" }}>
              <div style={{ color: COLORS.gray, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>
                Sua evolução semana a semana
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, color: COLORS.ink }}>
                De 0 → <span style={{ color: COLORS.orange }}>5km contínuos</span>
              </div>
            </div>
            <ProgressionChart />
          </div>
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16
        }}>
          {[
            { week: "Semana 1", title: "Quebrando o sedentarismo", desc: "1 min corre / 2 min anda. Cria o hábito sem trauma. 3 treinos curtos.", c: "#FFD4B0" },
            { week: "Semana 2", title: "Construindo a base", desc: "2 min corre / 1 min anda. Aumenta os blocos. Você começa a sentir progresso.", c: "#FFB375" },
            { week: "Semana 3", title: "Encontrando o ritmo", desc: "Corrida contínua crescente. Aqui mora a virada: você corre sem parar.", c: COLORS.orange },
            { week: "Semana 4", title: "Chegando nos 5km", desc: "Simulado + dia da conquista. Você completa seus primeiros 5km contínuos.", c: COLORS.blue },
          ].map((s, i) =>
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                background: "#fff",
                border: `1px solid ${COLORS.grayLine}`,
                borderTop: `4px solid ${s.c}`,
                borderRadius: 14,
                padding: "22px 20px",
                height: "100%"
              }}>
                <div style={{
                  color: s.c, fontSize: 11, fontWeight: 800,
                  letterSpacing: 2, textTransform: "uppercase", marginBottom: 8,
                  fontFamily: "'Barlow Condensed', sans-serif"
                }}>{s.week}</div>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.3rem", fontWeight: 800, color: COLORS.ink,
                  marginBottom: 8, lineHeight: 1.15
                }}>{s.title}</h3>
                <p style={{ color: COLORS.gray, fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
              </div>
            </Reveal>
          )}
        </div>

        {/* Calendar visual */}
        <Reveal delay={0.3}>
          <div style={{ marginTop: 40 }}>
            <DayCalendar />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── PRODUCT: capítulos do ebook ────────────────────────────
export function ProductSection() {
  const chapters = [
    { n: 1, t: "Por que você tentou antes e desistiu", d: "Os 4 erros técnicos que sabotaram suas tentativas anteriores." },
    { n: 2, t: "Conhecendo o mundo da corrida", d: "Glossário, tipos de prova, etiqueta na largada, cultura da corrida brasileira." },
    { n: 3, t: "Antes de dar o primeiro passo", d: "Tênis certo, roupas, apps (Strava, Nike Run Club), avaliação médica." },
    { n: 4, t: "Entendendo seu corpo em movimento", d: "Pace, zona de FC, regra 80/20, pisada, cadência, respiração, postura." },
    { n: 5, t: "O plano de 28 dias", d: "Coração do produto: planilha completa, 3 níveis, semana a semana detalhada." },
    { n: 6, t: "Aquecimento e desaquecimento", d: "Rotina de 5 min antes + 7 min depois. Protocolo anti-canelite ilustrado." },
    { n: 7, t: "As dores mais comuns e como resolver", d: "Canelite, joelho do corredor, bolha, cãibra. Quando parar, quando seguir." },
    { n: 8, t: "Corrida + musculação juntas", d: "Como dividir a semana sem prejudicar nenhum dos dois. 3 modelos prontos." },
    { n: 9, t: "Planejando sua corrida na rotina real", d: "Como encaixar 3 treinos sem sacrificar trabalho, família e descanso." },
    { n: 10, t: "Próximos passos: do 5km para além", d: "Como evoluir pro 10km, comunidade Corre Junto, ofertas e bônus exclusivos." },
  ];

  return (
    <section data-screen-label="05 Produto" style={{ background: "#fff", padding: "100px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          alignItems: "center",
          marginBottom: 56
        }}>
          <style>{`@media (min-width: 880px) { .product-hero { grid-template-columns: 1fr 1fr !important; } }`}</style>
          <div className="product-hero" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }}>
            <Reveal>
              <div>
                <Eyebrow accent={COLORS.blue} bg="rgba(26,59,204,0.08)" border="rgba(26,59,204,0.2)">Conheça o produto</Eyebrow>
                <h2 style={{
                  fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
                  fontWeight: 900, color: COLORS.ink,
                  lineHeight: 1.05, marginBottom: 18
                }}>
                  <span style={{ color: COLORS.blue }}>Do Sofá aos 5km:</span><br />a Comunidade que te leva do primeiro passo à conquista.
                </h2>
                <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: "1.05rem", marginBottom: 24 }}>
                  10 capítulos densos, escritos por quem corre, com a metodologia validada pela nossa expert. Você não recebe só um PDF: recebe um <strong style={{ color: COLORS.ink }}>caminho completo</strong>, do tênis certo até cruzar a linha dos 5km.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <BookCover3D />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div style={{ marginBottom: 20 }}>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800, color: COLORS.ink,
              lineHeight: 1.1, textAlign: "center",
              marginBottom: 8
            }}>
              O que você vai aprender em cada capítulo
            </h3>
            <p style={{ color: COLORS.gray, textAlign: "center", fontSize: "0.95rem" }}>
              Sem enrolação. Cada capítulo entrega um pedaço prático do método.
            </p>
          </div>
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14
        }}>
          {chapters.filter((c) => [1, 5, 7].includes(c.n)).map((c, i) =>
            <Reveal key={c.n} delay={i * 0.08}>
              <div
                style={{
                  background: COLORS.offWhite,
                  border: `1px solid ${COLORS.grayLine}`,
                  borderRadius: 12,
                  padding: "20px 18px",
                  display: "flex", gap: 14,
                  alignItems: "flex-start",
                  height: "100%",
                  transition: "transform 0.2s, border-color 0.2s"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = COLORS.blue; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = COLORS.grayLine; }}>
                <div style={{
                  flexShrink: 0,
                  width: 38, height: 38, borderRadius: 10,
                  background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueLight})`,
                  color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900, fontSize: "1.1rem",
                  boxShadow: "0 4px 12px rgba(26,59,204,0.25)"
                }}>{String(c.n).padStart(2, "0")}</div>
                <div>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.05rem", fontWeight: 800, color: COLORS.ink,
                    lineHeight: 1.2, marginBottom: 4
                  }}>{c.t}</div>
                  <div style={{ color: COLORS.gray, fontSize: "0.86rem", lineHeight: 1.5 }}>{c.d}</div>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.25}>
          <div style={{
            marginTop: 24,
            background: `linear-gradient(90deg, ${COLORS.blueDark}, ${COLORS.blue}, ${COLORS.blueLight}, ${COLORS.blue}, ${COLORS.blueDark})`,
            backgroundSize: "300% 100%",
            animation: "shimmer 4s linear infinite",
            color: "#fff",
            borderRadius: 14,
            padding: "26px 28px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 16px 40px rgba(255,107,0,0.3)"
          }}>
            <svg viewBox="0 0 800 30" preserveAspectRatio="none" style={{
              position: "absolute", left: 0, right: 0, bottom: 0,
              width: "100%", height: 14, opacity: 0.35
            }}>
              <line x1="-40" y1="15" x2="840" y2="15"
                stroke="#fff" strokeWidth="3" strokeLinecap="round"
                strokeDasharray="14 18"
                style={{ animation: "road-scroll 1.2s linear infinite" }} />
            </svg>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.4rem, 3.4vw, 2.1rem)",
              fontWeight: 900,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              position: "relative"
            }}>
              <span style={{
                width: 12, height: 12, background: "#fff", borderRadius: "50%",
                animation: "pulse-orange 1.2s ease-in-out infinite",
                boxShadow: "0 0 12px rgba(255,255,255,0.7)"
              }} />
              <span style={{ position: "relative" }}>
                Tudo isso <span style={{ opacity: 0.85 }}>e</span> <span style={{ textDecoration: "underline", textDecorationThickness: 3, textUnderlineOffset: 5 }}>muito mais</span>
              </span>
              <span style={{
                width: 12, height: 12, background: "#fff", borderRadius: "50%",
                animation: "pulse-orange 1.2s ease-in-out 0.3s infinite",
                boxShadow: "0 0 12px rgba(255,255,255,0.7)"
              }} />
            </div>
            <div style={{
              marginTop: 8, fontSize: 13, fontWeight: 600,
              color: "rgba(255,255,255,0.85)", letterSpacing: 0.5
            }}>+ 7 capítulos com tudo que você precisa saber pra correr seus primeiros 5km</div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <CheckoutCTA />
            <div style={{ marginTop: 14 }}>
              <CTAMeta dark />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── BONUSES ────────────────────────────────────────────────
function BonusIcon({ kind, size = 56 }) {
  const ico = {
    planejamento:
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="12" y="14" width="32" height="32" rx="3" />
        <line x1="12" y1="22" x2="44" y2="22" />
        <line x1="20" y1="14" x2="20" y2="46" />
        <line x1="32" y1="22" x2="32" y2="46" />
        <line x1="12" y1="34" x2="44" y2="34" />
        <path d="M24 38 L27 41 L33 32" stroke="#fff" strokeWidth="3" />
      </g>,

    referencia:
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="28" cy="32" r="14" />
        <path d="M28 32 L28 22" strokeWidth="3" />
        <path d="M28 32 L35 36" strokeWidth="2.5" />
        <rect x="24" y="10" width="8" height="4" rx="1" fill="#fff" />
        <line x1="28" y1="14" x2="28" y2="18" />
        <line x1="14" y1="20" x2="17" y2="23" />
        <line x1="42" y1="20" x2="39" y2="23" />
      </g>,

    prevencao:
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="28" cy="14" r="4" fill="#fff" stroke="none" />
        <line x1="28" y1="18" x2="28" y2="32" />
        <line x1="28" y1="22" x2="20" y2="18" />
        <line x1="28" y1="22" x2="40" y2="26" />
        <line x1="28" y1="32" x2="20" y2="44" />
        <line x1="28" y1="32" x2="38" y2="42" />
        <path d="M10 32 Q14 30 12 26" strokeWidth="1.8" opacity="0.7" />
        <path d="M46 30 Q42 28 44 24" strokeWidth="1.8" opacity="0.7" />
      </g>,

    comunidade:
      <g fill="#fff" stroke="#fff" strokeWidth="2" strokeLinejoin="round">
        <circle cx="28" cy="20" r="5" />
        <path d="M18 42 Q18 32 28 32 Q38 32 38 42 Z" />
        <circle cx="13" cy="24" r="4" />
        <path d="M5 42 Q5 35 13 35 Q17 35 19 37" fill="#fff" />
        <circle cx="43" cy="24" r="4" />
        <path d="M51 42 Q51 35 43 35 Q39 35 37 37" fill="#fff" />
      </g>,

    economia:
      <g stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M30 12 L44 12 L44 26 L26 44 L12 30 L30 12 Z" />
        <circle cx="37" cy="19" r="2.5" fill="#fff" stroke="none" />
        <text x="26" y="36" fill="#fff" stroke="none" fontSize="14" fontWeight="900" fontFamily="'Barlow Condensed', sans-serif">%</text>
      </g>,
  }[kind];

  return (
    <svg width={size} height={size} viewBox="0 0 56 56" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`bonus-g-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8C33" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26" fill={`url(#bonus-g-${kind})`} />
      <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      {ico}
    </svg>
  );
}

export function BonusSection() {
  const bonuses = [
    { n: 1, kind: "planejamento", name: "Planilha de Treino 28 Dias", desc: "Sem achismo, sem improvisar. Cada dia do seu plano já está montado e esperando por você.", value: "R$27", tag: "PLANEJAMENTO" },
    { n: 2, kind: "referencia", name: "Guia de Pace: Card de Ritmo", desc: "Pare de correr no escuro. Saiba exatamente em qual ritmo você deve estar em cada treino.", value: "R$17", tag: "REFERÊNCIA" },
    { n: 3, kind: "prevencao", name: "PDF de Aquecimentos e Alongamentos", desc: "O protocolo que separa quem chega na semana 4 de quem desiste na semana 1 com dor.", value: "R$27", tag: "PREVENÇÃO" },
    { n: 4, kind: "comunidade", name: "Comunidade Corre Junto", desc: "Ninguém chega mais longe sozinho. Aqui você encontra quem está no mesmo caminho que você.", value: "R$37", tag: "COMUNIDADE" },
    { n: 5, kind: "economia", name: "Grupo de Ofertas para Corredores", desc: "O equipamento certo na hora certa, sem gastar errado no começo.", value: "R$17", tag: "ECONOMIA" },
  ];

  return (
    <section data-screen-label="06 Bônus" style={{
      background: `radial-gradient(1200px 600px at 10% -10%, rgba(255,107,0,0.18), transparent 60%),
                   linear-gradient(180deg, #081660 0%, #0D1F6E 50%, #0F2490 100%)`,
      color: "#fff",
      padding: "110px 20px",
      position: "relative",
      overflow: "hidden"
    }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
        <defs>
          <pattern id="bonusGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bonusGrid)" />
      </svg>
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(255,107,0,0.12)",
        filter: "blur(20px)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Reveal>
            <Eyebrow>Bônus exclusivos · só hoje</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{
              fontSize: "clamp(2rem, 4.6vw, 3.4rem)",
              fontWeight: 900, color: "#fff",
              lineHeight: 1.05,
              maxWidth: 900, margin: "0 auto 14px"
            }}>
              Somente o ebook <span style={{ color: "rgba(255,255,255,0.9)" }}>Do Sofá aos 5km</span> já vale o investimento.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{
              color: COLORS.orange,
              fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
              fontWeight: 800,
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: 1,
              textTransform: "uppercase",
              margin: "0"
            }}>
              Mas junto dele você ainda leva:
            </p>
          </Reveal>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
          marginBottom: 56
        }}>
          {bonuses.map((b, i) =>
            <Reveal key={b.n} delay={i * 0.1}>
              <div
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 18,
                  padding: "26px 22px",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s, border-color 0.3s",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  cursor: "default",
                  display: "flex", flexDirection: "column", gap: 14
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,107,0,0.4) inset";
                  e.currentTarget.style.borderColor = "rgba(255,107,0,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                }}>

                <div style={{
                  position: "absolute", top: 14, right: 14,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "rgba(255,255,255,0.15)",
                  fontSize: 50, fontWeight: 900,
                  lineHeight: 1,
                  pointerEvents: "none"
                }}>0{b.n}</div>

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <BonusIcon kind={b.kind} size={62} />
                  <span style={{
                    background: "rgba(255,107,0,0.15)",
                    border: "1px solid rgba(255,107,0,0.4)",
                    color: COLORS.orange,
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    padding: "5px 10px",
                    borderRadius: 100,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    whiteSpace: "nowrap",
                    backgroundSize: "200% 100%",
                    backgroundImage: "linear-gradient(90deg, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.35) 50%, rgba(255,107,0,0.15) 100%)",
                    animation: "shimmer 3.5s linear infinite"
                  }}>
                    {b.tag}
                  </span>
                </div>

                <div style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontFamily: "'Barlow Condensed', sans-serif"
                }}>Bônus 0{b.n}</div>

                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "#fff", fontWeight: 800,
                  fontSize: "1.3rem",
                  lineHeight: 1.15,
                  margin: 0
                }}>{b.name}</h3>

                <p style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  margin: 0,
                  flex: 1
                }}>{b.desc}</p>

                <div style={{
                  marginTop: 8,
                  paddingTop: 14,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10
                }}>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, fontFamily: "'Barlow Condensed', sans-serif" }}>De</div>
                    <div style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 22, fontWeight: 700,
                      textDecoration: "line-through",
                      lineHeight: 1
                    }}>{b.value}</div>
                  </div>
                  <div style={{
                    background: `linear-gradient(135deg, #16A34A, #15803D)`,
                    color: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: 18,
                    letterSpacing: 1.5,
                    padding: "8px 14px",
                    borderRadius: 8,
                    boxShadow: "0 6px 16px rgba(22,163,74,0.4)",
                    textTransform: "uppercase"
                  }}>Grátis</div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───────────────────────────────────────────
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana C.", city: "São Paulo, SP", age: "32 anos",
      text: "Tinha tentado três vezes e sempre machucava o joelho. Na semana 3 do plano eu já estava correndo 3km sem parar. Chorei quando completei os 5km no domingo.",
      result: "5km em 24 dias"
    },
    {
      name: "Ricardo M.", city: "Curitiba, PR", age: "29 anos",
      text: "Comprei por impulso, achei R$27 baratinho. Foi a melhor decisão. O capítulo do tênis e da pisada já valeu por 10x o preço. Resolveu uma dor de anos.",
      result: "Sem dor no joelho pela 1ª vez"
    },
    {
      name: "Fernanda L.", city: "Belo Horizonte, MG", age: "37 anos",
      text: "O grupo no WhatsApp é o que me fez não desistir. Ver outras pessoas no mesmo processo, postando seus treinos, mudou tudo. Já tô treinando pros 10km.",
      result: "1ª prova em 30 dias"
    },
  ];

  return (
    <section data-screen-label="07 Depoimentos" style={{ background: COLORS.offWhite, padding: "100px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Reveal>
            <Eyebrow accent={COLORS.blue} bg="rgba(26,59,204,0.08)" border="rgba(26,59,204,0.2)">Resultados reais</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{
              fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
              fontWeight: 900, color: COLORS.ink,
              lineHeight: 1.05,
              maxWidth: 760, margin: "0 auto 18px"
            }}>
              Quem começou do mesmo ponto que <span style={{ color: COLORS.orange }}>você está agora</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: COLORS.gray, fontSize: "1.02rem" }}>
              Histórias de pessoas que tinham as mesmas dores, os mesmos medos e completaram os primeiros 5km.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18
        }}>
          {testimonials.map((t, i) =>
            <Reveal key={i} delay={i * 0.06}>
              <div style={{
                background: "#fff",
                border: `1px solid ${COLORS.grayLine}`,
                borderRadius: 16,
                padding: "24px 22px",
                height: "100%",
                display: "flex", flexDirection: "column", gap: 14,
                boxShadow: "0 6px 24px rgba(15,36,144,0.05)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${COLORS.orangeLight}, ${COLORS.orange})`,
                    color: "#fff",
                    fontSize: 11, fontWeight: 800,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    padding: "5px 11px", borderRadius: 100,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    display: "inline-flex", alignItems: "center", gap: 5
                  }}>
                    <span>✦</span> {t.result}
                  </div>
                  <div style={{ color: COLORS.orange, fontSize: "0.95rem" }}>★★★★★</div>
                </div>
                <p style={{ color: COLORS.ink, lineHeight: 1.65, fontSize: "0.93rem", margin: 0 }}>
                  "{t.text}"
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  paddingTop: 12,
                  borderTop: `1px solid ${COLORS.grayLine}`
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueLight})`,
                    color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 14, fontFamily: "'Barlow Condensed', sans-serif"
                  }}>{t.name.charAt(0)}</div>
                  <div>
                    <div style={{ color: COLORS.ink, fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: COLORS.gray, fontSize: 12 }}>{t.city} · {t.age}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
