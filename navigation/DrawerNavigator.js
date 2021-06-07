import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from '../screens/Profile'
import StackNavigator from "./StackNavigator"
import Logout from "../screens/Logout"

const Drawer=createDrawerNavigator()
const DrawerNavigtor=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Logout" component={Logout}/>

        </Drawer.Navigator>
    )
}
export default DrawerNavigtor;