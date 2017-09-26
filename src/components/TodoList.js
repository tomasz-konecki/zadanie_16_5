import React from 'react';

const TodoList = props => {
    const tasks = props.list.map((item) => {
        return (
            <a href={'#'} onClick={() => item.remove(item.id)} key={item.id}>
                {item.text}
            </a>
        )
    });

    return (
        <nav>
            {tasks}
        </nav>
    )
}

export default TodoList;
