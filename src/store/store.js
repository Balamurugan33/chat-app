import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSage';
import rootReducer from './rootReducer';

const createMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(createMiddleware));
createMiddleware.run(rootSaga);

export default store;