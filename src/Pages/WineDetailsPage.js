import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";

import config from '../config'
import theme from '../styles/theme';

import WineDetails from '../Components/WineDetails'
import IconButton from "../Components/IconButton";

const SinglePageAppWrapper = styled.div`
  display: block;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${theme.background};
`

const WineDetailsPageContainer = styled.div`
  padding-top: 142px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 300px;
  max-width: 780px;
`;

const WineDetailsPageHeader = styled.div``

const WineDetailsPage = () => {
  const { lotCode } = useParams();
  const [lotDetails, setLotDetails] = useState();
  const [lotBreakdownDetails, setLotBreakdownDetails] = useState();
  const [breakdownType, setBreakdownType] = useState("year");

  useEffect(() => {
    fetch(`${config.apiUrl}/wine/${lotCode}`)
        .then(response => response.json())
        .then(setLotDetails)
  }, [lotCode])

  useEffect(() => {
    fetch(`${config.apiUrl}/breakdown/${breakdownType}/${lotCode}`)
        .then(response => response.json())
        .then(setLotBreakdownDetails)
  }, [lotCode, breakdownType])

  if(!lotDetails || !lotBreakdownDetails) {
    return (
        <ReactLoading type="cylon" color={theme.highlight} />
    )
  }

  return (
    <SinglePageAppWrapper>
      <WineDetailsPageContainer>
        <WineDetailsPageHeader><IconButton iconName="arrowBack" /></WineDetailsPageHeader>
        <WineDetails lot={lotDetails} />
      </WineDetailsPageContainer>
    </SinglePageAppWrapper>
  )
}

export default WineDetailsPage;