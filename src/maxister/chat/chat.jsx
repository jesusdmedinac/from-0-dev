import { useEffect, useState } from 'react';
import ChatInput from '@maxister/chat/components/ChatInput.jsx';
import ChatMessages from '@maxister/chat/components/ChatMessages.jsx';
import GeminiAPI from '@maxister/chat/data/GeminiAPI.tsx';
import { Constants } from '@maxister/constants.tsx';
import { IoArrowBackOutline } from "react-icons/io5";

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
      <header className="leading-none flex items-center bg-botticelli rounded-t-lg py-4 px-4 text-paradiso">
        <a className="" href="/">
          <IoArrowBackOutline className='size-8'/>
        </a>
        <h1 className="text-2xl font-bold px-4">
          Maxister {Constants.versionName}
        </h1>
        <span className='grow'></span>
        <span className='bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full text-white py-2 px-2'>Experimental</span>
      </header>

      <ChatMessages messages={messages}/>
      {/* Campo de Entrada */}
      <footer className="bg-botticelli rounded-b-lg p-4">
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