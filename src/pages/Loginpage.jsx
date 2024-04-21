import React from "react";
import "../styles/login.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import {
    Button,
} from "@chakra-ui/react";
import axios from "axios";
const Loginpage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onfinishHandler = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/login", values);
            window.location.reload();
            dispatch(hideLoading());
            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                message.success("Login Successfully");
                navigate("/");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            message.error("something went wrong");
        }
    };
    return (
        <div id="login" className="log">
            <div id="login1" className="form-container ">
                <Form
                    layout="vertical"
                    onFinish={onfinishHandler}
                    className="register-form"
                >
                    <h1 className="text-center h1 font-bold">WELCOME BACK</h1>

                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <Link to="/register" className="m-2 not">
                        Not a user Register here
                    </Link>
                    <Button type="submit" colorScheme="teal">
                        Login
                    </Button>
                </Form>
            </div>
            <div>
                <img src="/doc3.jpg" alt="" width={720} height={700} />
            </div>
        </div>
    );
};

export default Loginpage;
