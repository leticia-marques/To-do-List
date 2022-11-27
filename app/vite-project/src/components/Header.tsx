import rocket from "../assets/rocket.svg";
import todo from "../assets/todo.svg";
import styles from "./Header.module.css";
export function Header()
{
    return (
        <header className={styles.header}>
            <img src={rocket} alt="Figura de um foguete" />
            <img src={todo} alt="Imagem escrito todo" />            
        </header>
    )
}