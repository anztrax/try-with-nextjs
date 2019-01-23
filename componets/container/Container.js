import React from 'react';

class Container extends React.Component{
  render(){
    return (
      <div className={"container"} style={{maxWidth: 'calc(100vw - 80px);'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Container;