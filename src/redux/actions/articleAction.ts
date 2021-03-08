import { Dispatch } from "redux";

import { handleFetchErrors } from "lib/helpers";

export enum FETCH_ARTICLE {
  BEGIN = "FETCH_ARTICLE_BEGIN",
  SUCCESS = "FETCH_ARTICLE_SUCCESS",
  ERROR = "FETCH_ARTICLE_ERROR",
}

export interface ArticlesData {
  categories: any[];
  categoryList: any[];
}

export interface ArticleAction {
  type: FETCH_ARTICLE;
  payload: {
    articles?: ArticlesData;
    error?: any;
  };
}

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLE.BEGIN,
});

export const fetchArticlesSuccess = (
  articles: ArticlesData
): ArticleAction => ({
  type: FETCH_ARTICLE.SUCCESS,
  payload: { articles },
});

export const fetchArticlesError = (error: any) => ({
  type: FETCH_ARTICLE.ERROR,
  payload: { error },
});

export const fetchArticles = (url: string) => (dispatch: Dispatch) => {
  dispatch(fetchArticlesBegin());
  return fetch(url)
    .then(handleFetchErrors)
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchArticlesSuccess(res.result));
    })
    .catch((error) => dispatch(fetchArticlesError(error)));
};
