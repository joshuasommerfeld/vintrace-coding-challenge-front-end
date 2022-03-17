import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";

import config from '../config'
import theme from '../styles/theme';

import WineDetails from '../Components/WineDetails'

const WineDetailsPageContainer = styled.div`
  display: block;
  margin: auto;
`;

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
    <WineDetailsPageContainer>
      <WineDetails lot={lotDetails} />
    </WineDetailsPageContainer>
  )
}

export default WineDetailsPage;