import styled from "styled-components";

import { Pill as BasePill } from "bases/Pill";
import { TabProps } from "blocks/Tabs";

const Pill = styled(BasePill)`
  margin: 0.375rem;
`;

export const CollapsibleTabs: React.FC<{
  onTabClick: (index: number) => void;
  setIsCollapsed: (isCollapsed: boolean) => void;
  items: TabProps[];
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
          background="dark"
        >
          {item.name}
        </Pill>
      ))}
    </>
  );
};
