// components/UpdateTaskModal.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../State/action-creators";
import { toast } from "react-toastify";
import "../Style/UpdateTaskModal.css"; // you need to create styling
import SelectBox from "./SelectBox";

function UpdateTaskModal({ task, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCategory(task.Category);
      setPriority(task.Priorty);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      title,
      description,
      Category: category,
      Priorty: priority,
    };
     dispatch(updateTask(updatedTask));
    toast.success("Task updated successfully");
    onClose(); // close modal
  };

  if (!task) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Update Task</h2>
        <form onSubmit={handleSubmit}>
          <input className ='UpdateTitle' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <textarea className ='UpdateDescription' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
          <div className="selectField">
            <SelectBox
            label="Select Catagory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={["Learning", "Work", "Playing", "Eating"]}
            className1="CategoryUpdateForm"
          className2="Categoryselect-box"
          />
           <SelectBox
            label="Select Priorty"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            options={["Low", "Mid", "High"]}
            className1="PriortyUpdateForm"
          className2="Priortyselect-box"
          />
          </div>
          <div className="modal-actions">
            <button className="UpdateButton"type="submit">Update</button>
            <button className='CloseButton' type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTaskModal;
