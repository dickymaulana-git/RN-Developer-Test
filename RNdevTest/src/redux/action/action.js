export const actionGetRecruitmentData = () =>{
    return {
        type: 'REQUEST_RECRUITMENT_DATA',
        payload: []
    }
}

export const actionGetSearchData = name => {
    return{
        type: 'REQUEST_SEARCH_DATA',
        payload: name
    }
}

export const actionGetDetail = id =>{
    return {
        type: 'REQUEST_DETAIL_DATA',
        payload: id
    }
}