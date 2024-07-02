import { combineReducers } from "redux";

import themeSlice from "../Slices/themeSlice";
import movieSlice from "../Slices/movieSlice";
import authSlice from "../Slices/authSlice";

const rootReducer = combineReducers({
  auth:authSlice,
  theme: themeSlice,
  movie : movieSlice
});

export default rootReducer;