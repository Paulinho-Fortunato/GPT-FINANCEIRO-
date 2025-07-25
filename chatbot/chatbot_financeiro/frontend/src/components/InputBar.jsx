import React, { useState } from 'react';

function InputBar({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <div className="input-bar">
      <input
        type="text"
        placeholder="Digite sua pergunta..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default InputBar;
