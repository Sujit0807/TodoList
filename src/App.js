import React, { useState, useEffect } from "react";
import TodoList from "./components/List/TodoList";
import Modal from "./components/Modals/Modal";

const App = () => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const showModalHandler = () => {
    setShowCreateTask(true);
  };
  const hideModalHandler = () => {
    setShowCreateTask(false);
  };

  const deleteTaskHandler = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  return (
    <>
      <TodoList
        showModal={showModalHandler}
        taskList={taskList}
        deleteTask={deleteTaskHandler}
      />
      {showCreateTask && (
        <Modal
          hideModal={hideModalHandler}
          showModal={showCreateTask}
          save={saveTask}
        />
      )}
    </>
  );
};

export default App;
