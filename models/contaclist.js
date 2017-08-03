const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ConstactlistSchema = new Schema(
    {
        name : {type: String},
        email : {type: String},
        number : {type: String}
    }
);


let Constactlist = mongoose.model('contactlist',ConstactlistSchema);

module.exports = Constactlist;