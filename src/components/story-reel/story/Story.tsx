import React from 'react';
import {Avatar} from "@material-ui/core";
import './Story.css';


interface IProps {
    image: string;
    profileSrc: string;
    title: string;
};

const Story = (props: IProps) => {
  return (
    <div className="story" style={{backgroundImage: `url(${props.image})`}}>
        <Avatar src={props.profileSrc} className="story-avatar"/>
        <h4 className="story-title">{props.title}</h4>
    </div>
  );
}

export default Story;
