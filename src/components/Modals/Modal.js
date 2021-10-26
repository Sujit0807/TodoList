import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { VscChromeClose } from "react-icons/vsc";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-current opacity-50 z-20"
      onClick={props.hideModal}
    ></div>
  );
};

const CreateTask = ({ hideModal, saveTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const saveTaskHandler = (e) => {
    hideModal();

    let taskObj = {};
    if (taskName.trim() && description.trim()) {
      taskObj.taskName = taskName;
      taskObj.description = description;

      saveTask(taskObj);
    } else {
      alert("Fields cannot be empty!");
    }
    setTaskName("");
    setDescription("");

    e.preventDefault();
  };

  return (
    <div
      className={`fixed w-9/12 md:w-1/3 h-96 bg-gray-50 top-12 left-2/4 transform -translate-x-2/4 z-30 rounded-md shadow-lg`}
    >
      <div className="flex justify-between items-center mt-3 mx-3">
        <h3 className="text-gray-600 text-xl font-semibold">Create Task</h3>
        <div
          className="text-xl text-gray-600 mr-1 hover:bg-gray-200 rounded-full p-1"
          onClick={hideModal}
        >
          <VscChromeClose />
        </div>
      </div>
      <div className="w-full mt-5 mx-auto border-b"></div>
      <div className="mx-3 mt-2">
        <form>
          <div className="mb-3">
            <label htmlFor="task" className="text-gray-600 text-lg">
              Task Name
            </label>
            <br />
            <input
              type="text"
              id="task"
              className="w-full text-gray-600 p-1 px-2 focus:outline-none border focus:ring-2 ring-purple-500 rounded-md shadow-sm"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              name="taskName"
            />
          </div>
          <div>
            <label htmlFor="desc" className="text-gray-600 text-lg">
              Description
            </label>
            <br />
            <textarea
              id="desc"
              rows="5"
              className="w-full text-gray-600 p-1 px-2 focus:outline-none border focus:ring-2 ring-purple-500 rounded-md shadow-sm"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            ></textarea>
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="text-white bg-gradient-to-r from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 py-2 px-8 text-lg rounded-lg mt-4"
              onClick={saveTaskHandler}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ showModal, hideModal, save }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hideModal={hideModal} />, portalElement)}
      {ReactDOM.createPortal(
        <CreateTask
          hideModal={hideModal}
          showModal={showModal}
          saveTask={save}
        />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
