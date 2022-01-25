import React, { Component } from 'react';
import SpotifyRequests from '../SpotifyRequests';

class RecentlyPlayed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.token,
        }
        this.req = new SpotifyRequests(this.state.token);
    }

    async recentTracks() {
        const res = await this.req.getRecentlyPlayedTracks();
        if (res.status === 200) {
            return res.data.items;
        }
    }

    spotifyTrackIDs(tracks) {
        let ids = []
        for (let i = 0; i < tracks.length; i++) {
            ids.push(tracks[i].track.id)
        }
        return ids.join();
    }

    async tracksFeatures(tracks) {
        const res = await this.req.getTracksAudioFeatures(tracks);
        if (res.status === 200) {
            console.log(res.data.audio_features);
            return res.data.audio_features;
        }
    }

    render() {
        //this.recentTracks().then(res => this.tracksFeatures(this.spotifyTrackIDs(res)));
        return (
            <div>
                Recently Played
            </div>
        );
    }
}

export default RecentlyPlayed;
