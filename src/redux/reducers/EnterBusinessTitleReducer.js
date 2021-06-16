import Types from '../Types';
import States from '../States';

export const EnterBusinessTitleReducer=(state=States.BusinessTitle,action)=>{
    switch (action.type) {
        case Types.EnterBusinessTitleType:
            return action.BusinessTitle
        default:
            return state;
    }
}