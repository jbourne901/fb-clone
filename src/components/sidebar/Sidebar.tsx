import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarRow from "./sidebar-row";
import { LocalHospital,EmojiFlags, People, Chat, Storefront, VideoLibrary } from '@material-ui/icons';
//import ava from "../../assets/ava.png";
import useStateValue from "../state-provider";

const Sidebar = () => {
    const covidicon = (<LocalHospital />);
    const pagesicon = (<EmojiFlags />);
    const friendsicon = (<People />);
    const messengericon = (<Chat />);
    const marketplaceicon = (<Storefront />);
    const videosicon = (<VideoLibrary />);
    const user = useStateValue().state.user;
    let userInfo = undefined;
    if(user && user.displayName && user.photoURL) {
        userInfo = (
            <SidebarRow title={user?.displayName} 
                src={user?.photoURL}
            />
        );
    }    
    return (
        <div className="sidebar">
            {userInfo}
            <SidebarRow title="COVID-19 Information Center" 
                        icon={covidicon}
            />
            <SidebarRow title="Pages" 
                        icon={pagesicon}
            />                    
            <SidebarRow title="Friends"
                        icon={friendsicon}
            />                                
            <SidebarRow title="Messenger"
                        icon={messengericon}
            />                                            
            <SidebarRow title="Marketplace"
                        icon={marketplaceicon}
            />                                                        
            <SidebarRow title="Videos"
                        icon={videosicon}
            />                                                                    
        </div>
    );
}

export default Sidebar