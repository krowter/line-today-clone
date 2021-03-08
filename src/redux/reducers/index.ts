import { combineReducers } from "redux";
import { articleReducer as articles } from "redux/reducers/articleReducer";
import { tabReducer as tabs } from "redux/reducers/tabReducer";

export default combineReducers({
  articles,
  tabs,
});
