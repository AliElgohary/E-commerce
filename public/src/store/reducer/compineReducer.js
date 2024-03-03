import { combineReducers } from "redux";
import LanguageReducer from "./languageReducer";
import themeReducer from "./themeReducer";
import loaderReducer from "./laoderReducer";
import authReducer from "./authReducers";
import productsReducer from "./productReducer";

export default combineReducers({
  language: LanguageReducer,
  theme: themeReducer,
  loader: loaderReducer,
  auth: authReducer,
  products: productsReducer,
});
