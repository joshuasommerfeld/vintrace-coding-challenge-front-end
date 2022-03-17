import React from "react";
import styled from "styled-components";
import P from "prop-types";

const WineBreakdownContainer = styled.div`
  min-width: 300px;
`
const WineBreakdownTitle = styled.h1``

const WineBreakdown = ({ lotBreakdown, }) => {
  return (
      <WineBreakdownContainer>
        <WineBreakdownTitle>{lotBreakdown.lotBreakdown}</WineBreakdownTitle>
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