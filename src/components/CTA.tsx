import React, { useState, FormEvent } from 'react';

const CTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    helpRequest: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation check (can be expanded)
    if (formData.fullName && formData.email) {
      console.log('Form Data Submitted:', formData); // Simulate sending data
      setSubmitted(true);
      // Reset form fields after submission (optional)
      // setFormData({ fullName: '', email: '', companyName: '', helpRequest: '' });
    } else {
      // Handle validation errors (e.g., display messages)
      alert('Por favor, preencha os campos obrigatórios.');
    }
  };

  return (
    <section id="cta" className="bg-koratech-blue text-koratech-black">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Transformar sua TI em Vantagem Estratégica?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Descubra como a parceria com a Koratech pode impulsionar seu crescimento. Preencha o formulário abaixo e dê o primeiro passo!
        </p>

        {!submitted ? (
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="mt-8 max-w-lg mx-auto bg-koratech-white p-6 md:p-8 rounded-lg shadow-md text-left space-y-4"
          >
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-koratech-gray-medium mb-1">
                Nome Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-2 border border-koratech-gray-medium rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-koratech-gray-medium mb-1">
                Email Corporativo <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@suaempresa.com"
                required
                className="w-full px-4 py-2 border border-koratech-gray-medium rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-koratech-gray-medium mb-1">
                Nome da Empresa
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Nome da sua empresa (opcional)"
                className="w-full px-4 py-2 border border-koratech-gray-medium rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
              />
            </div>
            <div>
              <label htmlFor="helpRequest" className="block text-sm font-medium text-koratech-gray-medium mb-1">
                Em que a Koratech pode te ajudar?
              </label>
              <textarea
                id="helpRequest"
                name="helpRequest"
                rows={3}
                value={formData.helpRequest}
                onChange={handleChange}
                placeholder="Descreva brevemente sua necessidade (opcional)"
                className="w-full px-4 py-2 border border-koratech-gray-medium rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="cta-button bg-koratech-blue text-koratech-black font-medium hover:opacity-90" // Re-using cta-button base style and overriding colors/font
              >
                Enviar Contato
              </button>
            </div>
             <p className="text-xs text-koratech-gray-medium text-center pt-2">
                Campos marcados com <span className="text-red-500">*</span> são obrigatórios.
             </p>
          </form>
        ) : (
          <div className="mt-8 max-w-lg mx-auto bg-koratech-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-koratech-black mb-4">Obrigado por seu interesse na Koratech!</h3>
            <p className="text-koratech-gray-medium mb-6">
              Recebemos sua solicitação. Nossos consultores especialistas entrarão em contato em breve.
            </p>
            <p className="text-koratech-black font-medium italic">
              Juntos, vamos transformar a tecnologia da sua empresa e alcançar novos patamares!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
