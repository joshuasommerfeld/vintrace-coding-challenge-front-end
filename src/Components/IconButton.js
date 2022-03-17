import React from "react"
import styled from "styled-components";

import iconMap from './svg';

const Button = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

const IconButton = ({ iconName, onClick }) => {
  return (
      <Button onClick={onClick}>
        {iconMap[iconName]()}
      </Button>
  )
}

export default IconButton
