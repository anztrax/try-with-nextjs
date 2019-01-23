import React from 'react';
import PropTypes from 'prop-types';
import Container from "../container/Container";
import SimpleProfile from "../Profile/SimpleProfile";
import DummyDataService from "../../services/DummyDataService";
import Posts from '../post/Posts';
import PostInput from '../post/PostInput';
import VerticalDivider from "../divider/VerticalDivider";
import posts from "../../services/dummyData/posts";

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
          <div className="col-7">
            <PostInput />
            <Posts posts={(profileData) ? profileData.posts : []} />
          </div>
          <div className="col" style={{backgroundColor: 'blue'}}>
            3 of 3
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