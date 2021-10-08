
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css"





function SessionForm(props) {
    let [workoutDescription, setDescription] = useState("")
    let [selectedDate, setSelectedDate] = useState("");
    let [value, onChange] = useState('12:00');
    let [durationPrice, setDurationPrice] = useState(0)
    

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/clients', {
          method: "POST",
          headers: {
            "Content-type": "Application/json"
          },
          body: JSON.stringify({
            workout_description: workoutDescription,
            date: selectedDate,
            time: value,
            price: durationPrice,
            client_id: props.clientObject.id,
            trainer_id: props.trainer.id,
          })
        })
          .then(res => res.json())
          .then(newSession => {
            props.addSession(newSession)
            console.log(newSession)
            setDescription("")
            setSelectedDate("")
            onChange("")
            setDurationPrice("")
            alert("Session booked! Happy Training.")
          })
    }
  //  console.log(props.mySessions.sessions)
      // console.log(props.trainer)

       

        return (
            <div className="container">
          <form onSubmit={handleSubmit} className="add-session-form" >
            <h3>Book a session!</h3>
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
          <br/>
            <input 
                type="submit" 
                name="submit" 
                value="Book a new Session" 
                className="submit"
                class="btn btn-primary mr-1"
            />
          </form>
        </div>
        )
  




}




export default SessionForm

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// function SessionForm() {
    
//     let [selectedDate, setSelectedDate] = useState("");
    
//     return (
//             <div>
//             <strong>Select a date:</strong>
            
//             <DatePicker 
//             selected={selectedDate}
//             onChange={date => setSelectedDate(date)}
//             minDate={new Date()}
//             isClearable
//             />
            
//             </div>
//         )
// }

// export default SessionForm