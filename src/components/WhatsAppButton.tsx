import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const whatsappLink = 'https://wa.me/5541992226704?text=Gostaria%20de%20ser%20um%20parceiro%20da%20Koratech!';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
      style={{ width: '56px', height: '56px' }}
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;