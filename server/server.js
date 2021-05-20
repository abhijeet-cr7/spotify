const express = require("express");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: " 0008d692202b44ff9c5e9264dabd00dd",
    clientSecret: "65b15f33629e4ed3b4df396edcaafcb8",
  });
});
