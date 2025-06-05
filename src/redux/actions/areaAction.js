// actions/categoryActions.js

import { getAreas } from "../../Api/services/areaServices";


export const fetchAreas = () => async (dispatch) => {
  dispatch({ type: 'FETCH_AREAS_REQUEST' });
  try {
    const data = await getAreas();
    console.log(data ,"data")
    dispatch({ type: 'FETCH_AREAS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'FETCH_AREAS_FAILURE',
      payload: error.response?.data || error.message,
    });
  }
};
