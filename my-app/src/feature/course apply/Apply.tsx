import "./Apply.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Title from "../../components/Title";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { AttendantsRequest } from "../../model/attendants";

export default function Apply() {
  const params = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<keyof AttendantsRequest, string>>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data: Record<string, unknown> = {};

    formData.forEach((value, name) => {
      data[name] = value;
    });

    const formErrors = {};

    if (!data.firstName) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formErrors.firstName = "Fali first name";
    }

    console.log(formErrors)

    if (Object.keys(formErrors).length > 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setErrors(formErrors);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    applyAttendant({
      ...data,
      courseId: params.id!,
    }).then(() => navigate("/courses"));
  };

  return (
    <div>
      <Title title="Apply to course"></Title>
      <form onSubmit={onSubmit}>
        <Input name="firstName" label="Ime" error={errors?.firstName} />
        <Input name="lastName" label="Prezime" />
        <Input name="email" label="E-mail" />
        <Input name="company" label="Kompanija" />
        <TextArea name="message" label="Poruka" />
        <Button content="Submit" />
      </form>
    </div>
  );
}
