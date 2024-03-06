import { useState, useEffect } from "react";
import { getAllBlogs } from "./services/blogs/getAllBlogs";

const Blogs = () => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    const [blogs, setBlogs] = useState([]) 

    useEffect(() => {
        getAllBlogs()
          .then(blogs => {
            setBlogs(blogs)
          })
    }, [])

    const handleDeleteBlog = (id, title) => {
        console.log(`Delete ${title}`)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        console.log()
    }
    
    return(
      <div>
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
        <div>
            <h3>Blogs</h3>
                <ul>
                    {blogs
                    .map((blogs) => {
                        return(
                            <li className="blogs" key={blogs.id} >
                                {blogs.title}, {blogs.author}, <button onClick={() => {handleDeleteBlog(blogs.id, blogs.title)}}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
        </div>
      </div>
    )
}

export default Blogs