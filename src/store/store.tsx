import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { eggReducer } from '../reducers/eggReducer';
import { uiReducer } from '../reducers/uiReducer';
// import { notesReducer } from '../reducers/notesReducer';
// import { uiReducer } from '../reducers/uiReducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = 
    (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
   auth: authReducer,
   ui: uiReducer,
   users: eggReducer
});

export const store =  createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    ),
);