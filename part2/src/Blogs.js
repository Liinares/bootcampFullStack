import { useState, useEffect } from "react";
import { getAllBlogs } from "./services/blogs/getAllBlogs";
import { loginService } from "./services/login/login";
import LoginForm from "./LoginForm";
import BlogForm from "./Blogform";

const Blogs = () => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
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

    const handleDeleteBlog = (id, title) => {
        console.log(`Delete ${title}`)
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault()

        try{
            const user = await loginService({
                username,
                password
            })
    
            setUser(user)
            console.log(user)
            setUsername('')
            setPassword('')
        }
        catch(e){
            console.error(e)
            setError('Login error')
        }
        
    }

    const handleBlogSubmit = (event) => {
        event.preventDefault()
        console.log('Blog submit')
    }
    
    return(
      <div>
        <label style={{ color: 'red' }}>{error}</label>
        {user === null
            ? 
            <LoginForm 
                handleLoginSubmit={handleLoginSubmit}
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
            />
            : 
            <BlogForm
                handleBlogSubmit={handleBlogSubmit}
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