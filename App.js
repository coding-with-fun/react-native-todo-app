import { fetchToDos } from "./api/FetchToDoData";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import NewTodoScreen from "./screens/NewTodoScreen";

const Stack = createStackNavigator();

export default function App() {
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

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <PaperProvider>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home">
                        {(props) => (
                            <HomeScreen
                                {...props}
                                fetchingToDoData={fetchingToDoData}
                                ToDoListData={ToDoListData}
                                setToDoListData={setToDoListData}
                            />
                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Add ToDo" component={NewTodoScreen} />
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}
