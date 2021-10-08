import React from 'react';
import { Link } from 'react-router-dom'



export default class Opening extends React.Component {
    render(){
        return (
            <div className="greatness">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5>Choose Your Destiny</h5>
                <br></br>
                <Link to= "/trainers">
                <button class="btn btn-primary mr-1" >Trainers</button>
                </Link>
                <br></br>
                
                <br></br>
                <Link to= "/loginForm">
                <button class="btn btn-primary mr-1">LoginForm</button>
                </Link>
                {/* <Link to= "/sorter">
                <button>LoginForm</button>
                </Link> */}
            </div>
        )
    }
}