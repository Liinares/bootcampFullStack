const LoginForm = ({handleLoginSubmit, username, password, setUsername, setPassword}) => {
    return(
        <div>
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
                <button>
                    Login
                </button>
            </form>
        </div>
    )
} 

export default LoginForm