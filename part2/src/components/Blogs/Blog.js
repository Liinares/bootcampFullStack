const Blog = ({blog, handleDeleteBlog}) => {
    return(
        <li className="blogs" key={blog.id} >
            {blog.title}, {blog.author}, <button onClick={() => {handleDeleteBlog(blog.id, blog.title)}}>Delete</button>
        </li>
    )
}

export default Blog