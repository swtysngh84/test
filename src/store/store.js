
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from "redux-thunk";
import RootReducer from '../reducer'

const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk)),
);
    export default store