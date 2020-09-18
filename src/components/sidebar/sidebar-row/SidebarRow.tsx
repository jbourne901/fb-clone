import React from 'react';
import {Avatar} from "@material-ui/core";
import "./SidebarRow.css";


interface IProps {
    title: string;
    src?: string;
    icon?: JSX.Element;
}
const SidebarRow = (props: IProps) => {
    return (
        <div className="sidebar-row">
            {props.src && <Avatar src={props.src}/> }
            {props.icon}
            <h4 className="sidebar-row-title">{props.title}</h4>
        </div>
    );
}

export default SidebarRow;