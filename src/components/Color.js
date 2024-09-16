import React from "react";

const Color = ({ color, colorToEdit, setEditing, editColor, deleteColor }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    deleteColor(color);
    setEditing(false);
  };

  return (
    <li data-testid="color" onClick={() => editColor(color)}>
      <span>
        <span
          hidden={colorToEdit.id !== color.id}
          className="delete"
          onClick={handleClick}
        >
          x
        </span>
        {` ${color.color}`}
      </span>

      <div className="color-box" style={{ backgroundColor: color.code.hex }} />
    </li>
  );
};

export default Color;
