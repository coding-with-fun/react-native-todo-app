import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ToDoItem = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default ToDoItem;

const styles = StyleSheet.create({
    item: {
        padding: 15,
    },
});
