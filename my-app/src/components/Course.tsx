import { useNavigate } from "react-router";
import { useLanguageContext } from "../context/LanguageContext";
import "./Course.css";

interface CourseProps {
  id: number;
  src: string;
  type: string;
  title: string;
  duration: number;
}

export default function Course({ id, src, type, title, duration }: CourseProps) {
  const context = useLanguageContext();
  const navigate = useNavigate();

  console.log(context);

  return (
    <div className="Course" onClick={() => navigate(`${id}/apply`)}>
      <img src={src}></img>
      <span>{title}</span>
      <span className="Type">{type}</span>
      <span className="Duration">
        {duration} {context.language === "hr" ? "dana" : "days"}
      </span>
    </div>
  );
}
