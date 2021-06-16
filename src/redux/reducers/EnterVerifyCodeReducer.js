import Types from './../Types';
import States from '../States';

export const EnterVerifyCodeReducer=(state=States.VerifyCode,action)=>{
    switch (action.type) {
        case Types.EnterVerifyCodeType:
            return action.VerifyCode
        default:
            return state;
    }
}