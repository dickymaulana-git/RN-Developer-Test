import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

const getSearch = () =>{
    try{
        axios ({
            method: 'get',
            url: 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json'
        })
        .then(res => res.json())
        console.log(res);
    }catch(err){

    }
}

function* getRecuruitmentData(){
    const data = require('../../../assets/data/requairement')
    yield put({
        type: 'SET_RECRUITMENT_DATA',
        payload: data.default
    })
}

function* getSearchData(action){
    const search = yield call(getSearch,action.payload)
    yield put({
        type: 'SET_SEARCH_DATA',
        payload: search
    })
}

function* getDetailData(action){
    const dataDetail = yield call(getDetail,action.payload)
    console.log('detail2',dataDetail);
    yield put({
        type: 'SET_DETAIL_DATA',
        payload: dataDetail
    })
}

function* rootSagas() {
    yield takeLatest('REQUEST_RECRUITMENT_DATA',getRecuruitmentData)
    yield takeLatest('REQUEST_SEARCH_DATA',getSearchData)
    yield takeLatest('REQUEST_DETAIL_DATA',getDetailData)
}

export default rootSagas;
