import styled from "styled-components";

import { Pill as BasePill } from "bases/Pill";
import { TabProps } from "blocks/Tabs";

const Pill = styled(BasePill)`
  margin: 0.375rem;
`;

export const CollapsibleTabs: React.FC<{
  items: TabProps[];
  onTabClick: (index: number) => void;
  setIsCollapsed: (isCollapsed: boolean) => void;
  activeTabIndex: number;
}> = ({ items, onTabClick, setIsCollapsed, activeTabIndex }) => {
  return (
    <>
      {items.map((item, index) => (
        <Pill
          isActive={index === activeTabIndex}
          onClick={() => {
            onTabClick(index);
            setIsCollapsed(true);
          }}
          key={index}
        >
          {item.name}
        </Pill>
      ))}
    </>
  );
};
