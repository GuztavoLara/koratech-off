import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Services from './components/Services';
import WhyInvest from './components/WhyInvest';
import Proof from './components/Proof';
import Partners from './components/Partners';
import WhyKoratech from './components/WhyKoratech';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // Import the new component

function App() {
  return (
    <div className="font-montserrat bg-koratech-light-gray text-koratech-gray">
      <Navbar />
      <main>
        <HeroCarousel />
        <Services />
        <WhyInvest />
        <Proof />
        <Partners />
        <WhyKoratech />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton /> {/* Add the button here */}
    </div>
  );
}

export default App;
