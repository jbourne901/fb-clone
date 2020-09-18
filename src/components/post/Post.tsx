import React  from 'react';
import {Avatar} from "@material-ui/core";
import {ThumbUp, ChatBubbleOutline, NearMe, AccountCircle, ExpandMoreOutlined} from "@material-ui/icons";
import "./Post.css";
import IPost from "../../types/post";

interface IProps {
    post : IPost;
};

const Post = (props: IProps) => {    
    const {profilePic, username, message, image, timestamp} = props.post;
    const ts = new Date(timestamp.toDate()).toUTCString()
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} 
                        className="post-avatar" 
                />
                <div className="post-info">
                    <h3 className="post-username">{username}</h3>
                    <p className="post-ts">{ts}</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>                
            </div>
            <div className="post-image-container">
                <img src={image} 
                    className="post-image"
                    alt="" 
                />
            </div>
            <div className="post-options">
                <div className="post-option">
                    <ThumbUp />
                    <p className="post-action">Like</p>
                </div>
                <div className="post-option">
                    <ChatBubbleOutline />
                    <p className="post-action">Comment</p>
                </div>
                <div className="post-option">
                    <NearMe />
                    <p className="post-action">Share</p>
                </div>
                <div className="post-option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>

    );
}

export default Post;

    