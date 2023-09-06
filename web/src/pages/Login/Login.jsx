import { Button, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { isEmail } from 'validator';
import { Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const { login, currentUser } = useAuth()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(currentUser != undefined){
            navigate("/")
        }
    },[currentUser])

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle login logic here
        setError(false)
        if( ! isEmail(email)){
            console.log("invalid email format")
            setError("Invalid email format")
            return;
        }

        try{

            var result = await login(email, password)

            console.log("result: ", result)
        }
        catch{
            console.log("login error")
            setError("Login failed")
        }
    };
    
    return (
        <div>
            <Paper style={{padding: "20px"}}>
            <h1>Přihlášení</h1>
            {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        style={{width: "80%", margin: "auto", display: "flex"}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        style={{width: "80%", margin: "auto", display: "flex"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <div style={{width: "100%"}}>
                        <Button type="submit" variant="contained" color="primary" style={{display: "flex", margin: "auto"}}>
                            Log In
                        </Button>
                    </div>

                </form>
            </Paper>
        </div>
    )
}

export default Login;