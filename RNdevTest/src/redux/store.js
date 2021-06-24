import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import combiner from '../redux/reducer/combiner'
import sagas from './saga/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(combiner,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store