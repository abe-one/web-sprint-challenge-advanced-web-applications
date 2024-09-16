import React, { useState } from "react";
import EditMenu from "./EditMenu";
import Color from "./Color";
import AxiosWithAuth from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const ColorList = ({ colors, getLatestColors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = (color) => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/colors/id${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        console.log(res.data);
        updateColors(
          colors.map((color) =>
            color.id === colorToEdit.id ? colorToEdit : color
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {});
  };

  const deleteColor = (color) => {
    AxiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then((res) => {
        console.log(res.data);
        getLatestColors();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {});
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map((color) => (
          <Color
            key={color.id}
            colorToEdit={colorToEdit}
            setEditing={setEditing}
            color={color}
            editColor={editColor}
            deleteColor={deleteColor}
          />
        ))}
      </ul>

      {editing && (
        <EditMenu
          colorToEdit={colorToEdit}
          saveEdit={saveEdit}
          setColorToEdit={setColorToEdit}
          setEditing={setEditing}
        />
      )}
    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.
