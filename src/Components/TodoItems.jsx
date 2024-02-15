import { useRef, useEffect } from 'react';
import tick from './Assets/tick.png'
import circle from './Assets/circle.png'
import cross from './Assets/cross.png'

import './CSS/todoitems.css'



const TodoItems = ({no,display,text,setTodos}) => {

    const deleteTodo = (no) =>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no!==no);
        setTodos(data);
    }

    const toggle = (no) =>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i = 0;i < data.length;i++)
        {
            if (data[i].no===no) {
                if (data[i].display==="") {
                    data[i].display = "line-through";
                }
                else
                {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }

    useEffect(() => {
        console.log(text)
    }, [ text])

    return (
        <div className='todoitems'>
            <div className={` todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
                {display===""?<img width='25px' src={circle} alt=""/>:<img width='15px' src={tick} alt="" />}
                
                <div className="todoitems-text">{text}</div>
            </div>
            <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} width='20px' src={cross} alt="" />
        </div>
    )
}


export default TodoItems;