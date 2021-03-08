import getConfig from "next/config";
import { connect } from "react-redux";

import { ArticleCard } from "blocks/ArticleCard";
import { AdvertisingCard, SectionLinkCard } from "blocks/ArticleCard/Card";
import {
  ArticleSectionContainer,
  SectionContainer,
} from "sections/ArticleSection/Containers";

import { openTab as _openTab } from "redux/actions/tabAction";
import { TabsState } from "redux/reducers/tabReducer";

const {
  publicRuntimeConfig: { emptyImagePlaceholder, advertisementImagePlaceholder },
} = getConfig();

const _ArticleSection = ({ templates, tabs, openTab }: any) => {
  
  return (
    <ArticleSectionContainer mounted={tabs.loading}>
      {templates.map((template: any) => {
        const isAd = template.sections[0]?.articles[0]?.source === "AD";
        const hasTemplateTitle = Boolean(template.title);

        if (isAd)
          return (
            <AdvertisingCard
              key={template.id}
              backgroundImage={advertisementImagePlaceholder}
            >
              Iklan
            </AdvertisingCard>
          );

        return (
          <div key={template.id}>
            <h2>{template.title}</h2>
            {template.sections.map((section: any, index: number) => (
              <SectionContainer key={index}>
                {section.articles.slice(0, 3).map((article: any) => {
                  const isSectionLink = article.source === "CATABLE";
                  if (isSectionLink)
                    return (
                      <SectionLinkCard
                        key={article.id + article.categoryName}
                        onClick={() => openTab(article.categoryName)}
                        backgroundImage={emptyImagePlaceholder}
                      >
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

const mapStateToProps = (state: { tabs: TabsState }) => ({
  tabs: state.tabs,
});

const mapDispatchToProps = (dispatch: any) => ({
  openTab: (tab: string) => dispatch(_openTab(tab)),
});

export const ArticleSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ArticleSection);
