import "./App.css";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import LanguageProvider, { useLanguageContext } from "./context/LanguageContext";
import Select from "./components/Select";
import Courses from "./feature/courses/Courses";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router";
import { Navigate } from "react-router";
import Apply from "./feature/course apply/Apply";
import Attendants from "./feature/attendants/Attendants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContanier />,
    children: [
      { index: true, element: <Navigate to="courses" /> },
      {
        path: "courses",
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: ":id/apply",
            element: <Apply />,
          },
        ],
      },
      {
        path: "attendants",
        element: <Attendants />,
      },
    ],
  },
]);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
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

function AppContanier() {
  return (
    <div className="container">
      <NavBar title="CROZ">
        <Link to="/courses">Courses</Link>
        <Link to="/attendants">Attendants</Link>
        <Button content="SERVICES" />
        <LanguagePicker />
      </NavBar>
      <Outlet />
    </div>
  );
}
