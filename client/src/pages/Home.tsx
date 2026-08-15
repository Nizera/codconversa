/* Design: Editorial de Conversa — preto, branco, cinza e cobre queimado; composição assimétrica, tipografia Space Grotesk + DM Sans, fotografia documental e CTAs honestos. */
import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Clock3, MessageCircle, ShieldCheck, Star } from "lucide-react";

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
  ["Posso pedir reembolso?", "A oferta prevê garantia de 7 dias, conforme as condições da plataforma de pagamento."],
];

const testimonials = [
  { name: "Carlos, 29 anos", photo: "/images/testimonial-1.jpg", quote: "Eu achava que precisava de frases prontas. Na verdade, eu precisava parar de ter medo de parecer eu mesmo." },
  { name: "Rafael, 34 anos", photo: "/images/testimonial-2.jpg", quote: "Parei de mandar mensagem genérica e comecei a criar contexto. A diferença foi imediata." },
  { name: "Felipe, 27 anos", photo: "/images/testimonial-3.jpg", quote: "O que mais gostei é que não é sobre manipular ninguém. É sobre conversar de verdade." },
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
  const checkout = "#oferta";
  return (
    <main>
      <div className="topline"><span>CÓDIGO DA CONVERSA / MÉTODO PRÁTICO</span><span>COMUNICAÇÃO SEM JOGOS</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Código da Conversa"><img src={MARK_IMAGE} alt="" /><span>CÓDIGO<br /><b>DA CONVERSA</b></span></a>
        <nav><a href="#metodo">O método</a><a href="#entrega">O que você recebe</a><a href="#faq">Dúvidas</a></nav>
        <a className="header-cta" href={checkout}>Ver planos <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <SectionLabel>UM GUIA PARA CONVERSAS REAIS</SectionLabel>
          <h1>Conversa não é <em>entrevista.</em></h1>
          <p className="hero-lead">As mensagens que fazem uma mulher continuar interessada sem você precisar fingir ser alguém que não é.</p>
          <p className="hero-body">Aprenda a criar contexto, mostrar personalidade e conduzir uma conversa com mais clareza — sem manipulação, sem pressão e sem procurar a frase perfeita.</p>
          <div className="hero-actions"><a className="button button-dark" href={checkout}>Quero conversar melhor <ArrowUpRight size={17} /></a><span><ShieldCheck size={17} /> Garantia de 7 dias</span></div>
          <div className="hero-note"><span>01</span><p>Para homens comuns que querem trocar ansiedade por presença.</p></div>
        </div>
        <div className="hero-visual"><div className="image-frame"><img src={HERO_IMAGE} alt="Lucas Martins sentado em um escritório simples" /><div className="image-caption"><span>LUCAS MARTINS</span></div></div><div className="vertical-word">CLAREZA / PRESENÇA / RESPEITO</div></div>
      </section>

      <section className="statement"><div className="statement-index">02</div><div><p className="eyebrow">O QUE NORMALMENTE ACONTECE</p><h2>Você envia uma mensagem. Depois outra. E a conversa começa a pesar.</h2></div><div className="statement-aside"><p>O problema nem sempre é falta de assunto. Muitas vezes é falta de contexto, ritmo e reciprocidade.</p><a href="#metodo" className="text-link">Entenda a mudança <ArrowUpRight size={15} /></a></div></section>

      <section className="problem-grid"><div className="problem-intro"><SectionLabel>OS SINAIS</SectionLabel><h2>Quando a conversa perde energia, você sente primeiro.</h2><p>Respostas secas. Silêncio depois de uma boa troca. A sensação de que qualquer convite pode parecer pressão.</p></div><div className="problem-list"><div><span>01</span><strong>Ficar sem assunto</strong><p>Perguntas genéricas transformam uma conversa em formulário.</p></div><div><span>02</span><strong>Ser ignorado</strong><p>A ansiedade cresce e você tenta compensar com mais mensagens.</p></div><div><span>03</span><strong>Não saber o que responder</strong><p>Você procura um script quando o que falta é uma direção simples.</p></div></div></section>

      <section className="method" id="metodo"><div className="method-image"><img src={NOTEBOOK_IMAGE} alt="Lucas Martins em retrato frontal" /><div className="photo-tag">MÉTODO APLICÁVEL<br /><b>NA VIDA REAL</b></div></div><div className="method-copy"><SectionLabel>O MÉTODO</SectionLabel><h2>Mais personalidade. Menos performance.</h2><p>O Código da Conversa organiza cinco fundamentos para você participar melhor das trocas, sem tratar ninguém como um objetivo a ser conquistado.</p><div className="principles"><div><span>01</span><b>Contexto</b><p>Mensagens específicas são mais fáceis de responder.</p></div><div><span>02</span><b>Personalidade</b><p>Compartilhe opiniões e histórias, não apenas perguntas.</p></div><div><span>03</span><b>Curiosidade</b><p>Abra espaço para histórias sem criar mistério artificial.</p></div><div><span>04</span><b>Reciprocidade</b><p>Aprenda a reconhecer quando os dois querem continuar.</p></div><div><span>05</span><b>Clareza</b><p>Convites simples são melhores do que jogos indiretos.</p></div></div></div></section>

      <section className="quote-band"><MessageCircle size={28} /><blockquote>“Você não precisa de uma frase mágica. Precisa dar à sua personalidade espaço para aparecer.”</blockquote><span>— CÓDIGO DA CONVERSA</span></section>

      <section className="expert"><div className="expert-copy"><SectionLabel>QUEM CRIOU</SectionLabel><h2>Lucas nunca foi o cara mais bonito da sala.</h2><p>Ele era um homem brasileiro comum, com trabalho, inseguranças e uma coleção de erros simples em mensagens. Estudando comunicação e comportamento social, percebeu que não precisava virar um personagem.</p><p>Precisava entender o próprio ritmo, ouvir melhor e parar de tratar cada silêncio como uma sentença sobre seu valor.</p><a className="text-link" href="#entrega">Conheça o que ele organizou <ArrowUpRight size={15} /></a></div><div className="expert-photo"><img src={CAFE_IMAGE} alt="Lucas Martins em perfil" /><span>34 ANOS / ANALISTA ADMINISTRATIVO</span></div></section>

      <section className="deliverables" id="entrega"><div className="deliverables-head"><SectionLabel>O QUE VOCÊ RECEBE</SectionLabel><h2>Um mapa para sair do automático.</h2><p>Conteúdo direto, exercícios simples e modelos que você adapta ao contexto — não um personagem para interpretar.</p></div><div className="deliverable-grid"><article><span className="card-number">01</span><h3>Código da Conversa</h3><p>O ebook principal com sete capítulos sobre ritmo, curiosidade, respostas secas e convites claros.</p><span className="card-meta">PDF / 7 CAPÍTULOS</span></article><article><span className="card-number">02</span><h3>100 Mensagens Prontas</h3><p>Ideias divididas por primeira conversa, Instagram, WhatsApp, curiosidade, flerte leve e encontro.</p><span className="card-meta">BÔNUS / 100 EXEMPLOS</span></article><article><span className="card-number">03</span><h3>20 Respostas para Visualização</h3><p>Como fazer uma retomada sem cobrança e reconhecer quando é hora de parar.</p><span className="card-meta">BÔNUS / GUIA RÁPIDO</span></article></div></section>

      <section className="offer" id="oferta"><div className="offer-intro"><SectionLabel>ESCOLHA SEU PONTO DE PARTIDA</SectionLabel><h2>Comece pela conversa que você quer construir.</h2><p>Dois planos, sem urgência artificial. Escolha o nível de aprofundamento que faz sentido para o seu momento.</p></div><div className="plans"><article className="plan"><span className="plan-label">PLANO BÁSICO</span><h3>Código da Conversa</h3><p className="plan-desc">O método essencial para mensagens e interações mais naturais.</p><div className="price"><small>R$</small>14<sup>90</sup></div><ul><li><Check size={17} /> Ebook principal</li><li><Check size={17} /> 100 mensagens prontas</li><li><Check size={17} /> 20 respostas para visualização</li></ul><a className="button button-outline" href="#checkout-basico">Escolher Básico <ArrowUpRight size={16} /></a></article><article className="plan plan-featured"><span className="plan-label">PLANO PREMIUM</span><h3>Protocolo Anti-Rejeição</h3><p className="plan-desc">Tudo do básico + um treinamento para agir com mais confiança e respeitar seus próprios limites.</p><div className="price"><small>R$</small>27<sup>90</sup></div><ul><li><Check size={17} /> Tudo do Plano Básico</li><li><Check size={17} /> 6 módulos adicionais</li><li><Check size={17} /> Desafio de confiança de 7 dias</li></ul><a className="button button-copper" href="#checkout-premium">Escolher Premium <ArrowUpRight size={16} /></a></article></div></section>

      <section className="bumps"><div><SectionLabel>COMPLEMENTOS OPCIONAIS</SectionLabel><h2>Se quiser aprofundar, há mais três ferramentas.</h2></div><div className="bump-list"><div><span>+01</span><div><b>Biblioteca de Primeiras Mensagens</b><p>150 aberturas por canal. <strong>R$ 9,90</strong></p></div></div><div><span>+02</span><div><b>Detector de Interesse</b><p>Sinais para interpretar com mais calma. <strong>R$ 12,90</strong></p></div></div><div><span>+03</span><div><b>Arsenal de Respostas</b><p>300 respostas para situações comuns. <strong>R$ 14,90</strong></p></div></div></div></section>

      <section className="guarantee"><div className="guarantee-icon"><Clock3 size={28} /></div><div><SectionLabel>SETE DIAS PARA CONHECER</SectionLabel><h2>Se não fizer sentido para você, você pode pedir reembolso.</h2><p>A garantia reduz o risco de comprar um material que não corresponde ao que você procura. Consulte as condições da plataforma de pagamento.</p></div></section>

      <section className="testimonials"><div className="testimonials-head"><SectionLabel>O QUE DIZEM QUEM USOU</SectionLabel><h2>Homens reais, conversas reais.</h2></div><div className="testimonials-grid">{testimonials.map((t) => (<article key={t.name} className="testimonial-card"><div className="testimonial-stars">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div><blockquote>{t.quote}</blockquote><div className="testimonial-author"><img src={t.photo} alt={t.name} /><span>{t.name}</span></div></article>))}</div></section>

      <section className="faq" id="faq"><div className="faq-head"><SectionLabel>PERGUNTAS FREQUENTES</SectionLabel><h2>Antes de decidir, tire suas dúvidas.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <FAQItem key={question} question={question} answer={answer} />)}</div></section>

      <footer><div className="footer-brand"><img src={MARK_IMAGE} alt="" /><span>CÓDIGO DA CONVERSA</span></div><p>Comunicação masculina sem jogos, pressão ou promessas irreais.</p><small>© 2026 Código da Conversa.</small></footer>
    </main>
  );
}
