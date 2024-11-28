import "./Course.css";

interface CourseProps {
  src: string;
  type: string;
  title: string;
  duration: number;
}

export default function Course({ src, type, title, duration }: CourseProps) {
  return (
    <div className="Course">
      <img src={src}></img>
      <span>{title}</span>
      <span className="Type">{type}</span>
      <span className="Duration">{duration} days</span>
    </div>
  );
}
