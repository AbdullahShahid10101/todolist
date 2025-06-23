import React from 'react'
import {useSelector } from "react-redux";
import '../Style/TaskStatus.css'
function TaskStatus() {
     const tasks = useSelector((state) => state.tasks);
    



  const completedCount = tasks.filter((task) =>task.status === 'Completed').length;
  const pendingCount = tasks.filter((task) => task.status ==='Pending').length;
  const inprogressCount = tasks.filter((task) => task.status ==='InProgress').length;
  return (
    <div>
      <div className="status">
        <div className="completeStatus">
            <h2>
            <span className="line1">COMPLETED</span><br />
            <span className="line2">TASKS</span>
             </h2>
          <p>{completedCount < 10 ? (`0${completedCount}`):({completedCount})}</p>
        </div>

        <div className='pendingStatus'>
          <h2>
            <span className="line1">Pending</span><br />
            <span className="line2">TASKS</span>
             </h2>
          <p>{pendingCount < 10 ? (`0${pendingCount}`):({pendingCount}) }</p>
        </div>
        <div className='inprogressStatus'>
          <h2>
            <span className="line1">inprogress</span><br />
            <span className="line2">TASKS</span>
             </h2>
          <p>{inprogressCount < 10 ? (`0${inprogressCount}`):({inprogressCount}) }</p>
        </div>
      </div>
    </div>
  )
}
export default TaskStatus