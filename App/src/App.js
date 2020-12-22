import "./App.css";
import React from "react";
import ToDoPart from "./components/ToDo";
import DonePart from "./components/Done";
import { ToDoItem } from "./models/ToDoItem";

class App extends React.Component {
  state = {
    toDoItems: [
      new ToDoItem(
        "Wyprowadzić psa",
        "O godzinie 18 wyprowadzić psa na spacer",
        1
      ),
      new ToDoItem(
        "Umyć podłogę",
        "Dzisiaj wieczorem należy umyć podłogę na mokro",
        2
      ),
    ],
  };
  finishTask(id){
    console.log("Zakańczam działanie zadania nr "+id)
    var list = this.state.toDoItems;
    var index = list.findIndex(item => item.id == id);
    console.log(index)
    list[index].isDone = true;
    this.setState({
      toDoItems: list
    })
    console.log(this.state)
  }
  addTask(nazwa){
    console.log("Dodaję " + nazwa)
    var list = this.state.toDoItems;
    var numberOfElements = list.length;
    list.push(new ToDoItem(nazwa, "Przykładowy opis", numberOfElements+1))
    this.setState({
      toDoItems: list
    })
  }
  render() {
    return (
      <div className="App">
        <div className="TablePart">
          <ToDoPart items={this.state.toDoItems} finishMethod={this.finishTask.bind(this)} addMethod={this.addTask.bind(this)} />
        </div>
        <div className="TablePart">
          <DonePart />
        </div>
      </div>
    );
  }
}
export default App;
