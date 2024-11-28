import Title from "./Title";
import "./NavBar.css";

interface NavBarProps {
  title: string;
}

export default function NavBar({ title, children }: React.PropsWithChildren<NavBarProps>) {
  return (
    <div className="NavBar">
      <Title title={title} />
      <div className="actions">{children}</div>
    </div>
  );
}
