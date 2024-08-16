import { LuSparkles } from "react-icons/lu";

export function ChatButton() {
  const onClick = () => {
    window.location.href = "./maxister/";
  };
  return (
    <div class="leading-none relative">
      <span className="inline-block align-text-top bg-white shadow-lg rounded-full px-2 py-1 mr-2">Platica con Maxister</span>
      <button className="inline-block align-middle rounded-full bg-paradiso hover:bg-fountain-blue size-16 shadow-lg" onClick={onClick}>
        <LuSparkles className="p-4 size-16 text-white" />
      </button>
    </div>
  )
}