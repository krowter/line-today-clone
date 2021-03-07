import { useState, useRef } from "react";
import Slider from "react-slick";

import { Tab as _Tab } from "bases/Tab";

interface TabProps {
  id: number;
  name: string;
  type: number;
  lastModTime: number;
  isActive: boolean;
  onClick: () => void;
}

interface TabsProps {
  items: TabProps[];
}

const Tab: React.FC<TabProps> = ({ name, onClick, isActive }) => {
  return (
    <_Tab onClick={onClick} isActive={isActive}>
      {name}
    </_Tab>
  );
};

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const sliderSettings = {
    slidesToShow: 4,
    initialSlide: 0,
    infinite: false,
    speed: 500,
    dots: false,
    arrows: false,
    variableWidth: true,
  };

  return (
    <section className="slick-arrows-inside slider variable-width">
      <Slider ref={sliderRef} {...sliderSettings}>
        {items.map((item, index) => {
          const onClick = () => {
            setActiveTabIndex(index);

            /* scroll the slider so the active tab
            becomes the 2nd tab from the left */
            sliderRef.current?.slickGoTo(index - 1);
          };

          return (
            <Tab
              key={item.id}
              {...item}
              isActive={activeTabIndex === index}
              onClick={onClick}
            />
          );
        })}
      </Slider>
    </section>
  );
};
