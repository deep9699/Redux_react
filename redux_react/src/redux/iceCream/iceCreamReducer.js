const { BUY_ICECREAM } = require("./iceCreamTypes")

const initialState={
    numOfIcecream:20
}
const iceCreamReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return {
                numOfIcecream:state.numOfIcecream-1
            }

        default :
            return state
    }

}

export default iceCreamReducer