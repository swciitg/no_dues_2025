import studentModel from "../models/studentModel.js";

const getStudentList = async (req, res) => {
    try {
        const students = await studentModel.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error fetching student list" });
    }
}

export const studentController = {
    getStudentList,
}