const express = require("express");
const {
  addContact,
  getContacts,
  deleteContact
} = require("../controllers/contact.controller");

const router = express.Router();

router.post("/contacts", addContact);
router.get("/contacts/:userId", getContacts);
router.delete("/contacts/:id", deleteContact);

module.exports = router;
