import {
  useState,
  useRef,
  useContext,
  useCallback,
  useEffect,
  memo,
} from "react";
import Slider from "react-slick";
import { ThemeContext } from "styled-components";

import { Tab as _Tab } from "bases/Tab";
import { ChevronArrow, ChevronArrowContainer } from "bases/ChevronArrow";
import { CollapsibleTabs } from "blocks/Tabs/CollapsibleTabs";
import {
  CollapsedTabsContainer,
  UncollapsedTabsContainer,
} from "blocks/Tabs/TabsContainer";

interface TabItem {
  id: number;
  name: string;
  type: number;
  lastModTime: number;
}

export type TabProps = TabItem & { isActive?: boolean; onClick?: () => void };

const Tab: React.FC<TabProps> = memo(({ name, onClick, isActive }) => {
  return (
    <_Tab onClick={onClick} isActive={isActive}>
      {name}
    </_Tab>
  );
});

export const Tabs: React.FC<{ items: TabItem[] }> = ({ items }) => {
  const theme = useContext(ThemeContext);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [isCollapsibleTabMounted, setIsCollapsibleTabMounted] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(
    true
  ); /* show all tabs when not collapsed */

  /* listen to isCollapsed changes to allow fading in/out animation */
  useEffect(() => {
    if (isCollapsibleTabMounted) {
      setTimeout(() => {
        setIsCollapsed(true);
        sliderRef.current?.slickGoTo(activeTabIndex - 1);
      }, 400);
    } else {
      setIsCollapsed(false);
    }
  }, [isCollapsibleTabMounted]);

  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    slidesToShow: 4,
    initialSlide: 0,
    infinite: false,
    speed: 800,
    dots: false,
    arrows: false,
    variableWidth: true,
  };

  const updateActiveTab = useCallback((index: number) => {
    setActiveTabIndex(index);

    /* scroll the slider so the active tab
      becomes the 2nd tab from the left */
    sliderRef.current?.slickGoTo(index - 1);
  }, []);

  return (
    <section className="slider variable-width" style={{ position: "relative" }}>
      <CollapsedTabsContainer>
        {isCollapsed ? (
          <Slider ref={sliderRef} {...sliderSettings}>
            {items.map((item, index) => {
              return (
                <Tab
                  {...item}
                  key={item.id}
                  isActive={activeTabIndex === index}
                  onClick={() => updateActiveTab(index)}
                />
              );
            })}
          </Slider>
        ) : (
          <_Tab>Kategori</_Tab>
        )}
        <ChevronArrowContainer
          onClick={() => setIsCollapsibleTabMounted((prevState) => !prevState)}
        >
          <ChevronArrow
            size={theme.fontSize["4xl"]}
            upwardIf={!isCollapsed}
            downwardIf={isCollapsed}
          />
        </ChevronArrowContainer>
      </CollapsedTabsContainer>

      {!isCollapsed && (
        <UncollapsedTabsContainer mounted={isCollapsibleTabMounted}>
          <CollapsibleTabs
            items={items}
            onTabClick={updateActiveTab}
            activeTabIndex={activeTabIndex}
            setIsCollapsed={setIsCollapsibleTabMounted}
          />
        </UncollapsedTabsContainer>
      )}
    </section>
  );
};
