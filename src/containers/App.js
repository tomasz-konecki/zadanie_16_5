import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    text: 'Do something 1',
                    id: 1234
                },
                {
                    text: 'Do something 2',
                    id: 5678
                },
                {
                    text: 'Do something 3',
                    id: 9876
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
        const list = this.state.data.map((item) => {
            return (
                <li key={item.id}>
                    <p>{item.text}</p>
                </li>
            )
        });

        return (
            <div className={style.TodoApp}>
                <Title title="APPLICATION 'TODO'"/>
                <ul>{list}</ul>
                <p>Number of tasks: {list.length}</p>
            </div>
        );
    }
}

export default App;