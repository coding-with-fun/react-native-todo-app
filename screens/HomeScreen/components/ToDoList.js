import React from "react";
import { FlatList, StyleSheet } from "react-native";
import data from "../../../SampleToDoData.json";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    const renderItem = ({ item }) => <ToDoItem title={item.title} />;

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container}
        />
    );
};

export default ToDoList;

const styles = StyleSheet.create({
    container: {},
});
