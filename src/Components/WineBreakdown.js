import React from "react";
import styled from "styled-components";
import P from "prop-types";

import Tabs from "./Tabs";

const WineBreakdownContainer = styled.div`

`;

const WineBreakdownListItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  
  background-color: #fff;
  height: 48px;
`;

const WineBreakdownListItemKey = styled.p`
  display: flex;
  align-items: center;
  
  font-size: 16px;
  font-weight: 300;
  padding: 0 16px;
`

const WineBreakdownListItemValue = styled(WineBreakdownListItemKey)`
  justify-content: end;
`

const tabs = [
  'Year',
  'Variety',
  'Region',
  'Year-Variety',
]

const WineBreakdown = ({ lotBreakdown, breakdownType, onBreakdownChange }) => {

  const breakdownItems = lotBreakdown.breakdown.map(breakdown => (
      <WineBreakdownListItem key={breakdown.key}>
        <WineBreakdownListItemKey>
          {breakdown.key}
        </WineBreakdownListItemKey>
        <WineBreakdownListItemValue>
          {breakdown.percentage}
        </WineBreakdownListItemValue>
      </WineBreakdownListItem>
  ))
  return (
      <WineBreakdownContainer>
        <Tabs tabs={tabs} selectedTab={breakdownType} onSelect={onBreakdownChange} />
        <WineBreakdownListItem>
          <WineBreakdownListItemKey>
            {breakdownType}
          </WineBreakdownListItemKey>
          <WineBreakdownListItemValue>
            Percentage
          </WineBreakdownListItemValue>
        </WineBreakdownListItem>

        {breakdownItems}
      </WineBreakdownContainer>
  )
}

WineBreakdown.propTypes = {
  lotBreakdown: P.shape({
    breakdownType: P.string,
    breakdown: P.arrayOf(P.shape({
      key: P.string,
      percentage: P.number,
    }))

  })
}

export default WineBreakdown