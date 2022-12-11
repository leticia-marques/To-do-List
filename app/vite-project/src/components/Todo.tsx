import styles from "./Todo.module.css";
import {Trash} from "phosphor-react";

import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { ChangeEvent, useState } from "react";
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';

interface todoProps
{
    todoText: string;
    checked: boolean;
}

export function Todo(props:todoProps)
{
    const [checked, setCheckedState] = useState(false);
    function handleChange(event:ChangeEvent<HTMLInputElement>) 
    {
        setCheckedState(event.target.checked);
    }
    return (
        <main className={styles.todo}>
             <div className={styles.todoContent}>
                <Checkbox
                    icon={<RadioButtonUncheckedRoundedIcon />}
                    checked={checked}
                    onChange={handleChange}
                    checkedIcon={< CircleCheckedFilled /> }
                    sx={{color: "var(--blue-210)",
                        '&.Mui-checked': {
                          color: "var(--purple-300)",
                          transition: "all 0.5s ease-in"
                        },}}
                    />
                <span className={checked ? styles.done : styles.undone} id="teste">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
             </div>
            <button>
                <Trash size={18}/>
            </button>
        </main>
    )
}