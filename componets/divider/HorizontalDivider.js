import React from 'react';
import { css } from 'react-emotion';
import {colors} from "../../themes/defaultTheme";

const classNames = {
  separator : css`
    width : 1px;
    height: 100%;
    background-color: ${colors.whiteBlue1};
  `,
};

class HorizontalDivider extends React.Component{
  render(){
    return (
      <div className={classNames.separator}>
        &nbsp;
      </div>
    )
  }
}

export default HorizontalDivider;