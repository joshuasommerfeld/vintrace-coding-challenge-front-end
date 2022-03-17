import React from "react"
import iconMap from './svg';

const Icon = ({ iconName }) => {
  return (
      <div>
        {iconMap[iconName]()}
      </div>
  )
};

export default Icon;
