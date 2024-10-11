import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import styles from "@/styles/Home.module.css";
import { addTodo, getAllTodos } from "@/utils/supabaseFunction";
import { Todo } from "@/utils/interface";

const TodoApp = () => {
    const [todos, setTodos] = useState<any>([]);
    const [title, setTitle] = useState<string>("");
    useEffect(() => {
        const getTodos = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
            console.log(todos);
        }
        getTodos();
    }, []);

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        if (title === "") return

        await addTodo(title);
        let todos = await getAllTodos();
        setTodos(todos);

        setTitle("");
    };

    return <section>
        <h3 className={styles.title}>Supabase Todo App</h3>
        <form className={styles.todo_form} onSubmit={(e) => handleSubmit(e)}>
            <input type="text"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
            value={title}/>
            <button className={styles.add_btn}>Add</button>
        </form>
        <TodoList todos={todos} setTodos={setTodos}/>
    </section>
};

export default TodoApp;