const { Schema, model, SchemaType } = require('mongoose')

const artistSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        age: {
            type: Number
        },

        image: {
            type: String,
            required: true
        },

        story: {
            type: String,
            required: true
        },

        work: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Artwork'
            }
        ]
    }
);

const Artist = model('Artist', artistSchema);

module.exports = Artist