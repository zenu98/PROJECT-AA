import { createSlice, current } from "@reduxjs/toolkit";

const markerSlice = createSlice({
  name: "marker",
  initialState: {
    dummy: [
      {
        locationX: 37.4882,
        locationY: 126.8249,
        title: "cafe",
        img: "coffee",
        name: "Dummy1",
        description: "comfortable, classic cafe",
        thumbnail: "dummybg1.jpg",
      },
      {
        locationX: 37.504,
        locationY: 126.8249,
        title: "cafe",
        img: "coffee",
        name: "Dummy2",
        description: "low price, high quality cafe",
        thumbnail: "dummybg4.jpg",
      },
      {
        locationX: 37.489,
        locationY: 126.84,
        title: "cinema",
        img: "dummy",
        name: "Dummy3",
        description: "aaaaaaaaaaaaaaaaaaaa",
        thumbnail: "dummybg5.jpg",
      },
      {
        locationX: 37.49,
        locationY: 126.83,
        title: "cinema",
        img: "dummy",
        name: "Dummy4",
        description: "bbbbbbbbbbbbbb",
        thumbnail: "dummy.png",
      },
    ],
    markerType: "All",
  },
  reducers: {
    markerTypeHandler(state, action) {
      const markerType = action.payload;
      console.log(action.payload);
      state.markerType = markerType.title;
    },
  },
});

export const markerActions = markerSlice.actions;
export default markerSlice;
