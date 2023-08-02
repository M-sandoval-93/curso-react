import { useState } from "react";

const ButtonState = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => setNumber(number + 1);

  return <button onClick={handleClick}>Btn de estado: {number}</button>;
};

export default ButtonState;
