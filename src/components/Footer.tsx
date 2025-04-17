import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Replace with actual contact info
  const contactEmail = "contato@koratech.com.br";
  const contactPhone = "+55 (XX) XXXX-XXXX";
  // Updated Logo URL from Cloudinary
  const logoUrl = "https://res.cloudinary.com/djyq0eikg/image/upload/v1744874827/logo_ynkt6h.webp";
  // Placeholder Social Links - REPLACE # WITH ACTUAL URLS
  const socialLinks = {
    instagram: "#",
    linkedin: "#",
    youtube: "#",
    facebook: "#",
  };

  return (
    <footer className="bg-koratech-gray-light text-koratech-gray-medium py-8 px-4">
      <div className="container mx-auto">
        {/* Top Row: Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
             {/* Updated src, added width/height, kept h-6 for styling */}
             <img
               src={logoUrl}
               alt="Koratech Logo"
               className="h-6 w-auto"
               width="96"
               height="24"
             />
          </a>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue">
              <FaInstagram size={24} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue">
              <FaLinkedin size={24} />
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue">
              <FaYoutube size={24} />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright, Contact, Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left border-t border-koratech-gray pt-4">
           <div className="mb-4 md:mb-0">
             <p className="text-sm">&copy; {currentYear} Koratech. Todos os direitos reservados.</p>
           </div>
           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
              <a href={`mailto:${contactEmail}`} className="hover:text-koratech-blue">{contactEmail}</a>
              <span className="hidden md:inline">|</span>
              <a href={`tel:${contactPhone.replace(/\D/g,'')}`} className="hover:text-koratech-blue">{contactPhone}</a>
              <span className="hidden md:inline">|</span>
              {/* Replace '#' with actual link to Privacy Policy */}
              <a href="#" className="hover:text-koratech-blue">Política de Privacidade</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
