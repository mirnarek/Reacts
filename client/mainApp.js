import React from 'react';
import ToDoList from './toDoList.js';
import ToDoItems from './toDoItems.js';
import Inputs from './inputs.js';

const list = [
    {
        name: 'Private',
        id: 1,
        items: [
            { 
                name: "Private",
                isDone: false
            },
            { 
                name: "Private",
                isDone: true
            }

        ]
    }
]

export default class MainApp extends React.Component {
    constructor () {
        super();

        this.state = {
            todoList : list,
            selected: list[0],
            selectedID: list[0].id,
            selectedIndex : 0,
            filteredTerm: '',

        }
    }

 addNewTodoItem = (value, isTodo) => {
     const { todoList }  = this.state;
     if(isTodo) {
     todoList.push({
         name : value,
         id : todoList.length + 1,
         items : []
     });
    } else {
     todoList[this.state.selectedIndex].items.push({name : value, isDone : false});
    }
     this.setState({ todoList });
 };

onWorkSelect = (selItem,index) => {
     const { todoList }  = this.state;
     todoList[this.state.selectedIndex].items[index].isDone = !todoList[this.state.selectedIndex].items[index].isDone;
     const selected = todoList[this.state.selectedIndex];
     this.setState({ todoList, selected });
};
    render () {
        const filteredLists = this.state.todoList.filter((doingListName)=> doingListName.name.toLowerCase().includes(this.state.filteredTerm.toLowerCase()))
        return (
            <div style={{display: 'flex', flexDirection : 'row', backgroundColor: 'white', padding : 10, flexGrow : 1}}>
                <div style={{ display : 'flex', flexDirection : 'column', flex : 1 ,paddingRight : 50}}> 
                <ToDoList 
                    data={filteredLists}
                    selectedItem={this.state.selected}
                    onSelect={(selected, index)=>this.setState({selected, selectedID : selected.id,selectedIndex : index})}
                    onInputChange={(value)=>{this.setState({filteredTerm: value})}}
                />
                    <Inputs callback={ (value) => this.addNewTodoItem (value,true) }/>
                </div>
               
               <div style={{ display : 'flex', flexDirection : 'column',flex : 1}}>
                <ToDoItems selected={this.state.selected} style={{ display : 'flex'}} onItemClick={ this.onWorkSelect}/>
                    <Inputs callback={ (value) => this.addNewTodoItem (value) }/>
                </div>
            </div>
        )
    }
}