import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../State/action-creators/index";
import { toast } from "react-toastify";
import addplus from "./assets/Add_Plus.png";
import "../Style/InputForm.css";
import SelectBox from "./SelectBox";

function TasksInputForm() {
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
    Category: "",
    Priorty: "",
  });
  const dates = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: taskInput.title,
      description: taskInput.description,
      Category: taskInput.Category,
      Priorty: taskInput.Priorty,
      status: "Pending",
      startDate: dates,
    };
if( newTask.title ===''  || newTask.description ==='' || newTask.Category ==='' || newTask.Priorty===''){
  alert("enter all fields");
}
else{
  dispatch(addTask(newTask));
  toast.success("Task Added successfully");
    setTaskInput({
      title: "",
      description: "",
      Category: "",
      Priorty: "",
    });
}
    
    console.log(tasks.descriptions);
  };

  return (
    <>
      <div className="InputForm">
        <div className="inputfields">
          <input
            className="TitleInputflied"
            type="text"
            name="title"
            value={taskInput.title}
            onChange={(e) =>
              setTaskInput((prevData) => ({
                ...prevData,
                title: e.target.value,
              }))
            }
            placeholder="Type Title Of Task"
          />
          <input
            className="DesInputflied"
            type="text"
            name="description"
            value={taskInput.description}
            onChange={(e) =>
              setTaskInput((prevData) => ({
                ...prevData,
                description: e.target.value,
              }))
            }
            placeholder="Detail Of Your Task"
          />
        </div>
        <div className="selectField">
        <div  className="div-selectField">
          <SelectBox
            label="Catagory"
            value={taskInput.Category}
            onChange={(e) =>
              setTaskInput((prev) => ({ ...prev, Category: e.target.value }))
            }
            options={["Learning", "Work", "Playing", "Eating"]}
            className1="CategoryinputForm"
          className2="Categoryselect-box"
          />

          <SelectBox
            label="Priorty"
            value={taskInput.Priorty}
            onChange={(e) =>
              setTaskInput((prev) => ({ ...prev, Priorty: e.target.value }))
            }
            options={["Low", "Mid", "High"]}
            className1="PriortyInputForm"
          className2="Priortyselect-box"
          />
        </div>
        
         
          <div className="AddButton-div">
 <button onClick={handleAddTask} className="AddButton" >
            <img src={addplus} alt="addplus"></img>
          </button>
          </div>
         
        </div>
      </div>
    </>
  );
}
export default TasksInputForm;
