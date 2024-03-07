import { useState } from "react";

const LoginForm = ({handleLoginSubmit, username, password, handleUsernameChange, handlePasswordChange}) => {
    const [loginVisible, setLoginVisible] = useState(false)

    const hideWhenVisible = {display: loginVisible ? 'none' : ''}
    const showWhenVisible = {display: loginVisible ? '' : 'none'}

    return(
        <div>
            <div style={hideWhenVisible}>
                <button onClick={() => setLoginVisible(true)}>
                    Show login 
                </button>
            </div>

            <div style={showWhenVisible}>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                    />
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                    />
                    <div>
                        <button>
                            Login
                        </button>
                    </div>
                </form>
                <div>
                    <button onClick={() => setLoginVisible(false)}>
                        Hide Login 
                    </button>
                </div>
            </div>
        </div>
    )
} 

export default LoginForm