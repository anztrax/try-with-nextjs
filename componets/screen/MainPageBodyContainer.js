import React from 'react';
import PropTypes from 'prop-types';
import Container from "../container/Container";
import SimpleProfile from "../Profile/SimpleProfile";
import DummyDataService from "../../services/DummyDataService";
import Posts from '../post/Posts';
import PostInput from '../post/PostInput';
import FeedRecommendationContainer from '../FeedRecommendation/FeedRecommendationContainer';
import feedRecommendations from "../../services/dummyData/feedRecommendations";

class MainPageBodyContainer extends React.Component{
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
          <div className="col">
            <SimpleProfile profileData={profileData} />
          </div>
          <div className="col-6">
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

MainPageBodyContainer.propTypes = {
  profileId : PropTypes.string
};

export default MainPageBodyContainer;