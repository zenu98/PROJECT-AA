import { createSlice } from "@reduxjs/toolkit";

const markerSlice = createSlice({
  name: "marker",
  initialState: {
    markerType: "all",
    tabType: "개요",
    selectedMarker: "",
    selectedItem: "",
    selectedTab: "",
    tabIsClicked: false,
    markerIsClicked: false,
    itemIsClicked: false,
    data: [],
    review: [],
  },
  reducers: {
    fetchData(state, action) {
      state.data = action.payload.data;
      console.log(state.data);
    },
    fetchReviewData(state, action) {
      state.review = action.payload.data;
      console.log(state.review);
    },
    markerTypeHandler(state, action) {
      const markerType = action.payload;
      console.log(action.payload);
      state.markerType = markerType.title;
      state.markerIsClicked = false;
    },
    tabTypeHandler(state, action) {
      const tabType = action.payload;
      console.log(action.payload);
      state.tabType = tabType.title;
      // state.tabIsClicked = false;
    },
    markerListHandler(state, action) {
      const markerType = action.payload;
      console.log(action.payload);
      state.selectedMarker = markerType.name;
      state.markerIsClicked = true;
    },
    selectedItemHandler(state, action) {
      const selectedItem = action.payload;
      console.log(action.payload);
      state.selectedItem = selectedItem.name;
      state.itemIsClicked = true;
    },
    selectedTabHandler(state, action) {
      const selectedTab = action.payload;
      console.log(action.payload);
      state.selectedTab = selectedTab;
    },
    itemIsNotClicked(state) {
      state.itemIsClicked = false;
    },
  },
});

export const markerActions = markerSlice.actions;
export default markerSlice;
