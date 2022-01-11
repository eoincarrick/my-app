import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, handleClick, handleDelete }) {
  return (
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
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
}

export default LineItem;
