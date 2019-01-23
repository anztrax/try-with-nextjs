import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import CircleImage from '../Images/CircleImage';
import VerticalDivider from "../divider/VerticalDivider";
import NumberFormat from 'react-number-format';
import {colors} from "../../themes/defaultTheme";

const classNames = {
  container: css`
    text-align: center;
    background-color:${colors.white};
    border: 2px solid #a8a8a8;
    border-top:0px;
  `,
  profileContainer: css`
    margin-bottom : 20px;
  `,
  backgroundProfile : css`
    background-image: url('/static/images/city-background-image.jpg');
    background-position: center; 
    background-repeat: no-repeat;
    height: 60px;
  `,
  profileImage: css`
    margin-top: -40px;
  `,
  profileNameText : css`
    font-size : 23px;
    margin-top: 20px;
    font-weight: bold;
  `,
  secondaryText: css`
    font-size: 14px;
    color: ${colors.gray2};
  `,
  bluePrimaryText: css`
    font-size: 25px;
    color: ${colors.blue2};
    font-weight: 200;
  `,
  tertiaryText: css`
    font-size: 14px;
    color: ${colors.blackBlue1};
    font-weight: bold;
  `,
  whoViewedYourProfileContainer: css`
  `,
  otherActivityContainer: css`
    margin-top: 20px;
    margin-bottom : 20px;
  `,
  otherActivityOuterContainer: css`
    margin: 0px 15px;
  `,

  //extras container
  extrasContainer: css`
    background-color: ${colors.lightGray1};
  `
};

class SimpleProfile extends React.Component{
  render(){
    const { profileData } = this.props;
    if(profileData) {
      const { fullName, title, placeImageUrl, viewedProfile , followers } = profileData;
      return (
        <div className={classNames.container}>
          <div className={classNames.profileContainer}>
            <div className={classNames.backgroundProfile} />
            <div className={classNames.profileImage}>
              <CircleImage imageUrl={placeImageUrl} width={90}/>
            </div>
            <div className={classNames.profileNameText}>{fullName}</div>
            <div className={classNames.secondaryText}>{title}</div>
          </div>
          <VerticalDivider />

          <div className={classNames.otherActivityOuterContainer}>
            <div className={classNames.otherActivityContainer}>
              <div className={classNames.bluePrimaryText}>{viewedProfile}</div>
              <div className={classNames.secondaryText}>Who's viewed your profile</div>
            </div>
            <VerticalDivider />
            <div className={classNames.otherActivityContainer}>
              <NumberFormat className={classNames.bluePrimaryText} value={followers} displayType={'text'} thousandSeparator={true} />
              <div className={classNames.secondaryText}>Connections</div>
              <div className={classNames.tertiaryText}>
                Manage your network
              </div>
            </div>
          </div>

          <VerticalDivider />
          <div className={classNames.extrasContainer}>
            <div>Access exclusive tools & insights</div>
            <div>Free Upgrade to Premium</div>
          </div>
        </div>
      )
    }else{
      return (
        <div>Profile Data Is Not defined !</div>
      )
    }
  }
}

SimpleProfile.propTypes = {
  profileData: PropTypes.object
};

export default SimpleProfile;