import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { darken, lighten } from 'polished';
import isEmpty from 'lodash/isEmpty';
import CircleImage from "../../Images/CircleImage";
import {colors, fonts} from "../../../themes/defaultTheme";
import { FiHome, FiMessageSquare, FiBell , FiBriefcase, FiUsers } from 'react-icons/fi';
import { FaAddressCard } from 'react-icons/fa';
import VerticalDivider from "../../divider/VerticalDivider";

const classNames = {
  container: css`
    position: absolute;
    background-color: ${colors.white}
    width: 700px;
    color: ${colors.lightBlack1}
    border: 1px solid #ced4da;
    margin-top: 6px;
    z-index: 3;
  `,
  section: css`
    padding: 10px 15px;
  `,
  sectionHeaderContainer: css`
    display: flex;
    justify-content : space-between;
  `,
  sectionHeaderText : css`
     font-weight: bolder;
  `,
  listContainer: css`
    margin:0px;
    padding:0px;
  `,
  listItem : css`
    margin:0px;
    padding:0px;
    list-style: none;
    
    &:hover{
      cursor: pointer;
    }
  `,
  descriptionText: css`
    margin-left: 10px;
    font-weight: 600;
    
    &:hover{
      color : ${lighten(0.4,colors.lightBlack1)}
    }
  `,
  iconContainer : css`
    display: inline-block;
    margin: 10px;  
  `,

  clearButton : css`
    color: ${colors.gray1}
    
    &:hover{
      color: ${darken(0.4, colors.gray1)}
      cursor: pointer;
    }
  `
};

const styles = {
  circleImages : {
    marginTop: '5px',
  }
};

const searchForData = [
  {
    component : <FiUsers size={fonts.searchIconFontSize} color={colors.blue1} />,
    text: 'People'
  },
  {
    component: <FiBriefcase size={fonts.searchIconFontSize} color={colors.blue1} />,
    text: 'Jobs'
  },
  {
    component : <FaAddressCard size={fonts.searchIconFontSize} color={colors.blue1} />,
    text: 'Posts'
  }
];

class SearchResult extends React.Component{
  render(){
    const { recentPersons } = this.props;
    return (
      <div className={classNames.container}>
        <div className={classNames.section}>
          <div className={classNames.sectionHeaderText}>Search For</div>
          {this.renderSearchFor(searchForData)}
        </div>
        <VerticalDivider />
        <div className={classNames.section}>
          <div className={classNames.sectionHeaderContainer}>
            <div className={classNames.sectionHeaderText}>Recent</div>
            <div className={classNames.clearButton}>Clear</div>
          </div>
          {this.isRecentPersonAvailable(recentPersons) ?
            this.renderRecentPersons(recentPersons) :
            this.renderNoRecent()
          }
        </div>
      </div>
    )
  }

  isRecentPersonAvailable = (recentPersons) => {
    return !isEmpty(recentPersons);
  };

  renderSearchFor = (searchForData) => {
    return (
      <ul className={classNames.listContainer}>
        {searchForData.map(searchForDatum => {
          const { component, text } = searchForDatum;
          return (
            <li className={classNames.listItem}>
              <div className={classNames.iconContainer}>
                {component}
              </div>
              <strong className={classNames.descriptionText}>{text}</strong>
            </li>
          )
        })}
      </ul>
    )
  };

  renderRecentPersons = (recentPersons) => {
    return (
      <ul className={classNames.listContainer}>
        {recentPersons.map(recentPerson => {
          const { name, imageUrl, id } = recentPerson;
          return (
            <li className={classNames.listItem}>
              <CircleImage width={40} imageUrl={imageUrl} style={styles.circleImages} />
              <strong className={classNames.descriptionText}>{name}</strong>
            </li>
          )
        })}
      </ul>
    )
  };

  renderNoRecent = () => {
    return (
      <div>No Recent Person Available</div>
    )
  };
}

SearchResult.propTypes = {
  recentPersons: PropTypes.array
};
export default SearchResult;