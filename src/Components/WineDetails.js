import React from "react";
import styled from "styled-components";
import P from "prop-types";
import Avatar from "../Components/Avatar";
import EditButton from "../Components/EditButton";

const WineDetailsContainer = styled.div`
  margin: 12px;
`;

const WineDetailsTitleLayout = styled.div`
  display: grid;
  grid-template-columns: 32px auto 56px;
  grid-gap: 8px;
  align-items: center;
`;

const WineDetailsTitle = styled.h1`
  font-size: 40px;
  font-weight: 300;
  line-height: 45px;
  margin: 0;
`;

const WineDetailsDescription = styled.h2`
  font-size: 21px;
  font-weight: 300;
`;

const WineDetailsList = styled.div`
  margin: 12px 18px;
`;

const WineDetailsListItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 4px 0;
`;

const WineDetailsListItemField = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const WineDetailsListItemValue = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: right;
`;

const WineDetails = ({ lot, }) => {

  const DetailItem = ({title, value}) => (
      <WineDetailsListItem>
        <WineDetailsListItemField>{title}</WineDetailsListItemField>
        <WineDetailsListItemValue align="left">{value}</WineDetailsListItemValue>
      </WineDetailsListItem>
  );

  const onEditButtonClicked = () => console.log("edit clicked");

  return (
    <WineDetailsContainer>
      <WineDetailsTitleLayout>
        <Avatar name={"example"} />
        <WineDetailsTitle>{lot.lotCode}</WineDetailsTitle>
        <EditButton onClick={onEditButtonClicked} />
      </WineDetailsTitleLayout>

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