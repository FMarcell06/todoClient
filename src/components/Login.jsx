import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [pw, seTPw] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(username, pw);
    import.meta.env.VITE_USERNAME==username && import.meta.env.VITE_PW==pw? setIsLoggedIn(true):setIsLoggedIn(false)
    
  }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Form className="shadow p-3 rounded" style={{display:"flex",flexDirection:"column"}}>
            <h3>My Todos</h3>
        <FormGroup>
            <Input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
        </FormGroup>{" "}
        <FormGroup>
            <Input
            placeholder="password"
            type="password"
            value={pw}
            onChange={(e)=>seTPw(e.target.value)}
            />
        </FormGroup>{" "}
        <Button onClick={handleSubmit} color="primary">Login</Button>
        </Form>
    </div>
  );
};
