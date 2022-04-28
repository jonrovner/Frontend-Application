import axios from "axios";

export const GET_CONFIG = "GET_CONFIG";
export const GET_PRODUCT = "GET_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";



export const get_config = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/configuration/${id}/`);

    return dispatch({ type: GET_CONFIG, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const get_product = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/product/${id}/`);
    return dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const update_product = (id, product) => async (dispatch) => {
  try {
    let res = await axios.put(`/product/${id}/`, product);
    console.log(res.data)
    return dispatch({ type: UPDATE_PRODUCT, payload: product });
  } catch (error) {
    console.log(error);
  }
};

