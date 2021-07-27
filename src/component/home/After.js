import React from 'react';
import Style from 'style-it';

const After = () => {
  return (
    <Style>
      {`#seperator:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 800px;
    transform: skewY(
-8deg
);
    background: #fff;
    top: 88%;
    z-index: 1;
    height: 275px!important;
    top: -100px!important;

    
    `}
      <div id='seperator'></div>
    </Style>
  );
};

export default After;
