export let usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return [...action.payload];
        case 'FILTER_USERS':
            // dispatch({type: 'FILTER_USERS', payload : {field:'name', value:'anna'}})
            return [...state.filter(value => value[action.payload.field] == action.payload.name)];
        default:
            return state
    }
}