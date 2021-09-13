const { Schema } = require('mongoose');
const { connect } = require("../Mongo");

const db = connect();

const AccessesSchema = new Schema({
    type: { type: String, required: true }, // Possibles : login,google
    email: { type: String, required: false }, // required for google type

    login: { type: String, required: false }, // required for login type
    password: { type: String, required: false }, // required for login type

    perm: { type: String, required: true } // app < admin < superadmin
});

const AccountSchema = new Schema({
    projectName: { type: String, required: true},
    accesses: [AccessesSchema],
    databases: Object
});

// Export the model and return your IUser interface
// @ts-ignore
module.exports = db.model('Account', AccountSchema);
