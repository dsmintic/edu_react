import "./Apply.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";

export default function Apply() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: Record<string, unknown> = {};
    formData.forEach((value, name) => {
      data[name] = value;
    });

    console.log(data);
  };
  return (
    <div>
      <Title title="Apply to course"></Title>
      <form onSubmit={onSubmit}>
        <Input name="firstName" label="Ime" />
        <Input name="lastName" label="Prezime" />
        <Input name="email" label="E-mail" />
        <Input name="company" label="Kompanija" />
        <TextArea name="Message" label="Poruka" />
        <Button content="Submit" />
      </form>
    </div>
  );
}
