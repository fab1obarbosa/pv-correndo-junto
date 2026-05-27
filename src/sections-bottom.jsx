// ─── BOTTOM SECTIONS ────────────────────────────────────────
import { useState } from "react";
import { COLORS, MedalSVG } from "./art";
import { Reveal, CheckoutCTA, CTAMeta, Eyebrow } from "./ui";

// ─── GUARANTEE ──────────────────────────────────────────────
export function GuaranteeSection() {
  return (
    <section data-screen-label="10 Garantia" style={{
      background: `linear-gradient(135deg, ${COLORS.offWhite}, #fff)`,
      padding: "100px 20px"
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <div style={{ position: "relative", width: 260, height: 260 }}>
              <div style={{
                position: "absolute", inset: 0,
                borderRadius: "50%",
                border: `2px dashed ${COLORS.orange}55`,
                animation: "spin-slow 30s linear infinite"
              }} />

              <svg viewBox="0 0 260 260" style={{
                position: "absolute", inset: 0, width: "100%", height: "100%"
              }}>
                <defs>
                  <radialGradient id="medal-gold" cx="35%" cy="32%" r="70%">
                    <stop offset="0%" stopColor="#FFD27A" />
                    <stop offset="55%" stopColor="#FF8C33" />
                    <stop offset="100%" stopColor="#FF6B00" />
                  </radialGradient>
                  <linearGradient id="medal-inner" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF8C33" />
                    <stop offset="100%" stopColor="#FF6B00" />
                  </linearGradient>
                  <path id="curve-top" d="M 130 130 m -88 0 a 88 88 0 0 1 176 0" fill="none" />
                  <path id="curve-bottom" d="M 130 130 m -88 0 a 88 88 0 0 0 176 0" fill="none" />
                </defs>

                <circle cx="130" cy="130" r="110" fill="url(#medal-gold)" />
                <circle cx="130" cy="130" r="110" fill="none" stroke="#fff" strokeWidth="2" opacity="0.4" />
                <circle cx="130" cy="130" r="100" fill="none" stroke="#fff" strokeWidth="1" opacity="0.35" />
                <circle cx="130" cy="130" r="78" fill="url(#medal-inner)" />
                <circle cx="130" cy="130" r="78" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
                <ellipse cx="105" cy="80" rx="50" ry="20" fill="rgba(255,255,255,0.35)" />

                <text fill="#fff" fontFamily="'Barlow Condensed', sans-serif" fontSize="16" fontWeight="900" letterSpacing="6">
                  <textPath href="#curve-top" startOffset="50%" textAnchor="middle">GARANTIA</textPath>
                </text>
                <text fill="#fff" fontFamily="'Barlow Condensed', sans-serif" fontSize="16" fontWeight="900" letterSpacing="10">
                  <textPath href="#curve-bottom" startOffset="50%" textAnchor="middle">DIAS</textPath>
                </text>

                <text x="32" y="138" fill="#fff" fontSize="14" fontWeight="900" textAnchor="middle">★</text>
                <text x="228" y="138" fill="#fff" fontSize="14" fontWeight="900" textAnchor="middle">★</text>

                <text x="130" y="158" fill="#fff" fontFamily="'Barlow Condensed', sans-serif" fontSize="120" fontWeight="900" textAnchor="middle" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.25))" }}>
                  7
                </text>
              </svg>

              <div style={{
                position: "absolute", inset: -12,
                borderRadius: "50%",
                boxShadow: `0 30px 60px rgba(255,107,0,0.35)`,
                pointerEvents: "none"
              }} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 900,
            color: COLORS.ink,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: "0 0 14px"
          }}>
            O risco é todo nosso.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p style={{
            color: COLORS.orange,
            fontSize: "clamp(1.05rem, 2vw, 1.4rem)",
            fontWeight: 800,
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: 0.5,
            margin: 0
          }}>
            Você só corre o risco de começar a correr.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── OFFER ──────────────────────────────────────────────────
export function OfferSection() {
  const items = [
    ["Ebook Do Sofá aos 5km", "R$47"],
    ["Bônus 1 · Planilha de Treino 28 Dias", "R$27"],
    ["Bônus 2 · Guia de Pace", "R$17"],
    ["Bônus 3 · PDF de Aquecimentos", "R$27"],
    ["Bônus 4 · Comunidade Corre Junto", "R$37"],
    ["Bônus 5 · Grupo de Ofertas", "R$17"],
  ];

  return (
    <section id="oferta" data-screen-label="09 Oferta" style={{
      background: `radial-gradient(900px 500px at 20% 0%, rgba(255,107,0,0.15), transparent 60%),
                   linear-gradient(180deg, #050B14 0%, #0A1638 60%, #050B14 100%)`,
      color: "#fff",
      padding: "110px 20px",
      position: "relative",
      overflow: "hidden"
    }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}>
        <defs>
          <pattern id="offerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#offerGrid)" />
      </svg>

      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
        <Reveal delay={0.05}>
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,107,0,0.14)",
              border: "1px solid rgba(255,107,0,0.4)",
              color: COLORS.orange,
              padding: "7px 16px",
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "'Barlow Condensed', sans-serif",
              marginBottom: 20
            }}>
              🏃 OFERTA DE LANÇAMENTO · Preço sobe em breve
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              fontWeight: 900, color: "#fff",
              lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 14
            }}>
              O método completo com tudo incluso para você largar o sofá e{" "}
              <span style={{ color: COLORS.orange }}>correr seus primeiros 5km.</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
              lineHeight: 1.65,
              maxWidth: 560,
              margin: "0 auto 32px"
            }}>
              Tudo o que faltava nas suas tentativas anteriores, por menos do que você gasta num par de meia que vai perder o outro lado no primeiro mês.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 18,
            padding: "28px 26px",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            marginBottom: 24
          }}>
            <div style={{
              color: "rgba(255,255,255,0.5)", fontSize: 11,
              letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700,
              marginBottom: 16, fontFamily: "'Barlow Condensed', sans-serif",
              textAlign: "center"
            }}>O que está incluso</div>
            {items.map((row, i) =>
              <div key={i} style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                gap: 12
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                  <span style={{
                    flexShrink: 0,
                    width: 22, height: 22, borderRadius: "50%",
                    background: COLORS.orange, color: "#fff",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 12,
                    boxShadow: "0 3px 10px rgba(255,107,0,0.4)"
                  }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 15, fontWeight: 500 }}>{row[0]}</span>
                </div>
                <span style={{
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "line-through",
                  fontSize: 14, fontWeight: 600, flexShrink: 0,
                  fontFamily: "'Barlow Condensed', sans-serif"
                }}>{row[1]}</span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{
            background: "linear-gradient(180deg, rgba(255,107,0,0.08), rgba(255,107,0,0.02))",
            border: "1px solid rgba(255,107,0,0.3)",
            borderRadius: 18,
            padding: "32px 24px",
            textAlign: "center",
            marginBottom: 24,
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 600, marginBottom: 6, letterSpacing: 0.5 }}>Tudo isso sairia pelo menos por:</div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "rgba(255,255,255,0.4)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 700, textDecoration: "line-through", marginBottom: 18
            }}>R$ 152</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, marginBottom: 6, letterSpacing: 0.5 }}>Mas você vai pagar apenas:</div>
            <div style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 6,
              color: COLORS.orange,
              fontFamily: "'Barlow Condensed', sans-serif",
              lineHeight: 0.85,
              marginBottom: 10,
              textShadow: "0 6px 30px rgba(255,107,0,0.5)"
            }}>
              <span style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800 }}>R$</span>
              <span className="offer-price" style={{ fontSize: "clamp(5.5rem, 16vw, 9.5rem)", fontWeight: 900 }}>27</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginBottom: 18 }}>
              ou 6x de R$5,24 no cartão de crédito
            </div>
            <div style={{
              display: "inline-block",
              background: COLORS.orange, color: "#fff",
              padding: "6px 14px", borderRadius: 100,
              fontSize: 11, fontWeight: 800, letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "'Barlow Condensed', sans-serif",
              boxShadow: "0 6px 18px rgba(255,107,0,0.45)"
            }}></div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href="https://pay.kiwify.com.br/PEnm5AJ"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}>
            <button className="cta-btn" style={{ width: "100%", maxWidth: "none", padding: "22px 24px", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 12, justifyContent: "center", width: "100%" }}>
                QUERO COMEÇAR AGORA!
                <span>→</span>
              </span>
            </button>
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 22, flexWrap: "wrap",
            marginTop: 22,
            color: "rgba(255,255,255,0.55)",
            fontSize: 13, fontWeight: 500
          }}>
            <span>🔒 Pagamento seguro</span>
            <span>⚡ Acesso imediato</span>
            <span>🛡 Garantia 7 dias</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────
function FAQItem({ q, a, idx, openIdx, setOpenIdx }) {
  const open = openIdx === idx;
  const num = String(idx + 1).padStart(2, "0");
  return (
    <div style={{
      borderTop: idx === 0 ? `1px solid ${COLORS.grayLine}` : "none",
      borderBottom: `1px solid ${COLORS.grayLine}`
    }}>
      <button
        onClick={() => setOpenIdx(open ? -1 : idx)}
        style={{
          width: "100%", background: "transparent", border: "none",
          textAlign: "left", padding: "22px 4px", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 18,
          color: COLORS.ink, fontFamily: "inherit"
        }}>
        <span style={{
          flexShrink: 0,
          fontFamily: "'Barlow Condensed', sans-serif",
          color: open ? COLORS.orange : "rgba(255,107,0,0.45)",
          fontSize: "1.6rem", fontWeight: 900, lineHeight: 1,
          letterSpacing: 0.5, transition: "color 0.25s", minWidth: 34
        }}>{num}</span>

        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
          fontWeight: 700, lineHeight: 1.25,
          color: COLORS.ink, flex: 1, textAlign: "left"
        }}>{q}</span>

        <span style={{
          flexShrink: 0,
          width: 36, height: 36, borderRadius: "50%",
          background: open ? COLORS.orange : "rgba(255,107,0,0.1)",
          color: open ? "#fff" : COLORS.orange,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 800, fontSize: 22,
          transition: "all 0.3s cubic-bezier(.2,.8,.2,1)",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          lineHeight: 1
        }}>+</span>
      </button>
      <div style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 0.4s cubic-bezier(.2,.8,.2,1)"
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            paddingLeft: 52, paddingRight: 52, paddingBottom: 22,
            color: COLORS.gray, lineHeight: 1.7, fontSize: "0.97rem"
          }}>{a}</div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: "Sou sedentário total. Funciona pra mim?", a: "Sim, esse é exatamente quem o método foi pensado. A semana 1 começa com blocos de 1 minuto de corrida intercalados com caminhada. Se você consegue caminhar 30 minutos hoje, você consegue começar." },
    { q: "Tenho 40, 50, 60 anos. É tarde demais?", a: "Não existe idade errada para começar a correr com método. O plano foi desenhado para respeitar o tempo de recuperação do corpo e funciona para qualquer faixa etária." },
    { q: "Já tive dor no joelho. Vou piorar?", a: "O ebook tem um capítulo inteiro sobre isso. A dor no joelho em corredores iniciantes quase sempre vem de pisada errada e falta de aquecimento, dois problemas que o método resolve diretamente." },
    { q: "Quanto tempo eu preciso por dia?", a: "Os treinos da semana 1 têm menos de 20 minutos. Conforme as semanas avançam, chegam a 35–40 minutos. Você não precisa de horas livres, só de consistência." },
    { q: "Preciso de tênis caro?", a: "Não para começar. O ebook tem uma seção explicando o mínimo necessário para iniciar sem se machucar e como escolher quando for investir num tênis de corrida." },
    { q: "Como funciona a entrega?", a: "Imediata. Após a confirmação do pagamento você recebe o acesso por e-mail em até 5 minutos." },
    { q: "Posso acessar pelo celular?", a: "Sim. O ebook é em PDF otimizado para leitura no celular, a planilha funciona no Google Sheets pelo app e os materiais bônus são todos digitais." },
    { q: "O acesso é vitalício?", a: "Sim. Pagou uma vez, é seu para sempre, incluindo todas as atualizações futuras." },
    { q: "Não gostei. E aí?", a: "Você tem 7 dias para pedir reembolso completo, sem justificativa, sem burocracia. O risco é todo nosso." },
    { q: "Vocês oferecem outros planos depois?", a: "Sim. O ecossistema Corre Junto vai crescer com planos para 10km e meia maratona. Quem compra o Do Sofá aos 5km tem condições especiais nos próximos lançamentos." },
  ];

  return (
    <section data-screen-label="11 FAQ" style={{
      background: `linear-gradient(180deg, #fff 0%, ${COLORS.offWhite} 100%)`,
      padding: "110px 20px"
    }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Reveal>
            <Eyebrow accent={COLORS.blue} bg="rgba(26,59,204,0.08)" border="rgba(26,59,204,0.2)">Dúvidas frequentes</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 900, color: COLORS.ink,
              lineHeight: 1.05, letterSpacing: "-0.02em"
            }}>
              Antes de você decidir
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div style={{
            background: "#fff",
            borderRadius: 18,
            padding: "8px 28px",
            boxShadow: "0 20px 60px rgba(15,36,144,0.06)",
            border: `1px solid ${COLORS.grayLine}`
          }}>
            {faqs.map((f, i) =>
              <FAQItem key={i} idx={i} openIdx={openIdx} setOpenIdx={setOpenIdx} {...f} />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── FINAL CTA ──────────────────────────────────────────────
export function FinalCTASection() {
  return (
    <section data-screen-label="12 CTA Final" style={{
      background: `radial-gradient(circle at 20% 80%, rgba(255,107,0,0.25), transparent 50%),
                   linear-gradient(135deg, #0F2490, ${COLORS.blue})`,
      color: "#fff",
      padding: "120px 20px",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: "50%", right: "5%",
        transform: "translateY(-50%)",
        opacity: 0.15,
        pointerEvents: "none"
      }}>
        <MedalSVG size={280} />
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal>
          <h2 style={{
            fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
            fontWeight: 900, color: "#fff",
            lineHeight: 0.98, marginBottom: 24,
            letterSpacing: "-0.02em"
          }}>
            Daqui a 28 dias você pode<br />
            <span style={{ color: COLORS.orange }}>estar cruzando os 5km</span><br />
            ou ainda no sofá.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p style={{
            fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.65,
            maxWidth: 660,
            margin: "0 auto 36px"
          }}>
            A escolha é literalmente sua. Por menos do que um almoço, você leva o ebook, 5 bônus, a comunidade e a garantia de 7 dias. <strong style={{ color: "#fff" }}>O único risco é não tentar.</strong>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", maxWidth: 480 }}>
              <CheckoutCTA label="SIM, QUERO COMEÇAR AGORA!" checkout />
            </div>
            <div style={{ width: "100%", maxWidth: 480 }}>
              <CTAMeta />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────
export function Footer() {
  return (
    <footer style={{
      background: "#050B14",
      color: "rgba(255,255,255,0.5)",
      padding: "22px 20px",
      borderTop: "1px solid rgba(255,255,255,0.05)"
    }}>
      <div className="footer-inner" style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap", gap: 12,
        fontSize: 12
      }}>
        <span>© {new Date().getFullYear()} Corre Junto · Todos os direitos reservados.</span>
        <span>Feito com ❤️ pra quem decide começar.</span>
      </div>
    </footer>
  );
}
