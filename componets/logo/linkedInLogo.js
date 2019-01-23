import React from 'react';
import {css} from "emotion";
import { colors } from "../../themes/defaultTheme";

const classNames = {
  linkedInLogo : css`
    position: relative;
    z-index: 2;
    width: 40px;  
  `,
  logoContainer: css`
    width: 40px;
    position: relative;
  `,
  whiteContainer: css`
    position: absolute;
    width: 34px;
    height: 34px;
    left: 2px;
    top: 2px;
    background-color: ${colors.white} 
    z-index:1;
  `
};

class LinkedInLogo extends React.Component{
  render(){
    return (
      <div className={classNames.logoContainer}>
        <div className={classNames.whiteContainer} />
        <img
          src={'static/images/linkedin-logo.png'}
          className={classNames.linkedInLogo}
        />
      </div>
    )
  }
}

export default LinkedInLogo;