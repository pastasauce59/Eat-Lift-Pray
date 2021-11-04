import React, { Component } from "react";
import UpdateSession from "./UpdateSession";

class SessionCard extends Component {

    
   
   
    state = {
        sessionForm: false,
    }

    handleSessionForm = () => {
        this.setState({
            sessionForm : !this.state.sessionForm
        })
    }


    render() {
        return (
            <div className="sessionCard">
                <div>
                <h5>Workout Description: {this.props.sessions.workout_description}</h5>
                </div>
                <br></br>
                <div>
                <h5>Date: {this.props.sessions.date.slice(0, 10)}</h5>
                </div>
                <br></br>
                <div>
                <h5>Time: {this.props.sessions.time} Hours</h5>
                <h5>(24 hour clock)</h5>
                </div>
                <br></br>
                <div>
                <h5>Price: ${this.props.sessions.price}</h5>
                </div>
                <br></br>
                <div>
                <h5>Your trainer: {this.props.sessions.trainer.name}</h5>
                </div>
                <br></br>
                <button class="btn btn-primary mr-1" onClick={() => this.handleSessionForm()}>Need to make changes? Update your session</button>
                { this.state.sessionForm ? <UpdateSession clientObject={this.props.clientObject} updateSession={this.props.updateSession} sessions={this.props.sessions}/>:null}
                <br></br>
                <img alt="Trainer" src={this.props.sessions.trainer.image}/>
                <br></br>
                <button class="btn btn-primary mr-1" onClick={() => this.props.deleteSession(this.props.sessions.id)}>Delete this session</button>
                <br></br>
                <p></p>
            </div>
        )
    }
    




}




export default SessionCard