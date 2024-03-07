import { Togglable } from "./Togglable"

const BlogForm = ({handleBlogSubmit, handleLogout, title, setTitle, author, setAuthor, url, setUrl}) => {
    return(
        <div>
            <Togglable labelButton={'create blog'}>
                <div>
                    <h3> Create new Blog</h3>
                    <form onSubmit={handleBlogSubmit}>
                        <input
                            type="text"
                            value={title}
                            name="Title"
                            placeholder="Title"
                            onChange={event => setTitle(event.target.value)}
                        />
                        <input
                            type="text"
                            value={author}
                            name="Author"
                            placeholder="Author"
                            onChange={event => setAuthor(event.target.value)}
                        />
                        <input
                            type="text"
                            value={url}
                            name="Url"
                            placeholder="Url"
                            onChange={event => setUrl(event.target.value)}
                        />
                        <button>
                            Create new blog
                        </button>
                    </form>
                </div>
            </Togglable>
            <button onClick={handleLogout}>
                Cerrar sesión
            </button>
        </div>
        
       
    )
}

export default BlogForm