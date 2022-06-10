import { ADD_TASK, DELETE_TASK,DONE_TASK, EDIT_TASK } from "../Actions/listTask"







export const addTask = (newTask) =>{
    return{type : ADD_TASK,
        payload: newTask 
    }
}






export const deletetask = (id) =>{
    return{type: DELETE_TASK,
        payload : id

    }
}




export const doneTask = (id) =>{
    return{type: DONE_TASK,
        payload : id

    }
}





export const editTask = (id) =>{
    return{type: EDIT_TASK,
        payload : id

    }
}