import "./Input.css";

interface InputProps {
  name: string;
  label: string;
  error?: string;
}

export default function Input({ error, name, label }: InputProps) {
  return (
    <div className="Field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
