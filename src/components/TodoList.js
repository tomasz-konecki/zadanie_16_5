import React from 'react';

const TodoList = props => {
    const tasks = props.list.map((item) => {
        return (
            <li key={item.id}>
                <p>{item.text}</p>
            </li>
        )
    });

    return (
        <ul>
            {tasks}
        </ul>
    )
}

export default TodoList;
