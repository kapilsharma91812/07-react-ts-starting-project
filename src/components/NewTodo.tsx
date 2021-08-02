import React from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css"

const NewTodo:React.FC<{onAddTodo:(text: string) => void}> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event:React.FormEvent) => {
event.preventDefault();
const enteredText = inputRef.current!.value;
if (enteredText?.trim().length === 0) {
return;
}
props.onAddTodo(enteredText);
    };
return(
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type='text'id="text" ref={inputRef}/>
        <button >Add Todo</button>
    </form>
);
};
export default NewTodo;