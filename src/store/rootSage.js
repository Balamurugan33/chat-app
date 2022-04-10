import { takeLatest } from "redux-saga/effects";
import constants from './chat/constants';
import { checkAccess, sendMessageSaga } from './chat/saga'

export default function* rootSaga() {
  yield takeLatest(constants.GET_USER, checkAccess);
  yield takeLatest(constants.SEND_MESSAGE, sendMessageSaga);
}