import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainLayout extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default MainLayout;