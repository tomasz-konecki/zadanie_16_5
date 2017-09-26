import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    text: 'Do something 1',
                    id: 1,
                    remove: this.removeTodo.bind(this)
                },
                {
                    text: 'Do something 2',
                    id: 2,
                    remove: this.removeTodo.bind(this)
                },
                {
                    text: 'Do something 3',
                    id: 3,
                    remove: this.removeTodo.bind(this)
                },
                {
                    text: 'Do something 4',
                    id: 4,
                    remove: this.removeTodo.bind(this)
                }

            ],
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="APPLICATION 'TODO'" />
                <p className={style.number}>Number of tasks: {this.state.data.length}</p>
                <TodoList list={this.state.data} />

            </div>
        );
    }
}

export default App;