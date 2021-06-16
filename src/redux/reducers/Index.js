import {combineReducers} from 'redux';
import {EnterMobileReducer} from './EnterMobileReducer';
import {EnterNationalCodeReducer} from './EnterNationalCodeReducer';
import {EnterUserDataReducer} from './EnterUserDataReducer';
import {EnterVerifyCodeReducer} from './EnterVerifyCodeReducer';
import {EnterEmailReducer} from './EnterEmailReducer';
import {EnterFullNameReducer} from './EnterFullNameReducer';
import {EnterPasswordReducer} from './EnterPasswordReducer';
import {EnterBusinessTitleReducer} from './EnterBusinessTitleReducer';
import {EnterBusinessCategoryReducer} from './EnterBusinessCategoryReducer';
import {EnterBusinessPhoneReducer} from './EnterBusinessPhoneReducer';
import {EnterBusinessAddressReducer} from './EnterBusinessAddressReducer';
import {EnterBusinessBioReducer} from './EnterBusinessBioReducer';
import {EnterBusinessDescriptionReducer} from './EnterBusinessDescriptionReducer';
import {EnterBusinessWorkingTimeReducer} from './EnterBusinessWorkingTimeReducer';
import {EnterBusinessCoordinatesReducer} from './EnterBusinessCoordinatesReducer';
import {EnterBusinessServicesReducer} from './EnterBusinessServicesReducer';
import {EnterBusinessFacilitiesReducer} from './EnterBusinessFacilitiesReducer';
import {EnterJobIdReducer} from './EnterJobIdReducer';

export default combineReducers({
    EnterMobileReducer,
    EnterNationalCodeReducer,
    EnterVerifyCodeReducer,
    EnterUserDataReducer,
    EnterEmailReducer,
    EnterFullNameReducer,
    EnterPasswordReducer,
    EnterBusinessTitleReducer,
    EnterBusinessCategoryReducer,
    EnterBusinessPhoneReducer,
    EnterBusinessAddressReducer,
    EnterBusinessBioReducer,
    EnterBusinessDescriptionReducer,
    EnterBusinessWorkingTimeReducer,
    EnterBusinessCoordinatesReducer,
    EnterBusinessServicesReducer,
    EnterBusinessFacilitiesReducer,
    EnterJobIdReducer
})