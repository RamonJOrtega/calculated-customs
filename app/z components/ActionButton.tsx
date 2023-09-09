import { type } from "os"

interface ButtonProps {
  type: "button" | "submit" | "reset"|undefined;
  onClick?: () => void;
  text: React.ReactNode;
}

const ActionButton: React.FC<ButtonProps> = ({ type, onClick, text }) => {
  return (
    <button type={type} onClick={onClick}
    className="bg-gradient-to-r from-amber-50 to-yellow-200 text-neutral-900 
                text-sm font-bold px-2 py-1 m-1 rounded-md animate-pulse">
      {text}
    </button>
  );
};

export default ActionButton;