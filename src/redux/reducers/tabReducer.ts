import { OPEN_TAB, TabAction } from "redux/actions/tabAction";

const initialState = {
  activeTab: "",
  tabContent: {},
  loading: false,
  error: null,
};

export type TabsState = typeof initialState;

export const tabReducer = (state = initialState, action: TabAction) => {
  switch (action.type) {
    case OPEN_TAB.BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case OPEN_TAB.SUCCESS:
      return {
        ...state,
        loading: false,
        tabContent: action.payload.tabContent,
        activeTab: action.payload.tab,
      };
    case OPEN_TAB.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
