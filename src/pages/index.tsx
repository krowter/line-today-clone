import { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";

import { Header } from "blocks/Header";
import { Container } from "bases/Container";
import { Tabs } from "blocks/Tabs";

import { connect } from "react-redux";
import { fetchArticles } from "redux/actions/articleAction";
import { ArticlesState } from "redux/reducers/articleReducer";

const Main = styled.main`
  background-color: #eee;
`;

const HomePage = ({ dispatch, ...props }) => {
  const categoryList = [
    { id: 100270, name: "TOP", type: 0, lastModTime: 1597417502885 },
    { id: 100272, name: "Showbiz", type: 0, lastModTime: 1597322354843 },
    { id: 100271, name: "News", type: 0, lastModTime: 1597387911731 },
    { id: 100274, name: "Life", type: 0, lastModTime: 1597380163400 },
    {
      id: 100641,
      name: "Regional",
      type: 0,
      highlight: { enable: true, style: 1 },
      lastModTime: 1597388010219,
    },
    { id: 100608, name: "Intermezzo", type: 0, lastModTime: 1594806775480 },
    {
      id: 100665,
      name: "Trending",
      type: 0,
      highlight: { enable: true, style: 1 },
      lastModTime: 1596773095413,
    },
    {
      id: 100472,
      name: "Videos",
      type: 0,
      highlight: { enable: false },
      lastModTime: 1597384800000,
    },
    {
      id: 100622,
      name: "Sci-Tech",
      type: 0,
      highlight: { enable: false },
      lastModTime: 0,
    },
    {
      id: 100609,
      name: "Sports",
      type: 0,
      highlight: { enable: false },
      lastModTime: 1597424400000,
    },
    { id: 100602, name: "Biz", type: 0, lastModTime: 0 },
    { id: 100549, name: "Movie", type: 3, lastModTime: 1615097366800 },
    {
      id: 100584,
      name: "Story",
      type: 0,
      highlight: { enable: true },
      lastModTime: 1597303492500,
    },
    {
      id: 100673,
      name: "Hobbies",
      type: 0,
      highlight: { enable: false },
      lastModTime: 1597394582558,
    },
    {
      id: 100582,
      name: "Otomotif",
      type: 0,
      highlight: { enable: false },
      lastModTime: 1597116928861,
    },
    { id: 100603, name: "Parenting", type: 0, lastModTime: 0 },
    {
      id: 100667,
      name: "Corona di RI",
      type: 0,
      highlight: { enable: true, style: 0 },
      lastModTime: 1595221933958,
    },
    {
      id: 100627,
      name: "Games",
      type: 0,
      highlight: { enable: true, style: 1 },
      lastModTime: 0,
    },
    {
      id: 100663,
      name: "Kata Gaul",
      type: 0,
      highlight: { enable: false },
      lastModTime: 1584072728273,
    },
    { id: 100604, name: "English", type: 0, lastModTime: 0 },
    {
      id: 100634,
      name: "Music",
      type: 0,
      highlight: { enable: false },
      lastModTime: 1597302488800,
    },
    {
      id: 100681,
      name: "Campus",
      type: 0,
      highlight: { enable: false },
      lastModTime: 1597386828815,
    },
  ];

  console.log(props);
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <>
      <Head>
        <title>Len Tudei - SejutaCita Technical Test</title>
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
          <Tabs items={categoryList} />
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
