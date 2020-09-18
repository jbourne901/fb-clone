import React, {useState, useEffect} from 'react';
import "./Feed.css";
import StoryReel from "../story-reel";
import MessageSender from "../message-sender";
import Post from "../post";
import IPost from "../../types/post";
import db from "../../firebase";

const Feed = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect( () => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot( (data) => {
            const p: IPost[] = [];
            data.docs.forEach( (doc) => {
                const post = doc.data();
                p.push({id: doc.id, 
                        username: post.username, 
                        message: post.message, 
                        image: post.image,
                        timestamp: post.timestamp 
                      }
                );
            });
            setPosts(p);
        });
    })
 

    const formatPost = (p: IPost) => {        
        return (
            <Post key={p.id} post={p} />
        );
    }

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map( (p) => formatPost(p))}
        </div>
    );
}
 
export default Feed;