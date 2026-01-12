
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: 'WhatsApp/Telefone',
      value: '(51) 9697-0420',
      description: 'Atendimento imediato',
      icon: Phone,
      action: 'tel:5196970420',
      isWhatsApp: true
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
          <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase">Contato</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Entre em contato conosco
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Estamos prontos para atender sua empresa e apresentar as melhores soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <info.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.action ? (
                <a 
                  href={info.action} 
                  className="text-xl font-bold text-blue-600 hover:underline mb-2"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-xl font-bold text-gray-900 mb-2">{info.value}</p>
              )}
              <p className="text-gray-500">{info.description}</p>
              
              {info.isWhatsApp && (
                <a 
                  href="https://wa.me/555196970420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chamar no Whats
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
