import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ToDoList />

            <AddTodo navigation={navigation} />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#fff",
    },
});
