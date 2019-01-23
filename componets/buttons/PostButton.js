import React from 'react';
import { Button } from 'reactstrap';
import { css } from 'react-emotion';
import {Button as BootstrapButton} from "reactstrap";
import {colors} from "../../themes/defaultTheme";


const className = {
  postButton : css`
    background-color: ${colors.blue3};
    color: ${colors.white};
    padding: 4px 15px;
   
    
    &:hover{
      background-color: ${colors.blue3};
    }
    
    &:focus{
      border: none;
    }
  `
};

class PostButton extends React.Component{
  render(){
    return (
      <Button
        className={className.postButton}
        outline
        color="secondary">
        Post
      </Button>

    )
  }
}

export default PostButton;