# 🍕 BellaMassa — Pizzaria artesanal

Site institucional e de pedidos da **BellaMassa**, uma pizzaria de bairro de forno a lenha.
O site funciona 100% no navegador (sem backend), publicado automaticamente no **GitHub Pages** via **GitHub Actions**.

🔗 **Site publicado:** https://savitargood.github.io/bellamassa/

---

## ✨ O que o site faz

| Recurso | Descrição |
| --- | --- |
| Cardápio clicável | Tradicionais, Especiais, Doces e Bebidas com preços. Clicar em um item o adiciona ao pedido. |
| Pedido pelo WhatsApp | O pedido é somado automaticamente e enviado como mensagem pronta (itens + total) para o WhatsApp da pizzaria. |
| Reserva de mesa | Formulário com nome, data, hora e nº de pessoas; o envio abre o WhatsApp com a solicitação formatada. |
| Localização e horários | Endereço, horários de funcionamento e botão de contato direto. |
| Galeria | Fotos do forno, da massa e do salão, com carregamento sob demanda (`loading="lazy"`). |
| Depoimentos | Provas sociais de clientes reais do bairro. |
| SEO | `title`, `meta description`, Open Graph, Twitter Card, HTML semântico e textos alternativos nas imagens. |
| Responsivo | Layout adaptado para celular, tablet e desktop. |

---

## 🧑‍💻 Linguagens e ferramentas utilizadas

**Linguagens**

- **TypeScript** — toda a lógica da aplicação (pedido, total, reserva).
- **TSX / JSX** — marcação dos componentes React.
- **CSS** (via Tailwind CSS v4, com tokens em OKLCH) — estilos e tema da marca.
- **HTML** — gerado no build a partir dos componentes React.
- **YAML** — configuração do workflow de CI/CD do GitHub Actions.

**Ferramentas e bibliotecas**

- **React 19** — biblioteca de interface.
- **TanStack Start + TanStack Router** — framework full-stack e roteamento por arquivos (`src/routes`).
- **Vite 8** — bundler e servidor de desenvolvimento.
- **Tailwind CSS v4** — estilização utilitária.
- **Nitro (preset `static`)** — pré-renderização da página em HTML estático.
- **Bun** — gerenciador de pacotes e executor de scripts.
- **ESLint + Prettier** — qualidade e formatação de código.
- **GitHub Actions + GitHub Pages** — CI/CD e hospedagem.

**E o PHP?**

❌ **Não.** Nenhum PHP foi usado — e nem seria possível aqui: o GitHub Pages serve apenas
arquivos estáticos, sem executar código de servidor. Também **não há** banco de dados,
Node.js em produção, Laravel, WordPress ou qualquer backend. Pedidos e reservas não passam
por servidor: a mensagem é montada no próprio navegador e entregue ao WhatsApp por link
`https://wa.me/...`. Isso deixa o site gratuito para hospedar, rápido e sem manutenção de servidor.

---

## 🚀 Comandos

```sh
bun install          # instalar dependências
bun run dev          # ambiente de desenvolvimento (http://localhost:8080)
bun run lint         # ESLint + Prettier
bun run format       # formatar o código
bun run build        # build padrão (SSR)
bun run build:pages  # build estático para GitHub Pages -> dist/client
bun run ci           # o mesmo que o CI executa: lint + build estático
```

Build local com o mesmo caminho do site publicado:

```sh
BASE_PATH=/bellamassa/ bun run build:pages
```

---

## 🔁 CI/CD (GitHub Actions)

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

**Disparos:** `push` na `main`, `pull_request` para a `main` e execução manual (`workflow_dispatch`).

**Job `ci`**

1. `actions/checkout`
2. instala o Bun (`oven-sh/setup-bun`)
3. `bun install --frozen-lockfile`
4. `bun run lint`
5. `bun run build:pages` com `BASE_PATH=/<nome-do-repo>/`
6. valida que `dist/client/index.html` existe
7. cria `404.html` (rotas do lado do cliente) e `.nojekyll`
8. envia o artefato do Pages

**Job `deploy`** — só roda na `main`, depois do `ci`, e publica com `actions/deploy-pages`.
Em pull request o pipeline apenas testa, sem publicar.

### Ativar o GitHub Pages (uma vez)

**Settings → Pages → Build and deployment → Source: GitHub Actions.**

---

## 📁 Estrutura

```
.github/workflows/deploy.yml   # pipeline de CI/CD
src/routes/__root.tsx          # layout raiz e fontes
src/routes/index.tsx           # página da pizzaria (cardápio, reserva, galeria)
src/styles.css                 # tema, tokens de cor e animações
src/assets/                    # imagens do hero e da galeria
vite.config.ts                 # build padrão
vite.config.pages.ts           # build estático do GitHub Pages
```

---

## ⚙️ Personalizar

No arquivo `src/routes/index.tsx`:

- `WHATSAPP` — número no formato internacional (ex.: `5511987654321`);
- `cardapio` — itens e preços;
- endereço, horários e depoimentos na seção "Onde estamos".

---

## 📄 Licença

Uso livre para a pizzaria BellaMassa.
