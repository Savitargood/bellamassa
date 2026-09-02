// Configuração usada APENAS pelo GitHub Actions para gerar o site estático
// publicado no GitHub Pages. O build do Lovable continua usando vite.config.ts.
//
// Uso: BASE_PATH=/bellamassa/ vite build --config vite.config.pages.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  vite: { base },
  // Sem nitro: o GitHub Pages só serve arquivos estáticos.
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true },
    pages: [{ path: "/" }],
  },
});
