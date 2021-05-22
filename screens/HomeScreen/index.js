import lodash from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchToDos } from "../../api/FetchToDoData";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";

const HomeScreen = ({ navigation }) => {
    const [fetchingToDoData, setFetchingToDoData] = useState(true);
    const [ToDoListData, setToDoListData] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setFetchingToDoData(true);
        let response = await fetchToDos();
        response = lodash.slice(response, 0, 20);

        let todoItemsCopy = [
            {
                title: "Not Completed",
                data: [],
            },
            {
                title: "Completed",
                data: [],
            },
        ];
        response.map((todo) => {
            if (todo.completed) {
                todoItemsCopy[1].data.push(todo);
            } else {
                todoItemsCopy[0].data.push(todo);
            }
        });

        setToDoListData(todoItemsCopy);
        setFetchingToDoData(false);
    };

    const completeToDo = (item) => {
        const LocalToDoListData = [...ToDoListData];

        LocalToDoListData[1].data.push(item);
    };

    return (
        <SafeAreaView style={styles.container}>
            {fetchingToDoData ? (
                <ActivityIndicator
                    animating={true}
                    color="#0000ff"
                    size="large"
                />
            ) : (
                <Fragment>
                    <ToDoList ToDoList={ToDoListData} />
                    <AddTodo navigation={navigation} />
                </Fragment>
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
