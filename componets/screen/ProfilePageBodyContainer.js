import React from 'react';
import DummyDataService from "../../services/DummyDataService";
import PropTypes from "prop-types";
import Container from "../container/Container";
import PostInput from "../post/PostInput";
import Posts from "../post/Posts";
import FeedRecommendationContainer from "../FeedRecommendation/FeedRecommendationContainer";

class ProfilePageBodyContainer extends React.Component{
  constructor(props){
    super(props);
    this.dummyDataService = new DummyDataService();
    this.state = {
      profileData : null
    }
  }

  componentDidMount(){
    const { profileId } = this.props;
    this.dummyDataService.getProfileData(profileId).then(profileData => {
      console.log('profile data ; ', profileData);
      this.setState({
        profileData
      });
    });
  }

  render(){
    const { profileData } = this.state;
    return (
      <Container>
        <div className={'row'}>
          <div className="col-9">
            <PostInput />
            <Posts posts={(profileData) ? profileData.posts : []} />
          </div>
          <div className="col">
            <FeedRecommendationContainer
              feedRecommendations={(profileData) ? profileData.feedRecommendations : []}
            />
          </div>
        </div>
      </Container>
    )
  }
}

ProfilePageBodyContainer.propTypes = {
  profileId : PropTypes.string
};

export default ProfilePageBodyContainer;