import Markdown from 'react-markdown'

export default function ChatMessages({ messages }) {
  return (
    <>
      {/* Área de Chat */}
      <main className="flex-grow overflow-y-auto p-4 bg-botticelli">
        {messages.map((message, index) => {
          let author = "";
          if (message.role == "user") {
            author = "Alumno"
          } else if (message.role == "model") {
            author = "Maxister"
          }
          const markdown = message.content;
          return (
            message.role == "user" 
            ? <div key={index} className="mb-4 text-right">
              <div className="bg-paradiso text-white p-3 rounded-lg shadow-md max-w-md ml-auto">
                <Markdown>{markdown}</Markdown>
              </div>
            </div>
            : <div key={index} className="mb-4">
              <div className="bg-viking text-white p-3 rounded-lg shadow-md max-w-md">
                <Markdown>{markdown}</Markdown>
              </div>
            </div>
          )
        })}
      </main>
    </>
  );
}
