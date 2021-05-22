import lodash from "lodash";
import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";

const HomeScreen = ({
    navigation,
    fetchingToDoData,
    ToDoListData,
    setToDoListData,
}) => {
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

    const deleteToDo = (item, flag) => {
        // Flag = 0 => Not Completed
        // Flag = 1 => Completed

        const LocalToDoListData = [...ToDoListData];
        const itemIndex = lodash.findIndex(LocalToDoListData[flag].data, item);

        LocalToDoListData[flag].data.splice(itemIndex, 1);

        setToDoListData(LocalToDoListData);
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
                        handleDeleteToDo={deleteToDo}
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
