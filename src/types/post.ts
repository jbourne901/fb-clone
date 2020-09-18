import firebase from "../firebase";

export default interface IPost {
    id: string;
    profilePic?: string;
    username: string;
    message: string;
    image?: string;
    timestamp: firebase.firestore.Timestamp;
}