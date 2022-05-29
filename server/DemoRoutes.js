require('dotenv').config();
const clientId = 'e7081651877449ab96b8c651efafffff';
//Make a CLIENT_SECRET env variable with your own client secret from spotify
const clientSecret = process.env.CLIENT_SECRET;
const SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);

    //Could be used to get Recommendations based on some artist ids
    spotifyApi.getRecommendations({ min_energy: 0.4, seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'], min_popularity: 50 }).then(res => {
      console.log(res.body.tracks);
    });

    //Could be used to create a playlist of new releases
    spotifyApi.getNewReleases({ limit: 10 }).then(res => {
      console.log(res.body);
    });

    //could be used to get some featured playlists
    spotifyApi.getFeaturedPlaylists({ limit: 10 }).then(res => {
      console.log(res.body);
    });

    //Could be used to get some categories and give your users the option to choose from one
    spotifyApi.getCategories({ limit: 10 }).then(res => {
      console.log(res.body);
    });

    //Could be used to generate a playlist after a user has selected a category - make sure to pass in CATEGORY_ID
    spotifyApi.getPlaylistsForCategory(CATEGORY_ID, { limit: 10 }).then(res => {
      console.log(res.body);
    });

    //Could be used to generate a playlist from a users search term
    spotifyApi.searchPlaylists('Party Music').then(res => {
      console.log(res.body);
    });

    //Search a specific artist
    spotifyApi.searchArtists('Ariana Grande', { limit: 5 }).then(res => {
      console.log(res.body);
      //Get Related Artists
      spotifyApi.getArtistRelatedArtists(res).then(rel => {
        console.log(rel);
      });
    });

    //Search some tracks
    spotifyApi.searchTracks('Numb').then(res => {
      console.log(res.body);
    });
  },
  function (err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);
