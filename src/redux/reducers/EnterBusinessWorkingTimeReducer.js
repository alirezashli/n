import Types from '../Types';
import States from '../States';

export const EnterBusinessWorkingTimeReducer=(state=States.BusinessWorkingTime,action)=>{
    switch (action.type) {
        case Types.EnterBusinessWorkingTimeType:
            return action.BusinessWorkingTime
        default:
            return state;
    }
}