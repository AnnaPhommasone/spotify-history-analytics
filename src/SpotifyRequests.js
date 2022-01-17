import axios from 'axios';

class SpotifyRequests {
    constructor(api_token) {
        this.token = api_token;
    }

    async getRecentlyPlayedTracks(afterTimestamp) {
        const endpoint = "https://api.spotify.com/v1/me/player/recently-played";
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            params: {
                after: afterTimestamp
            }
        };
        let res = await axios.get(endpoint, config);
        return res.data.items;
    }

    async getTracksAudioFeatures(tracksIDs) {
        const endpoint = "https://api.spotify.com/v1/audio-features";
        const config = {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            params: {
                ids: tracksIDs
            }
        };
        let res = await axios.get(endpoint, config);
        return res;
    }

    
}

export default SpotifyRequests;