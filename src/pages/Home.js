import React, { Component } from 'react';
import SpotifyRequests from '../SpotifyRequests';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.token = props.token;
    }

    async getRecentTracks() {
        const req = new SpotifyRequests(this.token);
        const recentTracks = await req.getRecentlyPlayedTracks(this.token);
        console.log(recentTracks);
    }

    render() {
        this.getRecentTracks();
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;
