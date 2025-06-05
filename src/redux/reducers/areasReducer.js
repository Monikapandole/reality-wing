// reducers/categoryReducer.js

const initialState = {
  areas: [],
  loading: false,
  error: null,
};

const areasReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AREAS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_AREAS_SUCCESS':
      return { ...state, loading: false, areas: action.payload };
    case 'FETCH_AREAS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default areasReducer;
