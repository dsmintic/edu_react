import "./App.css";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import LanguageProvider, { useLanguageContext } from "./context/LanguageContext";
import Select from "./components/Select";
import Courses from "./feature/courses/Courses";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Navigate } from "react-router";
import Apply from "./feature/course apply/Apply";

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
            path: "apply",
            element: <Apply />,
          },
        ],
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
        <Button content="SERVICES" />
        <LanguagePicker />
      </NavBar>
      <Outlet />
    </div>
  );
}
