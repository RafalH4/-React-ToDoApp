import React from 'react'
import ReactDOM from 'react-dom';
import "./ToDoStyle.css";

class ToDoPart extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
    const items = this.props.items.map(item => (
        !item.isDone ?
        <div key={item.id} className={"isntDone"}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => this.props.finishMethod(item.id)}>Zakończ</button>
        </div> : null
    ))
        return(
           <div>
               <h2>Elementy do zrobienia</h2>
               {items}
           </div> 
        )
    }  
}

export default ToDoPart