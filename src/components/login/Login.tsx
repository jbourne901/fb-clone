import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth, provider} from "../../firebase";
import useStateValue from "../state-provider";
import { actionTypes } from "../../state/reducer";
import {IAction } from "../../state/types";

const Login = () => {
    const p = useStateValue();
    const dispatch = p.dispatch;
    const signIn = async () => {
        try {
            const res = await auth.signInWithPopup(provider);
            console.log(res);
            if(res.user) {
                const a: IAction = {type: actionTypes.SET_USER, user: res.user}
                dispatch(a);
            }
        } catch(err) {
            console.error(err)
        }        
    };

    return (
        <div className="login">
            <div className="login-logo-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    className="login-logo"
                    alt=""
                />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" 
                    className="login-logo"
                    alt=""
                />
                <Button type="submit"         
                    onClick={() => signIn()}
                    className="login-button"
                >
                        Sign In
                </Button>
            </div>
        </div>
    );
};

export default Login;
