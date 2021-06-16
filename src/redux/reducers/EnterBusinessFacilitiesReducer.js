import Types from '../Types';
import States from '../States';

export const EnterBusinessFacilitiesReducer=(state=States.BusinessFacilities,action)=>{
    switch (action.type) {
        case Types.EnterBusinessFacilitiesType:
            return action.BusinessFacilities
        default:
            return state;
    }
}