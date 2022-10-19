import React from "react";
import SideMenu from "./SideMenu";

export const ProfileScreen = ({ navigation }) => (
  <SideMenu navigation={navigation} name="Profile" />
);
export const MessageScreen = ({ navigation }) => (
  <SideMenu navigation={navigation} name="Message" />
);
export const ActivityScreen = ({ navigation }) => (
  <SideMenu navigation={navigation} name="Activity" />
);
export const ReportScreen = ({ navigation }) => (
  <SideMenu navigation={navigation} name="Report" />
);
export const UputeScreen = ({ navigation }) => (
    <SideMenu navigation={navigation} name="Upute" />
  );
export const SignOutScreen = ({ navigation }) => (
  <SideMenu navigation={navigation} name="SignOut" />
);