import { Dispatch } from "redux";

export enum OPEN_TAB {
  BEGIN = "OPEN_TAB_BEGIN",
  SUCCESS = "OPEN_TAB_SUCCESS",
  ERROR = "OPEN_TAB_ERROR",
}

export interface TabAction {
  type: OPEN_TAB;
  payload: {
    tab: string;
    tabContent: any;
    error?: any;
  };
}

export const openTabBegin = () => ({
  type: OPEN_TAB.BEGIN,
});

export const openTabSuccess = ({
  tab,
  tabContent,
}: {
  tab: string;
  tabContent: any;
}) => ({
  type: OPEN_TAB.SUCCESS,
  payload: { tab, tabContent },
});

export const openTabError = (error: string) => ({
  type: OPEN_TAB.ERROR,
  payload: { error },
});

export const openTab = (newTab: string) => (
  dispatch: Dispatch,
  getState: () => void
) => {
  dispatch(openTabBegin());
  try {
    const {
      articles: {
        items: { categories },
      },
    } = getState() as any;
    const tabContent = categories.find(
      (category: any) => category.name === newTab
    );
    dispatch(openTabSuccess({ tab: newTab, tabContent }));
  } catch (err) {
    dispatch(openTabError("TAB_DOESNT_EXIST"));
    console.log({ ERROR: err });
  }
};
