import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Loginpage from '../pages/Loginpage';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { showLoading, hideLoading } from "../redux/features/alertSlice";


export default function ProtectedRoute({ children }) {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUser = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.post(
                "/api/v1/user/getUserData",
                { token: localStorage.getItem("token") },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(hideLoading());
            if (response.data.success) {
                dispatch(setUser(response.data.data));
            } else {
                localStorage.clear()
                navigate("/login");
            }
        } catch (error) {
            dispatch(hideLoading());
            localStorage.clear()
            navigate("/login");
        }
    };

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user]);


    if (localStorage.getItem("token")) {
        return children;
    } else {
        return <Navigate to={<Loginpage />} />
    }
}