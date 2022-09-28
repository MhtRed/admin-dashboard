import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ADMIN</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PeopleOutlineIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ViewStreamOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MedicalInformationOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
            <p className="title">USER</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
