import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css"





function UpdateSession(props) {
    let [workoutDescription, setDescription] = useState("")
    let [selectedDate, setSelectedDate] = useState(null);
    let [value, onChange] = useState('12:00');
    let [durationPrice, setDurationPrice] = useState(0)
    let [trainerId, setTrainerId] = useState(null)
    

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/clients/${props.sessions.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "Application/json"
          },
          body: JSON.stringify({
            workout_description: workoutDescription,
            date: selectedDate,
            time: value,
            price: durationPrice,
            client_id: props.clientObject.id,
            trainer_id: trainerId
          })
        })
          .then(res => res.json())
          .then(newSession => {
            props.updateSession(newSession)
            console.log(newSession)
            setDescription("")
            setSelectedDate("")
            onChange("")
            setDurationPrice("")
            setTrainerId("")
            alert("WHAT HAPPENED? Don't get any funny ideas... Sooner or later you've got to get BIG. Changes saved.")
          })
    }

  
        return (
            <div className="container">
          <form onSubmit={handleSubmit} className="add-session-form" >
            <h3>Edit your session details</h3>
            <br/>
            <label>
            
         <strong>Workout type:</strong>
         <select
          onChange={(e) => {setDescription(e.target.value)}}>
          <option value="all">Select...</option>
          <option value="cardio">Cardio</option>
          <option value="weight training">Weight training</option>
          <option value="calisthenic training">Calisthenic training</option>
          <option value="strength training">Strength training</option>
          </select>
            </label>
            <br/>
            <strong>Select a date:</strong>
            <DatePicker 
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            minDate={new Date()}
            isClearable
            />
            <br/>
            <strong>Select a time:</strong>
            <br></br>
            <TimePicker
            onChange={onChange}
            value={value}
            />
            <br/>
            <strong>Session duration:</strong>
            <select
            onChange={(e) => {setDurationPrice(e.target.value)}}>
          <option value="all">Select...</option>
          <option value={75}>30 min session = $75</option>
          <option value={100}>1 hour session = $100</option>
          <option value={150}>2 hour session = $150</option>
          </select>
          <br/>
          <strong>Choose trainer:</strong>
          <select onChange={(e) => {setTrainerId(e.target.value)}}>
              <option value='all'>Select trainer</option>
              <option value={1}>Arnold Schwarzenegger</option>
              <option value={2}>Jason Statham</option>
              <option value={3}>Sylvester Stallone</option>
              <option value={4}>Terry Crews</option>
              <option value={5}>Jet Li</option>
              <option value={6}>The Rock</option>
              <option value={7}>Wesley Snipes</option>
              <option value={8}>Chuck Norris</option>
              <option value={9}>Chris Hemsworth</option>
              <option value={10}>Jason Momoa</option>
              <option value={11}>Ronda Rousey</option>
              <option value={12}>Gal Gadot</option>
              <option value={13}>The hulk</option>    
          </select>
          <br/>
          <br></br>
            <input 
                type="submit" 
                name="submit" 
                value="Save changes" 
                className="submit"
                class="btn btn-primary mr-1"
            />
          </form>
        </div>
        )
  




}




export default UpdateSession