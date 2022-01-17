import React from 'react';
import './LoginButton.css';
import Button from "react-bootstrap/Button";

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '45cf3144756d48118774fa691e19f136';
const redirectURI = 'http://localhost:3000/';
const scopes = [
    'user-top-read',
    'user-read-recently-played',
];
const loginURL = `${authEndpoint}?response_type=token&client_id=${clientId}&scope=${scopes.join("%20")}&redirect_uri=${redirectURI}&show_dialog=true`;

function LoginButton() {
    const handleLogin = () => {
        window.location.replace(loginURL);
    }
    
    return (
        <div>
            <Button
                className='submit-button'
                onClick={() => handleLogin()}
            >
                Login with Spotify
            </Button>
        </div>
    );
}

export default LoginButton
