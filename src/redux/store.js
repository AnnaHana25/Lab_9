import { configureStore } from "@reduxjs/toolkit"
import imageUrlReducer from "./logo-slice"
import menuItemsReducer from "./menu-slice"
import currentDateReducer from "./date-slice"
// import logger from "redux-logger"

export default configureStore({
  reducer: {
    imageUrl: imageUrlReducer,
    menuItems: menuItemsReducer,
    currentDate: currentDateReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
