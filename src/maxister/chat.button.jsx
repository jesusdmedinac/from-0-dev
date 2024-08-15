import { LuSparkles } from "react-icons/lu";

export function ChatButton() {
  return (
    <div className="chat-button-container">
      <label className="chat-label bg-white shadow-lg rounded-full px-2 py-1">{process.env.GEMINI_API_KEY}</label>
      <button className="chat-button rounded-full bg-paradiso hover:bg-fountain-blue text-white size-16 shadow-lg">
        <LuSparkles className="chat-icon size-8" />
      </button>
    </div>
  )
}