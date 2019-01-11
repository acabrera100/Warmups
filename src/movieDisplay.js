import React from "react";
import './styles.css';

export const MovieDisplay = ({title,description}) => {
  return (

  <>
  <br />
  <br />
  
      <h4>Title: {title}</h4>

      <>
      <p>{description}</p>
      </>
</>
  );
};
