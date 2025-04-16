import React from 'react';

const WhatsAppButton: React.FC = () => {
  const whatsappLink = 'https://wa.me/5541985081718?text=Gostaria%20de%20ser%20um%20parceiro%20da%20Koratech!';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
      style={{ width: '56px', height: '56px' }} // Explicit size for consistency
    >
      {/* Simple SVG WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="w-6 h-6" // Adjust size as needed
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .9c101.3 0 184.8 83.5 184.8 184.8 0 32.7-8.6 63.9-24.4 91.8l-16.5 19.8-119.7 31.4-122.4-32.3-18.5-21.4C60.1 367.4 48 331.6 48 295.1c0-101.2 83.5-184.8 184.8-184.8zm94.1 140.3c-5.3-2.6-31.6-15.6-36.6-17.3-5-1.7-8.6-2.6-12.2 2.6-3.6 5.3-13.9 17.3-17 20.8-3.1 3.6-6.2 4.1-11.5 1.5-16.8-8.1-31.6-17.3-44.8-30.9-13.2-13.6-22.3-30.4-31.4-48.5-2.6-5.3-.5-8.1 1.5-10.7 1.8-2.3 3.6-4.1 5.3-6.2 1.7-2.1 2.6-3.6 4.1-6.2 1.5-2.6.8-4.8-.8-7.4-1.5-2.6-12.2-29.3-16.8-40.1-4.6-10.8-9.1-9.3-12.2-9.3-3.1 0-6.7-.5-10.2-.5-3.6 0-9.1 1.3-13.9 6.2-4.8 5.3-18.5 18-18.5 44.1 0 26.1 18.9 51.1 21.5 54.7 2.6 3.6 37.4 57.4 90.5 79.7 12.2 5.3 21.8 8.6 29.1 11.2 11.5 4.1 21.8 3.6 30.1 2.1 9.1-1.5 31.6-12.9 36-25.4 4.6-12.4 4.6-23 3.1-25.4-1.5-2.6-5.3-4.1-10.7-6.7z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
