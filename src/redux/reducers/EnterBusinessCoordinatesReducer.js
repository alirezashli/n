import Types from '../Types';
import States from '../States';

export const EnterBusinessCoordinatesReducer=(state=States.BusinessCoordinates,action)=>{
    switch (action.type) {
        case Types.EnterBusinessCoordinatesType:
            return action.BusinessCoordinates
        default:
            return state;
    }
}