import React from 'react';
import { Quote } from 'lucide-react';

const proofs = [
  { quote: "Investimentos em nuvem podem gerar ROIs superiores a 200% em 3 anos.", source: "Forrester Consulting (Compilado)" },
  // Card 2 (index 1) - Updated Text
  { quote: "Empresas com TI moderna e ágil crescem mais e lucram mais que a concorrência. Tecnologia que impulsiona de verdade!", source: "Pesquisas MIT CISR" },
  { quote: "Automação e ERPs modernos podem liberar de 7-15 horas/semana por funcionário chave.", source: "Forrester TEI Study (Ex: Dynamics 365)" },
  // Card 4 (index 3) - Updated Text
  { quote: "Investir certo em TI se paga (e rápido)! Estudos mostram retornos que podem mais que dobrar seu investimento em 3 anos.", source: "Análises Forrester Consulting" },
  { quote: "Conselhos de Administração veem cibersegurança como risco de negócio primordial, tornando a infraestrutura segura essencial.", source: "Gartner Analysis" },
];

const Proof: React.FC = () => {
  return (
    <section id="proof" className="bg-koratech-white">
      <div className="container">
        <h2 className="section-title">O Impacto Comprovado da Tecnologia: Visão dos Líderes Globais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proofs.map((proof, index) => (
            <div key={index} className="card relative p-6 pt-12 border border-koratech-gray-light rounded-lg shadow-sm flex flex-col h-full bg-white"> {/* Added bg-white for contrast */}
              <Quote size={48} className="absolute top-4 left-4 text-koratech-blue opacity-15" strokeWidth={1.5} /> {/* Slightly adjusted opacity */}
              <blockquote className="mb-4 italic text-lg text-koratech-black flex-grow"> {/* Using blockquote */}
                "{proof.quote}"
              </blockquote>
              <footer className="text-sm text-koratech-gray-medium font-medium text-right mt-auto"> {/* Using footer */}
                - {proof.source}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
