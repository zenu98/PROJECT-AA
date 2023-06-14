import { markerActions } from "./marker-slice";

export const getData = () => {
  return async (dispatch) => {
    const fetchDummyData = async () => {
      const response = await fetch("http://localhost:4000/dummy");
      if (!response.ok) {
        throw new Error("fetch error");
      }
      const data = await response.json();

      return data;
    };
    try {
      const dummyData = await fetchDummyData();

      dispatch(markerActions.fetchData({ data: dummyData || [] }));
    } catch (error) {
      throw new Error("error");
    }
  };
};
export const getReviewData = () => {
  return async (dispatch) => {
    const fetchReviewData = async () => {
      const response = await fetch("http://localhost:4000/review");
      if (!response.ok) {
        throw new Error("fetch error");
      }
      const data = await response.json();

      return data;
    };
    try {
      const reviewData = await fetchReviewData();
      console.log(reviewData);

      dispatch(markerActions.fetchReviewData({ data: reviewData || [] }));
    } catch (error) {
      throw new Error("error");
    }
  };
};

export const postBookmark = (bookmarkId) => {};
