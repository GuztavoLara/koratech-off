import React, { useEffect } from 'react';

const AboutKoratech: React.FC = () => {
  useEffect(() => {
    // Handle mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Handle nav link activation
    const navLinks = document.querySelectorAll('#main-nav a.nav-link, #mobile-menu a');
    const sections = document.querySelectorAll('main section');

    const activateLink = (targetId: string) => {
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink instanceof HTMLElement && navLink.getAttribute('href') === `#${targetId}`) {
          navLink.classList.add('active');
        }
      });
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          activateLink(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    if (sections.length > 0) {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach(section => {
        if (section.id) {
          observer.observe(section);
        }
      });
    }

    // Cleanup
    return () => {
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.removeEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    };
  }, []);

  return (
    <div className="antialiased">
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section id="introducao-pdf" className="text-center">
            <h1 className="text-4xl font-black text-koratech-blue mt-8 mb-2">KORATECH</h1>
            <p className="text-2xl font-bold text-gray-800 mb-6">UM PARCEIRO QUE ENTENDE SEU NEGÓCIO</p>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Koratech: Um Parceiro Estratégico em TI</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A Koratech nasceu da percepção de uma lacuna no mercado: a necessidade de um parceiro de TI que realmente entendesse as dores do cliente e oferecesse soluções estratégicas, não apenas técnicas. Nossa missão é simplificar a complexidade tecnológica, transformando desafios em resultados concretos, com expertise, transparência e compromisso genuíno com o sucesso de cada cliente.
            </p>
          </section>

          {/* Identity Section */}
          <section id="identidade-pdf">
            <h2 className="section-heading text-koratech-blue">Missão, Visão e Valores</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="content-card">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Missão</h3>
                <p className="text-gray-700">
                  Simplificar a complexidade tecnológica, transformando desafios tecnológicos em resultados de negócio concretos, com expertise, transparência e um compromisso genuíno com o sucesso de cada cliente.
                </p>
              </div>
              <div className="content-card">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Visão</h3>
                <p className="text-gray-700">
                  Ser Referência na catalisação da inovação em TI para empresas no Brasil, capacitando empreendedores a atingir seu pleno potencial com tecnologia inteligente e focada em resultados.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="content-card text-center">
                <h4 className="font-bold text-lg mb-1">Respeito</h4>
                <p className="text-sm text-gray-600">
                  Valorizamos cada cliente, colaborador e parceiro, ouvindo atentamente suas necessidades, tratando todos com dignidade e construindo relações baseadas na confiança mútua e na consideração.
                </p>
              </div>
              <div className="content-card text-center">
                <h4 className="font-bold text-lg mb-1">Transparência</h4>
                <p className="text-sm text-gray-600">
                  Operamos com total clareza em nossa comunicação, processos e propostas. Acreditamos que a honestidade e a abertura são fundamentais para construir e manter a confiança dos nossos clientes.
                </p>
              </div>
              <div className="content-card text-center">
                <h4 className="font-bold text-lg mb-1">Excelência</h4>
                <p className="text-sm text-gray-600">
                  Buscamos continuamente a mais alta qualidade em nossos serviços e soluções. Nosso compromisso é com a entrega de resultados que superem as expectativas, através da expertise técnica, da inovação aplicada e da dedicação em cada projeto.
                </p>
              </div>
            </div>
          </section>

          {/* Differentials Section */}
          <section id="diferenciais-pdf">
            <h2 className="section-heading">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-card">
                <h3 className="text-lg font-semibold text-koratech-blue mb-1">Visão de Quem Já Foi Cliente</h3>
                <p className="text-gray-700">
                  Nossa empatia e compreensão das dores e necessidades reais das empresas vêm de uma valiosa experiência prática no ambiente corporativo, de quem já vivenciou os desafios de TI como cliente.
                </p>
              </div>
              <div className="content-card">
                <h3 className="text-lg font-semibold text-koratech-blue mb-1">Parceria Real e Estratégica</h3>
                <p className="text-gray-700">
                  Atuação como uma extensão da equipe do cliente, quase como um "sócio tecnológico", focado nos objetivos do negócio.
                </p>
              </div>
              <div className="content-card">
                <h3 className="text-lg font-semibold text-koratech-blue mb-1">Foco em Resultados Tangíveis</h3>
                <p className="text-gray-700">
                  Prioridade em entregar tecnologia que funciona, resolve problemas e traz retorno claro e mensurável.
                </p>
              </div>
              <div className="content-card">
                <h3 className="text-lg font-semibold text-koratech-blue mb-1">Comunicação Clara e Sem "Tecniquês"</h3>
                <p className="text-gray-700">
                  Acreditamos que você deve entender e participar das decisões de TI. Por isso, traduzimos o jargão técnico para uma linguagem clara, permitindo sua total participação e escolhas bem informadas.
                </p>
              </div>
            </div>
          </section>

          {/* Services Sections */}
          <section id="consultoria-pdf">
            <h2 className="section-heading text-koratech-blue">Consultoria Estratégica de TI</h2>
            <div className="diagram-circle-container">
              <div className="diagram-circle-center-custom"></div>
              <div className="diagram-segment-custom segment-custom-1">
                <span className="segment-icon">🗺️</span>Mapeamento de Objetivos
              </div>
              <div className="diagram-segment-custom segment-custom-2">
                <span className="segment-icon">🔍</span>Análise da TI Atual
              </div>
              <div className="diagram-segment-custom segment-custom-3">
                <span className="segment-icon">🤝</span>Seleção de Fornecedores
              </div>
              <div className="diagram-segment-custom segment-custom-4">
                <span className="segment-icon">✈️</span>Plano Estratégico
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
                Nossa consultoria estratégica transforma a TI em um ativo valioso para o seu negócio, garantindo decisões mais inteligentes com foco em ROI, alinhamento entre tecnologia e metas empresariais, otimização de custos e um caminho claro para a escalabilidade.
              </p>
            </div>
          </section>

          <section id="infraestrutura-pdf">
            <h2 className="section-heading text-koratech-blue">Infraestrutura de TI Robusta e Segura</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-1">Projeto e Implementação</h4>
                <p className="text-sm text-gray-600">Redes cabeadas/Wi-Fi, servidores e infraestrutura completa.</p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-1">Soluções em Nuvem</h4>
                <p className="text-sm text-gray-600">Migração, backup e disaster recovery eficientes.</p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-1">Cibersegurança</h4>
                <p className="text-sm text-gray-600">Firewalls, antivírus, políticas e abordagem Zero Trust.</p>
              </div>
              <div className="content-card">
                <h4 className="font-semibold text-lg mb-1">Monitoramento Proativo</h4>
                <p className="text-sm text-gray-600">Prevenção de problemas antes que afetem seu negócio.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Com nossa infraestrutura robusta, sua empresa garante operações estáveis e confiáveis, minimizando downtime e protegendo dados críticos. Oferecemos soluções escaláveis que crescem com seu negócio, proporcionando tranquilidade para que você foque no que realmente importa.
            </p>
          </section>

          <section id="suporte-pdf">
            <h2 className="section-heading text-koratech-blue">Suporte Técnico Ágil e Humanizado</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="content-card text-center">
                <span className="text-3xl mb-2 block">⚡</span>
                <h4 className="font-semibold text-lg mb-1">Atendimento Rápido</h4>
                <p className="text-sm text-gray-600">Resposta ágil para problemas de microinformática, software e sistemas.</p>
              </div>
              <div className="content-card text-center">
                <span className="text-3xl mb-2 block">🎯</span>
                <h4 className="font-semibold text-lg mb-1">Diagnóstico Preciso</h4>
                <p className="text-sm text-gray-600">Identificação eficaz da causa raiz dos problemas.</p>
              </div>
              <div className="content-card text-center">
                <span className="text-3xl mb-2 block">💬</span>
                <h4 className="font-semibold text-lg mb-1">Comunicação Clara</h4>
                <p className="text-sm text-gray-600">Explicações sem "tecniquês" e atualizações constantes.</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Nosso suporte técnico vai além da simples resolução de problemas. Minimizamos o impacto na produtividade da sua equipe, garantimos a continuidade das operações e oferecemos um atendimento verdadeiramente humanizado, que entende a urgência de cada situação e reduz o tempo interno gasto com questões de TI.
            </p>
          </section>

          <section id="automacao-pdf">
            <h2 className="section-heading text-koratech-blue">Automação e Soluções SaaS com IA</h2>
            <div className="diagram-pyramid-custom">
              <div className="pyramid-layer-custom">
                <span className="pyramid-icon">💡</span>
                <div>
                  <span className="font-semibold">Inteligência Artificial</span>
                  <br />
                  <span className="text-xs">Soluções avançadas para decisões mais inteligentes</span>
                </div>
              </div>
              <div className="pyramid-layer-custom">
                <span className="pyramid-icon">🔗</span>
                <div>
                  <span className="font-semibold">Integrações Personalizadas</span>
                  <br />
                  <span className="text-xs">Conexão entre sistemas para fluxo contínuo</span>
                </div>
              </div>
              <div className="pyramid-layer-custom">
                <span className="pyramid-icon">☁️</span>
                <div>
                  <span className="font-semibold">Implementação de SaaS</span>
                  <br />
                  <span className="text-xs">CRMs, ERPs e ferramentas específicas</span>
                </div>
              </div>
              <div className="pyramid-layer-custom">
                <span className="pyramid-icon">⚙️</span>
                <div>
                  <span className="font-semibold">Análise de Processos</span>
                  <br />
                  <span className="text-xs">Identificação de oportunidades de automação</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mt-6 leading-relaxed">
              Nossas soluções de automação e SaaS aumentam significativamente a eficiência operacional e a produtividade da sua equipe. Reduzimos erros manuais e liberamos seus colaboradores para focarem em atividades estratégicas, otimizando custos e criando processos ágeis e escaláveis que melhoram a tomada de decisões.
            </p>
          </section>

          <section id="metodologia-pdf">
            <h2 className="section-heading">Nossa Metodologia de Trabalho</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="content-card text-center">
                <span className="text-2xl font-bold text-koratech-blue mb-2">1. Diagnóstico</span>
                <p className="text-sm text-gray-600">
                  Compreensão profunda das necessidades, dores e objetivos do seu negócio, mapeamento da infraestrutura atual e identificação de oportunidades de melhoria.
                </p>
              </div>
              <div className="content-card text-center">
                <span className="text-2xl font-bold text-koratech-blue mb-2">2. Planejamento</span>
                <p className="text-sm text-gray-600">
                  Elaboração de estratégias personalizadas, definição de prioridades, estabelecimento de cronogramas e alinhamento de expectativas para garantir resultados efetivos.
                </p>
              </div>
              <div className="content-card text-center">
                <span className="text-2xl font-bold text-koratech-blue mb-2">3. Implementação</span>
                <p className="text-sm text-gray-600">
                  Execução meticulosa das soluções propostas, com comunicação constante, minimização de impactos na operação e treinamento adequado da equipe.
                </p>
              </div>
              <div className="content-card text-center">
                <span className="text-2xl font-bold text-koratech-blue mb-2">4. Acompanhamento</span>
                <p className="text-sm text-gray-600">
                  Monitoramento contínuo dos resultados, ajustes necessários, suporte proativo e reuniões periódicas para garantir a evolução constante da sua TI.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto leading-relaxed">
              A Koratech atua como um verdadeiro parceiro estratégico, acompanhando cada etapa do processo com transparência e compromisso. Nossa abordagem colaborativa garante que as soluções implementadas estejam sempre alinhadas aos objetivos do seu negócio.
            </p>
          </section>

          <section id="contato-final" className="text-center bg-koratech-gray-light py-16 my-10 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pronto para ter uma TI que realmente impulsiona seu negócio?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
              Fale com a Koratech. Somos o parceiro estratégico que entende suas dores e foca nos seus resultados.
            </p>
            <a
              href="https://wa.me/5541992226704?text=Olá%20Koratech!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20suas%20soluções."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-koratech-blue text-black font-bold py-4 px-10 rounded-lg text-lg hover:opacity-80 transition-opacity duration-300 shadow-lg"
            >
              Fale com um Especialista Agora
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutKoratech;