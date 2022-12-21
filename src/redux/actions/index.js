export const GET_POST_DATA = "GET_POST_DATA";

export const getPostDataAction = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch("http://localhost:3001/blogposts");
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_POST_DATA,
          payload: fetchedData,
        });
      } else {
        console.log("Error fetching posts");
      }
    } catch (err) {
      console.log(err);
    }
  };
};