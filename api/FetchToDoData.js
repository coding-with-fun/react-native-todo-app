import axios from "axios";

export const fetchToDos = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
    );

    return response.data;
};
