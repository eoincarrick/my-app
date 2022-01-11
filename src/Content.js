import React from "react";
import "./index.css";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleClick = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    console.log(`key: ${id}`);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    console.log(`keyDelete: ${id}`);
  };
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleClick(item.id)}
                checked={item.checked}
              />
              <label
                style={
                  item.checked
                    ? {
                        textDecoration: "line-through",
                        color: "red",
                        userSelect: "none",
                      }
                    : null
                }
                onDoubleClick={() => handleClick(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="cla">
          <img
            className="gif"
            src="https://i.pinimg.com/originals/b1/03/3b/b1033bc996c69d3a6003c2fa07281aaf.gif"
            alt=""
          />
          <p>No list found here</p>
        </div>
      )}
    </main>
  );
}

export default Content;
