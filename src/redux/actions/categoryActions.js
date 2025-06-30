// actions/categoryActions.js

import { getAllCategory } from "../../Api/services/categoryService";

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: 'FETCH_CATEGORIES_REQUEST' });
  try {
    const data = await getAllCategory();
    console.log(data ,"data=====")
    dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'FETCH_CATEGORIES_FAILURE',
      payload: error.response?.data || error.message,
    });
  }
};
