import React, { Fragment, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton, TouchableRipple } from "react-native-paper";
import DeleteToDoAlert from "./DeleteToDoAlert";

const ToDoItem = ({
    item,
    handleCompleteToDo,
    handleIncompleteToDo,
    handleDeleteToDo,
}) => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const handleToggleAlert = (flag) => {
        const localIsAlertVisible = isAlertVisible;
        setIsAlertVisible(!localIsAlertVisible);

        if (flag) {
            handleDeleteToDo(item, item.completed ? 1 : 0);
        }
    };

    return (
        <Fragment>
            <TouchableRipple
                onPress={() =>
                    item.completed
                        ? handleIncompleteToDo(item)
                        : handleCompleteToDo(item)
                }
                rippleColor="rgba(0, 0, 0, .1)"
            >
                <View style={styles.itemContainer}>
                    <Text
                        style={[
                            styles.item,
                            item.completed && styles.completedToDo,
                        ]}
                    >
                        {item.title}
                    </Text>
                    <IconButton
                        icon="delete"
                        color="red"
                        size={20}
                        onPress={() => handleToggleAlert()}
                    />
                </View>
            </TouchableRipple>

            <DeleteToDoAlert
                toggleAlert={handleToggleAlert}
                isAlertVisible={isAlertVisible}
            />
        </Fragment>
    );
};

export default ToDoItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    item: {
        width: "90%",
        marginVertical: 10,
        paddingLeft: 10,
    },
    completedToDo: {
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
    },
});
