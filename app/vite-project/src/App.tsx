import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import styles from "./components/App.module.css";
import "./global.css";

function App()
{
    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Todos/>
            </div>
        </div>
    )
}

export default App