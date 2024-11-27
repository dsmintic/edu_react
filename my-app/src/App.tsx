import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import Button from "./components/Button";

export default function App() {
  const title = "Education";
  return (
    <div className="contanier">
      <Title title={title} />
      <span>Continuous education is one of the crucial factors for success.</span>
      <Counter />
      <Button content="Crveni tekst"/>
    </div>
  );
}
