const initialState = {
    recruitment: []
}

const allReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'SET_RECRUITMENT_DATA':
            return{
                ...state,
                recruitment: action.payload
            }
        default:
            return state
    }
}

export default allReducer