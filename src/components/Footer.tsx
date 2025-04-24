import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const contactEmail = "contato@koratech.com.br";
  const contactPhone = "+55 (XX) XXXX-XXXX"; // Replace with actual phone
  const logoUrl = "https://res.cloudinary.com/djyq0eikg/image/upload/v1744874827/logo_ynkt6h.webp";
  const socialLinks = {
    instagram: "https://instagram.com/koratech.brasil",
    linkedin: "https://linkedin.com/company/koratech-brasil",
    youtube: "https://www.youtube.com/@koratech.brasil",
    facebook: "https://facebook.com/profile.php?id=61575517236755",
  };

  return (
    <footer className="bg-koratech-gray-light text-koratech-gray-medium py-8 px-4">
      <div className="container mx-auto">
        {/* Top Row: Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
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
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-koratech-gray-medium hover:text-koratech-blue" aria-label="Facebook">
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
              {/* Use Link for internal routing */}
              <Link to="/politica-de-privacidade" className="hover:text-koratech-blue">Política de Privacidade</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
