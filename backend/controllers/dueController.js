import studentModel from '../models/studentModel.js';

import definedSections from '../shared/constants.js';

const getAllDues = async (req, res) => {
    try {
        // return list of all students
        const students = await studentModel.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dues' });
    }
}

const getDuesBySection = async (req, res) => {
    try {
        const { section } = req.params;
        if (!definedSections[section]) {
            return res.status(400).json({ message: 'Invalid section' });
        }
        const students = await studentModel.find({ dues: { $elemMatch: { due_section: section } } });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dues' });
    }
}

const getDuesBySubsection = async (req, res) => {
    try {
        const { section, subsection } = req.params;
        if (!definedSections[section]) {
            return res.status(400).json({ message: 'Invalid section' });
        }
        const students = await studentModel.find({ dues: { $elemMatch: { due_section: section, due_subsection: subsection } } });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dues' });
    }
}

const addDue = async (req, res) => {
    try {
        const { rollNo, name, email , due_section, due_subsection } = req.body;
        if (!definedSections[due_section]) {
            return res.status(400).json({ message: 'Invalid section' });
        }
        // if student with rollNo already exists, update the dues
        const student = await studentModel.findOneAndUpdate(
            { rollNo },
            { $addToSet: { dues: { due_section, due_subsection } } },
            { new: true, upsert: true }
        );
        // if student with rollNo does not exist, create a new student
        if (!student) {
            const newStudent = new studentModel({ rollNo, name, email, dues: [{ due_section, due_subsection }] });
            await newStudent.save();
            return res.status(201).json(newStudent);
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error adding due' });
    }
}

const deleteDue = async (req, res) => {
    try {
        const { rollNo, due_section, due_subsection } = req.body;
        if (!definedSections[due_section]) {
            return res.status(400).json({ message: 'Invalid section' });
        }
        const student = await studentModel.findOneAndUpdate(
            { rollNo },
            { $pull: { dues: { due_section, due_subsection } } },
            { new: true }
        );
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting due' });
    }
}

export const dueController = {
    getAllDues,
    getDuesBySection,
    getDuesBySubsection,
    addDue,
    deleteDue,
}