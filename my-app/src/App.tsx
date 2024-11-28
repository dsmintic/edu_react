import "./App.css";
import Title from "./components/Title";
import Course from "./components/Course";
import { data } from "./constants/data";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import LanguageProvider from "./context/LanguageContext";
import { ChangeEvent, useState } from "react";

export default function App() {
  const title = "Education";
  const [value, setValue] = useState("hr");

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <LanguageProvider>
      <div className="container">
        <NavBar title="CROZ">
          <Button content="SERVICES" />
          <select onChange={onChange} value={value}>
            <option value="hr">HR</option>
            <option value="en">EN</option>
          </select>
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
    </LanguageProvider>
  );
}
