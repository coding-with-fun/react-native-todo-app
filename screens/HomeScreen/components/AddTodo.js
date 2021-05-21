import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const AddTodo = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Add ToDo")}
                style={styles.addToDoButton}
            >
                Add New ToDo
            </Button>
        </View>
    );
};

export default AddTodo;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        alignItems: "center",
    },
    addToDoButton: {},
});
