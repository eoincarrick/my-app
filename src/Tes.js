import { useState } from "react";
import Button from "./Button";

function Tes() {
  const [name, setName] = useState("username");
  const handClick = () => {
    const names = ["Castro", "Michael", "James"];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };

  return (
    <div>
      <p>Hello my name is {name}</p>
      <Button event={() => handClick()} classes={"btn"} text={"Click Me"} />
    </div>
  );
}

export default Tes;
