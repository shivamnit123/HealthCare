import React from "react";
import "../styles/layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse, faList, faUserDoctor, faRightFromBracket, faBell, faHome,
    faListAlt,
    faUser,
    faUserMd,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

function Layout({ children }) {
    const { user } = useSelector((state) => state.user);
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation();

    const userMenu = [
        {
            name: "Home",
            path: "/",
            icon: faHouse, // Use imported FontAwesome icons directly
        },
        {
            name: "Appointments",
            path: "/appointments",
            icon: faList,
        },
        {
            name: "Apply Doctor",
            path: "/apply-doctor",
            icon: faUserDoctor,
        }
    ];
    const doctorMenu = [
        {
            name: "Home",
            path: "/",
            icon: faHome,
        },
        {
            name: "Appointments",
            path: "/doctor-appointments",
            icon: faListAlt,
        },
        {
            name: "Profile",
            path: `/doctor/profile/${user?._id}`,
            icon: faUserMd,
        },
    ];

    const adminMenu = [
        {
            name: "Home",
            path: "/",
            icon: faHome,
        },
        {
            name: "Users",
            path: "/admin/users",
            icon: faUser,
        },
        {
            name: "Doctors",
            path: "/admin/doctors",
            icon: faUserTie,
        },
        {
            name: "Profile",
            path: "/profile",
            icon: faUser,
        },
    ];
    const SidebarMenu = user?.isAdmin
        ? adminMenu
        : user?.isDoctor
            ? doctorMenu
            : userMenu;
    return (
        <div className="main">
            <div className="d-flex layout">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1 className="logo">DOC-APP</h1>
                    </div>
                    <div className="menu">
                        {SidebarMenu.map((menu, index) => (
                            <div
                                key={index}
                                className={`menu-item ${location.pathname === menu.path ? "active-menu-item" : ""}`}
                            >
                                <FontAwesomeIcon className="icon" icon={menu.icon} color="#000000" />
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                        ))}
                        <div
                            className={`d-flex menu-item `}
                            onClick={() => {
                                localStorage.clear();
                                message.success("Logout Successfully");
                                navigate("/login");
                            }}
                        >
                            <FontAwesomeIcon icon={faRightFromBracket} color="#000000" />
                            <Link to="/login">Logout</Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        <div className="header-content" style={{ cursor: "pointer" }}>
                            <Badge count={user && user.notifcation.length} onClick={() => {
                                navigate("/notifications");
                            }}>
                                <FontAwesomeIcon className="ibel" icon={faBell} color="#000000" />
                            </Badge>
                            <Link to="/profile">{user?.name}</Link>
                        </div>

                    </div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
