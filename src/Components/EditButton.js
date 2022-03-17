import React from "react";
import P from "prop-types";
import styled from "styled-components";
import theme from "../styles/theme";
import Icon from "./Icon";

const CircleBackground = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 28px;
  background-color: ${theme.highlight};
  cursor: pointer;
  
  margin: auto;
`;

const EditButton = ({ onClick }) => {
  return (
      <CircleBackground onClick={onClick}>
        <Icon iconName="pencil" />
      </CircleBackground>
  )
};

EditButton.propTypes = {
  onClick: P.func
};

export default EditButton;