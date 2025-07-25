import React, { useRef, useEffect, useState } from 'react';
import ChatBubble from './ChatBubble.jsx';
import InputBar from './InputBar.jsx';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Olá! Sou sua assistente financeira. Como posso te ajudar hoje?'
    }
  ]);
  const chatRef = useRef(null);

  const addMessage = (sender, text) => {
    const id = Date.now(); // simples ID baseado em tempo
    setMessages((prev) => [...prev, { id, sender, text }]);
  };

  const handleSend = (userText) => {
    if (!userText.trim()) return;
    addMessage('user', userText);

    // Simula resposta do bot
    setTimeout(() => {
      const resposta = gerarRespostaSimples(userText);
      addMessage('bot', resposta);
    }, 600);
  };

  const gerarRespostaSimples = (texto) => {
    return `Você disse: "${texto}". Quer ajuda para organizar isso financeiramente?`;
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full max-w-3xl bg-[#152f52] rounded-lg shadow-xl flex flex-col h-[90vh] mx-auto">
      <div className="bg-[#1f3f77] text-white px-6 py-4 text-lg font-semibold">
        💬 Assistente Financeira
      </div>

      <div
        ref={chatRef}
        className="flex-1 px-4 py-6 space-y-4 overflow-y-auto bg-[#1a2c4f] scroll-smooth"
      >
        {messages.map((msg) => (
          <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      <InputBar onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
