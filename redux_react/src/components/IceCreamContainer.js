import React from 'react'
import { connect } from "react-redux";
import { buy_icecream } from "../redux/iceCream/iceCreamAction";

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice creams : {props.numOfIcecream}</h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = state =>{
    console.log(state);
    return {
        numOfIcecream:state.iceCream.numOfIcecream
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream:()=>dispatch(buy_icecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)