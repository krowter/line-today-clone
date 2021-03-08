import { useState } from "react";
import getConfig from "next/config";
import { connect } from "react-redux";

import { ReadMoreButton } from "bases/Button";
import { ArticleCard } from "blocks/ArticleCard";
import { SectionLinkCard } from "blocks/ArticleCard/Card";

import { openTab as _openTab } from "redux/actions/tabAction";
import { TabsState } from "redux/reducers/tabReducer";

const {
  publicRuntimeConfig: { emptyImagePlaceholder },
} = getConfig();

interface TemplateSectionProps {
  section: any;
  hasTemplateTitle: boolean;
  openTab: (tab: string) => void;
}

export const _TemplateSection: React.FC<TemplateSectionProps> = ({
  section,
  hasTemplateTitle,
  openTab,
}) => {
  const [articlesPerTemplate, setArticlesPerTemplate] = useState(2);

  return (
    <>
      {section.articles.slice(0, articlesPerTemplate).map((article: any) => {
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
      {articlesPerTemplate < section.articles.length && (
        <ReadMoreButton
          onClick={() => setArticlesPerTemplate((prevState) => prevState + 4)}
        >
          Lihat lebih banyak
        </ReadMoreButton>
      )}
    </>
  );
};

const mapStateToProps = (state: { tabs: TabsState }) => ({
  tabs: state.tabs,
});

const mapDispatchToProps = (dispatch: any) => ({
  openTab: (tab: string) => dispatch(_openTab(tab)),
});

export const TemplateSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TemplateSection);
