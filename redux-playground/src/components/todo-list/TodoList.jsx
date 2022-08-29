import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../../redux-store/actions/todoActions';

function TodoList() {
    const [todo, setTodo] = useState('');
    let dispatch = useDispatch();
    let allTodos = useSelector(state => state.todoReducer);

    const handleInput = (e) => {
        let value = e.target.value;
        setTodo(value);
    }

    const handleAddTodo = () => {
        dispatch(addTodo(todo));
    }

    const handleRemoveTodo = (e) => {
        let id = e.target.id;
        dispatch(removeTodo(id));
    }

    return (
        <div>
            <div>
                <label>Add ToDo:</label>
                <input onChange={handleInput} />
                <button onClick={handleAddTodo}>Add ToDo</button>
            </div>
            <div>
                <h4>All todos:</h4>
                <p>To remove a todo from the list simply click on it.</p>
                <ul>
                    {
                        allTodos.map((elem, index) => <li key={index} id={index} onClick={handleRemoveTodo}>{elem}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList;