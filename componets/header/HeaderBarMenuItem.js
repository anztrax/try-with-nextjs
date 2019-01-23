import React from 'react';
import PropTypes from 'prop-types';
import {fonts,colors} from "../../themes/defaultTheme";
import { css } from 'react-emotion';
import ArrowDown from "../Icons/ArrowDown";

const menuItemWidth = '75px';
const classNames = {
  menuItemContainer: css`
    position: relative;
    width : ${menuItemWidth};
    margin: 10px 10px 4px 10px;
    text-align: center;
    
    &:hover {
      cursor: pointer;
    }
  `,
  menuItemName : css`
    font-size: 13px;
    margin-top: 2px;
  `,
  activeBar: css`
    height: 3px;
    margin-top:2px;
    width: ${menuItemWidth};
    position: absolute;
    background-color: ${colors.white}
  `,
  notifCircle: css`
    width: 15px;
    height: 15px;
    font-size: 10px;
    border-radius: 50%;
    background-color: ${colors.red1};
    position: absolute;
    top: 0px;
    right: 20px;
  `
};

const styles = {
  arrowComponent: {
    position: 'absolute',
    marginTop : '7px',
    marginLeft: '5px'
  }
};

class HeaderBarMenuItem extends React.Component{
  render(){
    const { menuName, isActive, IconComponent, ImageComponent, isShowArrowComponent, notifCount } = this.props;
    const primaryColor = (isActive) ? colors.white : colors.whiteBlue1;

    return (
      <div className={classNames.menuItemContainer}>
        {IconComponent ?
          <IconComponent size={fonts.primaryFontSize} color={primaryColor}  /> :
          ImageComponent
        }
        {notifCount ?
          (
            <div className={classNames.notifCircle}>
              {notifCount}
            </div>
          ) :
          null
        }
        <div className={[classNames.menuItemName]} style={{color: primaryColor}}>
          {menuName}
          { isShowArrowComponent && <ArrowDown size={'5px'} color={primaryColor} style={styles.arrowComponent} /> }
        </div>

        {isActive ? <div className={classNames.activeBar} /> : null}
      </div>
    )
  }
}

HeaderBarMenuItem.propTypes = {
  ImageComponent: PropTypes.element,
  IconComponent: PropTypes.element,
  menuName : PropTypes.string,
  isActive: PropTypes.bool,
  isShowArrowComponent: PropTypes.bool,
  notifCount: PropTypes.number
};
HeaderBarMenuItem.defaultProps = {
  isActive : false,
  isShowArrowComponent: false
};
export default HeaderBarMenuItem;