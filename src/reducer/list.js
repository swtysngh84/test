const INITIAL_STATE={
    task:[],
    subTask:[]
}

export const INSERT_TASK ="INSERT_TASK"
export const INSERT_SUBTASK="INSERT_SUBTASK"

export default (state=INITIAL_STATE,actions)=>{
    switch (actions.type) {
        case INSERT_TASK:{
            return Object.assign({},state,{task:[...state.task,actions.payload]})
        }
        case INSERT_SUBTASK:{
            return Object.assign({},state,{subTask:[...state.subTask,actions.payload]})
        }
        default: return state
    }
}