import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Custom Modules
import TodoItem from './todoItem';
import AddItem from './addItem';
import About from './about';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={TodoComponent}></Route>
          <Route path={'/about'} component={About}></Route>
        </div>
      </Router>
    );
  }
}

// Create component
class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  render() {
    const todos = this.state.todos.map((item, index) => {
      return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
    });

    return (
      <div id="todo-list">
        <Link to="/about">About</Link>
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }

  // Custom functions
  onDelete(item) {
    this.setState((state) => {
      const updatedTodos = state.todos.filter((val) => item !== val);

      return {
        todos: updatedTodos,
      };
    });
  }

  onAdd(item) {
    this.setState((state) => {
      const updatedTodos = [...state.todos, item];

      return {
        todos: updatedTodos,
      };
    });
  }
}

// Put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
