import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import {colors} from "../../themes/defaultTheme";

const classNames = {
  arrowDown : css`
    width: 0; 
    height: 0; 
    display: inline-block;
  `
};

class ArrowDown extends React.Component{
  render(){
    const { color, size, style, ...rest } = this.props;
    const borderStyle = {
      borderLeft: `${size} solid transparent`,
      borderRight: `${size} solid transparent`,
      borderTop: `${size} solid ${color}`
    };
    return (
      <div className={[classNames.arrowDown]} style={{ ...borderStyle, ... style}} { ...rest } />
    )
  }
}
ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.string
};
ArrowDown.defaultProps = {
  color: colors.white,
  size: '20px'
};
export default ArrowDown;