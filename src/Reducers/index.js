import { combineReducers} from 'redux';
import appState from './reducer_AppState';

const rootReducer = combineReducers({
    appState
});

export default rootReducer;