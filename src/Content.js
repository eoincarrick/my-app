import React from "react";
import "./index.css";
import ItemList from "./ItemList";

function Content({ items, handleClick, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
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
