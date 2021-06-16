import Types from '../Types';
import States from '../States';

export const EnterNationalCodeReducer=(state=States.NationalCode,action)=>{
    switch (action.type) {
        case Types.EnterNationalCodeType:
            return action.NationalCode
        default:
            return state;
    }
}