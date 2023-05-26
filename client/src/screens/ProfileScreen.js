import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";
import Profile from "../images/Profile.svg";
import MyBookingScreen from "./MyBookingScreen";
import MyTourBookingScreen from "./MyTourBookingScreen";

const { TabPane } = Tabs;

function ProfileScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Profile" key="1">
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-xs-12 ml-5 mb-5">
              <div
                style={{
                  border: "1px solid #eee",
                  padding: "40px",
                  backgroundColor: "#6C63FF",
                  color: "#eee",
                  borderRadius: "4px",
                }}
              >
                <p style={{ letterSpacing: "2px", fontSize: "32px" }}>
                  <b>User Profile</b>
                </p>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>
                  IsAdmin :{" "}
                  {user.isAdmin ? (
                    <Tag color="green">YES</Tag>
                  ) : (
                    <Tag color="red">NO</Tag>
                  )}
                </p>
              </div>
            </div>
            <img src={Profile} alt="Profile" />
          </div>
        </TabPane>
        <TabPane tab="Booked Hotels" key="2">
          <MyBookingScreen></MyBookingScreen>
        </TabPane>
        <TabPane tab="Booked Tours" key="4">
          <MyTourBookingScreen></MyTourBookingScreen>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ProfileScreen;
