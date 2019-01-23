import React from 'react';
import {css} from "emotion";
import {colors} from "../../themes/defaultTheme";

const classNames = {
  separator : css`
    width : 100%;
    height: 1px;
    background-color: ${colors.whiteBlue1};
  `,
};

class VerticalDivider extends React.Component{
  render(){
    return (
      <div className={classNames.separator}>
        &nbsp;
      </div>
    )
  }
}

export default VerticalDivider;