import Types from '../Types';
import States from '../States';

export const EnterMobileReducer=(state=States.Mobile,action)=>{
    switch (action.type) {
        case Types.EnterMobileType:
            return action.Mobile
        default:
            return state;
    }
}