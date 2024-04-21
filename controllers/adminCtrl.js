const doctorModel = require("../models/doctorModel");
const userModel = require("../models/usermodel");

const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).send({
            success: true,
            message: "users data list",
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "erorr while fetching users",
            error,
        });
    }
};

const getAllDoctorsController = async (req, res) => {
    try {
        const doctors = await doctorModel.find({});
        res.status(200).send({
            success: true,
            message: "Doctors Data list",
            data: doctors,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while getting doctors data",
            error,
        });
    }
};
// doctor account status
const changeAccountStatusController = async (req, res) => {
    try {
        const { doctorId, status } = req.body;   // doctor ki id aur status ko destructure kr liya  from frontend
        const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });    // model se id ur status as a object liya b/c usme change krna hai
        const user = await userModel.findOne({ _id: doctor.userId });  //  doctor ki id li hai aur  user model me find kiya hai---- variable me dala hai----
        const notifcation = user.notifcation;   // user se notification le ke 
        notifcation.push({
            type: "doctor-account-request-updated",
            message: `Your Doctor Account Request Has ${status} `,    // for sending notification to the user about accepting or not...
            onClickPath: "/notification",
        });
        user.isDoctor = status === "approved" ? true : false;    // doctor approve hua to true varna false------------
        await user.save();     //aur then using save method update kr do user ke info ko------
        res.status(201).send({
            success: true,
            message: "Account Status Updated",
            data: doctor,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror in Account Status",
            error,
        });
    }
};



module.exports = { getAllDoctorsController, getAllUsersController, changeAccountStatusController };