import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../redux-store/actions/changeNameActions';

function ChangeName() {
    const [input, setInput] = useState('');
    let dispatch = useDispatch();
    let nameState = useSelector(state => state.changeNameReducer);

    const handleChange = (e) => {
        let value = e.target.value;
        setInput(value);
    }

    const handleChangeEvent = () => {
        dispatch(changeName(input));
    }

    return (
        <div>
            <label>Type your desired name:</label>
            <input type="text" onChange={handleChange} value={input} />
            <button onClick={handleChangeEvent}>Change</button>
            <h3>Current name is: {nameState}</h3>
        </div>
    )
}

export default ChangeName;