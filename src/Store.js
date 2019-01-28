import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
const reducer = combineReducers({
   
})
const middlewares = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant')['default']())
}
const storeEnhancers = compose(
    process.env.NODE_ENV !== 'production'? composeWithDevTools(applyMiddleware(...middlewares)):applyMiddleware(...middlewares)
)
export default createStore(reducer, {}, storeEnhancers)