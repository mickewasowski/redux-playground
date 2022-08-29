

const todoReducer = (state = [], action) => {
    let payload = action.payload;

    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                payload
            ]
        case "REMOVE_TODO":
            state.splice(payload, 1);
            return [
                ...state
            ]
        default:
            return state;
    }
}

export default todoReducer;