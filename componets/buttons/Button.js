import React from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'reactstrap';
import { css } from 'react-emotion';
import {colors} from "../../themes/defaultTheme";

const classNames = {
  mediaButton: css`
    border-radius: 20px;
    display: inline-block;
    color: ${colors.gray3};
    margin-right: 5px;
  `,
  text: css`
    margin-left: 10px;
    display: inline-block;
  `
};

class Button extends React.Component{
  render(){
    const { IconComponent, text, className, iconSize } = this.props;
    const finalClassName = `${classNames.mediaButton} ${className}`;
    return (
      <BootstrapButton
        className={finalClassName}
        outline
        color="secondary"
      >
        {IconComponent && <IconComponent size={iconSize} color={colors.gray3} />}
        <div className={classNames.text}>{text}</div>
      </BootstrapButton>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  IconComponent: PropTypes.element,
  style: PropTypes.object,
  iconSize: PropTypes.number
};

Button.defaultProps = {
  iconSize: 17
};
export default Button;