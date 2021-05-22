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
        const response = await fetchToDos();

        const todoItemsCopy = [
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
        const itemIndex = lodash.findIndex(LocalToDoListData[0].data, item);

        if (itemIndex > -1) {
            let localItem = { ...item };
            localItem.completed = true;

            LocalToDoListData[1].data.push(localItem);
            LocalToDoListData[0].data.splice(itemIndex, 1);

            setToDoListData(LocalToDoListData);
        }
    };

    const incompleteToDo = (item) => {
        const LocalToDoListData = [...ToDoListData];
        const itemIndex = lodash.findIndex(LocalToDoListData[1].data, item);

        if (itemIndex > -1) {
            let localItem = { ...item };
            localItem.completed = false;

            LocalToDoListData[0].data.push(localItem);
            LocalToDoListData[1].data.splice(itemIndex, 1);

            setToDoListData(LocalToDoListData);
        }
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
                    <ToDoList
                        ToDoList={ToDoListData}
                        handleCompleteToDo={completeToDo}
                        handleIncompleteToDo={incompleteToDo}
                    />
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
