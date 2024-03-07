import { Togglable } from "./Togglable";

const LoginForm = ({handleLoginSubmit, username, password, handleUsernameChange, handlePasswordChange}) => {
    return(
        <Togglable labelButton={'login'}>
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
        </Togglable>
    )
} 

export default LoginForm