import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((oldCounter) => oldCounter + 1);
  };

  return <Button content={`Kliknut ${counter} puta`} onClick={incrementCounter}></Button>;

  // eturn <button onClick={onClick}>Kliknuti {counter} puta</button>;
}
