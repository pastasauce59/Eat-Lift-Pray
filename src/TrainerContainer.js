import React, { Component } from "react";
import TrainerCard from "./TrainerCard";
// import { Grid, Button, Segment, Header, Container } from 'semantic-ui-react'


class TrainerContainer extends Component {


    render() {
        return (
            <div className="trainerContainer">
                
                <h1>Meet The Trainers</h1>
                
                
                
                {this.props.trainers.map(trainer => { return <TrainerCard trainer={trainer} key={trainer.id} addSession={this.props.addSession} mySessions={this.props.mySessions} clientObject={this.props.clientObject}/>})}
                
            </div>
        )
    }




}




export default TrainerContainer