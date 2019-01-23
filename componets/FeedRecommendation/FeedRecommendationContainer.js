import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import FeedRecommendations from "./FeedRecommendations";
import {colors} from "../../themes/defaultTheme";

const classNames = {
  container: css`
    background-color:${colors.white};
    border: 1px solid #a8a8a8;
    padding: 15px;
    border-top:0px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 1px 1px rgba(0,0,0,.2);
    transition: box-shadow 83ms;
  `,
  recommendationButton: css`
    color: ${colors.blue3};
    font-weight: bold;
    margin-top: 20px;
  `
};

class FeedRecommendationContainer extends React.Component{
  render(){
    const { feedRecommendations } = this.props;
    return (
      <div className={classNames.container}>
        <div>Add To your feed</div>
        <FeedRecommendations
          feedRecommendations={feedRecommendations}
        />
        <div className={classNames.recommendationButton}>View All Recommendation</div>
      </div>
    )
  }
}

FeedRecommendationContainer.propTypes = {
  feedRecommendations : PropTypes.array
};
export default FeedRecommendationContainer;