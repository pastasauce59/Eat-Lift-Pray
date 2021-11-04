import React, { Component } from "react";




class LoginForm extends Component {

    state = {
        loginName:"",
        registerName:"",
        registerAge: null
    }

    handleRegister = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/client_Register', {
          method: "POST",
          headers: {
            "Content-type": "Application/json"
          },
          body: JSON.stringify({
           name: this.state.registerName,
           age: this.state.registerAge
          })
     })
          .then(
             this.setState({registerName:""}),
             this.setState({registerAge:""}),
             alert("You've just embarked on your journey to GREATNESS!!!")
          )


    }

    handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/clientLogin', {
            method: "POST",
            headers: {
              "Content-type": "Application/json"
            },
            body: JSON.stringify({
             name: this.state.loginName,
             
            })
       })
        .then(res => res.json())
        .then(client => 
            client.error ? alert(client.error) : this.props.clientLogin(client),
            this.setState({loginName: ""})
        ) 
        fetch('http://localhost:9292/clients')
        .then(res => res.json())
        .then(clients => clients.find(client =>  client.name.toLowerCase() === this.state.loginName.toLowerCase() ? this.props.clientLogin(client) : null)
        )
    }
    
   
 

    render() {
       return(
        <div>
        <h4>Already a member? Login & Lift</h4>
        <form onSubmit={this.handleLogin}>
        <input onChange={(e)=> this.setState({loginName: e.target.value})}
        placeholder="enter your name"
        />
        <input 
                type="submit" 
                name="submit" 
                value="Login" 
                className="submit"
                class="btn btn-primary mr-1"
            />
        </form>
        <br></br>
        <h4>Get registered & Get swole!</h4>
        <form onSubmit={this.handleRegister}>
        <input onChange={(e)=> this.setState({registerName: e.target.value})}
        placeholder="enter your name"
        />
        <input onChange={(e)=> this.setState({registerAge: e.target.value})}
        placeholder="enter your age"
        />
        <input 
                type="submit" 
                name="submit" 
                value="Register as new client" 
                className="submit"
                class="btn btn-primary mr-1"
            />
        </form>
        <br></br>
        </div>
    )}
}

export default LoginForm