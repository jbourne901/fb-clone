import React from 'react';
import "./Widgets.css";

const Widgets = () => {    
    return (
        <div className="widgets">
            widgets
            <iframe 
                src="https://www.facebook.com/CleverProgrammerr/?tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId&output=embed"
                //src="https://www.google.com"
                width="340"
                height="100%"
                className="widgets-iframe"
                scrolling="no"
                frameBorder="0"
                //allowTransparency={true}
                allow="encrypted-media"
                title="ifr"
            ></iframe>
        </div>
    );
};

export default Widgets;
