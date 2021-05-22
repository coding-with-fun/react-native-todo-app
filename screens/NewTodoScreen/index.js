import React, { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

const NewTodoScreen = ({ navigation }) => {
    const [userInput, setUserInput] = useState("");

    const handleSaveNewTodo = () => {};

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer}>
                    <TextInput
                        label="Title"
                        mode="outlined"
                        value={userInput}
                        style={styles.inputContainer}
                        onChangeText={(text) => setUserInput(text)}
                        onSubmitEditing={() => {
                            navigation.goBack();
                        }}
                    />

                    <View style={styles.buttonContainer}>
                        <Button
                            mode="outlined"
                            onPress={() => console.log("Pressed")}
                            style={styles.button}
                        >
                            Cancel
                        </Button>

                        <Button
                            mode="contained"
                            onPress={() => console.log("Pressed")}
                            style={styles.button}
                        >
                            Save
                        </Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default NewTodoScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexGrow: 1,
    },
    innerContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 50,
    },
    inputContainer: {
        backgroundColor: "#fff",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 50,
    },
    button: {
        width: 120,
    },
});
