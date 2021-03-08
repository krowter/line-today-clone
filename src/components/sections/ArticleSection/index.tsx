import getConfig from "next/config";

import { ArticleCard } from "blocks/ArticleCard";
import { AdvertisingCard, SectionLinkCard } from "blocks/ArticleCard/Card";
import {
  ArticleSectionContainer,
  SectionContainer,
} from "sections/ArticleSection/Containers";

const {
  publicRuntimeConfig: { emptyImagePlaceholder, advertisementImagePlaceholder },
} = getConfig();

export const ArticleSection = ({ templates }: any) => {
  return (
    <ArticleSectionContainer>
      {templates.map((template: any) => {
        const isAd = template.sections[0]?.articles[0]?.source === "AD";
        const hasTemplateTitle = Boolean(template.title);

        if (isAd)
          return (
            <AdvertisingCard backgroundImage={advertisementImagePlaceholder}>
              Iklan
            </AdvertisingCard>
          );

        return (
          <div key={template.id}>
            <h2>{template.title}</h2>
            {template.sections.map((section: any, index: number) => (
              <SectionContainer key={index}>
                {section.articles.slice(0, 6).map((article: any) => {
                  const isSectionLink = article.source === "CATABLE";
                  if (isSectionLink)
                    return (
                      <SectionLinkCard backgroundImage={emptyImagePlaceholder}>
                        {article.categoryName}
                      </SectionLinkCard>
                    );

                  return (
                    <ArticleCard
                      key={article.id}
                      type={hasTemplateTitle ? "regular" : "row-card"}
                      article={article}
                    />
                  );
                })}
              </SectionContainer>
            ))}
          </div>
        );
      })}
    </ArticleSectionContainer>
  );
};
