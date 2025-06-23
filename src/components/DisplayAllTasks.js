import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../State/action-creators/index";
import "../Style/DisplayAllTasks.css";
import TaskCard from "./TaskCard";
import SelectBox from "./SelectBox";
import searchbtn from './assets/searchbtn.png';
import { toast } from "react-toastify";

function DisplayAllTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [searchCategory, setSearchCategory] = useState("");
  const [searchPriorty, setSearchPriorty] = useState("");
  const [searchInputName, setSearchInputName] = useState(""); // controlled input value
 

  const filteredTasks = tasks.filter((task) => {
    const matchesCategory = searchCategory === "" || task.Category === searchCategory;
    const matchesPriority = searchPriorty === "" || task.Priorty === searchPriorty;
    const matchesTitle = searchInputName === "" || task.title.toLowerCase().includes(searchInputName.toLowerCase());
    return matchesCategory && matchesPriority && matchesTitle;
  });

  return (
    <>
      <div className="SearchForm">
       <div className="selection-box">
        <SelectBox
          label="By Category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          options={["Learning", "Work", "Playing", "Eating"]}
          className1="SearchbyCategory"
          className2="Categoryselect-box"
        />

        <SelectBox
          label="By Priority"
          value={searchPriorty}
          onChange={(e) => setSearchPriorty(e.target.value)}
          options={["Low", "Mid", "High"]}
          className1="SearchbyPriorty"
          className2="Priortyselect-box"
        />
        </div>
        <div className="SearchTitelForm">
          <input
            className="SearchbyTitle"
            type="text"
            name="title"
            value={searchInputName}
            onChange={(e) => setSearchInputName(e.target.value)}
            placeholder="Search by Title"
          />
          <button className="Searchbtn" >
            <img src={searchbtn} alt="searchbtn" />
          </button>
        </div>
      </div>

      <div className="card-container">
        {filteredTasks.length === 0 ? (
          <p>No tasks found!</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => dispatch(deleteTask(task.id),
                 toast.info("Task deleted"))  
              }
            />
          ))
        )}
      </div>
    </>
  );
}

export default DisplayAllTasks;
