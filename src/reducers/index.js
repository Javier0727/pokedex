const reducer = (state, action) => {
    // return state;
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                pokeList: action.payload.data
            }
            break;
        case 'SET_PAGINATOR':
            return {
                ...state,
                pokeList: action.payload.data
            }
            break;

        default:
            return state;
            break;
    }
}

export default reducer;