const initialState = {
  recruitment: [],
  detail: {},
  searchResult: [],
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECRUITMENT_DATA':
      return {
        ...state,
        recruitment: action.payload,
      };
    case 'SET_DETAIL_DATA':
      return {
        ...state,
        detail: action.payload,
      };
    case 'SET_SEARCH_DATA':
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
};

export default allReducer;
