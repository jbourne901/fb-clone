import React from 'react';
import {NotificationsActive,Add,Forum,ExpandMore,Search,Home,Flag,SubscriptionsOutlined,StorefrontOutlined,SupervisedUserCircle} from "@material-ui/icons";
import {IconButton, Avatar} from "@material-ui/core";
import "./header.css";
import useStateValue from "../state-provider";

const Header = () => {
    const p = useStateValue();
    const state = p.state;
    const user = state.user;
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    className="logo"                    
                    alt=""
                />
                <div className="header-input-container">
                    <Search />                
                    <input type="text" className="header-input" placeholder="Search Facebook"/>
                </div>            
            </div>        
            <div className="header-center">
                <div className="header-option header-option-active">
                    <Home fontSize="large"/>
                </div>
                <div className="header-option">
                    <Flag fontSize="large"/>
                </div>
                <div className="header-option">
                    <SubscriptionsOutlined fontSize="large"/>
                </div>
                <div className="header-option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header-option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>        
            <div className="header-right">
                <div className="header-info">
                    <Avatar src={user?.photoURL||""}/>
                    <h4 className="header-info-name">{user?.displayName}</h4>
                </div>  
                <IconButton>
                    <Add />
                </IconButton>                  
                <IconButton>
                    <Forum />                    
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>           
                <IconButton>
                    <ExpandMore />
                </IconButton>                  
            </div>        
        </div>
    );
}

export default Header;