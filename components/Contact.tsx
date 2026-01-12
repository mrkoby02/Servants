
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

interface ContactProps {
  preSelectedService?: string;
}

const Contact: React.FC<ContactProps> = ({ preSelectedService }) => {
  const [formData, setFormData] = useState({
    nome: '',
    servico: ''
  });

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, servico: preSelectedService }));
    }
  }, [preSelectedService]);

  const services = [
    'Carga e Descarga',
    'Serviços Gerais',
    'Limpeza Pós-Obra',
    'Portaria e Recepção',
    'Logística e Armazenagem',
    'Eventos e Apoio',
    'Limpeza Comercial',
    'Zeladoria Predial',
    'Outros'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.servico) {
      alert('Por favor, preencha seu nome e selecione um serviço.');
      return;
    }

    const phone = '555196970420';
    const message = `Olá, meu nome é *${formData.nome}* e gostaria de solicitar um orçamento para o serviço de *${formData.servico}*.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      title: 'WhatsApp/Telefone',
      value: '(51) 9697-0420',
      description: 'Atendimento imediato',
      icon: Phone,
      action: 'tel:5196970420',
    },
    {
      title: 'E-mail',
      value: 'servantssg@gmail.com',
      description: 'Resposta em até 24h',
      icon: Mail,
      action: 'mailto:servantssg@gmail.com'
    },
    {
      title: 'Localização',
      value: 'Rio Grande do Sul',
      description: 'Atendemos toda a região',
      icon: MapPin,
    }
  ];

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-[#6b8e83] tracking-wide uppercase">Contato</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Fale Conosco agora mesmo
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Escolha o serviço desejado e receba um orçamento personalizado rapidamente via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h3>
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-6 flex items-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#6b8e83]/20"
              >
                <div className="bg-[#6b8e83]/10 w-12 h-12 rounded-full flex items-center justify-center mr-6">
                  <info.icon className="h-6 w-6 text-[#6b8e83]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{info.title}</h4>
                  {info.action ? (
                    <a href={info.action} className="text-lg font-bold text-gray-900 hover:text-[#6b8e83] transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-gray-900">{info.value}</p>
                  )}
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulário WhatsApp */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-green-500 p-2 rounded-lg">
                <MessageSquare className="text-white h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Solicitar Orçamento Rápido</h3>
            </div>
            
            <form onSubmit={sendWhatsApp} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6b8e83] focus:border-transparent outline-none transition-all text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="servico" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Qual serviço você precisa?
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6b8e83] focus:border-transparent outline-none transition-all text-gray-900 bg-white"
                  required
                >
                  <option value="" disabled>Selecione uma opção...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-5 rounded-xl flex items-center justify-center transition-all transform hover:scale-[1.02] shadow-lg shadow-green-200"
              >
                <MessageSquare className="mr-3 h-6 w-6" />
                ENVIAR VIA WHATSAPP
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Ao clicar em enviar, você será redirecionado para o WhatsApp para finalizar o contato.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
