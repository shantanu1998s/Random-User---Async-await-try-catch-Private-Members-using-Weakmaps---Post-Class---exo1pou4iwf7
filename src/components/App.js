import React from 'react'
import '../styles/App.css';
import { useEffect, useState } from "react"

const App = () => {
    const [users, setUsers] = useState([])
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [name, setName] = useState("");
    const [img, setimg] = useState("");
 
    const fetchData = () => {
        fetch(" https://randomuser.me/api/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
                console.log(data);
                setName(data.results[0].name.first+" "+data.results[0].name.last)
                setimg(data.results[0].picture.large)
                setState3(false);
                setState1(false);
                setState2(false);
                
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const ageCal = () => {
        console.log(users.results[0].dob.age);
        setAge(users.results[0].dob.age)
        setState1(true);
        setState2(false);
        setState3(false);
    }
    const emailCal = () => {
        console.log(users.results[0].email);
        setEmail(users.results[0].email)
        setState2(true);
        setState1(false);
        setState3(false);
    };
    const phoneCal = () => {
        console.log(users.results[0].phone);
        setPhone(users.results[0].phone)
        setState3(true);
        setState1(false);
        setState2(false);
    }

    return (
    <div id="main">
    <div>
      <h1>{name}</h1>
      <img src={img}/>
      </div>
      <button data-attr="age" onClick={ageCal}>Age</button>
      <button data-attr="email" onClick={emailCal}>Email</button>
      <button data-attr="phone" onClick={phoneCal}>Phone</button>
      <section>
          <h2>Additional Info
          </h2>

          {state1 && <p id="data">{age}</p>}
          {state2 && <p id="data">{email}</p>}
          {state3 && <p id="data">{phone}</p>}


      </section>
      <button id="getUser" onClick={fetchData}>Next</button>
  </div>

)
}


export default App;
