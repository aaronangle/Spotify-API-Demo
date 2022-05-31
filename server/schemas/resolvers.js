require('dotenv').config();
const clientId = 'e7081651877449ab96b8c651efafffff';
//Make a CLIENT_SECRET env variable with your own client secret from spotify
const clientSecret = process.env.CLIENT_SECRET;
const SpotifyWebApi = require('spotify-web-api-node');

const resolvers = {
  Query: {
    categories: async () => {
      const spotifyApi = new SpotifyWebApi({
        clientId: clientId,
        clientSecret: clientSecret,
      });

      // Save the access token so that it's used in future calls
      const categories = await spotifyApi.getCategories({ limit: 10 });
      return categories.body.categories.items;
    },
    search: async () => {
      const spotifyApi = new SpotifyWebApi({
        clientId: clientId,
        clientSecret: clientSecret,
      });

      const data = await spotifyApi.clientCredentialsGrant();
      spotifyApi.setAccessToken(data.body['access_token']);

      const results = await spotifyApi.searchPlaylists('party music', { limit: 2 });

      const playlist = await spotifyApi.getPlaylist(results.body.playlists.items[0].id);

      const tracks = playlist.body.tracks.items.map(el => {
        return { ...el.track, image: el.track.album.images[0].url };
      });

      console.log(tracks);
      return tracks;
    },
  },
};

module.exports = resolvers;
