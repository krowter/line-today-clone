import { FETCH_ARTICLE, ArticleAction } from "redux/actions/articleAction";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export type ArticlesState = typeof initialState;

export const articles = (state = initialState, action: ArticleAction) => {
  switch (action.type) {
    case FETCH_ARTICLE.BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ARTICLE.SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.articles,
      };
    case FETCH_ARTICLE.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
