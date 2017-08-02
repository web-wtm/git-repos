import axios from 'axios'
import store from '../components/store'

const reducer = (state = {
    choosenLanguage: 'all',
    repos: null,
    test: ''
}, action) => {
    switch(action.type) {
        case 'GET_REPOS_SUCCESS':
            state = {
                ...state,
                repos: action.payload
            }
            break;
        case 'TEST':
            state = {
                ...state,
                test: action.payload
            }
    }
    return state;
}


export default reducer;