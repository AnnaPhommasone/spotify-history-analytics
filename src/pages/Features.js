import React, { Component } from 'react';
import SpotifyRequests from '../SpotifyRequests';
import './Features.css';

export class Features extends Component {
    constructor(props) {
        super(props);
        this.token = props.token;
    }

    features = [
        "Danceability",
        "Valence",
        "Energy",
        "Tempo",
        "Loudness",
        "Speechiness",
        "Instrumentalness",
        "Mode",
        "Key",
        "Liveness",
        "Acousticness"
    ];

    timePeriods = [
        "Today",
        "This Month",
        "Last 3 Months",
        "Last 6 Months",
        "Last 12 Months"
    ];

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
        return recentTracks;
    }

    render() {
        return (
            <div>
                <select>
                    {this.features.map((feat, _) => {
                        return (
                            <option value={feat}>{feat}</option>
                        )
                    })}
                </select>
                <select>
                    {this.timePeriods.map((feat, _) => {
                        return (
                            <option value={feat}>{feat}</option>
                        )
                    })}
                </select>
            </div>
        );
    }
}

export default Features;
