import React from "react";
import Tasks from "./Tasks";

const Card = ({ title, todoList }) => {
  return (
    <div className="flex flex-col border bg-slate-300  p-2 rounded-md h-fit">
      <h2 className="font-medium text-xl">{title}</h2>
      <Tasks todoList={todoList} />
    </div>
  );
};

export default Card;
