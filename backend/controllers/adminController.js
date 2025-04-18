import Admin from "../models/adminModel";

const getAdminList = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: "Error fetching admin list" });
    }
}

const addAdmin = async (req, res) => {
    try {
        const { name, email, section, subsection } = req.body;
        const newAdmin = new Admin({ name, email, section, subsection });
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ message: "Error adding admin" });
    }
}

export const adminController = {
    getAdminList,
    addAdmin,
}