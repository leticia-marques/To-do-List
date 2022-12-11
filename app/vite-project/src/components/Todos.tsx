import styles from "./Todos.module.css"
import {PlusCircle} from "phosphor-react";
import { Todo } from "./Todo";

export function Todos()
{
   
    return (
        <div>
            <header>
                <form className={styles.todoBox} action="">
                    <textarea className={styles.addTodo} name="addTodo" placeholder="Adicionar uma nova tarefa"></textarea>
                        <button type="submit">Criar <PlusCircle size={20}/> </button>
                </form>
            </header>
            <main>
                <div className={styles.monitorTodos}>
                        <p className={styles.tasksCreated}>Tarefas Criadas <span>15</span></p>
                        <p className={styles.tasksDone}>Concluidas <span>10 de 15</span></p>
                </div>
                <div className={styles.listTodos} >
                    <Todo/>
                    <Todo/>
                    <Todo/>
                    <Todo/>
                </div>
            </main>

        </div>

    )
}