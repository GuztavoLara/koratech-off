import React, { useState } from 'react';
import { Users, Eye, Award, Briefcase, Link, Target, MessageCircle, Compass, Shield, Headphones, Zap, SearchCheck, DraftingCompass, HardHat, TrendingUp, Map, Search, Group as UserGroup, FileText, Server, Cloud, Lock, Activity, ScanLine, AppWindow, Link2, Cpu } from 'lucide-react';
import LeadFormWidget from '../components/LeadFormWidget';

const AboutKoratech: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="antialiased">
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <section id="introducao" className="text-center py-16">
            <h1 className="text-4xl font-black mb-2">
              <span className="text-koratech-blue">K</span>ORATECH
            </h1>
            <p className="text-2xl font-bold text-gray-800 mb-6">
              UM PARCEIRO QUE ENTENDE SEU NEGÓCIO
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A Koratech nasceu da percepção de uma lacuna no mercado: a necessidade de um parceiro de TI que realmente entendesse as dores do cliente e oferecesse soluções estratégicas, não apenas técnicas. Nossa missão é simplificar a complexidade tecnológica, transformando desafios em resultados concretos, com expertise, transparência e compromisso genuíno com o sucesso de cada cliente.
            </p>
          </section>

          {/* Identity Section */}
          <section id="identidade" className="py-16 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Missão</h3>
                  <p className="text-gray-600">
                    Simplificar a complexidade tecnológica, transformando desafios tecnológicos em resultados de negócio concretos, com expertise, transparência e um compromisso genuíno com o sucesso de cada cliente.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Visão</h3>
                  <p className="text-gray-600">
                    Ser Referência na catalisação da inovação em TI para empresas no Brasil, capacitando empreendedores a atingir seu pleno potencial com tecnologia inteligente e focada em resultados.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Users className="w-12 h-12 text-koratech-blue mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-3">Respeito</h4>
                  <p className="text-gray-600">
                    Valorizamos cada cliente, colaborador e parceiro, ouvindo atentamente suas necessidades, tratando todos com dignidade e construindo relações baseadas na confiança mútua e na consideração.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Eye className="w-12 h-12 text-koratech-blue mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-3">Transparência</h4>
                  <p className="text-gray-600">
                    Operamos com total clareza em nossa comunicação, processos e propostas. Acreditamos que a honestidade e a abertura são fundamentais para construir e manter a confiança dos nossos clientes.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <Award className="w-12 h-12 text-koratech-blue mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-3">Excelência</h4>
                  <p className="text-gray-600">
                    Buscamos continuamente a mais alta qualidade em nossos serviços e soluções. Nosso compromisso é com a entrega de resultados que superem as expectativas, através da expertise técnica, da inovação aplicada e da dedicação em cada projeto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Differentials Section */}
          <section id="diferenciais" className="py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Nossos Diferenciais</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <Briefcase className="w-12 h-12 text-koratech-blue mb-4" />
                  <h3 className="text-xl font-bold mb-3">Visão de Quem Já Foi Cliente</h3>
                  <p className="text-gray-600">
                    Nossa empatia e compreensão das dores e necessidades reais das empresas vêm de uma valiosa experiência prática no ambiente corporativo, de quem já vivenciou os desafios de TI como cliente.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <Link className="w-12 h-12 text-koratech-blue mb-4" />
                  <h3 className="text-xl font-bold mb-3">Parceria Real e Estratégica</h3>
                  <p className="text-gray-600">
                    Atuação como uma extensão da equipe do cliente, quase como um 'sócio tecnológico', focado nos objetivos do negócio.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <Target className="w-12 h-12 text-koratech-blue mb-4" />
                  <h3 className="text-xl font-bold mb-3">Foco em Resultados Tangíveis</h3>
                  <p className="text-gray-600">
                    Prioridade em entregar tecnologia que funciona, resolve problemas e traz retorno claro e mensurável.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <MessageCircle className="w-12 h-12 text-koratech-blue mb-4" />
                  <h3 className="text-xl font-bold mb-3">Comunicação Clara e Sem "Tecniquês"</h3>
                  <p className="text-gray-600">
                    Acreditamos que você deve entender e participar das decisões de TI. Por isso, traduzimos o jargão técnico para uma linguagem clara, permitindo sua total participação e escolhas bem informadas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicos" className="py-16 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Soluções de TI Estratégicas</h2>

              {/* Consultoria */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <Compass className="w-16 h-16 text-koratech-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Consultoria Estratégica de TI</h3>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Map className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Mapeamento de Objetivos</h4>
                    <p className="text-sm text-gray-600">Identificamos os objetivos de negócio e alinhamos a estratégia de TI.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Search className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Análise da TI Atual</h4>
                    <p className="text-sm text-gray-600">Avaliamos gargalos, riscos e oportunidades na infraestrutura.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <UserGroup className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Seleção de Fornecedores</h4>
                    <p className="text-sm text-gray-600">Auxiliamos na escolha dos melhores parceiros e soluções.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FileText className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Plano Estratégico</h4>
                    <p className="text-sm text-gray-600">Criamos um roteiro tecnológico personalizado.</p>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                  Nossa consultoria estratégica transforma a TI em um ativo valioso para o seu negócio, garantindo decisões mais inteligentes com foco em ROI, alinhamento entre tecnologia e metas empresariais, otimização de custos e um caminho claro para a escalabilidade.
                </p>
              </div>

              {/* Infraestrutura */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <Shield className="w-16 h-16 text-koratech-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Infraestrutura de TI Robusta e Segura</h3>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Server className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Projeto e Implementação</h4>
                    <p className="text-sm text-gray-600">Redes cabeadas/Wi-Fi, servidores e infraestrutura completa.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Cloud className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Soluções em Nuvem</h4>
                    <p className="text-sm text-gray-600">Migração, backup e disaster recovery eficientes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Lock className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Cibersegurança</h4>
                    <p className="text-sm text-gray-600">Firewalls, antivírus, políticas e abordagem Zero Trust.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Activity className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Monitoramento Proativo</h4>
                    <p className="text-sm text-gray-600">Prevenção de problemas antes que afetem seu negócio.</p>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                  Com nossa infraestrutura robusta, sua empresa garante operações estáveis e confiáveis, minimizando downtime e protegendo dados críticos. Oferecemos soluções escaláveis que crescem com seu negócio, proporcionando tranquilidade para que você foque no que realmente importa.
                </p>
              </div>

              {/* Suporte */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <Headphones className="w-16 h-16 text-koratech-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Suporte Técnico Ágil e Humanizado</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Zap className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Atendimento Rápido</h4>
                    <p className="text-sm text-gray-600">Resposta ágil para problemas de microinformática, software e sistemas.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <SearchCheck className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Diagnóstico Preciso</h4>
                    <p className="text-sm text-gray-600">Identificação eficaz da causa raiz dos problemas.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <MessageCircle className="w-8 h-8 text-koratech-blue mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Comunicação Clara</h4>
                    <p className="text-sm text-gray-600">Explicações sem 'tecniquês' e atualizações constantes.</p>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                  Nosso suporte técnico vai além da simples resolução de problemas. Minimizamos o impacto na produtividade da sua equipe, garantimos a continuidade das operações e oferecemos um atendimento verdadeiramente humanizado, que entende a urgência de cada situação e reduz o tempo interno gasto com questões de TI.
                </p>
              </div>

              {/* Automação */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <Zap className="w-16 h-16 text-koratech-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Automação e Soluções SaaS com IA</h3>
                </div>
                
                <div className="max-w-2xl mx-auto">
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                      <Cpu className="w-8 h-8 text-koratech-blue mr-4" />
                      <div>
                        <h4 className="font-bold">Inteligência Artificial</h4>
                        <p className="text-sm text-gray-600">Soluções avançadas para decisões mais inteligentes</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                      <Link2 className="w-8 h-8 text-koratech-blue mr-4" />
                      <div>
                        <h4 className="font-bold">Integrações Personalizadas</h4>
                        <p className="text-sm text-gray-600">Conexão entre sistemas para fluxo contínuo</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                      <AppWindow className="w-8 h-8 text-koratech-blue mr-4" />
                      <div>
                        <h4 className="font-bold">Implementação de SaaS</h4>
                        <p className="text-sm text-gray-600">CRMs, ERPs e ferramentas específicas</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                      <ScanLine className="w-8 h-8 text-koratech-blue mr-4" />
                      <div>
                        <h4 className="font-bold">Análise de Processos</h4>
                        <p className="text-sm text-gray-600">Identificação de oportunidades de automação</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-8">
                  Nossas soluções de automação e SaaS aumentam significativamente a eficiência operacional e a produtividade da sua equipe. Reduzimos erros manuais e liberamos seus colaboradores para focarem em atividades estratégicas, otimizando custos e criando processos ágeis e escaláveis que melhoram a tomada de decisões.
                </p>
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section id="metodologia" className="py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Nossa Metodologia de Trabalho Colaborativa</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <SearchCheck className="w-12 h-12 text-koratech-blue mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">1. Diagnóstico</h4>
                  <p className="text-gray-600">
                    Compreensão profunda das necessidades, dores e objetivos do seu negócio, mapeamento da infraestrutura atual e identificação de oportunidades de melhoria.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <DraftingCompass className="w-12 h-12 text-koratech-blue mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">2. Planejamento</h4>
                  <p className="text-gray-600">
                    Elaboração de estratégias personalizadas, definição de prioridades, estabelecimento de cronogramas e alinhamento de expectativas para garantir resultados efetivos.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <HardHat className="w-12 h-12 text-koratech-blue mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">3. Implementação</h4>
                  <p className="text-gray-600">
                    Execução meticulosa das soluções propostas, com comunicação constante, minimização de impactos na operação e treinamento adequado da equipe.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <TrendingUp className="w-12 h-12 text-koratech-blue mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">4. Acompanhamento</h4>
                  <p className="text-gray-600">
                    Monitoramento contínuo dos resultados, ajustes necessários, suporte proativo e reuniões periódicas para garantir a evolução constante da sua TI.
                  </p>
                </div>
              </div>
              
              <p className="text-center text-gray-600 max-w-3xl mx-auto mt-8">
                A Koratech atua como um verdadeiro parceiro estratégico, acompanhando cada etapa do processo com transparência e compromisso. Nossa abordagem colaborativa garante que as soluções implementadas estejam sempre alinhadas aos objetivos do seu negócio.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section id="cta" className="py-20 bg-koratech-blue text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-black mb-6">
                Pronto para Transformar Sua TI em Ativo Estratégico?
              </h2>
              <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
                Deixe a Koratech ser o parceiro que entende seu negócio e impulsiona seus resultados através da tecnologia. Vamos conversar sobre seus desafios e como podemos ajudar.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a
                  href="https://wa.me/5541992226704?text=Olá%20Koratech!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20suas%20soluções."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-white text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Solicitar Contato
                </button>
              </div>
            </div>
          </section>

          {/* Lead Form Widget */}
          <LeadFormWidget isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
      </main>
    </div>
  );
};

export default AboutKoratech;