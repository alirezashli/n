import Types from '../Types';
import States from '../States';

export const EnterPasswordReducer=(state=States.Password,action)=>{
    switch (action.type) {
        case Types.EnterPasswordType:
            return action.Password
        default:
            return state;
    }
}