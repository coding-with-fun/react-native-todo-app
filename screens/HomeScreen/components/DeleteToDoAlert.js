import React from "react";
import { StyleSheet } from "react-native";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";

const DeleteToDoAlert = ({ toggleAlert, isAlertVisible }) => {
    return (
        <Portal>
            <Dialog visible={isAlertVisible} onDismiss={toggleAlert}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>Are you sure to delete the ToDo?</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => toggleAlert(false)}>Cancel</Button>
                    <Button onPress={() => toggleAlert(true)}>Confirm</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default DeleteToDoAlert;

const styles = StyleSheet.create({});
