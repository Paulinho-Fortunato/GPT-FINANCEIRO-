import React from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css'; // Certifica que os estilos estão sendo importados

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0e1c35', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ChatWindow />
    </div>
  );
}

export default App;

export default function App() {
    return <h1 style={{ color: '#fff' }}>Funcionando! 🚀</h1>;
  }
  

 