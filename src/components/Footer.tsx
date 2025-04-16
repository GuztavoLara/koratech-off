import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Replace with actual contact info
  const contactEmail = "contato@koratech.com.br";
  const contactPhone = "+55 (XX) XXXX-XXXX";
  // Provided Logo URL
  const logoUrl = "https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/logo.png";

  return (
    <footer className="bg-koratech-gray-light text-koratech-gray-medium py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          {/* Logo */}
          <a href="#hero" className="flex items-center justify-center md:justify-start mb-2">
             <img src={logoUrl} alt="Koratech Logo" className="h-6 w-auto" /> {/* Use the image, adjusted size */}
          </a>
          <p className="text-sm">&copy; {currentYear} Koratech. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
           <a href={`mailto:${contactEmail}`} className="text-sm hover:text-koratech-blue">{contactEmail}</a>
           <span className="hidden md:inline">|</span>
           <a href={`tel:${contactPhone.replace(/\D/g,'')}`} className="text-sm hover:text-koratech-blue">{contactPhone}</a>
           <span className="hidden md:inline">|</span>
           {/* Replace '#' with actual link to Privacy Policy */}
           <a href="#" className="text-sm hover:text-koratech-blue">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
