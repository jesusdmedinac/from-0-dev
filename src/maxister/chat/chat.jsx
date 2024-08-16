import { useEffect, useState } from 'react';
import ChatInput from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import GeminiAPI from './data/GeminiAPI.tsx';

export default function Chat({ geminiKey }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [sideEffect, setSideEffect] = useState('idle')

  useEffect(() => {
    async function sendMessage() {
      if (sideEffect === 'sendMessage') {
        const generateContentResponse = await GeminiAPI.generateContent("AUTH", {
          contents: messages.map((message) => ({
            role: message.role,
            parts: [ { text: message.content } ]
          }))
        }, geminiKey);
        let content;
        if (generateContentResponse.error) {
          content = generateContentResponse.error.message;
        } else {
          content = generateContentResponse.candidates[0].content.parts[0].text;
        }
        setMessages([...messages, {
          role: "model",
          content: content
        }])
      }
    }
    sendMessage();
    return () => {
      setSideEffect('idle')
    }
  }, [sideEffect]);

  return (
    <>
      {/* Encabezado */}
      <header className="bg-blue-500 text-white text-center py-4 shadow-md">
        <h1 className="text-2xl font-bold text-black"><a href="/">Maxister</a></h1>
      </header>

      <ChatMessages messages={messages} />
      {/* Campo de Entrada */}
      <footer className="bg-white p-4 shadow-md">
        <ChatInput
          message={message}
          onMessageChange={(message) => {
            setMessage(message)
          }}
          onSendMessage={() => {
            if (message.trim() !== '') {
              setMessages([...messages, {
                role: 'user',
                content: message
              }])
            }
            setMessage('')
            setSideEffect('sendMessage')
          }}/>
      </footer>
    </>
  )
}