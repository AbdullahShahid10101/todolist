// redux/reducer.js
import { ADD_TASK,DELETE_TASK,COMPLETE_TASK,UPDATE_TASK} from "../action-creators";

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
 case UPDATE_TASK:
  return {
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === action.payload.id ? { ...action.payload } : task
    ),
  };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, status:action.payload.taskstatus   } : task
        )
      };
      
    default:
      return state;
  }
};

export default taskReducer;