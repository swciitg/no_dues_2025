import mongoose from "mongoose";

import definedSections from "../shared/constants.js";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dues: [
        {
            due_section: {
                type: String,
                enum: Object.keys(definedSections),
                required: true,
            },
            due_subsection: {
                type: String
            },
        },
    ]
});

const Student = mongoose.model("Student", studentSchema);

export default Student;