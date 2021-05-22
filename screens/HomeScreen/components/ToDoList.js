import React, { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
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

    const ItemSeparator = () => (
        <View
            style={{
                height: 1,
                backgroundColor: "rgba(0,0,0,0.2)",
            }}
        />
    );

    return (
        <FlatList
            data={ToDoList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default ToDoList;

const styles = StyleSheet.create({
    container: {},
});
