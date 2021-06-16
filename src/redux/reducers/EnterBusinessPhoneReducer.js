import Types from '../Types';
import States from '../States';

export const EnterBusinessPhoneReducer=(state=States.BusinessPhone,action)=>{
    switch (action.type) {
        case Types.EnterBusinessPhoneType:
            return action.BusinessPhone
        default:
            return state;
    }
}