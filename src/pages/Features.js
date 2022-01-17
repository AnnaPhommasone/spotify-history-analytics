import React, { Component } from 'react';
import SpotifyRequests from '../SpotifyRequests';

export class Features extends Component {
    constructor(props) {
        super(props);
        this.token = props.token;
    }
    
    /*
    - Calculate unix timestamps today, last week, 3 months ago, 6 months ago, 12 months ago.
    - Get Tracks after those unix timestamps.
    - Find features of those tracks.
    - Graph them.
    */
    


    async getRecentTracks(afterTimestamp) {
        const req = new SpotifyRequests(this.token);
        const recentTracks = await req.getRecentlyPlayedTracks(afterTimestamp);
        //console.log(recentTracks);
    }

    render() {
        
        return (
            <div>
                
            </div>
        );
    }
}

export default Features;
