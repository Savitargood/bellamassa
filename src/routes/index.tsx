import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroPizza from "@/assets/hero-pizza.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4 from "@/assets/galeria-4.jpg";
import galeria5 from "@/assets/galeria-5.jpg";

const WHATSAPP = "5511987654321";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BellaMassa — Pizzaria artesanal de forno a lenha" },
      {
        name: "description",
        content:
          "Pizzaria artesanal BellaMassa: massa de fermentação lenta, forno a lenha, cardápio com preços, pedidos pelo WhatsApp e reserva de mesa.",
      },
      { property: "og:title", content: "BellaMassa — Pizzaria artesanal de forno a lenha" },
      {
        property: "og:description",
        content:
          "Cardápio, pedidos pelo WhatsApp e reserva de mesa na pizzaria artesanal BellaMassa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Item = { nome: string; preco: number };

const cardapio: { titulo: string; itens: Item[] }[] = [
  {
    titulo: "Tradicionais",
    itens: [
      { nome: "Margherita D.O.P.", preco: 58 },
      { nome: "Calabresa defumada", preco: 62 },
      { nome: "Quatro queijos", preco: 66 },
      { nome: "Prosciutto e rúcula", preco: 74 },
    ],
  },
  {
    titulo: "Especiais",
    itens: [
      { nome: "Bolonhesa da casa", preco: 72 },
      { nome: "Nhoque ao forno", preco: 69 },
      { nome: "Trufa e funghi", preco: 78 },
      { nome: "Barbacoa & pimenta", preco: 75 },
    ],
  },
  {
    titulo: "Doces",
    itens: [
      { nome: "Nutella & morango", preco: 48 },
      { nome: "Banana caramelizada", preco: 45 },
    ],
  },
  {
    titulo: "Bebidas",
    itens: [
      { nome: "Cerveja artesanal", preco: 24 },
      { nome: "Vinho da casa (taça)", preco: 32 },
    ],
  },
];

function Index() {
  const [pedido, setPedido] = useState<Item[]>([]);
  const [reserva, setReserva] = useState({ nome: "", data: "", hora: "", pessoas: "2" });

  const total = pedido.reduce((soma, item) => soma + item.preco, 0);

  const linkPedido = () => {
    if (pedido.length === 0) {
      return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Olá! Gostaria de fazer um pedido na BellaMassa.",
      )}`;
    }
    const linhas = pedido.map((item) => `• ${item.nome} — R$ ${item.preco}`).join("\n");
    const texto = `Olá! Meu pedido na BellaMassa:\n${linhas}\n\nTotal: R$ ${total}`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  };

  const enviarReserva = () => {
    const texto = `Olá! Gostaria de reservar uma mesa na BellaMassa.\nNome: ${reserva.nome || "-"}\nData: ${reserva.data || "-"}\nHora: ${reserva.hora || "-"}\nPessoas: ${reserva.pessoas}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-creme font-body text-carvao antialiased selection:bg-tijolo selection:text-creme">
      <header className="border-b border-carvao/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <span className="font-display text-2xl font-semibold tracking-tight">
            Bella<span className="text-tijolo">Massa</span>
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-carvao/70 sm:flex">
            <a
              href="#cardapio"
              className="transition-transform hover:-translate-y-0.5 hover:text-tijolo"
            >
              Cardápio
            </a>
            <a
              href="#reserva"
              className="transition-transform hover:-translate-y-0.5 hover:text-tijolo"
            >
              Reserva
            </a>
            <a
              href="#onde"
              className="transition-transform hover:-translate-y-0.5 hover:text-tijolo"
            >
              Onde estamos
            </a>
          </div>
          <a
            href={linkPedido()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-carvao px-4 py-2 text-sm font-medium text-creme ring-1 ring-carvao/5 transition-transform hover:-translate-y-0.5"
          >
            Pedir agora <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <section className="bg-carvao text-creme">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch px-5 sm:px-8 lg:grid-cols-12">
          <div className="flex flex-col justify-center py-16 pr-0 lg:col-span-7 lg:py-24 lg:pr-12">
            <p className="reveal d1 mb-6 text-xs font-medium tracking-[0.35em] text-dourado uppercase">
              Pizzaria artesanal · Forno a lenha
            </p>
            <h1 className="reveal d2 font-display text-6xl leading-none font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Massa aberta
              <br />
              na mão,
              <br />
              <span className="text-tijolo">nossa</span>.
            </h1>
            <p className="reveal d3 mt-7 max-w-sm text-base leading-relaxed text-creme/70 text-pretty">
              Farinha tipo 00, fermentação lenta de 48 horas e a lasca de fogo que coroa cada borda.
              Feita devagar, servida quente, no coração do bairro.
            </p>
            <div className="reveal d3 mt-9 flex flex-wrap items-center gap-4">
              <a
                href={linkPedido()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-tijolo px-6 py-3 text-sm font-semibold text-creme ring-1 ring-tijolo/40 transition-transform hover:-translate-y-0.5"
              >
                Pedir no WhatsApp <span aria-hidden="true">→</span>
              </a>
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-creme/80 ring-1 ring-creme/20 transition-transform hover:-translate-y-0.5"
              >
                Ver o cardápio
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <img
              src={heroPizza}
              alt="Pizza recém-saída do forno a lenha vista de cima"
              width={1080}
              height={1350}
              className="h-full min-h-[320px] w-full object-cover outline-1 -outline-offset-1 outline-creme/10 lg:min-h-0"
            />
          </div>
        </div>
      </section>

      <section id="cardapio" className="scroll-reveal bg-creme py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col gap-2">
            <p className="text-xs font-medium tracking-[0.35em] text-tijolo uppercase">
              O cardápio
            </p>
            <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Feito para dividir
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {cardapio.map((grupo) => (
              <div key={grupo.titulo}>
                <h3 className="mb-5 font-display text-xl font-semibold text-oliva">
                  {grupo.titulo}
                </h3>
                <ul className="space-y-4 text-[15px]">
                  {grupo.itens.map((item) => (
                    <li key={item.nome}>
                      <button
                        type="button"
                        onClick={() => setPedido((atual) => [...atual, item])}
                        className="-mx-2 flex w-full items-baseline gap-2 rounded-md px-2 text-left transition-transform hover:-translate-y-0.5"
                      >
                        <span className="font-medium">{item.nome}</span>
                        <span className="flex-1 border-b border-dotted border-tijolo/40" />
                        <span className="font-display text-tijolo">R$ {item.preco}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 border-t border-carvao/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-carvao/60">
              {pedido.length === 0
                ? "Toque em um item para montar seu pedido — sem aplicativo, sem taxa."
                : `${pedido.length} item(ns) no pedido · total R$ ${total}`}
            </p>
            <div className="flex items-center gap-3">
              {pedido.length > 0 && (
                <button
                  type="button"
                  onClick={() => setPedido([])}
                  className="text-sm text-carvao/60 underline decoration-dotted"
                >
                  Limpar
                </button>
              )}
              <a
                href={linkPedido()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-tijolo px-6 py-3 text-sm font-semibold text-creme ring-1 ring-tijolo/40 transition-transform hover:-translate-y-0.5"
              >
                Montar meu pedido <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="reserva" className="scroll-reveal bg-kraft py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.35em] text-tijolo uppercase">
                Reserve sua mesa
              </p>
              <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
                Um canto quentinho, seu.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-carvao/70 text-pretty">
                Preencha abaixo e confirmamos por WhatsApp. Temos espaço para grupos grandes e um
                cantinho reservado perto do forno.
              </p>
            </div>

            <div className="rounded-[min(1vw,16px)] bg-creme p-6 ring-1 ring-black/5 sm:p-8">
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  enviarReserva();
                }}
              >
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-1.5 block text-xs font-medium tracking-wider text-carvao/60 uppercase"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={reserva.nome}
                    onChange={(e) => setReserva({ ...reserva, nome: e.target.value })}
                    placeholder="Como podemos te chamar?"
                    className="w-full rounded-[min(1vw,10px)] border border-carvao/15 bg-kraft/30 px-4 py-3 text-sm outline-none focus:border-tijolo focus:ring-1 focus:ring-tijolo/30"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="data"
                      className="mb-1.5 block text-xs font-medium tracking-wider text-carvao/60 uppercase"
                    >
                      Data
                    </label>
                    <input
                      id="data"
                      type="date"
                      value={reserva.data}
                      onChange={(e) => setReserva({ ...reserva, data: e.target.value })}
                      className="w-full rounded-[min(1vw,10px)] border border-carvao/15 bg-kraft/30 px-4 py-3 text-sm outline-none focus:border-tijolo focus:ring-1 focus:ring-tijolo/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hora"
                      className="mb-1.5 block text-xs font-medium tracking-wider text-carvao/60 uppercase"
                    >
                      Hora
                    </label>
                    <input
                      id="hora"
                      type="time"
                      value={reserva.hora}
                      onChange={(e) => setReserva({ ...reserva, hora: e.target.value })}
                      className="w-full rounded-[min(1vw,10px)] border border-carvao/15 bg-kraft/30 px-4 py-3 text-sm outline-none focus:border-tijolo focus:ring-1 focus:ring-tijolo/30"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="pessoas"
                    className="mb-1.5 block text-xs font-medium tracking-wider text-carvao/60 uppercase"
                  >
                    Pessoas
                  </label>
                  <input
                    id="pessoas"
                    type="number"
                    min="1"
                    value={reserva.pessoas}
                    onChange={(e) => setReserva({ ...reserva, pessoas: e.target.value })}
                    className="w-full rounded-[min(1vw,10px)] border border-carvao/15 bg-kraft/30 px-4 py-3 text-sm outline-none focus:border-tijolo focus:ring-1 focus:ring-tijolo/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-carvao px-6 py-3.5 text-sm font-semibold text-creme ring-1 ring-carvao/5 transition-transform hover:-translate-y-0.5"
                >
                  Enviar reserva
                </button>
                <p className="text-center text-xs text-carvao/50">
                  Respondemos em até 15 minutos durante o horário de funcionamento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal bg-creme py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Do forno
            </h2>
            <span className="hidden text-sm text-carvao/50 sm:block">
              fotos de verdade, sem filtro
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:auto-rows-[150px] md:grid-cols-4">
            <img
              src={galeria1}
              alt="Pizza de forno a lenha com borda pipocada e queijo derretido"
              width={1024}
              height={1024}
              loading="lazy"
              className="col-span-2 row-span-2 aspect-square h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5 md:aspect-auto"
            />
            <img
              src={galeria2}
              alt="Mãos abrindo a massa de pizza sobre bancada de mármore enfarinhada"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5 md:aspect-auto"
            />
            <img
              src={galeria3}
              alt="Chamas e brasas dentro do forno a lenha de tijolos"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5 md:aspect-auto"
            />
            <img
              src={galeria4}
              alt="Salão da pizzaria com parede de tijolos, luminárias quentes e mesas de madeira"
              width={1024}
              height={1024}
              loading="lazy"
              className="col-span-2 aspect-[2/1] h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5 md:aspect-auto"
            />
            <img
              src={galeria5}
              alt="Manjericão fresco, mussarela e tomates sobre tábua de madeira"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square h-full w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-black/5 md:aspect-auto"
            />
          </div>
        </div>
      </section>

      <section id="onde" className="scroll-reveal bg-carvao py-20 text-creme sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.35em] text-dourado uppercase">
                Quem já provou
              </p>
              <div className="space-y-6">
                <blockquote className="border-l-2 border-tijolo pl-5">
                  <p className="font-display text-lg leading-snug text-creme/90 text-pretty">
                    "A massa mais fofa que já comi por aqui. O cheiro de lenha já te chama do outro
                    lado da rua."
                  </p>
                  <cite className="mt-2 block text-sm text-creme/50 not-italic">
                    Marina R. · vizinha da rua
                  </cite>
                </blockquote>
                <blockquote className="border-l-2 border-dourado pl-5">
                  <p className="font-display text-lg leading-snug text-creme/90 text-pretty">
                    "Peço toda sexta no WhatsApp e chega quentinha. Virou tradição em casa."
                  </p>
                  <cite className="mt-2 block text-sm text-creme/50 not-italic">Eduardo T.</cite>
                </blockquote>
                <blockquote className="border-l-2 border-oliva pl-5">
                  <p className="font-display text-lg leading-snug text-creme/90 text-pretty">
                    "Atendimento de bairro de verdade. A calabresa defumada é absurda."
                  </p>
                  <cite className="mt-2 block text-sm text-creme/50 not-italic">Camila & João</cite>
                </blockquote>
              </div>
            </div>

            <div className="rounded-[min(1vw,16px)] bg-creme/5 p-6 ring-1 ring-creme/10 sm:p-8">
              <h3 className="font-display text-2xl font-semibold">Onde estamos</h3>
              <div className="mt-5 space-y-4 text-sm text-creme/80">
                <p className="text-pretty">
                  Rua das Oliveiras, 214 · Vila Doce
                  <br />
                  São Paulo · SP
                </p>
                <div className="border-t border-creme/15 pt-4">
                  <p className="mb-2 text-xs font-medium tracking-wider text-creme/50 uppercase">
                    Horários
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex justify-between">
                      <span>Segunda a quinta</span>
                      <span className="text-creme/50">18h – 23h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sexta e sábado</span>
                      <span className="text-creme/50">18h – 00h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo</span>
                      <span className="text-creme/50">12h – 16h</span>
                    </li>
                    <li className="flex justify-between text-tijolo">
                      <span>Segunda (pizza day)</span>
                      <span>fechado</span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-creme/15 pt-4">
                  <p className="text-xs font-medium tracking-wider text-creme/50 uppercase">
                    Contato
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-tijolo px-5 py-2.5 text-sm font-semibold text-creme ring-1 ring-tijolo/40 transition-transform hover:-translate-y-0.5"
                  >
                    (11) 98765-4321 <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-creme/10 bg-carvao text-creme/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-display text-lg font-semibold text-creme">
            Bella<span className="text-tijolo">Massa</span>
          </span>
          <p className="text-xs">
            © 2026 BellaMassa · Pizzaria artesanal de bairro · Feito com farinha, fogo e tempo.
          </p>
        </div>
      </footer>
    </div>
  );
}
