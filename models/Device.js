const mongoose = require('mongoose');
const Paginate = require('mongoose-paginate');

const DeviceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
        required: true
    },
    model: {
        type: String,
        required: false
    },
    platform: {
        type: String,
        required: false
    },
    uuid: {
        type: String,
        required: false
    },
    version: {
        type: String,
        required: false
    },
    manufacturer: {
        type: String,
        required: false
    },
    serial: {
        type: String,
        required: false
    }
});

DeviceSchema.plugin(Paginate);
const Device = module.exports = mongoose.model('Device', DeviceSchema);

/* module.exports.getUserByUsername = function(username, cb) {
	Users.findOne({loginid: username}, cb);
} */