import React, { Component } from 'react';

import _ from 'lodash';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import AppBanner from './app-banner';

const todos = [
{
    task: 'make React tutorial',
    isCompleted: false
},
{
    task: 'eat dinner',
    isCompleted: true
}
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div>
                <AppBanner/>
                <div className="container appContainer">
                  <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                      <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                      <TodosList
                          todos={this.state.todos}
                          toggleTask={this.toggleTask.bind(this)}
                          saveTask={this.saveTask.bind(this)}
                          deleteTask={this.deleteTask.bind(this)}
                      />
                    </div>
                  </div>
                </div>
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}

export default App;
