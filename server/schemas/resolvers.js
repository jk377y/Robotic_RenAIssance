const { Artist, Artwork, Categories, User } = require('../models');

const resolvers = {
    Query: {
        artists: async () => {
            return Artist.find();
        },

        artwork: async () => {
            return Artwork.find();
        },
        
        categories: async () => {
            return Categories.find();
        },

        user: async () => {
            return User.find();
        }
    }
};

module.exports = resolvers;