import styles from "./Todo.module.css";
import {Trash} from "phosphor-react";

import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { ChangeEvent, useState } from "react";
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
import { CheckBox } from "@mui/icons-material";

interface todoProps
{
    todoText: string;
    deleteTodo: (todoDeleteTodo:string) => void;
    todoCount: number;
}

const checkStyle = {
    '&.MuiButtonBase-root':{
        color: "var(--blue-300)",
        transition: "all 0.50s ease-in"
    },
    '&.Mui-checked': {
            color: "var(--purple-300)",
            transition: "all 0.50s ease-in"
    }
}


export function Todo(content:todoProps)
{
    const [checked, setCheckedState] = useState(false);
    let checkboxesChecked:NodeListOf<HTMLInputElement> = document.querySelectorAll('input:checked');
    let checkBoxesCount = checkboxesChecked.length;
    var tasksDone = document.getElementById("tasksDone") as HTMLSpanElement | null;

    function handleChange(event:ChangeEvent<HTMLInputElement>) 
    {
        setCheckedState(event.target.checked);
    }

    if (tasksDone != null)
        tasksDone.innerHTML = checkBoxesCount.toString() + " de " + content.todoCount.toString();

    function handleDeleteComment()
    {
        content.deleteTodo(content.todoText);
    }

    return (
        <main className={styles.todo}>
             <div className={styles.todoContent}>
                <Checkbox 
                    name={content.todoText}
                    icon={<RadioButtonUncheckedRoundedIcon/>}
                    checked={checked}
                    onChange={handleChange}
                    checkedIcon={< CircleCheckedFilled /> }
                    sx={checkStyle}
                />
                <span className={checked ? styles.done : styles.undone} >{content.todoText}</span>
            </div>
                <button onClick={handleDeleteComment}>
                    <Trash size={18}/>
                </button>
        </main>
    )
}