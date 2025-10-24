import express from "express";
import contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();


router.route("/contacts")
  .get(contactCtrl.list)          // GET /api/contacts
  .post(contactCtrl.create)       // POST /api/contacts
  .delete(contactCtrl.removeMany);// DELETE /api/contacts (multiple)

router.route("/contacts/:contactId")
  .get(contactCtrl.read)          // GET /api/contacts/:contactId
  .put(contactCtrl.update)        // PUT /api/contacts/:contactId
  .delete(contactCtrl.remove);    // DELETE /api/contacts/:contactId

// Param middleware
router.param("contactId", contactCtrl.contactByID);

export default router;
