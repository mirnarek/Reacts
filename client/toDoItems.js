import React from 'react';

const clicked={
    backgroundColor: 'grey'
}
const ToDoItems = (props) => {
    let doneItems = 0;
    props.selected.items.forEach(item => {
        if(item.isDone){
            doneItems++;
        }
    })
    return (
        <div>
            <h1>{props.selected.name}</h1>
            <h4>{ doneItems } of {props.selected.items.length} done</h4>
            <ul style={{listStyle: 'none', cursor: 'pointer'}}>
                {props.selected.items.map((listItem, i)=>
                <li key={i}
                    onClick={()=> props.onItemClick (listItem, i)}                
                >
                    <input type="checkbox" checked={listItem.isDone} onChange={()=> props.onItemClick (listItem, i)}/>
                    {listItem.name}
                </li>
                )}
            </ul>
        </div>
    )
}

export default ToDoItems;