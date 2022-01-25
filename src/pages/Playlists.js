import React, { Component } from 'react';
import SpotifyRequests from '../SpotifyRequests';

class Playlists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.token,
        };
        this.req = new SpotifyRequests(this.state.token);
    }

    async userPlaylists() {
        const res = await this.req.getUserPlaylists();
        if (res.status === 200) {
            return res.data.items;
        }
    }

    spotifyPlaylistIDs(playlists) {
        let ids = [];
        for (let i = 0; i < playlists.length; i++) {
            ids.push(playlists[i].id);
        }
        return ids;
    }

    render() {
        //this.userPlaylists().then(res => console.log(this.spotifyPlaylistIDs(res)));
        return <div>Playlists</div>;
    }
}

export default Playlists;
