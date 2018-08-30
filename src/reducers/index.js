import {combineReducers} from 'redux'
import toastAlertReducer from './toastAlertReducer'
import systemSettingsReducer from './systemSettingsReducer'

export default combineReducers({
    toastAlert: toastAlertReducer,
    systemSettings: systemSettingsReducer,
});