import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const JuridicalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: '',
    descricao: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      question: "Olá! 👋 Bem-vindo à Justiça & Direito. Qual é o seu nome?",
      key: 'nome',
      type: 'text'
    },
    {
      question: "Prazer em te conhecer! Qual é o seu melhor email de contato?",
      key: 'email',
      type: 'email'
    },
    {
      question: "E qual é o seu telefone? (com DDD)",
      key: 'telefone',
      type: 'tel'
    },
    {
      question: "Qual área do direito você precisa? Escolha uma:\n• Direito Civil\n• Direito do Trabalho\n• Direito Penal\n• Direito de Família\n• Direito Imobiliário\n• Direito Tributário\n• Outra",
      key: 'area',
      type: 'select'
    },
    {
      question: "Pode descrever brevemente qual é o seu caso?",
      key: 'descricao',
      type: 'textarea'
    }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(steps[0].question);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userResponse = inputValue.trim();
    addUserMessage(userResponse);
    setInputValue('');

    // Validar e armazenar resposta
    const currentStepData = steps[currentStep];
    const updatedInfo = { ...userInfo, [currentStepData.key]: userResponse };
    setUserInfo(updatedInfo);

    // Ir para próxima pergunta ou finalizar
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        addBotMessage(steps[currentStep + 1].question);
      } else {
        finalizarTriagem(updatedInfo);
      }
    }, 500);
  };

  const finalizarTriagem = (info: typeof userInfo) => {
    addBotMessage(
      `Obrigado, ${info.nome}! 🎉\n\nRecebemos suas informações:\n\n✓ Email: ${info.email}\n✓ Telefone: ${info.telefone}\n✓ Área: ${info.area}\n\nCom base no seu caso, nossos especialistas entrarão em contato em breve para uma avaliação gratuita.\n\nEm caso de dúvidas, ligue: (11) 99999-9999`
    );

    // Enviar dados para servidor (você implementa a rota)
    sendDataToServer(info);
  };

  const sendDataToServer = async (data: typeof userInfo) => {
    try {
      // Aqui você conectaria com seu backend
      console.log('Dados do chatbot:', data);
      // fetch('/api/triagem-juridica', { method: 'POST', body: JSON.stringify(data) })
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        title="Abrir chatbot jurídico"
      >
        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
      </motion.button>

      {/* Janela do Chat */}
      <motion.div
        className="fixed bottom-0 right-0 z-40 sm:bottom-20 sm:right-6 w-full h-screen sm:h-auto sm:w-96 sm:max-h-96 rounded-t-lg sm:rounded-lg shadow-2xl flex flex-col overflow-hidden"
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--card-foreground)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div
          className="text-white p-3 sm:p-4"
          style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, #2d5a8c 100%)',
          }}
        >
          <h3 className="font-bold text-base sm:text-lg">Triagem Jurídica</h3>
          <p className="text-xs sm:text-sm opacity-90">Assistente de atendimento 24/7</p>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3"
          style={{
            backgroundColor: 'var(--secondary)',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] sm:max-w-xs px-3 sm:px-4 py-2 rounded-lg whitespace-pre-wrap font-medium text-sm sm:text-base ${
                  msg.sender === 'user'
                    ? 'rounded-br-none'
                    : 'rounded-bl-none'
                }`}
                style={
                  msg.sender === 'user'
                    ? {
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                      }
                    : {
                        backgroundColor: 'var(--card)',
                        color: 'var(--card-foreground)',
                        border: '1px solid var(--border)',
                      }
                }
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="border-t p-2 sm:p-3 flex gap-1 sm:gap-2"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Sua resposta..."
            className="flex-1 px-2 sm:px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base font-medium"
            style={{
              borderColor: 'var(--accent)',
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)',
            }}
            disabled={currentStep >= steps.length}
          />
          <button
            onClick={handleSendMessage}
            disabled={currentStep >= steps.length}
            className="text-white px-2 sm:px-4 py-2 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            style={{
              backgroundColor: 'var(--accent)',
            }}
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default JuridicalChatbot;
