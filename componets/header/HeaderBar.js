import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { css } from 'react-emotion';
import LinkedInLogo from "../logo/linkedInLogo";
import { colors, fonts } from "../../themes/defaultTheme";
import { FiHome, FiMessageSquare, FiBell , FiBriefcase, FiUsers } from 'react-icons/fi';
import { FaBuromobelexperte } from 'react-icons/fa';
import HeaderBarMenuItem from "./HeaderBarMenuItem";
import CircleImage from '../Images/CircleImage';
import SearchInput from "../form/SearchInput/SearchInput";
import HorizontalDivider from "../divider/HorizontalDivider";

const classNames = {
  mainNavBar: css`
    background-color: ${colors.primaryBlue} !important;
    color : ${colors.white} !important;
    padding: 0px;
    margin-top: -3px;
  `,

  infoText: css`
    color: ${colors.yellow1};
    width: 100px;
    font-size: 14px;
    text-align: center;
    display: block;
    font-weight: 500;
    margin-top: 10px;
    margin-left: 10px;
  `,
  searchInputContainer: css`
    margin-left: 10px;
  `
};

class HeaderBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const { profileId } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md" sticky={true} className={classNames.mainNavBar} fixed={true}>
          <div className={"container"} style={{maxWidth: 'calc(100vw - 80px);'}}>
          <NavbarBrand href="/">
            <LinkedInLogo />
          </NavbarBrand>
            <div className={classNames.searchInputContainer}>
              <SearchInput profileId={profileId} />
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <HeaderBarMenuItem
                  IconComponent={FiHome}
                  menuName={'Home'}
                  isActive={true}
                />
              </NavItem>
              <NavItem>
                <HeaderBarMenuItem
                  IconComponent={FiUsers}
                  menuName={'My Network'}
                />
              </NavItem>
              <NavItem>
                <HeaderBarMenuItem
                  IconComponent={FiBriefcase}
                  menuName={'Jobs'}
                />
              </NavItem>
              <NavItem>
                <HeaderBarMenuItem
                  IconComponent={FiMessageSquare}
                  menuName={'Messaging'}
                />
              </NavItem>
              <NavItem>
                <HeaderBarMenuItem
                  IconComponent={FiBell}
                  menuName={'Notifications'}
                />
              </NavItem>
              <NavItem>
                <HeaderBarMenuItem
                  ImageComponent={
                    <CircleImage
                      imageUrl={"/static/images/hantze-image.jpeg"}
                      width={26}
                    />
                  }
                  isShowArrowComponent={true}
                  menuName={'Me'}
                />
              </NavItem>
              <NavItem>
                <HorizontalDivider />
              </NavItem>
              <NavItem>
                <HeaderBarMenuItem
                  IconComponent={FaBuromobelexperte}
                  isShowArrowComponent={true}
                  menuName={'Works'}
                />
              </NavItem>
              <NavItem>
                <span className={classNames.infoText}>
                  Free Upgrade to Premium
                </span>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    )
  }
}

HeaderBar.propTypes = {
  profileId : PropTypes.string
};
export default HeaderBar;