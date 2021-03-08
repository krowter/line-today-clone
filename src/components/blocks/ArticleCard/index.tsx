import getConfig from "next/config";

import { Pill } from "bases/Pill";
import { Card, CardMedia } from "blocks/ArticleCard/Card";

import { Article } from "types";

const {
  publicRuntimeConfig: { imageCDN, emptyImagePlaceholder },
} = getConfig();
interface ArticleCardProps {
  article: Article;
  type?: "row-card" | "regular";
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  type = "regular",
}) => {
  const { thumbnail, badgeText, title, publisher } = article;

  const thumbnailSource = thumbnail
    ? imageCDN + thumbnail.hash
    : emptyImagePlaceholder;
  const sourceExtension = article.thumbnail?.type ? "/w644" : "";

  return (
    <Card type={type}>
      <a href={article.url?.url} rel="noopener noreferrer" target="_blank">
        <CardMedia type={type} src={thumbnailSource + sourceExtension} />
        <div>
          <span className="title">
            {badgeText && (
              <Pill
                className="badge-text"
                background="orange"
                color="dark"
                size="md"
              >
                {badgeText}
              </Pill>
            )}
            {title}
          </span>
          <span className="publisher">{publisher}</span>
        </div>
      </a>
    </Card>
  );
};
