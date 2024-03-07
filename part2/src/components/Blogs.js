import { useState, useEffect } from "react";
import { getAllBlogs } from "../services/blogs/getAllBlogs";
import LoginForm from "./LoginForm";
import BlogForm from "./Blogform";
import { createBlog } from "../services/blogs/createBlog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
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

    const handleBlogSubmit = async (event) => {
        event.preventDefault()
        console.log('Blog submit')
        try{
            const blogToCreate = {
                title,
                author,
                url
            }

            const { token } = user

            const blog = await createBlog(blogToCreate, token)

            console.log(blog)

            setBlogs(blogs.concat(blog))
            setTitle('')
            setAuthor('')
        } catch(e){
            console.log(e)
            setError('Create blog error')
        }
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
                handleBlogSubmit={handleBlogSubmit}
                handleLogout={handleLogout}
                title={title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                url={url}
                setUrl={setUrl}
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