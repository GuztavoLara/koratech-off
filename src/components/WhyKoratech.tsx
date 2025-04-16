import React from 'react';
import { Eye, Users, Target, Zap, Award } from 'lucide-react'; // Example icons

const differentiators = [
  { icon: Eye, text: 'Visão de quem já foi cliente: Entendemos suas dores e necessidades reais.' },
  { icon: Users, text: 'Abordagem de parceria real: Atuamos como uma extensão da sua equipe, focados no seu sucesso.' },
  { icon: Target, text: 'Foco em Resultados e Honestidade: Transparência total e soluções que entregam valor tangível.' },
  { icon: Zap, text: 'Inovação Constante: Buscamos e aplicamos as melhores tecnologias para manter sua empresa à frente.' },
  { icon: Award, text: 'Compromisso com a Excelência: Dedicação em cada projeto, do planejamento ao suporte contínuo.' },
];

const WhyKoratech: React.FC = () => {
  return (
    <section id="why-koratech" className="bg-koratech-white">
      <div className="container">
        <h2 className="section-title">Seu Sucesso é o Nosso Compromisso</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {differentiators.map((item, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <item.icon size={24} className="text-koratech-blue" strokeWidth={2} />
                </div>
                <p className="text-koratech-gray-medium">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyKoratech;
