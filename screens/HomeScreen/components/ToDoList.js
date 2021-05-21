import React, { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import data from "../../../SampleToDoData.json";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    const [ToDoList, setToDoList] = useState();

    useEffect(() => {
        setToDoList([...data]);
    }, [data]);

    const renderItem = ({ item }) => (
        <ToDoItem title={item.title} isCompleted={item.isCompleted} />
    );

    return (
        <FlatList
            data={ToDoList}
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
