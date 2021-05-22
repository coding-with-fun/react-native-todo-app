import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ ToDoList, handleCompleteToDo, handleIncompleteToDo }) => {
    const renderItem = ({ item }) => (
        <ToDoItem
            item={item}
            handleCompleteToDo={handleCompleteToDo}
            handleIncompleteToDo={handleIncompleteToDo}
        />
    );

    const ItemSeparator = () => (
        <View
            style={{
                height: 1,
                backgroundColor: "rgba(0,0,0,0.2)",
            }}
        />
    );

    const ListTitle = ({ section: { title } }) => (
        <Text style={styles.listTitle}>{title}</Text>
    );

    return (
        <SectionList
            sections={ToDoList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.container}
            ItemSeparatorComponent={ItemSeparator}
            renderSectionHeader={ListTitle}
        />
    );
};

export default ToDoList;

const styles = StyleSheet.create({
    container: {},
    listTitle: {
        marginTop: 10,
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
    },
});
