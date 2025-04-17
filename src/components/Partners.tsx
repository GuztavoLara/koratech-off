import React, { useRef, useEffect } from 'react';

// Helper function to extract name from URL
const extractNameFromUrl = (url: string): string => {
  try {
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const namePart = filename.split('.')[0]; // Get part before extension
    // Capitalize first letter and replace hyphens with spaces
    return namePart
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  } catch (e) {
    console.error("Error extracting name from URL:", url, e);
    return 'Partner Logo'; // Fallback name
  }
};

const newPartnerUrls = [
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/zendesk.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/vtex.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/vmware.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/veeam.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/ubiquiti.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/microsoft.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/logitech.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/lenovo.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/huawei.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/hewlett-packard.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/google-cloud.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/fortinet.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/dell.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/crowdstrike.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/bitdefender.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/aws.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/autodesk.webp',
  'https://wp-admin.lozertech.com.br/wp-content/uploads/2025/04/adobe.webp',
];

const partners = newPartnerUrls.map(url => ({
  name: extractNameFromUrl(url),
  url: url,
}));


// Duplicate partners for seamless looping
const extendedPartners = [...partners, ...partners];

const Partners: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: carouselRef.current, // Observe intersections within the carousel container
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the logo is visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (!carouselRef.current) return;

      const carouselRect = carouselRef.current.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;

      let centeredEntry: IntersectionObserverEntry | null = null;
      let minDistance = Infinity;

      entries.forEach((entry) => {
        // Remove centered class from all observed elements first
        if (entry.target instanceof HTMLElement) {
           entry.target.classList.remove('is-centered');
           entry.target.style.transform = 'scale(1)'; // Reset scale explicitly
        }

        if (entry.isIntersecting) {
          const logoRect = entry.target.getBoundingClientRect();
          const logoCenter = logoRect.left + logoRect.width / 2;
          const distance = Math.abs(carouselCenter - logoCenter);

          // Find the logo closest to the absolute center of the carousel viewport
          if (distance < minDistance) {
            minDistance = distance;
            centeredEntry = entry;
          }
        }
      });

      // Apply centered class to the closest logo
      if (centeredEntry && centeredEntry.target instanceof HTMLElement) {
        centeredEntry.target.classList.add('is-centered');
        centeredEntry.target.style.transform = 'scale(1.15)'; // Apply zoom
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each logo element
    const currentLogoRefs = logoRefs.current;
    currentLogoRefs.forEach((logo) => {
      if (logo) {
        observer.observe(logo);
      }
    });

    // Cleanup function
    return () => {
      currentLogoRefs.forEach((logo) => {
        if (logo) {
          observer.unobserve(logo);
        }
      });
      observer.disconnect();
    };
  }, []); // Run only once on mount

  return (
    <section id="partners" className="bg-koratech-gray-light py-12 md:py-16">
      <div className="container">
        <h2 className="section-title !mb-10">Tecnologias e Parceiros Estratégicos que Confiamos</h2>
      </div>
      {/* Carousel Container - Full width, overflow hidden */}
      <div
        ref={carouselRef}
        className="w-full overflow-hidden relative group" // Added group for hover pause
        style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }} // Fade edges
      >
        {/* Inner Track - Double width for looping, flex display, animation */}
        <div className="flex animate-scroll group-hover:animate-pause">
          {extendedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              ref={(el) => (logoRefs.current[index] = el)} // Assign ref to each logo container
              className="flex-shrink-0 w-auto px-8 md:px-12 flex justify-center items-center h-16 transition-transform duration-300 ease-in-out" // Added transition
            >
              <img
                src={partner.url}
                alt={partner.name}
                title={partner.name} // Tooltip for accessibility
                className="h-8 md:h-10 w-auto object-contain" // Consistent height, maintain aspect ratio
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
