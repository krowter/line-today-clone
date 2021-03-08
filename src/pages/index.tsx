import { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { connect } from "react-redux";

import { Header } from "blocks/Header";
import { Container } from "bases/Container";
import { Tabs } from "blocks/Tabs";

import { fetchArticles, ArticlesData } from "redux/actions/articleAction";
import { openTab as _openTab } from "redux/actions/tabAction";
import { ArticlesState } from "redux/reducers/articleReducer";

const Main = styled.main`
  background-color: #eee;
`;

const HomePage = ({ loading, items, fetchArticles, openTab, tabs }: any) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log({ tabs });

  const { categoryList = [], categories = [] }: ArticlesData = items ?? {};
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
        <button onClick={openTab}>OPEN</button>
        <Container background="white">
          <Header />

          {loading ? <span>Loading</span> : <Tabs items={categoryList} />}
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
  fetchArticles: () => dispatch(fetchArticles("/api/articles")),
  openTab: () => dispatch(_openTab("TOP")),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
