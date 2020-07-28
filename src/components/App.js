import React from "react";
import "../assets/css/App.css";
import TodoInput from "./TodoInput";
import Header from "./Header";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoInput />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
