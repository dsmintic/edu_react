import "./Courses.css";
import Title from "../../components/Title";
import Course from "../../components/Course";
import { useEffect, useState } from "react";
import { getCourses } from "../../api/courses";
import { Course as CourseResponse } from "../../model/courses";

export default function Courses() {
  const [courses, setCourses] = useState<CourseResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const title = "Education";

  useEffect(() => {
    getCourses().then((courses) => {
      setCourses(courses);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return "Loading course data...";
  }

  return (
    <div className="App">
      <Title title={title} />
      {/* <Course src="https://shorturl.at/PtoIU" title="React Interactive Education" type="Overview of React benefits" duration={3} /> */}
      <div className="Courses">
        {courses.map((course) => (
          <Course {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
