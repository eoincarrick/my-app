import { useState } from "react";

function Tes() {
  const [peopleDetail, setPeopleDetail] = useState("rocky");

  const obj = () => {
    const peopleDetails = [
      {
        name: "Castro", //0
        age: 12,
        gender: "boy",
      },
      {
        name: "Carrick", //1
        age: 27,
        gender: "boy",
      },
      {
        name: "Michael", //2
        age: 90,
        gender: "man",
      },
      {
        name: "Sassy", //3
        age: 23,
        gender: "girl",
      },
    ];
    const int = Math.floor(Math.random() * peopleDetails.length);
    setPeopleDetail(peopleDetails[int]);
  };

  return (
    <div>
      <p>
        Hello my name is {peopleDetail.name} and i am {peopleDetail.age} old{" "}
        {peopleDetail.gender}
      </p>
      <button onClick={obj}>Click to Change</button>
    </div>
  );
}

export default Tes;
