import "./Courses.css";
import Title from "../../components/Title";
import Course from "../../components/Course";
import { data } from "../../constants/data";

export default function Courses() {
  const title = "Education";
  return (
    <div className="App">
      <Title title={title} />
      {/* <Course src="https://shorturl.at/PtoIU" title="React Interactive Education" type="Overview of React benefits" duration={3} /> */}
      <div className="Courses">
        {data.map((course) => (
          <Course {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
