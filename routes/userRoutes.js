const express = require("express");
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController, getAllDocotrsController, bookeAppointmnetController, bookingAvailabilityController, userAppointmentsController } = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST---------------------------------------------
router.post("/login", loginController);

//REGISTER || POST------------------------------------------
router.post("/register", registerController);

// auth post-------------------

router.post("/getUserData", authMiddleware, authController)

//APply Doctor || POST------------------------------------------------
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notifiaction  Doctor || POST
router.post(
    "/get-all-notification",
    authMiddleware,
    getAllNotificationController
);
//Delete Notifiaction  Doctor || POST------------------------------
router.post(
    "/delete-all-notification",
    authMiddleware,
    deleteAllNotificationController
);

//GET ALL DOCtor list--------------------------------------------------
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability0-----------------------------------
router.post(
    "/booking-availbility",
    authMiddleware,
    bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;