import styles from "./Todos.module.css"
import {PlusCircle} from "phosphor-react";

export function Todos()
{

    return (
        <header>
            <form className={styles.todoBox} action="">
                <textarea className={styles.addTodo} name="addTodo" placeholder="Adicionar uma nova tarefa"></textarea>
                    <button type="submit">Criar <PlusCircle size={20}/> </button>
            </form>
        </header>
    )
}