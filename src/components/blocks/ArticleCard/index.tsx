import getConfig from "next/config";
import styled from "styled-components";

import { Article } from "types";

const Card = styled.div`
  overflow: hidden;
  max-width: ${({ theme }) => theme.size["2xl"]};

  .title {
    display: block;
    margin-top: ${({ theme }) => theme.size["3xs"]};
    margin-bottom: ${({ theme }) => theme.size["2xs"]};
  }

  .publisher {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const CardMedia = styled.img`
  border-radius: ${({ theme }) => theme.size["2xs"]};
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

export const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const {
    publicRuntimeConfig: { imageCDN },
  } = getConfig();

  return (
    <Card>
      <CardMedia src={imageCDN + article.thumbnail.hash} />
      <span className="title">{article.title}</span>
      <span className="publisher">{article.publisher}</span>
    </Card>
  );
};
