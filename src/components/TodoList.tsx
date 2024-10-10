import { Todo } from "@/utils/interface";
import { deleteTodo, getAllTodos } from "@/utils/supabaseFunction";
import React from "react";

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<any>;
}

const TodoList = (props: Props) => {
    const { todos, setTodos } = props;

    const handleDelete = async (id: number) => {
        await deleteTodo(id);
        let todos = await getAllTodos();
        setTodos(todos);
    }

    return <div>
        <ul>
            {todos.map((todo) => (
                <div key={todo.id}>
                <li>{todo.title}</li>
                <span onClick={() => handleDelete(todo.id)}>×</span>
            </div>
            ))}
        </ul>
    </div>
};

export default TodoList;