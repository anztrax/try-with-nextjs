import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';
import {colors} from "../../themes/defaultTheme";

const classNames = {
  container : css`
    border: 2px solid ${colors.white}
    
  `
};

class CircleImage extends React.Component{
  render(){
    const { imageUrl, width, style } = this.props;
    const circleImageStyles = {
      width :width,
      height: width,
      borderRadius: '50%'
    };
    return (
      <img width={width} src={imageUrl} style={{ ...circleImageStyles, ...style }} className={classNames.container} />
    )
  }
}

CircleImage.propTypes = {
  width: PropTypes.string,
  imageUrl : PropTypes.string,
  style: PropTypes.object
};
export default CircleImage;