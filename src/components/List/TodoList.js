import React from "react";
import Button from "../UI/Button";
import Card from "./Card";

const TodoList = ({ showModal, taskList, deleteTask }) => {
  return (
    <>
      <div className=" bg-gray-100 px-20 shadow-sm">
        <div className="px-5 sm:px-20 py-5 text-center h-36 w-full">
          <h2 className="text-sm sm:text-3xl font-semibold text-gray-600">
            Todo List
          </h2>
          <Button showModal={showModal}>Create Task</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start sm:content-start w-full pt-3 px-12 md:px-24">
        {taskList.map((task, index) => (
          <Card
            key={Math.random()}
            taskName={task.taskName}
            desc={task.description}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
