import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

const recruitmentData = require('../../../assets/data/requairement')

function* getRecuruitmentData(){
    const recruitment = yield call(recruitmentData.default)
    yield put({
        type: 'SET_RECRUITMENT_DATA',
        payload: recruitment
    })
}

function* rootSagas() {
    yield takeLatest('REQUEST_RECRUITMENT_DATA',getRecuruitmentData)
}

export default rootSagas;
