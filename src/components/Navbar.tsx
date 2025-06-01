import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated navLinks to include the new About page
  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '/sobre' }, // Updated to use the new route
  ];

  // Updated Logo URL from Cloudinary
  const logoUrl = "https://res.cloudinary.com/djyq0eikg/image/upload/v1744874827/logo_ynkt6h.webp";
  const ctaText = "Fale Conosco";
  const ctaHref = "#cta";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-koratech-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={logoUrl}
            alt="Koratech Logo"
            className="h-10 w-auto"
            width="160"
            height="40"
           />
        </Link>

        {/* Desktop Navigation & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-koratech-black hover:text-koratech-blue transition-colors duration-300 font-semibold"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-koratech-black hover:text-koratech-blue transition-colors duration-300 font-semibold"
              >
                {link.name}
              </a>
            )
          ))}
          <a
            href={ctaHref}
            className="cta-button bg-koratech-blue text-koratech-black"
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} className="text-koratech-black" /> : <Menu size={28} className="text-koratech-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${isScrolled ? 'bg-koratech-white' : 'bg-koratech-white/95 backdrop-blur-sm'} shadow-lg py-4`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4 items-center">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-koratech-black hover:text-koratech-blue transition-colors duration-300 font-semibold text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-koratech-black hover:text-koratech-blue transition-colors duration-300 font-semibold text-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href={ctaHref}
              className="cta-button bg-koratech-blue text-koratech-black mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;