import { combineReducers } from 'redux';
import chat from './chat/reducer'

const rootReducer = combineReducers({
  chat: chat
});

export default rootReducer;