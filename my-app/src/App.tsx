import "./App.css";
import Title from "./components/Title";
import Course from "./components/Course";
import { data } from "./constants/data";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

export default function App() {
  const title = "Education";
  return (
    <div className="container">
      <NavBar title="CROZ">
        <Button content="SERVICES" />
      </NavBar>
      <div className="App">
        <Title title={title} />
        {/* <Course src="https://shorturl.at/PtoIU" title="React Interactive Education" type="Overview of React benefits" duration={3} /> */}
        <div className="Courses">
          {data.map((course) => (
            <Course {...course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
