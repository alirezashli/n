import Types from '../Types';
import States from '../States';

export const EnterBusinessServicesReducer=(state=States.BusinessServices,action)=>{
    switch (action.type) {
        case Types.EnterBusinessServicesType:
            return action.BusinessServices
        default:
            return state;
    }
}