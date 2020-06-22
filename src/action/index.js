import {INSERT_TASK,INSERT_SUBTASK} from '../reducer/list'
export const addTask=(params)=>{
    return(dispatch,getState)=>{
        dispatch({
            type:INSERT_TASK,
            payload:params
        })
    }
}

export const addSubTask=(params)=>{
    return(dispatch,getState)=>{
        dispatch({
            type:INSERT_SUBTASK,
            payload:params
        })
    }
}