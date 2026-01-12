
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Benefits />
        <Testimonials />
        <section className="bg-[#6b8e83] py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para otimizar sua operação?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência.
            </p>
            <button 
              onClick={() => handleSelectService('Outros')}
              className="inline-block bg-white text-[#6b8e83] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Solicitar Orçamento
            </button>
          </div>
        </section>
        <Contact preSelectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
