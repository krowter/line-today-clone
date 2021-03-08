import { Dispatch } from "redux";

import { handleFetchErrors } from "lib/helpers";

export enum FETCH_ARTICLE {
  BEGIN,
  SUCCESS,
  ERROR,
}

export interface ArticleAction {
  type: FETCH_ARTICLE;
  payload: {
    articles?: any[];
    error?: any;
  };
}

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLE.BEGIN,
});

export const fetchArticlesSuccess = (articles: any[]): ArticleAction => ({
  type: FETCH_ARTICLE.SUCCESS,
  payload: { articles },
});

export const fetchArticlesError = (error: any) => ({
  type: FETCH_ARTICLE.ERROR,
  payload: { error },
});

export const fetchArticles = () => (dispatch: Dispatch) => {
  dispatch(fetchArticlesBegin());
  return fetch("/api/articles")
    .then(handleFetchErrors)
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchArticlesSuccess(res.result));
      return res.result;
    })
    .catch((error) => dispatch(fetchArticlesError(error)));
};
