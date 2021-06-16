import Types from '../Types';
import States from '../States';

export const EnterBusinessAddressReducer=(state=States.BusinessAddress,action)=>{
    switch (action.type) {
        case Types.EnterBusinessAddressType:
            return action.BusinessAddress
        default:
            return state;
    }
}