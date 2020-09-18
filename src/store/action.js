export const fetchData = (data) => async (dispatch) => {
  const response = await data[0];
  console.log("RESPONSE ", response);
  try {
    dispatch({
      type: data[1],
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: data[2]
    })
  }
}

export const changeData = (data) => ({ type: data[0], payload: data[1] });