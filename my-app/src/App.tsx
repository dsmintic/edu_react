import "./App.css";
import Title from "./components/Title";
import Course from "./components/Course";
import { data } from "./constants/data";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import LanguageProvider, { useLanguageContext } from "./context/LanguageContext";
import Select from "./components/Select";

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

  return (
    <Select
      value={language}
      setValue={setLanguage}
      options={[
        { title: "HR", value: "hr" },
        { title: "EN", value: "en" },
      ]}
    />
  );
}
