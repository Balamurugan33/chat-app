import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { setLoading, getUserDetaisSuccess, getUserDetaisFail } from './action';

const sendData = (payload) => {
  axios.post('http://localhost:5000/message', payload);
}

export function* checkAccess(payload) {
  yield put(setLoading(true));
  const { data } = payload;
  const { userName, password } = data;
  if (userName === 'balamurugan' && password === 'bala@123' || 
    userName === 'presana' && password === 'presana@123'
  ) {
    yield put(getUserDetaisSuccess({...data}))
  } else {
    yield put(getUserDetaisFail('Invaid credentials'))
  }
}

export function* sendMessageSaga(payload) {
  try {
    const { data } = payload;
    yield put(setLoading(true));
    yield call(sendData, data);
  } catch (error) {
    console.log('error', error)
  }
} 