import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button } from 'reactstrap';
import HeaderBar from "../componets/header/HeaderBar";

const profileId = 'id002';
class MainPage extends React.Component{
  render(){
    return (
      <MainLayout>
        <HeaderBar profileId={profileId} />
        <h1>Hello there</h1>
        <Button color={'danger'}>Testing gan</Button>
      </MainLayout>
    )
  }
}

export default MainPage;