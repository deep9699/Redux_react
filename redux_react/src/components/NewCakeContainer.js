import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'

export class NewCakeContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             number:1
        }
    }
    

    onChange=(e)=>{
        this.setState({
            number:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Number of cakes : {this.props.numOfCakes}</h2>
                <input type="number" value={this.state.number} onChange={this.onChange}></input>
                <button onClick={()=>{this.props.buyCake(this.state.number)}}>Buy {this.state.number} cakes</button>
            </div>
        )
    }
}



const mapStateToProps = state =>{
    console.log(state);
    return {
        numOfCakes:state.cake.numOfCakes
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        buyCake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
