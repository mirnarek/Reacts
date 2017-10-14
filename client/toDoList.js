import React from 'react';

const ToDoList = (props) => {
    return (
        <div>
            <h1>Todo Lists</h1>
            <input 
                type="text"
                placeholder="Search for list"
                onChange={(e)=>props.onInputChange(e.target.value)}
            />
            <ul style={{listStyle: 'none'}}>
                {props.data.map((item, i)=>
                <li
                    key={i}
                    style={{cursor: 'pointer', backgroundColor: props.selectedItem.id === item.id ? 'green' : ''}}
                    onClick={()=>{props.onSelect(item,i)}}
                >
                    {item.name}
                </li>)}
            </ul>
        </div>
    )
}

export default ToDoList;