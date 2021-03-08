import { ArticleCard } from "blocks/ArticleCard";
import {
  ArticleSectionContainer,
  SectionContainer,
} from "sections/ArticleSection/Containers";

export const ArticleSection = ({ templates }: any) => {
  return (
    <ArticleSectionContainer>
      {templates.map((template: any) => {
        const isAd = template.sections[0]?.articles[0]?.source === "AD";
        const hasTemplateTitle = Boolean(template.title);
        const empty = template.sections[0]?.articles[0]?.source === "CATABLE";

        if (isAd) return <h1>Iklan</h1>;
        if (empty) return null;

        return (
          <div key={template.id}>
            <h1>{template.title}</h1>
            {template.sections.map((section: any, index: number) => (
              <SectionContainer key={index}>
                {section.articles.slice(0, 2).map((article: any) => {
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
