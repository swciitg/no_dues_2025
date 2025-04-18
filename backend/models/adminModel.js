import mongoose from "mongoose";

import definedSections from "../shared/constants.js";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        enum: Object.keys(definedSections),
        required: true,
    },
    subsection: {
        type: String,
    }
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;