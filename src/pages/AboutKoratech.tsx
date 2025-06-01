import React from 'react';
import { ArrowRight, Eye, Users, Target, MessageSquare, Activity, Shield, Cloud, Brain } from 'lucide-react';

const AboutKoratech: React.FC = () => {
  const values = [
    {
      title: 'Respeito',
      description: 'Valorizamos cada cliente, colaborador e parceiro, ouvindo atentamente suas necessidades, tratando todos com dignidade e construindo relações baseadas na confiança mútua e na consideração.',
      icon: Users
    },
    {
      title: 'Transparência',
      description: 'Operamos com total clareza em nossa comunicação, processos e propostas. Acreditamos que a honestidade e a abertura são fundamentais para construir e manter a confiança dos nossos clientes.',
      icon: Eye
    },
    {
      title: 'Excelência',
      description: 'Buscamos continuamente a mais alta qualidade em nossos serviços e soluções. Nosso compromisso é com a entrega de resultados que superem as expectativas, através da expertise técnica, da inovação aplicada e da dedicação em cada projeto.',
      icon: Target
    }
  ];

  const differentials = [
    {
      title: 'Visão de Quem Já Foi Cliente',
      description: 'Nossa empatia e compreensão das dores e necessidades reais das empresas vêm de uma valiosa experiência prática no ambiente corporativo, de quem já vivenciou os desafios de TI como cliente.',
      icon: Eye
    },
    {
      title: 'Parceria Real e Estratégica',
      description: 'Atuação como uma extensão da equipe do cliente, quase como um "sócio tecnológico", focado nos objetivos do negócio.',
      icon: Users
    },
    {
      title: 'Foco em Resultados Tangíveis',
      description: 'Prioridade em entregar tecnologia que funciona, resolve problemas e traz retorno claro e mensurável.',
      icon: Target
    },
    {
      title: 'Comunicação Clara e Sem "Tecniquês"',
      description: 'Acreditamos que você deve entender e participar das decisões de TI. Por isso, traduzimos o jargão técnico para uma linguagem clara, permitindo sua total participação e escolhas bem informadas.',
      icon: MessageSquare
    }
  ];

  const methodology = [
    {
      title: 'Diagnóstico',
      description: 'Compreensão profunda das necessidades, dores e objetivos do seu negócio, mapeamento da infraestrutura atual e identificação de oportunidades de melhoria.',
      icon: Activity
    },
    {
      title: 'Planejamento',
      description: 'Elaboração de estratégias personalizadas, definição de prioridades, estabelecimento de cronogramas e alinhamento de expectativas para garantir resultados efetivos.',
      icon: Target
    },
    {
      title: 'Implementação',
      description: 'Execução meticulosa das soluções propostas, com comunicação constante, minimização de impactos na operação e treinamento adequado da equipe.',
      icon: ArrowRight
    },
    {
      title: 'Acompanhamento',
      description: 'Monitoramento contínuo dos resultados, ajustes necessários, suporte proativo e reuniões periódicas para garantir a evolução constante da sua TI.',
      icon: Eye
    }
  ];

  const solutions = [
    {
      title: 'Consultoria Estratégica de TI',
      description: 'Nossa consultoria estratégica transforma a TI em um ativo valioso para o seu negócio, garantindo decisões mais inteligentes com foco em ROI, alinhamento entre tecnologia e metas empresariais, otimização de custos e um caminho claro para a escalabilidade.',
      topics: [
        'Mapeamento de Objetivos',
        'Análise da TI Atual',
        'Seleção de Fornecedores',
        'Plano Estratégico'
      ],
      icon: Target
    },
    {
      title: 'Infraestrutura de TI Robusta e Segura',
      description: 'Com nossa infraestrutura robusta, sua empresa garante operações estáveis e confiáveis, minimizando downtime e protegendo dados críticos. Oferecemos soluções escaláveis que crescem com seu negócio, proporcionando tranquilidade para que você foque no que realmente importa.',
      topics: [
        'Projeto e Implementação',
        'Soluções em Nuvem',
        'Cibersegurança',
        'Monitoramento Proativo'
      ],
      icon: Shield
    },
    {
      title: 'Suporte Técnico Ágil e Humanizado',
      description: 'Nosso suporte técnico vai além da simples resolução de problemas. Minimizamos o impacto na produtividade da sua equipe, garantimos a continuidade das operações e oferecemos um atendimento verdadeiramente humanizado, que entende a urgência de cada situação e reduz o tempo interno gasto com questões de TI.',
      topics: [
        'Atendimento Rápido',
        'Diagnóstico Preciso',
        'Comunicação Clara'
      ],
      icon: MessageSquare
    },
    {
      title: 'Automação e Soluções SaaS com IA',
      description: 'Nossas soluções de automação e SaaS aumentam significativamente a eficiência operacional e a produtividade da sua equipe. Reduzimos erros manuais e liberamos seus colaboradores para focarem em atividades estratégicas, otimizando custos e criando processos ágeis e escaláveis que melhoram a tomada de decisões.',
      topics: [
        'Análise de Processos',
        'Implementação de SaaS',
        'Integrações Personalizadas',
        'Inteligência Artificial'
      ],
      icon: Brain
    }
  ];

  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-koratech-gray-light to-koratech-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Koratech: Um Parceiro Estratégico em TI
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8 text-koratech-gray-medium">
            A Koratech nasceu da percepção de uma lacuna no mercado: a necessidade de um parceiro de TI que realmente entendesse as dores do cliente e oferecesse soluções estratégicas, não apenas técnicas.
          </p>
          <p className="text-2xl text-center font-bold text-koratech-blue">
            UM PARCEIRO QUE ENTENDE SEU NEGÓCIO
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-koratech-white py-16">
        <div className="container">
          <h2 className="section-title">Missão, Visão e Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p>Simplificar a complexidade tecnológica, transformando desafios tecnológicos em resultados de negócio concretos, com expertise, transparência e um compromisso genuíno com o sucesso de cada cliente.</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p>Ser Referência na catalisação da inovação em TI para empresas no Brasil, capacitando empreendedores a atingir seu pleno potencial com tecnologia inteligente e focada em resultados.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-subtle-bg">
                <div className="flex justify-center mb-4">
                  <value.icon size={40} className="text-koratech-blue" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="bg-koratech-gray-light py-16">
        <div className="container">
          <h2 className="section-title">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="card flex items-start space-x-4">
                <differential.icon size={24} className="text-koratech-blue flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-bold mb-2">{differential.title}</h3>
                  <p>{differential.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-koratech-white py-16">
        <div className="container">
          <h2 className="section-title">Nossas Soluções de TI Estratégicas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <solution.icon size={32} className="text-koratech-blue mr-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                </div>
                <p className="mb-4">{solution.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {solution.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-koratech-gray-medium">{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-koratech-gray-light py-16">
        <div className="container">
          <h2 className="section-title">Nossa Metodologia de Trabalho Colaborativa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  <step.icon size={40} className="text-koratech-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 max-w-3xl mx-auto">
            A Koratech atua como um verdadeiro parceiro estratégico, acompanhando cada etapa do processo com transparência e compromisso. Nossa abordagem colaborativa garante que as soluções implementadas estejam sempre alinhadas aos objetivos do seu negócio.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-koratech-blue py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar Sua TI em Ativo Estratégico?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Deixe a Koratech ser o parceiro que entende seu negócio e impulsiona seus resultados através da tecnologia. Vamos conversar sobre seus desafios e como podemos ajudar.
          </p>
          <a href="#cta" className="cta-button bg-koratech-white text-koratech-black">
            Fale com um Especialista
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutKoratech;