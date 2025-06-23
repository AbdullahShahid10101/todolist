import React, { useState } from "react";
import "../Style/TaskCard.css";
import { useDispatch } from "react-redux";
import SelectBox from "./SelectBox";
import updateIcon from "./assets/Group 127.png";
import deleteIcon from "./assets/Group 130.png";
import { markComplete } from "../State/action-creators/index";
import UpdateTaskModal from "./UpdateTaskModal";

function TaskCard({ task, onDelete }) {
  const [markStatus, setmarkStatus] = useState(task.status || "");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  console.log("Rendering TaskCard:", task.description);
  return (
    <div className="task-card">
      <div className="task-info">
        <h2>{task.title}</h2>
        <textarea className="description" value={task.description} readOnly />

        <div className="categoryandpriorty">
          <div className="Category">
            <p>
              <strong>Category:</strong> {task.Category}
            </p>
          </div>
          <div className="Priorty">
            <p>
              <strong>Priorty:</strong> {task.Priorty}
            </p>
          </div>
        </div>
        <div className="date">
          <p className="date-heading">Start date : </p>
          <p className="actual-date">{task.startDate}</p>
        </div>
      </div>
      <div className="task-actions">
        <SelectBox
          label="Mark Status"
          value={markStatus}
          onChange={(e) => {
            const selectedStatus = e.target.value;
            setmarkStatus(selectedStatus);
            dispatch(markComplete(task.id, selectedStatus));
          }}
          options={["Pending", "InProgress", "Completed"]}
          className1="markStatus"
          className2="markStatusSelect-box"
        />
        <button className="btn edit" onClick={() => setShowModal(true)}>
          <img src={updateIcon} alt="Edit" className="btn-image" />
        </button>
        <button className="btn delete" onClick={onDelete}>
          <img src={deleteIcon} alt="Delete" className="btn-image" />
        </button>
      </div>

      {showModal && (
        <UpdateTaskModal task={task} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default TaskCard;
