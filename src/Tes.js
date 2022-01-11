import { useState } from "react";

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
      <button onClick={handClick}>Click to Change</button>
    </div>
  );
}

export default Tes;
