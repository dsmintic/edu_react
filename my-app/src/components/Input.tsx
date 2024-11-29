import "./Input.css";

interface InputProps {
  name: string;
  label: string;
}

export default function Input({ name, label }: InputProps) {
  return (
    <div className="Field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} />
    </div>
  );
}
