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

      // Retrieve an access token.
      const data = await spotifyApi.clientCredentialsGrant();
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
      const categories = await spotifyApi.getCategories({ limit: 10 });
      return categories.body.categories.items;
    },
  },
};

module.exports = resolvers;
