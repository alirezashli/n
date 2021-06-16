import Types from '../Types';
import States from '../States';

export const EnterBusinessCategoryReducer=(state=States.BusinessCategory,action)=>{
    switch (action.type) {
        case Types.EnterBusinessCategoryType:
            return action.BusinessCategory
        default:
            return state;
    }
}