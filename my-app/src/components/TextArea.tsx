interface TextAreaProps {
  name: string;
  label: string;
}

export default function TextArea({ name, label }: TextAreaProps) {
  return (
    <div className="Field">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} />
    </div>
  );
}
