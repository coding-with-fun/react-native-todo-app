import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
import NewTodoScreen from "./screens/NewTodoScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Add ToDo" component={NewTodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
