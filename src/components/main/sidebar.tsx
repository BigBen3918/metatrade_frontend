import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, MenuItem, Menu } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import {
    FaSignOutAlt,
    FaCartPlus,
    FaChalkboardTeacher,
    FaCartArrowDown,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetAuth } from "../../store/reducer/auth";

export default function SidebarPanel() {
    const { collapsed } = useProSidebar();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (index: number) => {
        switch (index) {
            case 1:
                navigate("/dashboard");
                break;
            case 2:
                navigate("/deposit");
                break;
            case 3:
                navigate("/withdraw");
                break;
            case 4:
                dispatch(resetAuth());
                // navigate("/login");
                break;
            default:
                break;
        }
    };

    return (
        <div className="main_sidebar">
            <Sidebar breakPoint="md" backgroundColor="#4c6ef5">
                {collapsed ? <p>M</p> : <p>MetaTrade</p>}

                <Menu>
                    <MenuItem
                        icon={<FaChalkboardTeacher />}
                        onClick={() => handleClick(1)}
                    >
                        Dashboard
                    </MenuItem>
                    <MenuItem
                        icon={<FaCartPlus />}
                        onClick={() => handleClick(2)}
                    >
                        Deposit
                    </MenuItem>
                    <MenuItem
                        icon={<FaCartArrowDown />}
                        onClick={() => handleClick(3)}
                    >
                        Withdraw
                    </MenuItem>
                    <MenuItem
                        icon={<FaSignOutAlt />}
                        onClick={() => handleClick(4)}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}
