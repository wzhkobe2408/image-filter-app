// for example: action.payload => { data:95, key:'Hue' }


const filter = (state = 50, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;
            break;
        default:
            return state;
    }
}

export default filter;