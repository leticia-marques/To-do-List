import styles from "./Todos.module.css"
import {PlusCircle} from "phosphor-react";
import { Todo } from "./Todo";
import { ChangeEvent, FormEvent, useState } from "react";

export function Todos()
{
    const [todoList, setTodoList] = useState([""]);
    const [newTodo, setNewTodo] = useState("");
    function handleTodo(e:FormEvent)
    {
       e.preventDefault();
       setTodoList([...todoList, newTodo]);
       setNewTodo("");
    }

    function handleTodoText(e:ChangeEvent<HTMLTextAreaElement>)
    {
        setNewTodo(e.target.value);
    }

    function handleTodoToDelete(todoToDelete:string)
    {
        const newTodoList = todoList.filter(todo =>{
                return todo != todoToDelete;
        })
        setTodoList(newTodoList);
    }

    let tasksCreated = todoList.length - 1;

    return (
        <div>
            <header>
                <form className={styles.todoBox} onSubmit={handleTodo}>
                    <textarea value={newTodo} className={styles.addTodo} required onChange={handleTodoText} name="addTodo" placeholder="Adicionar uma nova tarefa"></textarea>
                        <button type="submit">Criar <PlusCircle size={20}/> </button>
                </form>
            </header>
            <main>
                <div className={styles.monitorTodos}>
                        <p className={styles.tasksCreated}>Tarefas Criadas <span>{tasksCreated}</span></p>
                        <p className={styles.tasksDone}>Concluidas <span id="tasksDone">0</span></p>
                </div>
                <div className={styles.listTodos} >
                    {
                        todoList.map(todo =>{
                            if (todoList.length > 1 && todo.length != 0)
                                return <Todo todoText={todo} deleteTodo={handleTodoToDelete} todoCount={tasksCreated} />
                        })                       
                    }
                </div>
            </main>

        </div>

    )
}