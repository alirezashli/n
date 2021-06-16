import Types from '../Types';
import States from '../States';

export const EnterUserDataReducer=(state=States.UserData,action)=>{
    switch (action.type) {
        case Types.EnterUserDataType:
            return action.UserData
        default:
            return state;
    }
}