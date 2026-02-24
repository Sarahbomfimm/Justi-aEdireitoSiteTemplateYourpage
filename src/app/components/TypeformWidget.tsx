import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface TypeformWidgetProps {
  formId?: string;
}

declare global {
  interface Window {
    typeformEmbed?: any;
  }
}

const TypeformWidget = ({ formId = 'Vp9lVq9J' }: TypeformWidgetProps) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const typeformUrl = `https://form.typeform.com/to/${formId}`;

  useEffect(() => {
    // Carregar o script do Typeform apenas uma vez
    if (window.typeformEmbed) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/embed.js';
    script.async = true;
    
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Typeform script carregado');
    };

    script.onerror = () => {
      console.log('Erro ao carregar Typeform, usando fallback');
      setScriptLoaded(true);
    };

    document.head.appendChild(script);
  }, []);

  const handleOpenTypeform = () => {
    console.log('Abrindo Typeform...');
    
    if (window.typeformEmbed) {
      console.log('Usando typeformEmbed.makePopup');
      window.typeformEmbed.makePopup(typeformUrl, {
        mode: 'popup',
        autoClose: true,
        hideFooter: true,
        hideHeaders: false,
      });
    } else {
      console.log('typeformEmbed não disponível, abrindo em nova aba');
      window.open(typeformUrl, '_blank');
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <motion.button
        onClick={handleOpenTypeform}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        title="Abrir formulário de triagem jurídica"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className="fixed bottom-24 right-6 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none z-40 group hidden"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        Clique para atendimento
      </motion.div>
    </>
  );
};

export default TypeformWidget;
