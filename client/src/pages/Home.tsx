/* Design: Editorial de Conversa — preto, branco, cinza e cobre queimado; composição assimétrica, tipografia Space Grotesk + DM Sans, fotografia documental e CTAs honestos. */
import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Clock3, MessageCircle, ShieldCheck, Star, Users, TrendingUp } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

const HERO_IMAGE = "/images/lucas-martins-hero.png";
const NOTEBOOK_IMAGE = "/images/lucas-chat-frontal.png";
const CAFE_IMAGE = "/images/lucas-martins-profile-right.png";
const MARK_IMAGE = "/images/codigo-da-conversa-mark.png";

const faqs = [
  ["Preciso ser extrovertido?", "Não. O método favorece clareza, escuta e prática gradual, não performance social."],
  ["As mensagens prontas garantem resposta?", "Não. São modelos adaptáveis. A outra pessoa continua livre para responder ou não."],
  ["O produto ensina manipulação?", "Não. O foco é comunicação, reciprocidade e respeito por limites."],
  ["E se ela não responder?", "Faça no máximo uma retomada apropriada, dê espaço e aceite a ausência de retorno."],
  ["O material funciona no Instagram e WhatsApp?", "Sim. Os princípios são adaptáveis aos dois canais e às conversas presenciais."],
  ["Como recebo o acesso?", "Após o pagamento, a plataforma de checkout deve enviar os arquivos automaticamente."],
  ["Posso pedir reembolso?", "Sim. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor."],
];

const testimonials = [
  { name: "Carlos, 29 anos", photo: "/images/testimonial-1.jpg", quote: "Minha taxa de resposta subiu de 20% pra mais de 80% em duas semanas. Não é mágica, é método." },
  { name: "Rafael, 34 anos", photo: "/images/testimonial-2.jpg", quote: "Parei de ficar nervoso antes de mandar mensagem. Hoje eu sei exatamente o que escrever." },
  { name: "Felipe, 27 anos", photo: "/images/testimonial-3.jpg", quote: "Já comprei 3 cursos antes. Esse é o único que funcionou porque é simples e direto ao ponto." },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span><ChevronDown size={19} className={open ? "rotate" : ""} />
      </button>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default function Home() {
  const checkoutBasico = "https://www.flowyn.com.br/r/c3e66627-b57f-41c6-8da6-931af7278605?dest=/checkout/5b5b6539-c487-4fed-a64d-0209337cbb65";
  const checkoutPremium = "https://www.flowyn.com.br/r/c3e66627-b57f-41c6-8da6-931af7278605?dest=/checkout/735d3f83-fdca-4152-881c-97f52be45089";
  return (
    <main>
      <div className="topline"><span>CÓDIGO DA CONVERSA / MÉTODO PRÁTICO</span><span>COMUNICAÇÃO SEM JOGOS</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Código da Conversa"><img src={MARK_IMAGE} alt="" /><span>CÓDIGO<br /><b>DA CONVERSA</b></span></a>
        <nav><a href="#metodo">O método</a><a href="#entrega">O que você recebe</a><a href="#faq">Dúvidas</a></nav>
        <a className="header-cta" href={checkoutBasico}>QUERO COMEÇAR <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <SectionLabel>MÉTODO PRÁTICO DE COMUNICAÇÃO</SectionLabel>
          <h1>Sua mensagem finalmente vai ter <em>resposta.</em></h1>
          <p className="hero-lead">Pare de ser ignorado. Aprenda a conversar de um jeito que ela queira continuar respondendo.</p>
          <p className="hero-body">Um método simples para você parar de mandar mensagem genérica e começar a criar conexão de verdade — sem precisar ser outro alguém.</p>
          <div className="hero-actions"><a className="button button-dark" href="#oferta">QUERO RESPOSTAS NAS MINHAS MENSAGENS <ArrowUpRight size={17} /></a><span><ShieldCheck size={17} /> Garantia de 7 dias</span></div>
          <div className="hero-counter"><Users size={18} /><span><strong>500+</strong> homens já transformaram suas conversas</span></div>
        </div>
        <div className="hero-visual"><div className="image-frame"><img src={HERO_IMAGE} alt="Lucas Martins sentado em um escritório simples" /><div className="image-caption"><span>LUCAS MARTINS</span></div></div><div className="vertical-word">CLAREZA / PRESENÇA / RESPEITO</div></div>
      </section>

      <section className="statement"><div className="statement-index">02</div><div><p className="eyebrow">O QUE NORMALMENTE ACONTECE</p><h2>Você envia uma mensagem. Depois outra. E a conversa começa a pesar.</h2></div><div className="statement-aside"><p>O problema nem sempre é falta de assunto. Muitas vezes é falta de contexto, ritmo e reciprocidade.</p><a href="#metodo" className="text-link">Entenda a mudança <ArrowUpRight size={15} /></a></div></section>

      <section className="problem-grid"><div className="problem-intro"><SectionLabel>OS SINAIS</SectionLabel><h2>Quando a conversa perde energia, você sente primeiro.</h2><p>Respostas secas. Silêncio depois de uma boa troca. A sensação de que qualquer convite pode parecer pressão.</p></div><div className="problem-list"><div><span>01</span><strong>Ficar sem assunto</strong><p>Perguntas genéricas transformam uma conversa em formulário.</p></div><div><span>02</span><strong>Ser ignorado</strong><p>A ansiedade cresce e você tenta compensar com mais mensagens.</p></div><div><span>03</span><strong>Não saber o que responder</strong><p>Você procura um script quando o que falta é uma direção simples.</p></div></div></section>

      <section className="cta-inline"><a className="button button-copper" href="#oferta">QUERO PARAR DE SER IGNORADO <ArrowUpRight size={17} /></a></section>

      <section className="method" id="metodo"><div className="method-image"><img src={NOTEBOOK_IMAGE} alt="Lucas Martins em retrato frontal" /><div className="photo-tag">MÉTODO APLICÁVEL<br /><b>NA VIDA REAL</b></div></div><div className="method-copy"><SectionLabel>O MÉTODO</SectionLabel><h2>Mais personalidade. Menos performance.</h2><p>O Código da Conversa organiza cinco fundamentos para você participar melhor das trocas, sem tratar ninguém como um objetivo a ser conquistado.</p><div className="principles"><div><span>01</span><b>Contexto</b><p>Mensagens específicas são mais fáceis de responder.</p></div><div><span>02</span><b>Personalidade</b><p>Compartilhe opiniões e histórias, não apenas perguntas.</p></div><div><span>03</span><b>Curiosidade</b><p>Abra espaço para histórias sem criar mistério artificial.</p></div><div><span>04</span><b>Reciprocidade</b><p>Aprenda a reconhecer quando os dois querem continuar.</p></div><div><span>05</span><b>Clareza</b><p>Convites simples são melhores do que jogos indiretos.</p></div></div></div></section>

      <section className="deliverables" id="entrega"><div className="deliverables-head"><SectionLabel>O QUE VOCÊ RECEBE</SectionLabel><h2>Um mapa para sair do automático.</h2><p>Conteúdo direto, exercícios simples e modelos que você adapta ao contexto — não um personagem para interpretar.</p></div><div className="deliverable-grid"><article><span className="card-number">01</span><h3>Código da Conversa</h3><p>O ebook principal com sete capítulos sobre ritmo, curiosidade, respostas secas e convites claros.</p><span className="card-meta">PDF / 7 CAPÍTULOS</span></article><article><span className="card-number">02</span><h3>100 Mensagens Prontas</h3><p>Ideias divididas por primeira conversa, Instagram, WhatsApp, curiosidade, flerte leve e encontro.</p><span className="card-meta">BÔNUS / 100 EXEMPLOS</span></article><article><span className="card-number">03</span><h3>20 Respostas para Visualização</h3><p>Como fazer uma retomada sem cobrança e reconhecer quando é hora de parar.</p><span className="card-meta">BÔNUS / GUIA RÁPIDO</span></article></div></section>

      <section className="cta-inline"><a className="button button-copper" href="#oferta">VER PLANOS E PREÇOS <ArrowUpRight size={17} /></a></section>

      <section className="testimonials"><div className="testimonials-head"><SectionLabel>O QUE DIZEM QUEM USOU</SectionLabel><h2>Homens reais, conversas reais.</h2></div><div className="testimonials-grid">{testimonials.map((t) => (<article key={t.name} className="testimonial-card"><div className="testimonial-stars">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div><blockquote>{t.quote}</blockquote><div className="testimonial-author"><img src={t.photo} alt={t.name} /><span>{t.name}</span></div></article>))}</div></section>

      <section className="guarantee"><div className="guarantee-icon"><ShieldCheck size={28} /></div><div><SectionLabel>RISCO ZERO</SectionLabel><h2>Teste por 7 dias. Se não gostar, devolvemos 100%.</h2><p>Você tem uma semana para ler, aplicar e sentir se faz sentido. Se não fizer, é só pedir o reembolso. Sem perguntas, sem burocracia.</p></div></section>

      <section className="offer" id="oferta">
        <div className="offer-urgency"><Clock3 size={18} /> <span>OFERTA POR TEMPO LIMITADO — economia de até 70%</span></div>
        <div className="offer-intro"><SectionLabel>ESCOLHA SEU PONTO DE PARTIDA</SectionLabel><h2>Comece pela conversa que você quer construir.</h2><p>Dois planos, sem urgência artificial. Escolha o nível de aprofundamento que faz sentido para o seu momento.</p></div>
        <div className="plans">
          <article className="plan">
            <span className="plan-label">PLANO BÁSICO</span>
            <h3>Código da Conversa</h3>
            <p className="plan-desc">O método essencial para mensagens e interações mais naturais.</p>
            <div className="price"><small className="price-old">R$ 49,90</small><br /><small>R$</small>14<sup>90</sup></div>
            <ul><li><Check size={17} /> Ebook principal</li><li><Check size={17} /> 100 mensagens prontas</li><li><Check size={17} /> 20 respostas para visualização</li></ul>
            <a className="button button-outline" href={checkoutBasico}>QUERO COMEÇAR AGORA <ArrowUpRight size={16} /></a>
          </article>
          <article className="plan plan-featured">
            <span className="plan-label">MAIS VENDIDO</span>
            <h3>Protocolo Anti-Rejeição</h3>
            <p className="plan-desc">Tudo do básico + um treinamento para agir com mais confiança e respeitar seus próprios limites.</p>
            <div className="price"><small className="price-old">R$ 89,90</small><br /><small>R$</small>27<sup>90</sup></div>
            <ul><li><Check size={17} /> Tudo do Plano Básico</li><li><Check size={17} /> 6 módulos adicionais</li><li><Check size={17} /> Desafio de confiança de 7 dias</li></ul>
            <a className="button button-copper" href={checkoutPremium}>QUERO O PREMIUM <ArrowUpRight size={16} /></a>
          </article>
        </div>
        <div className="offer-note"><TrendingUp size={16} /> <span>Esse preço não vai durar. Quanto mais você espera, mais mensagens sem resposta.</span></div>
      </section>

      <section className="faq" id="faq"><div className="faq-head"><SectionLabel>PERGUNTAS FREQUENTES</SectionLabel><h2>Antes de decidir, tire suas dúvidas.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <FAQItem key={question} question={question} answer={answer} />)}</div></section>

      <section className="cta-final">
        <h2>Pronto para parar de ser ignorado?</h2>
        <p>Junte-se a 500+ homens que já transformaram suas conversas.</p>
        <a className="button button-copper" href="#oferta">QUERO COMEÇAR AGORA <ArrowUpRight size={17} /></a>
      </section>

      <footer><div className="footer-brand"><img src={MARK_IMAGE} alt="" /><span>CÓDIGO DA CONVERSA</span></div><p>Comunicação masculina sem jogos, pressão ou promessas irreais.</p><small>© 2026 Código da Conversa.</small></footer>

      <ChatWidget />
    </main>
  );
}
