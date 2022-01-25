import React, { Component } from 'react';
import SpotifyRequests from '../SpotifyRequests';

class TopSongsArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.token
        };
        this.req = new SpotifyRequests(this.state.token);
    }

    async userTopItems(type, time_range) {
        const res = await this.req.getUserTopItems(type, time_range);
        if (res === 200) {
            return res.data.items;
        }
    }

    render() {
        //this.userTopItems("tracks", "medium_term");
        return <div>Top Songs/Artists</div>;
    }
}

export default TopSongsArtists;
