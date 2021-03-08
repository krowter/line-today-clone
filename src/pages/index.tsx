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
import { TabsState } from "redux/reducers/tabReducer";

import { ArticleCard } from "blocks/ArticleCard";

const Main = styled.main`
  background-color: #eee;
`;

const article = {
  id: 111489713,
  source: "AUTO",
  status: "AVAILABLE",
  categoryName: "News",
  categoryId: 100271,
  title:
    "Kronologi Cekcok Pimpinan KPK Nawawi Pomolango dan Putra Amien Rais di Pesawat Versi KPK",
  publisher: "Kompas.com",
  publisherId: "100014",
  publisherImageCdnHash: "http://www.kompas.com/",
  badgeText: "",
  publishTimeUnix: 1597412738000,
  thumbnail: {
    type: "IMAGE",
    hash:
      "0hXBYyshuAB21kAC48_tV4Ol5WBAJXbBRuADZWczRuWVkeMkczXm9LWEhTCwoeY0AzCjFKDUAAHFwbNkNoDGBL",
    quality: 0,
  },
  url: {
    hash: "JqnNqJ",
    url:
      "https://today.line.me/id/article/Kronologi+Cekcok+Pimpinan+KPK+Nawawi+Pomolango+dan+Putra+Amien+Rais+di+Pesawat+Versi+KPK-JqnNqJ",
  },
  type: 0,
  postId: "111489713",
};

const HomePage = ({ loading, items, fetchArticles, openTab, tabs }: any) => {
  // useEffect(() => {
  //   fetchArticles();
  // }, []);
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
        <Container background="white">
          <Header />

          {loading ? <span>Loading</span> : <Tabs items={categoryList} />}
          <ArticleCard article={article} />
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
