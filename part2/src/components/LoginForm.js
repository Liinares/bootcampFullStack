import { Togglable } from "./Togglable";
import { useState } from "react";
import { loginService } from "../services/login/login";

const LoginForm = ({setUser, setError}) => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 

    const handleLoginSubmit = async (event) => {
        event.preventDefault()

        try{
            const user = await loginService({
                username,
                password
            })

            window.localStorage.setItem(
                'loggedBlogAppUser', JSON.stringify(user)
            )
    
            setUser(user)
            setUsername('')
            setPassword('')
        }
        catch(e){
            console.error(e)
            setError('Login error')
        }
    }

    return(
        <Togglable labelButton={'login'}>
            <form onSubmit={handleLoginSubmit}>
                <input
                    type="text"
                    value={username}
                    name="Username"
                    placeholder="Username"
                    onChange={event => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    name="Password"
                    placeholder="Password"
                    onChange={event => setPassword(event.target.value)}
                />
                <div>
                    <button>
                        Login
                    </button>
                </div>
            </form>
        </Togglable>
    )
} 

export default LoginForm