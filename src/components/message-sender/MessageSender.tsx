import React, {useState} from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";
import {Videocam, PhotoLibrary, InsertEmoticon} from "@material-ui/icons";
import useStateValue from "../state-provider";

const MessageSender = () => {

    const user = useStateValue().state.user;
    
    const [input, setInput] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(`submit`)
        setInput("");
        setImageURL("");
    }
    return (
        <div className="message-sender">
            <div className="message-sender-top">
                <Avatar src={user?.photoURL||""}/>
                <form className="message-sender-form">
                    <input type="text"
                        value={input} 
                        onChange = {(e) => setInput(e.target.value)}
                        className="message-sender-input"
                        placeholder={`What's on your mind, ${user?.displayName}`}
                    />
                    <input type="text" 
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        className="message-sender-input"
                        placeholder="Image URL (optional) "
                    />
                    <button 
                        className="message-sender-submit"
                        onClick={(e)=>handleSubmit(e)} type="submit">
                        Hidden Submit
                    </button>
                </form>                
            </div>

            <div className="message-sender-bottom">
                <div className="message-sender-option">
                    <Videocam className="message-sender-videocam" />
                    <h3 className="message-sender-title">Live Video</h3>
                </div>
                <div className="message-sender-option">
                    <PhotoLibrary className="message-sender-photo" />
                    <h3 className="message-sender-title">Photo/Video</h3>
                </div>
                <div className="message-sender-option">
                    <InsertEmoticon className="message-sender-feeling" />
                    <h3 className="message-sender-title">Feeling/Activity</h3>
                </div>
            </div>

        </div>
    );
}

export default MessageSender;
