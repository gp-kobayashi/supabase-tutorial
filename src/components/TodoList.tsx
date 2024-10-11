import { Todo } from "@/utils/interface";
import { deleteTodo, getAllTodos } from "@/utils/supabaseFunction";
import React, { SetStateAction } from "react";
import styles from "@/styles/Home.module.css";

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}

const TodoList = (props: Props) => {
    const { todos, setTodos } = props;

    const handleDelete = async (id: number) => {
        await deleteTodo(id);
        let todos = await getAllTodos();
        setTodos(todos || []);
    }

    return <div>
        <ul>
            {todos.map((todo) => (
            <div className={styles.todo_item} key={todo.id}>
                <li className={styles.todo_text}>{todo.title}</li>
                <span className={styles.todo_delete_btn} onClick={() => handleDelete(todo.id)}>×</span>
            </div>
            ))}
        </ul>
    </div>
};

export default TodoList;