import axios from 'axios';

class SpotifyRequests {
    constructor(api_token) {
        this.token = api_token;
    }

    async getRecentlyPlayedTracks() {
        const endpoint = "https://api.spotify.com/v1/me/player/recently-played";
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            params: {
                limit: 50
            }
        };
        const res = await axios.get(endpoint, config);
        return res;
    }

    async getTracksAudioFeatures(spotifyIDs) {
        const endpoint = "https://api.spotify.com/v1/audio-features";
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            params: {
                ids: spotifyIDs
            }
        };
        const res = await axios.get(endpoint, config);
        return res;
    }

    async getUserPlaylists() {
        const endpoint = "https://api.spotify.com/v1/me/playlists";
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };
        const res = await axios.get(endpoint, config);
        return res;
    }

    async getPlaylist(playlistID) {
        const endpoint = "https://api.spotify.com/v1/playlists/" + playlistID;
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };
        const res = await axios.get(endpoint, config);
        return res;
    }

    async getUserTopItems(type, time_range) {
        const endpoint = "https://api.spotify.com/v1/me/top/" + type;
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            params: {
                time_range: time_range,
                limit: 50
            }
        };
        const res = await axios.get(endpoint, config);
        return res;
    }
}

export default SpotifyRequests;