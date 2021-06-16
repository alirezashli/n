import Types from '../Types';
import States from '../States';

export const EnterFullNameReducer=(state=States.FullName,action)=>{
    switch (action.type) {
        case Types.EnterFullNameType:
            return action.FullName
        default:
            return state;
    }
}