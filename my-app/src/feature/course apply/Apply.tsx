import "./Apply.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";
import { applyAttendants } from "../../api/attendants";
import { useNavigate, useParams } from "react-router";

export default function Apply() {
  const params = useParams();
  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: Record<string, unknown> = {};
    formData.forEach((value, name) => {
      data[name] = value;
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    applyAttendants({
      ...data,
      courseId: params.id!,
    }).then(() => navigate("/courses"));
  };
  return (
    <div>
      <Title title="Apply to course"></Title>
      <form onSubmit={onSubmit}>
        <Input name="firstName" label="Ime" />
        <Input name="lastName" label="Prezime" />
        <Input name="email" label="E-mail" />
        <Input name="company" label="Kompanija" />
        <TextArea name="message" label="Poruka" />
        <Button content="Submit" />
      </form>
    </div>
  );
}
