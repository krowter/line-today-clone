import styled from "styled-components";

import { Pill as BasePill } from "bases/Pill";
import { TabProps } from "blocks/Tabs";

const Pill = styled(BasePill)`
  margin: 0.375rem;
`;

export const CollapsibleTabs: React.FC<{
  onTabClick: (index: number, tab: string) => void;
  setIsCollapsed: (isCollapsed: boolean) => void;
  items: TabProps[];
  activeTab: string;
}> = ({ items, onTabClick, setIsCollapsed, activeTab }) => {
  return (
    <>
      {items.map((item, index) => (
        <Pill
          isActive={item.name === activeTab}
          onClick={() => {
            onTabClick(index, item.name);
            setIsCollapsed(true);
          }}
          key={index}
          size="xl"
          background="dark"
        >
          {item.name}
        </Pill>
      ))}
    </>
  );
};
