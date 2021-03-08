import {
  useState,
  useRef,
  useContext,
  useCallback,
  useEffect,
  memo,
} from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { ThemeContext } from "styled-components";

import { Tab as _Tab } from "bases/Tab";
import { ChevronArrow, ChevronArrowContainer } from "bases/ChevronArrow";
import { CollapsibleTabs } from "blocks/Tabs/CollapsibleTabs";
import {
  CollapsedTabsContainer,
  UncollapsedTabsContainer,
} from "blocks/Tabs/TabsContainer";

import { openTab as _openTab } from "redux/actions/tabAction";
import { TabsState } from "redux/reducers/tabReducer";
import { useOnClickOutside } from "lib/hooks";

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

const _Tabs: React.FC<{
  items: TabItem[];
  openTab: (tab: string) => void;
  activeTab: string;
}> = ({ items, openTab, activeTab }) => {
  const theme = useContext(ThemeContext);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [isCollapsibleTabMounted, setIsCollapsibleTabMounted] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(
    true
  ); /* show all tabs when not collapsed */
  const uncollapsedBarRef = useRef();

  useOnClickOutside(uncollapsedBarRef, "bottom", () =>
    setIsCollapsibleTabMounted(true)
  );

  /* listen to isCollapsed changes to allow fading in/out animation */
  useEffect(() => {
    if (isCollapsibleTabMounted) {
      setTimeout(() => {
        setIsCollapsed(true);
        sliderRef.current?.slickGoTo(activeTabIndex - 1);
      }, 400);
      document.body.style.overflow = "auto";
    } else {
      setIsCollapsed(false);
      document.body.style.overflow = "hidden";
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

  const updateActiveTab = useCallback((index: number, name: string) => {
    setActiveTabIndex(index);
    openTab(name);
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
                  isActive={activeTab === item.name}
                  onClick={() => updateActiveTab(index, item.name)}
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
        <>
          <UncollapsedTabsContainer
            //@ts-ignore
            ref={uncollapsedBarRef}
            mounted={isCollapsibleTabMounted}
          >
            <CollapsibleTabs
              items={items}
              onTabClick={updateActiveTab}
              onClickOutside={() => setIsCollapsibleTabMounted(false)}
              activeTab={activeTab}
              setIsCollapsed={setIsCollapsibleTabMounted}
            />
          </UncollapsedTabsContainer>
        </>
      )}
    </section>
  );
};

const mapStateToProps = (state: { tabs: TabsState }) => ({
  activeTab: state.tabs.activeTab,
});

const mapDispatchToProps = (dispatch: any) => ({
  openTab: (tab: string) => dispatch(_openTab(tab)),
});

export const Tabs = connect(mapStateToProps, mapDispatchToProps)(_Tabs);
