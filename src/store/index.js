import { configureStore } from "@reduxjs/toolkit";
import markerSlice from "./marker-slice";

const store = configureStore({
  reducer: { mark: markerSlice.reducer },
});

export default store;
