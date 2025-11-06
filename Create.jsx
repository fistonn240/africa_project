import React, { useState } from 'react';
import Home from './Home';
import axios from 'axios';

function Create() {

    
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const insert = () => {
        
            axios.post("http://localhost:3000/insert", {
                email,
                username,
                password
            })

            try {

                alert ("succeed")
            }
             catch{

                console.error("error:" (err));
             }
          }
    return (
        <div>
            <Home />
            <nput
                type="email"
                placeholder="Email"
                onChange={(u) => setEmail(u.target.value)}
            />
            <br /><br />
            <input
                type="text"
                placeholder="Username"
                onChange={(u) => setUsername(u.target.value)}
            />
            <br /><br />
            <input
                type="password"
                placeholder="Password"
                onChange={(u) => setPassword(u.target.value)}
            />
            <br /><br />
            <button onClick={insert}>Submit</button>
        </div>
    );
}
export default Create;
