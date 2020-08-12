//Spotify logic

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "6aebd41a82074c509dd63a26802cd8f3";

const scopes = {
    "user-read-curently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
}

