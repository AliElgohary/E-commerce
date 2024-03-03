import axios from "axios";

export const getProducts = () => (dispatch) => {
  return axios
    .get("http://localhost:5000/product")
    .then((res) => {
      console.log(res.data.found);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.found,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
