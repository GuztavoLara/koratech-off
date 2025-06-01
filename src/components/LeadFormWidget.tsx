import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LeadFormWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormWidget: React.FC<LeadFormWidgetProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    companyName: '',
    helpRequest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.fullName && formData.whatsapp && formData.email) {
      console.log('Form Data Submitted:', formData);
      setSubmitted(true);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Fechar formulário"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fale com a Koratech</h3>
            <p className="text-gray-600 mb-6">
              Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp (com DDD) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Corporativo <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
                />
              </div>

              <div>
                <label htmlFor="helpRequest" className="block text-sm font-medium text-gray-700 mb-1">
                  Como podemos ajudar?
                </label>
                <textarea
                  id="helpRequest"
                  name="helpRequest"
                  value={formData.helpRequest}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-koratech-blue focus:border-koratech-blue"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-koratech-blue text-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                Enviar
              </button>

              <p className="text-xs text-gray-500 text-center">
                Campos marcados com <span className="text-red-500">*</span> são obrigatórios.
              </p>
            </div>
          </form>
        ) : (
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Obrigado pelo contato!</h3>
            <p className="text-gray-600 mb-6">
              Recebemos sua mensagem e entraremos em contato em breve.
            </p>
            <button
              onClick={onClose}
              className="bg-koratech-blue text-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadFormWidget;