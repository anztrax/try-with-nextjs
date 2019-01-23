import React from 'react';
import { css } from 'react-emotion';
import { lighten } from 'polished';
import PropTypes from 'prop-types';
import VerticalDivider from "../divider/VerticalDivider";
import CircleImage from "../Images/CircleImage";
import {colors} from "../../themes/defaultTheme";
import { FiMoreHorizontal, FiThumbsUp, FiMessageSquare, FiShare } from 'react-icons/fi';
import moment from 'moment';

const classNames = {
  divider: css`
    margin-top:10px;
  `,

  //postItem
  postItemContainer: css`
    margin-top:10px;
    background-color:${colors.white};
    border: 1px solid #a8a8a8;
    padding: 15px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 1px 1px rgba(0,0,0,.2);
    transition: box-shadow 83ms;
  `,
  postItemHeader: css`
    display: flex;
     justify-content : space-between;
  `,
  profileInfo: css`
    display: inline-block;
    vertical-align: bottom;
    margin-left: 10px;
    
  `,
  profileImage: css`
    display: inline-block;
  `,
  profileInfoName: css`
    font-size: 14px;
    font-weight: bold;
  `,
  profileInfoTitle: css`
    font-size: 12px;
  `,
  profileInfoDate: css`
    font-size: 12px;
  `,
  actionButtons: css`
    height: 30px;
    
    &:hover{
      cursor: pointer;
    }
  `,

  //post data
  postItemPostData: css`
    border: 1px solid #e9e9e9;
    padding-top: 15px;
    margin-top: 20px;
  `,
  postItemPostDataHeadlineImage: css`
    width: 100%;
  `,
  postItemPostDataTitle: css`
    font-weight: bold;  
    margin:0 15px;  
    margin-top: 10px;
  `,
  postItemPostDataSource: css`
    font-size : 13px;
    margin-left:15px;
    margin-top:0px;
    margin-bottom: 10px;
  `,
  postItemPostDataLink : css`
    color: ${colors.black1};
    text-decoration: none;
    
    &:hover{
      color: ${lighten(0.4,colors.black1)};
      text-decoration: none;
    }
  `,

  //post footer
  postItemFooter: css`
    padding-top:10px;
  `,
  postItemFooterItem: css`
    display: inline-block;
    margin-right: 15px;
  `,
  postItemFooterItemText: css`
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
  `,

  //like container
  postItemLikeText: css`
    font-size: 13px;
    color: ${colors.gray3};
  `,
  postItemLike: css`
    padding:10px 0px; 
  `
};

const postItemFooterItemSize = 17;
class Posts extends React.Component{
  render(){
    const { posts } = this.props;
    return (
      <div>
        <div className={classNames.divider}>
          <VerticalDivider/>
        </div>
        {posts && posts.map(post => {
          return this.renderPostItem(post);
        })}
      </div>
    )
  }

  renderPostItem = (post) => {
    const { imageUrl, name, title, postDate, postImageUrl, postTitle, postSource, postUrl, like } = post;
    return (
      <div className={classNames.postItemContainer}>
        <div className={classNames.postItemHeader}>
          <div>
            <div className={classNames.profileImage}>
              <CircleImage
                width={50}
                imageUrl={imageUrl}
              />
            </div>
            <div className={classNames.profileInfo}>
              <div className={classNames.profileInfoName}>{name}</div>
              <div className={classNames.profileInfoTitle}>{title}</div>
              <div className={classNames.profileInfoDate}>{this.diffDateText(postDate)}</div>
            </div>
          </div>
          <div className={classNames.actionButtons}>
            <FiMoreHorizontal size={20} color={'black'} />
          </div>
        </div>
        <div className={classNames.postItemPostData}>
          <a href={postUrl} target={'_blank'} className={classNames.postItemPostDataLink}>
            <img className={classNames.postItemPostDataHeadlineImage} src={postImageUrl} />
            <div className={classNames.postItemPostDataTitle}>{postTitle}</div>
            <div className={classNames.postItemPostDataSource}>{postSource}</div>
          </a>
        </div>
        <div className={classNames.postItemLike}>
          {this.renderLike(like)}
        </div>
        <VerticalDivider />
        <div className={classNames.postItemFooter}>
          {this.renderFooterItem(FiThumbsUp, 'Like')}
          {this.renderFooterItem(FiMessageSquare, 'Comment')}
          {this.renderFooterItem(FiShare, 'Share')}
        </div>
      </div>
    )
  };

  renderLike = (like) => {
    return (
      <div className={classNames.postItemLikeText}>
        {like} {(like > 1) ? 'Likes' : 'Like'}
      </div>
    );
  };

  renderFooterItem = (IconComponent, text) => {
    return (
      <div className={classNames.postItemFooterItem}>
        <IconComponent
          size={postItemFooterItemSize}
        />
        <div className={classNames.postItemFooterItemText}>{text}</div>
      </div>
    );
  };

  diffDateText = (postDate) => {
    let startDate = moment(postDate);
    let endDate = moment(new Date());
    let diffResult = endDate.diff(startDate, 'days');
    console.log('date time C : ',diffResult);
    return `${diffResult} d`;
  };
}

Posts.propTypes = {
  posts : PropTypes.array
};
export default Posts;