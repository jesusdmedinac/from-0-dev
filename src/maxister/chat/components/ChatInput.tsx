export default function ChatInput({ 
  message, 
  onMessageChange, 
  onSendMessage 
} : {
  message: string,
  onMessageChange: (message: string) => void,
  onSendMessage: () => void
}) {
  return (
    <div className="flex">
      <input className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Platica con Maxister" value={message} onChange={(e) => onMessageChange(e.target.value)} />
      <button className="h-10 px-6 font-semibold rounded-md bg-paradiso text-white" onClick={onSendMessage}>Enviar</button>
    </div>
  );
}