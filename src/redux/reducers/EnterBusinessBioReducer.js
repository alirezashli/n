import Types from '../Types';
import States from '../States';

export const EnterBusinessBioReducer=(state=States.BusinessBio,action)=>{
    switch (action.type) {
        case Types.EnterBusinessBioType:
            return action.BusinessBio
        default:
            return state;
    }
}