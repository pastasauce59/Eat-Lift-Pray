import React from 'react';
import './App.css';
import TrainerContainer from './TrainerContainer'
import MySessions from './MySessions'
import LoginForm from './LoginForm'
import SearchBar from './SearchBar'
import OpeningPage from './OpeningPage'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './custom-theme.scss'



export default class App extends React.Component{
   
  state = {
    trainers: [],
    mySessions: [],
    clientObject: [],
    sorted: "none"

  }

 

  componentDidMount() {
    fetch('http://localhost:9292/trainers')
    .then(res => res.json())
    .then(trainers => this.setState(
        {trainers: trainers}))

        // fetch('http://localhost:9292/clients')
        // .then(res => res.json())
        // .then(clients => this.setState({mySessions: clients.find(client =>  client.id === 1)}))
        
  
    }

    deleteSession= (sessionID) => {
      let deletedSessionArr = this.state.mySessions.filter(session => session.id !== sessionID)
      
   

      fetch(`http://localhost:9292/clients/${sessionID}`, {
      method: "DELETE"
      })
      .then(res => res.json())
      .then(() => {
      this.setState({
       mySessions: deletedSessionArr})
       alert("Session successfully deleted but... DO YOU EVEN LIFT BRO??")
    })
    }

    updateSession= (updatedSession) => {
      let updatedSessionArray = this.state.mySessions.map(session => {
        if(session.id === updatedSession.id){
          return updatedSession
        } else {
          return session
        }
      })
  
      this.setState({mySessions: updatedSessionArray})
    }


   
      
    addSession = (sessionObj) => {
      let newSessionArray = [...this.state.mySessions,sessionObj]
      this.setState({mySessions: newSessionArray})
      console.log(newSessionArray)
    }

    clientLogin = (clientObj) => {
    this.setState({mySessions: clientObj.sessions})
    this.setState({clientObject: clientObj})
    alert("Let the lifting begin!")
    console.log(this.state.clientObject)
    }
   
    logOut = () => {
      this.setState({clientObject: []})
      this.setState({mySessions: []})
    }


    sortRatings = (sortType) => {
      this.setState({
        sorted: sortType,
        trainers: this.state.trainers.sort(
        (a,b) => sortType === "Rating" ? b.rating - a.rating : a.name.localeCompare(b.name) )
      })
    }


    

  render() {

  console.log(this.state.mySessions)  
    
    return (
     
      <div>
        <h1 className="heading">Eat, Lift, Pray</h1>
        
        <Router>
          <Switch>
          
          
          <Route path = "/loginForm">
          {this.state.clientObject.id > 0 ? <button class="btn btn-primary mr-1" onClick={this.logOut}>Logout</button> : null}
          {this.state.clientObject.id > 0 ?  null :<LoginForm clientLogin={this.clientLogin} clientObject={this.state.clientObject}/>}
          <MySessions mySessions={this.state.mySessions} deleteSession={this.deleteSession} clientObject={this.state.clientObject} updateSession={this.updateSession}/>
          <br></br>
          <br></br>
          {this.state.clientObject.id > 0 ? <TrainerContainer mySessions={this.state.mySessions} trainers={this.state.trainers} addSession={this.addSession} clientObject={this.state.clientObject}/> : null}

          {/* <SearchBar sortRatings={this.sortRatings} sortedType={this.state.sorted}/> */}
          {/* <TrainerContainer mySessions={this.state.mySessions} trainers={this.state.trainers} addSession={this.addSession} clientObject={this.state.clientObject}/> */}
          </Route>
          <Route path = "/trainers">
            <TrainerContainer mySessions={this.state.mySessions} trainers={this.state.trainers} addSession={this.addSession} clientObject={this.state.clientObject}/>
          </Route>
        {/* {this.state.clientObject.id > 0 ? alert("Successful login. Lift and rejoice!"): null} */}
        {/* <h1 className="heading">Eat, Lift, Pray</h1> */}
        {/* {this.state.clientObject.id > 0 ? <button onClick={this.logOut}>Logout</button> : null} */}
        {/* {this.state.clientObject.id > 0 ?  null :<LoginForm clientLogin={this.clientLogin} clientObject={this.state.clientObject}/>} */}
        {/* <LoginForm clientLogin={this.clientLogin} clientObject={this.state.clientObject} /> */}
        {/* <MySessions mySessions={this.state.mySessions} deleteSession={this.deleteSession} clientObject={this.state.clientObject} updateSession={this.updateSession}/> */}
        {/* <SearchBar sortRatings={this.sortRatings} sortedType={this.state.sorted}/> */}
        {/* <TrainerContainer mySessions={this.state.mySessions} trainers={this.state.trainers} addSession={this.addSession} clientObject={this.state.clientObject}/> */}
        <Route path = "/" component={OpeningPage}/>
        </Switch>
        </Router>
      </div>
    );

    

  }
}




