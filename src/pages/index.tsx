import { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { connect } from "react-redux";

import { Header } from "blocks/Header";
import { Container } from "bases/Container";
import { Tabs } from "blocks/Tabs";
import { ArticleSection } from "sections/ArticleSection";

import { fetchArticles, ArticlesData } from "redux/actions/articleAction";
import { openTab as _openTab } from "redux/actions/tabAction";
import { ArticlesState } from "redux/reducers/articleReducer";
import { TabsState } from "redux/reducers/tabReducer";

const Main = styled.main`
  background-color: #ededed;
`;

const HomePage = ({ loading, items, fetchArticles, tabs, openTab }: any) => {
  useEffect(() => {
    fetchArticles("/api/articles");
  }, []);

  useEffect(() => {
    openTab("TOP");
  }, [items]);

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
            <span>Loading</span>
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
