import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Services from './components/Services';
import WhyInvest from './components/WhyInvest';
import Proof from './components/Proof';
import Partners from './components/Partners';
import WhyKoratech from './components/WhyKoratech';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutKoratech from './pages/AboutKoratech'; // Import the new page

// Component for the main page content
const MainPageContent = () => (
  <>
    <HeroCarousel />
    <Services />
    <WhyInvest />
    <Proof />
    <Partners />
    <WhyKoratech />
    <CTA />
  </>
);

function App() {
  return (
    <div className="font-montserrat bg-koratech-light-gray text-koratech-gray">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPageContent />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/sobre" element={<AboutKoratech />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;