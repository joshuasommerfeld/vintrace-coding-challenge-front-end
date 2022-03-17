import React from "react"
import styled from "styled-components";

import theme from "../styles/theme";

const TabsUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => props.tabs.length}, minmax(0, auto));
  list-style-type: none;
  padding: 0;
`

const TabItem = styled.li`
  border-bottom: 2px solid ${props => props.active ? theme.highlight : theme.light};
  padding: 3px;
`

const Tabs = ({ tabs, selectedTab, onSelect }) => {
  console.log(tabs, selectedTab)
  return (
    <TabsUL tabs={tabs}>
      {tabs.map(tabKey => (<TabItem onClick={() => onSelect(tabKey)} active={selectedTab === tabKey} key={tabKey}>{tabKey}</TabItem>))}
    </TabsUL>
  )
}

export default Tabs;