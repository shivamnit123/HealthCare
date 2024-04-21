import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Layout from "../components/Layout";
import Doctorlist from "../components/Doctorlist";
import { Row } from "antd";
function Home() {
    const [doctors, setDoctors] = useState([]);
    const dispatch = useDispatch();
    const getUserData = async () => {
        try {
            dispatch(showLoading())
            const res = await axios.get("/api/v1/user/getAllDoctors",
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                });
            if (res.data.success) {
                setDoctors(res.data.data);
            }
            dispatch(hideLoading())
        } catch (error) {
            dispatch(hideLoading())
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <Layout>
            <h1 className="text-center">Doctors List</h1>
            <Row>
                {doctors && doctors.map((doctor) => <Doctorlist doctor={doctor} />)}
            </Row>
        </Layout>
    )
}

export default Home