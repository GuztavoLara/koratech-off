import React from 'react';
import { ShieldCheck, Rocket, BarChart } from 'lucide-react'; // Example icons

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Proteção Essencial Contra Ameaças Atuais',
    text: 'Infraestrutura moderna blinda seu negócio contra ciberataques (princípios Zero Trust), garante conformidade e protege sua reputação, um ativo crítico.',
  },
  {
    icon: Rocket,
    title: 'Responda Rápido, Inove Sempre',
    text: 'Ganhe velocidade para lançar produtos e adaptar-se ao mercado com nuvem e automação. Estudos mostram reduções drásticas no tempo de implantação.',
  },
  {
    icon: BarChart,
    title: 'Transforme TI de Custo em Lucro',
    text: 'Empresas com TI moderna superam concorrentes em receita e margens (MIT CISR). Habilite novos modelos de negócio e tome decisões baseadas em dados/IA.',
  },
];

const WhyInvest: React.FC = () => {
  return (
    <section id="why-invest" className="bg-koratech-gray-light">
      <div className="container">
        <h2 className="section-title">Por Que Investir em TI Moderna é Crucial para Seu Sucesso?</h2>
        {/* Optional Intro:
        <p className="text-center text-koratech-gray-medium mb-12 max-w-3xl mx-auto">
          No cenário atual, tecnologia não é mais suporte, é estratégia. Veja os motivos essenciais para modernizar sua infraestrutura:
        </p>
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="card-subtle-bg text-center">
              <div className="flex justify-center mb-4">
                <reason.icon size={48} className="text-koratech-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-koratech-black">{reason.title}</h3>
              <p className="text-koratech-gray-medium">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
