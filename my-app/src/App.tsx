import "./App.css";
import Title from "./components/Title";
import Course from "./components/Course";
import { data } from "./constants/data";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import LanguageProvider, { useLanguageContext } from "./context/LanguageContext";
import { ChangeEvent } from "react";

export default function App() {
  const title = "Education";

  return (
    <LanguageProvider>
      <div className="container">
        <NavBar title="CROZ">
          <Button content="SERVICES" />
          <LanguagePicker />
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

function LanguagePicker() {
  const { language, setLanguage } = useLanguageContext();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <select onChange={onChange} value={language}>
      <option value="en">EN</option>
      <option value="hr">HR</option>
    </select>
  );
}
