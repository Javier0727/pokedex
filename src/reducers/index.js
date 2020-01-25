const reducer = (state, action) => {
    // return state;
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                pokeList: action.payload.data,
                search: action.payload.search
            }
            break;
        case 'SET_PAGINATOR':
            // console.log(action.payload)
            return {
                ...state,
                pokeList: action.payload.data,
                search: action.payload.search
            }
            break;

        default:
            return state;
            break;
    }
}

export default reducer;