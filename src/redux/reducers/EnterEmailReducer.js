import Types from '../Types';
import States from '../States';

export const EnterEmailReducer=(state=States.Email,action)=>{
    switch (action.type) {
        case Types.EnterEmailType:
            return action.Email
        default:
            return state;
    }
}