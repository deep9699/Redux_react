import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction';
import { buy_cookie } from '../redux/cookies/cookiesAction';
import { buy_icecream } from '../redux/iceCream/iceCreamAction';

function ItemContainer(props) {
    return (
        <div>
            <h2>{props.state} - {props.value}</h2>
                <button onClick={props.dispatchFunction}>Buy {props.state}</button>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
    let itemState,itemKey;
    if(ownProps.cake)
    {
        itemKey="Cake"
        itemState=state.cake.numOfCakes
    }
    else if(ownProps.iceCream)
    {
        itemKey="Ice Cream"
        itemState=state.iceCream.numOfIcecream
    }
    else
    {
        itemKey="Cookie"
        itemState=state.cookie.numOfCookies
    }
    return {
        state:itemKey,
        value:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    let dispatchFunction,itemKey;
    if(ownProps.cake)
    {
        itemKey="Cake"
        dispatchFunction=()=>{dispatch(buyCake())}
    }
    else if(ownProps.iceCream)
    {
        itemKey="Icecream"
        dispatchFunction=()=>{dispatch(buy_icecream())}
    }
    else{
        itemKey="Cookies"
        dispatchFunction=()=>{dispatch(buy_cookie())}
    }

    return {
        dispatchFunction:dispatchFunction,
        state:itemKey
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
