import Types from '../Types';
import States from '../States';

export const EnterBusinessDescriptionReducer=(state=States.BusinessDescription,action)=>{
    switch (action.type) {
        case Types.EnterBusinessDescriptionType:
            return action.BusinessDescription
        default:
            return state;
    }
}