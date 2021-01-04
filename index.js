const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore=redux.createStore;
const combineReducers=redux.combineReducers;

const applyMiddleware=redux.applyMiddleware;
const logger=reduxLogger.createLogger();

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM'

function buyCakes(){
    return {
        type:BUY_CAKE,
        info:'First action'
    }
}


function buyIcecreams(){
    return {
        type:BUY_ICECREAM,
        
    }
}


const initialCakeState = {
    numOfCake:10
}

const initialIceCreamState = {
    numOfIceCream:20
}
const reducerCake = (state=initialCakeState,action) => {

    switch(action.type){

        case BUY_CAKE : return {
            ...state,//spread oprator which will create copy of the state and then just change numOfCake property other remains unchange.
            numOfCake:state.numOfCake-1
        }
        
     

        default : return state

    }

}

const reducerIceCream = (state=initialIceCreamState,action) => {

    switch(action.type){

     
        case BUY_ICECREAM : return {
            ...state,//spread oprator which will create copy of the state and then just change numOfCake property other remains unchange.
            numOfIceCream:state.numOfIceCream-1
        }

        default : return state

    }

}

const rootReducer=combineReducers({
    cake:reducerCake,
    iceCream:reducerIceCream
})
const store=createStore(rootReducer,applyMiddleware(logger));
console.log("Intial State = ",store.getState());
const unsubscribe = store.subscribe(()=>{console.log("updated state : ",store.getState())})
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());

unsubscribe();