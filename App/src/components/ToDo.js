import React from 'react'
import ReactDOM from 'react-dom';
import "./ToDoStyle.css";
import NewTask from './newTask'


class ToDoPart extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
    const items = this.props.items.map(item => (
        <div key={item.id} className={item.isDone ? "isDone" : "isntDone"}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => this.props.finishMethod(item.id)}>Zakończ</button>
        </div>
    ))
        return(
           <div>
               <h2>Elementy do zrobienia</h2>
               <NewTask addMethod={this.props.addMethod}/>
               {items}
           </div> 
        )
    }  
}

export default ToDoPart