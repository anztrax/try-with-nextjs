import React from 'react';
import PropTypes from 'prop-types';
import CircleImage from "../Images/CircleImage";
import { FiPlus } from 'react-icons/fi';
import { css } from 'react-emotion';
import Button from '../buttons/Button';

const classNames = {
  profileImage: css`
    display: inline-block;
  `,
  profileInfo: css`
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    width: 150px;
  `,
  profileInfoName: css`
    font-weight: bold;
  `,
  profileInfoDesc: css`
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    padding-right:10px;
  `,
  profileItem: css`
    margin-top:10px;
  `,

  container: css`
    
  `,
  followButtonContainer: css`
    display: inline-block;
  `,
  followButton: css`
    border-radius : 0px;
    padding:0px 10px;
  `
};

class FeedRecommendations extends React.Component{
  render(){
    const { feedRecommendations } = this.props;
    return (
      <div className={classNames.container}>
        {feedRecommendations.map(feedRecommendation => this.renderFeedRecommendation(feedRecommendation))}
      </div>
    )
  }

  renderFeedRecommendation = (feedRecommendation) => {
    const { imageUrl,  feedText, feedDesc } = feedRecommendation;
    return (
      <div className={classNames.profileItem}>
        <div className={classNames.profileImage}>
          <CircleImage
            width={50}
            imageUrl={imageUrl}
          />
          <div className={classNames.profileInfo}>
            <div className={classNames.profileInfoName}>{feedText}</div>
            <div className={classNames.profileInfoDesc}>{feedDesc}</div>
          </div>
          <div className={classNames.followButtonContainer}>
            <Button IconComponent={FiPlus} text={'Follow'} className={classNames.followButton} />
          </div>
        </div>
      </div>
    )
  };
}

FeedRecommendations.propTypes = {
  feedRecommendations: PropTypes.array
};
export default FeedRecommendations;