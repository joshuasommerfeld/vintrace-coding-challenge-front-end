import React from "react";
import P from "prop-types";
import styled from "styled-components";

const AvatarBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 100px;
  height: 32px;
  width: 32px;
  
  background-color: #979797;
`;

const AvatarText = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #fff;
  transform: translateY(-1px);
`;

const Avatar = ({ name }) => {
  const letterToUse = name.charAt(0).toUpperCase();
  return (
    <AvatarBackground>
      <AvatarText>{letterToUse}</AvatarText>
    </AvatarBackground>
  )
};

Avatar.propTypes = {
  name: P.string.isRequired,
};

export default Avatar;