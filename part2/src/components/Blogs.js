import { useState, useEffect } from "react";
import { getAllBlogs } from "../services/blogs/getAllBlogs";
import LoginForm from "./LoginForm";
import BlogForm from "./Blogform";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        getAllBlogs()
          .then(blogs => {
            setBlogs(blogs)
          })
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }, [])

    const handleDeleteBlog = (id, title) => {
        console.log(`Delete ${title}`)
    }

    const handleLogout = () => {
        setUser(null)
        window.localStorage.removeItem('loggedBlogAppUser')
    }
    
    return(
      <div>
        <h1>Blogs</h1>
        <label style={{ color: 'red' }}>{error}</label>
        {user === null
            ? 
            <LoginForm 
                setUser={setUser}
                setError={setError}
            />
            : 
            <BlogForm
                handleLogout={handleLogout}
                user={user}
                blogs={blogs}
                setBlogs={setBlogs}
                setError={setError}
            />
        }

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