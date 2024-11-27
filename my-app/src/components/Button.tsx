import "./Button.css";

interface ButtonProps {
  content: string;
  onClick?: () => void;
}

export default function Button({ content, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {content}
    </button>
  );
}
