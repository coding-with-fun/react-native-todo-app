import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";

const ToDoItem = ({ item, handleCompleteToDo, handleIncompleteToDo }) => {
    console.log(item);
    return (
        <TouchableRipple
            onPress={() =>
                item.completed
                    ? handleIncompleteToDo(item)
                    : handleCompleteToDo(item)
            }
            rippleColor="rgba(0, 0, 0, .1)"
        >
            <Text style={[styles.item, item.completed && styles.completedToDo]}>
                {item.title}
            </Text>
        </TouchableRipple>
    );
};

export default ToDoItem;

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        padding: 5,
    },
    completedToDo: {
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
    },
});
