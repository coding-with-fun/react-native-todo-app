import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./components/AddTodo";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>

            <AddTodo navigation={navigation} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
