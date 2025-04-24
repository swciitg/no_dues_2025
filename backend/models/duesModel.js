import mongoose from "mongoose";

import definedSections from "../shared/constants.js";

const duesSchema = new mongoose.Schema({
    due_section: {
        type: String,
        enum: Object.keys(definedSections),
        required: true,
    },
    due_subsection: {
        type: String,
    },
    student: {
        rollNo: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    }
});

const Dues = mongoose.model("Dues", duesSchema);

export default Dues;