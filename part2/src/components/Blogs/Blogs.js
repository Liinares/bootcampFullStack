const Blogs = ({blogs, handleDeleteBlog}) => {
    return(
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
    )
}

export default Blogs