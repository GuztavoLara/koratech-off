import React from 'react';
import { Briefcase, Server, Laptop, CloudCog } from 'lucide-react'; // Example icons

const services = [
  {
    icon: Briefcase,
    title: 'Consultoria de TI',
    description: 'Alinhamos tecnologia aos seus objetivos, otimizando investimentos e planejando o futuro do seu negócio.',
  },
  {
    icon: Server,
    title: 'Infraestrutura de TI',
    description: 'Projetamos e gerenciamos redes e servidores robustos para máxima performance e segurança confiável.',
  },
  {
    icon: Laptop,
    title: 'Suporte de Microinformática',
    description: 'Resolvemos problemas técnicos rapidamente para garantir a produtividade contínua da sua equipe.',
  },
  {
    icon: CloudCog,
    title: 'SaaS para Automação',
    description: 'Implementamos soluções SaaS para automatizar processos, aumentar a eficiência e impulsionar o crescimento.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-koratech-white"> {/* Added padding */}
      <div className="container mx-auto px-4"> {/* Added container and padding */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-koratech-black"> {/* Centered title, adjusted size/margin */}
          Soluções de TI Sob Medida para Impulsionar Seu Negócio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Responsive grid */}
          {services.map((service, index) => (
            <div
              key={index}
              // Updated border color here: border-koratech-blue
              className="text-center p-8 bg-koratech-light-gray rounded-lg border border-koratech-blue flex flex-col items-center" // Card styling: bg, rounded, border, padding, flex for centering
            >
              <div className="mb-5"> {/* Spacing below icon */}
                {/* Icon: Centered (due to flex parent), specific color and size */}
                <service.icon size={48} className="text-koratech-blue" strokeWidth={1.5} />
              </div>
              {/* Title: Centered (due to text-center parent), bold, margin bottom */}
              <h3 className="text-xl font-bold mb-3 text-koratech-black">{service.title}</h3>
              {/* Description: Centered (due to text-center parent), regular weight */}
              <p className="text-koratech-gray-medium leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
