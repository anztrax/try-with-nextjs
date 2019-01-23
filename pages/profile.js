import React from 'react';
import MainLayout from "../layouts/MainLayout";
import HeaderBar from "../componets/header/HeaderBar";
import ProfilePageBodyContainer from "../componets/screen/ProfilePageBodyContainer";

const profileId = 'id002';
class ProfilePage extends React.Component{
  render(){
    return (
      <MainLayout>
        <HeaderBar profileId={profileId} />
        <ProfilePageBodyContainer />
      </MainLayout>
    )
  }
}

export default ProfilePage;