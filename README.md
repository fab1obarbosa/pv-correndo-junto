# 🏃 Do Sofá aos 5km

> Landing page de alta conversão para o ebook **Do Sofá aos 5km** — o plano de 28 dias para iniciantes absolutos que querem correr sem dor no joelho e sem assessor esportivo.

---

## 🚀 Stack

| Tecnologia | Versão |
|---|---|
| React | 18.3 |
| Vite | 6.x |
| @vitejs/plugin-react | 4.x |

Sem dependências externas de UI. Todo o design é feito com CSS-in-JS (inline styles) + classes globais em `src/styles.css`.

---

## 📁 Estrutura

```
├── public/
│   └── assets/
│       ├── capa-ebook.png          # Capa 3D do ebook
│       └── pisada-comparacao.png   # Imagem comparativa de pisada
│
├── src/
│   ├── main.jsx           # Entry point (createRoot)
│   ├── app.jsx            # Composição das seções
│   ├── styles.css         # CSS global + keyframes
│   ├── art.jsx            # Componentes visuais e SVGs
│   ├── ui.jsx             # Primitivos de UI (CTA, Reveal, etc.)
│   ├── sections-top.jsx   # Hero, Identificação, Problema
│   ├── sections-mid.jsx   # Solução, Produto, Bônus, Depoimentos
│   └── sections-bottom.jsx # Oferta, Garantia, FAQ, CTA Final, Footer
│
├── index.html
├── vite.config.js
└── package.json
```

---

## 🖥️ Seções da página

| # | Seção | Descrição |
|---|---|---|
| 01 | **Hero** | Headline principal, bullet points, animação do corredor, stats |
| 02 | **Identificação** | "Isso é você?" — dores do público |
| 03 | **Problema** | Os 4 erros técnicos de iniciantes |
| 04 | **Solução** | Como o método resolve cada erro |
| 05 | **Produto** | Capa 3D animada + conteúdo do ebook |
| 06 | **Bônus** | Os 5 bônus inclusos |
| 07 | **Depoimentos** | Prova social |
| 08 | **Oferta** | Preço, itens inclusos, CTA de checkout |
| 09 | **Garantia** | Garantia de 7 dias |
| 10 | **FAQ** | Perguntas frequentes |
| 11 | **CTA Final** | Último empurrão para conversão |
| 12 | **Footer** | Rodapé com aviso legal |

---

## ⚙️ Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

---

## 🛒 Checkout

O link de checkout está centralizado em `src/ui.jsx`:

```js
const CHECKOUT_URL = "https://pay.kiwify.com.br/PEnm5AJ";
```

Os botões que levam ao checkout são:
- **"QUERO COMEÇAR AGORA!"** na seção de Oferta
- **"SIM, QUERO COMEÇAR AGORA!"** na seção de CTA Final

Todos os demais botões fazem scroll suave até a seção de oferta (`#oferta`).

---

## 🎨 Design Tokens

Todas as cores estão centralizadas em `COLORS` dentro de `src/art.jsx`:

```js
COLORS.blue        // #1A3BCC — azul principal
COLORS.blueDark    // #0F2490 — azul escuro
COLORS.blueLight   // #4D7AFF — azul claro
COLORS.orange      // #FF6B00 — laranja principal
COLORS.ink         // #0D1B2A — texto escuro
```

---

## 📦 Build

```
dist/index.html          ~0.74 kB  (gzip: 0.42 kB)
dist/assets/index.css    ~3.36 kB  (gzip: 1.29 kB)
dist/assets/index.js   ~218.56 kB  (gzip: 63.97 kB)
```

Build time: ~540ms
