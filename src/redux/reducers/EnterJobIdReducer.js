import Types from '../Types';
import States from '../States';

export const EnterJobIdReducer=(state=States.JobId,action)=>{
    switch (action.type) {
        case Types.EnterJobIdType:
            return action.JobId
        default:
            return state;
    }
}