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
import { ErrorBoundary } from "react-error-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContanier />,
    errorElement: <span>Greška u ruti</span>,
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
        errorElement: <span>Greška u polaznicima</span>,
        element: <Attendants />,
      },
    ],
  },
]);

export default function App() {
  return (
    <ErrorBoundary fallback={<span>Greška u rederiranju</span>}>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ErrorBoundary>
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
