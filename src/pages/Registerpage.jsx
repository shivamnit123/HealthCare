import React from "react";
import "../styles/registerstyle.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import {
    Button,
} from "@chakra-ui/react";
const Registerpage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onfinishHandler = async (values) => {

        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/register", values);
            dispatch(hideLoading());
            if (res.data.success) {
                message.success("Register Successfully!");
                navigate("/login");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            message.error("Something Went Wrong");
        }
    };

    return (
        <div className="log">
            <div className="form-container ">
                <Form
                    layout="vertical"
                    onFinish={onfinishHandler}
                    className="register-form"
                >
                    <h3 className="text-center">Registration From</h3>
                    <Form.Item label="Name" name="name">
                        <Input type="text" required />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <Link to="/login" className="m-2 not">
                        Already user login here
                    </Link>
                    <Button type="submit" colorScheme="teal">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Registerpage;