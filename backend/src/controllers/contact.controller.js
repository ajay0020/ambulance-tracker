const EmergencyContact = require("../models/EmergencyContact");

// ADD CONTACT
const addContact = async (req, res) => {
  try {
    const { userId, name, phone, relation } = req.body;

    if (!userId || !name || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const contact = await EmergencyContact.create({
      userId,
      name,
      phone,
      relation
    });

    res.status(201).json({ success: true, contact });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET CONTACTS
const getContacts = async (req, res) => {
  try {
    const { userId } = req.params;

    const contacts = await EmergencyContact.find({ userId });

    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE CONTACT
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    await EmergencyContact.findByIdAndDelete(id);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addContact,
  getContacts,
  deleteContact
};
