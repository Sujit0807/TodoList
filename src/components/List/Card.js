import React from "react";
import { BiTrash } from "react-icons/bi";

const Card = ({ taskName, desc, index, deleteTask }) => {
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  return (
    <div className="w-60 h-56 ml-5 my-5 bg-gray-50 shadow-md">
      <div
        className="w-full"
        style={{ borderTop: `5px solid ${colors[index % 5].primaryColor}` }}
      ></div>
      <div className="p-4">
        <span
          className="rounded-lg py-1 px-3"
          style={{ backgroundColor: `${colors[index % 5].secondaryColor}` }}
        >
          {taskName}
        </span>
        <div className="mt-3 h-28">
          <p>{desc}</p>
        </div>
        <div className="flex justify-end mt-4">
          <span
            className="text-xl cursor-pointer"
            style={{ color: `${colors[index % 5].primaryColor}` }}
            onClick={deleteTask}
          >
            <BiTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
