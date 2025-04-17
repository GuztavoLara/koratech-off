import React, { useState, useEffect, useCallback } from 'react';

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgImageUrl?: string; // Optional background image URL
  bgColor?: string; // Optional background color
  bgClass?: string; // Optional Tailwind class for background
}

const banners: Banner[] = [
  {
    id: 1,
    title: 'Wi-Fi lento travando sua equipe e seus negócios?',
    subtitle: 'Chega de perder produtividade! A Koratech projeta e gerencia redes Wi-Fi corporativas rápidas, estáveis e seguras.',
    ctaText: 'Otimize Sua Rede Agora!',
    ctaLink: '#contact',
    // Updated image URL for Banner 1 to AVIF
    bgImageUrl: 'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/banner01.avif',
    bgClass: 'bg-gradient-to-r from-gray-100 to-gray-300', // Fallback gradient
  },
  {
    id: 2,
    title: 'Sua concorrência já usa IA. E sua empresa?',
    subtitle: 'Não fique para trás! Automatize processos, ganhe eficiência e tome decisões mais inteligentes com as soluções de IA da Koratech.',
    ctaText: 'Automatize com Inteligência',
    ctaLink: '#contact',
    // Updated image URL for Banner 2 to AVIF
    bgImageUrl: 'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/banner2.avif',
    bgClass: 'bg-gradient-to-r from-blue-100 to-blue-300', // Fallback gradient
  },
  {
    id: 3,
    title: 'Tecnologia é ferramenta. Nosso foco são suas Metas.',
    subtitle: 'Oferecemos consultoria de TI estratégica e suporte completo para garantir que sua tecnologia trabalhe a favor do seu sucesso.',
    ctaText: 'Fale com Nossos Consultores',
    ctaLink: '#contact',
    // Updated image URL for Banner 3 to AVIF
    bgImageUrl: 'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/banner3.avif',
    bgClass: 'bg-gradient-to-r from-teal-100 to-teal-300', // Fallback gradient
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden p-0">
      <div className="relative h-full w-full">
        {/* Slides */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{
              backgroundImage: banner.bgImageUrl ? `url(${banner.bgImageUrl})` : 'none',
              backgroundColor: banner.bgColor ? banner.bgColor : 'transparent',
            }}
            // Apply background class only if no image URL is provided
            // Or use it as a fallback/overlay style
            // className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${!banner.bgImageUrl ? banner.bgClass : ''} bg-cover bg-center`}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-koratech-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">{banner.title}</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl text-koratech-white/90">{banner.subtitle}</p>
              <a href={banner.ctaLink} className="cta-button bg-koratech-blue text-koratech-black">
                {banner.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-koratech-blue' : 'bg-koratech-white/50 hover:bg-koratech-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
