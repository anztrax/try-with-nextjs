import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeaderBar from "../componets/header/HeaderBar";
import MainPageBodyContainer from "../componets/screen/MainPageBodyContainer";

const profileId = 'id001';
class MainPage extends React.Component{
  render(){
    return (
      <MainLayout>
        <HeaderBar profileId={profileId} />
        <MainPageBodyContainer profileId={profileId} />
      </MainLayout>
    )
  }
}

export default MainPage;