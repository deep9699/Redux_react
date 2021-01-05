import React from 'react'
import { connect } from 'react-redux'
import { buy_cookie } from '../redux/cookies/cookiesAction'

function CookieContainer(props) {
    return (
        <div>
            <h2>Number of cookies : {props.numOfCookies}</h2>
            <button onClick={props.buy_cookie}>buy Cookie</button>
        </div>
    )
}


const mapStatetoProps=(state)=>{
    return {
        numOfCookies:state.cookie.numOfCookies
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buy_cookie:()=>{dispatch(buy_cookie())}
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(CookieContainer)
