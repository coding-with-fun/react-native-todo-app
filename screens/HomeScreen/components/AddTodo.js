import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const AddTodo = ({ navigation }) => {
    console.log(navigation);

    return (
        <View>
            <Text>Add New ToDo</Text>

            <Button
                mode="contained"
                onPress={() => navigation.navigate("Add ToDo")}
            >
                Add New ToDo
            </Button>
        </View>
    );
};

export default AddTodo;

const styles = StyleSheet.create({});
