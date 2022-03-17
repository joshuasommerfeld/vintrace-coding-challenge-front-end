import React from "react";
import styled from "styled-components";
import P from "prop-types";

const WineDetailsContainer = styled.div`
  min-width: 300px;
`
const WineDetailsTitle = styled.h1``
const WineDetailsDescription = styled.h2``

const WineDetailsList = styled.div`
  margin: 12px 18px;
`

const WineDetailsListItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

const WineDetailsListItemField = styled.p`
  font-weight: 500;
`

const WineDetailsListItemValue = styled.p``

const WineDetails = ({ lot, }) => {

  const DetailItem = ({title, value}) => (
      <WineDetailsListItem>
        <WineDetailsListItemField>{title}</WineDetailsListItemField>
        <WineDetailsListItemValue>{value}</WineDetailsListItemValue>
      </WineDetailsListItem>
  )

  return (
    <WineDetailsContainer>
      <WineDetailsTitle>{lot.lotCode}</WineDetailsTitle>
      <WineDetailsDescription>{lot.description}</WineDetailsDescription>
      <WineDetailsList>
        <DetailItem title="Volume" value={`${lot.volume} L`}/>
        <DetailItem title="Tank code" value={lot.tankCode}/>
        <DetailItem title="Product state" value={lot.productState}/>
        <DetailItem title="Owner" value={lot.ownerName}/>
      </WineDetailsList>
    </WineDetailsContainer>
  )
}

WineDetails.propTypes = {
  lot: P.shape({
    lotCode: P.string,
    description: P.string,
    volume: P.number,
    tankCode: P.string,
    productState: P.string,
    ownerName: P.string
  })
}

export default WineDetails