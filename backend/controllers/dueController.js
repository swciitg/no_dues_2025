import studentModel from '../models/studentModel.js';
import dueModel from '../models/duesModel.js'
import definedSections from '../shared/constants.js';
import mongoose from 'mongoose';

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
        const students = await dueModel.find({due_section:section});
        // const students = await studentModel.find({ dues: { $elemMatch: { due_section: section } } });
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
        const students = await dueModel.find({due_section:section, due_subsection:subsection});
        // const students = await studentModel.find({ dues: { $elemMatch: { due_section: section, due_subsection: subsection } } });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dues' });
    }
}

const addDue = async (req, res) => {

    const session = await mongoose.startSession();

    try {
        const { rollNo, name, email , due_section, due_subsection } = req.body;
        if (!definedSections[due_section]) {
            return res.status(400).json({ message: 'Invalid section' });
        }

        session.startTransaction();

        // if student with rollNo already exists, update the dues
        const student = await studentModel.findOneAndUpdate(
            { rollNo },
            { $addToSet: { dues: { due_section, due_subsection } } },
            { new: true, upsert: true, session }
        );

        await dueModel.findOneAndUpdate(
            {due_section, due_subsection , student:{rollNo,name, email}},
            {$set:{due:true}},
            {new:true , session}
        );

        // if student with rollNo does not exist, create a new student
        //the student should exist as the add due button is clicked from UI only for the student existings in list
        // if (!student) {
        //     const newStudent = new studentModel({ rollNo, name, email, dues: [{ due_section, due_subsection }] });
        //     await newStudent.save();
        //     return res.status(201).json(newStudent);
        // }
        
        await session.commitTransaction();
        res.status(200).json(student);
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: 'Error adding due' });
    }
}

const deleteDue = async (req, res) => {
    
    const session = await mongoose.startSession();

    try {
        const { rollNo, due_section, due_subsection } = req.body;
        if (!definedSections[due_section]) {
            return res.status(400).json({ message: 'Invalid section' });
        }

        session.startTransaction();

        const student = await studentModel.findOneAndUpdate(
            { rollNo },
            { $pull: { dues: { due_section, due_subsection } } },
            { new: true ,session}
        );
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await dueModel.findOneAndUpdate(
            {due_section, due_subsection , student:{rollNo}},
            {$set:{due:false}},
            {new:true,session}
        );

        session.commitTransaction();
        res.status(200).json(student);
    } catch (error) {
        session.abortTransaction();
        res.status(500).json({ message: 'Error deleting due' });
    }
}

export {
    getAllDues,
    getDuesBySection,
    getDuesBySubsection,
    addDue,
    deleteDue,
}