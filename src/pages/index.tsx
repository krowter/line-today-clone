import { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { connect } from "react-redux";

import { Header } from "blocks/Header";
import { Container } from "bases/Container";
import { Tabs } from "blocks/Tabs";

import { fetchArticles } from "redux/actions/articleAction";
import { ArticlesState } from "redux/reducers/articleReducer";

const Main = styled.main`
  background-color: #eee;
`;

const HomePage = ({ dispatch, loading, items }: any) => {
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const { categoryList = [], categories = [] } = items ?? {};

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
        <Container background="white">
          <Header />

          {loading ? <span>Loading</span> : <Tabs items={categoryList} />}
        </Container>
      </Main>
    </>
  );
};

const mapStateToProps = (state: { articles: ArticlesState }) => ({
  items: state.articles.items,
  loading: state.articles.loading,
  error: state.articles.error,
});

export default connect(mapStateToProps)(HomePage);
