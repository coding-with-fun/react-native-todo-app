import React from "react";
import { StyleSheet, Text } from "react-native";
import { List, TouchableRipple } from "react-native-paper";

const ToDoItem = ({ title, isCompleted }) => {
    return (
        <TouchableRipple
            onPress={() => console.log("Pressed")}
            rippleColor="rgba(0, 0, 0, .1)"
        >
            <Text style={[styles.item, isCompleted && styles.completedToDo]}>
                {title}
            </Text>
        </TouchableRipple>
    );
};

export default ToDoItem;

const styles = StyleSheet.create({
    item: {
        marginVertical: 20,
        padding: 5,
    },
    completedToDo: {
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
    },
});
