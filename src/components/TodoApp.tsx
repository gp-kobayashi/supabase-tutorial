import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import styles from "@/styles/Home.module.css";
import { getAllTodos } from "@/utils/supabaseFunction";

const TodoApp = () => {
    const [todos, setTodos] = useState<any>([]);

    useEffect(() => {
        const getTodos = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
            console.log(todos);
        }
        getTodos();
    }, []);

    return <section>
        <h3 className={styles.title}>Supabase Todo App</h3>
        <form>
            <input type="text" />
            <button>Add</button>
        </form>
        <TodoList />
    </section>
};

export default TodoApp;