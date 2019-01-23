import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';
import VerticalDivider from "../divider/VerticalDivider";
import {colors} from "../../themes/defaultTheme";
import Button from "../buttons/Button";
import { FiEdit, FiCamera, FiVideo } from 'react-icons/fi';
import PostButton from "../buttons/PostButton";

const inputHeight = '40px';
const classNames = {
  container: css`
    background-color:${colors.white};
    border: 1px solid #a8a8a8;
    border-top:0px;
    padding: 0px 15px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.2);
    transition: box-shadow 83ms;
    padding-top:20px;
  `,
  input: css`
    width: 100%;
    border: 0px;
    outline: none;
    resize: none;
    height: ${inputHeight};
    
    &::-webkit-input-placeholder {
      line-height: ${inputHeight};
    }
    &:-moz-placeholder {
      /* Firefox 18- */
      line-height: ${inputHeight};
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      line-height: ${inputHeight};
    }
    &:-ms-input-placeholder {
      line-height: ${inputHeight};
    }
  `,
  mediaButtonContainer: css`
    padding: 10px 0px;
  `,
  mediaContainer: css`
    display: flex;
    justify-content : space-between;
  `
};

class PostInput extends React.Component{
  render(){
    return (
      <div className={classNames.container}>
        <textarea
          className={classNames.input}
          placeholder={'Share an article, photo, video or idea'}
        />
        <VerticalDivider/>
        <div className={classNames.mediaContainer}>
          <div className={classNames.mediaButtonContainer}>
            <Button IconComponent={FiEdit} text={'Write an article'} />
            <Button IconComponent={FiCamera} text={'Images'} />
            <Button IconComponent={FiVideo} text={'Video'} />
          </div>
          <div className={classNames.mediaButtonContainer}>
            <PostButton />
          </div>
        </div>
      </div>
    )
  }
}

PostInput.propTypes = {
  posts : PropTypes.array
};
export default PostInput;