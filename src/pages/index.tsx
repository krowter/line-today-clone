import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { Header } from "blocks/Header";
import { Container, CenteredContainer, Main } from "bases/Container";
import { Tabs } from "blocks/Tabs";
import { ArticleSection } from "components/ArticleSection";

import { fetchArticles, ArticlesData } from "redux/actions/articleAction";
import { openTab as _openTab } from "redux/actions/tabAction";
import { ArticlesState } from "redux/reducers/articleReducer";
import { TabsState } from "redux/reducers/tabReducer";

const HomePage = ({ loading, items, fetchArticles, tabs, openTab }: any) => {
  const router = useRouter();

  useEffect(() => {
    fetchArticles("/api/articles");
  }, []);

  useEffect(() => {
    const { tab } = router.query;
    if (tabs.activeTab === "") {
      const initialTab = tab ?? "TOP"; // default tab
      openTab(initialTab);
    }
  }, [items]);

  useEffect(() => {
    // change url shallowly when tab changes (except for first render)
    if (tabs.activeTab !== "") {
      router.replace({ query: { tab: tabs.activeTab } });
    }
  }, [tabs.activeTab]);

  const { categoryList = [] }: ArticlesData = items ?? {};

  return (
    <>
      <Head>
        <title>LEN TUDEI - SejutaCita Technical Test</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Main>
        <Container background="lightgray">
          <Header />
          {loading ? (
            <CenteredContainer>
              <Image src="/static/spinner.svg" width="100px" height="100px" />
            </CenteredContainer>
          ) : (
            <>
              <Tabs items={categoryList} />
              <ArticleSection templates={tabs?.tabContent?.templates || []} />
            </>
          )}
        </Container>
      </Main>
    </>
  );
};

const mapStateToProps = (state: {
  articles: ArticlesState;
  tabs: TabsState;
}) => ({
  items: state.articles.items,
  loading: state.articles.loading,
  tabs: state.tabs,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchArticles: (url: string) => dispatch(fetchArticles(url)),
  openTab: (tab: string) => dispatch(_openTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
