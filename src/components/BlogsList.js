import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { startGetMyBlogs, startDeleteBlog } from '../actions/blogs-action'
export default function BlogsList() {
    const dispatch = useDispatch()
    const blogs = useSelector((state) => {
        return state.blogs 
    })

    useEffect(() => {
        dispatch(startGetMyBlogs())
    }, [])

    const handleRemove = (id) => {
        const userInput = window.confirm("Are you sure?")
        if(userInput) {
            dispatch(startDeleteBlog(id))
        }
    }

    return (
        <div>
            <h2>Listing Blogs - { blogs.data.length } </h2>
            { blogs.data.length > 0 ? (
                <ul>
                    { blogs.data.map((ele) => {
                        return <li key={ele._id}><Link to={`/blogs/${ele._id}`}>{ele.title}</Link>
                            <button onClick={() => {
                                handleRemove(ele._id)
                            }}> remove</button>
                        </li>
                    })}
                </ul>
            ): <b>No blogs found. Add your first blog</b>}

            <Link to="/blogs/new">Add Blog</Link>
            
        </div>
    )
}

/*
    read the blogs data inside the component,
    if the blogs exist, dispaly the blogs 

    else display no blogs found, add your first blog

    add a link to a new blog page,
    when the user clicks on the link, take the user to a new page

    /blogs/new - render a BlogForm component 

    when the blog list component has mounted, make an api call to get the blogs data from the backend

    useEffect(() => {

    }, [])

    inside an action creator -> make api call to server and update the state inside redux store

    call the action creator from inside the the useEffect hook 
*/ 