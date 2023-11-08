import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux' 
export default function BlogShow() {
    const { id } = useParams() 
    const blog = useSelector((state) => {
        return state.blogs.data.find(ele => ele._id === id)
    })
    console.log(blog)
    return (
        <div>
            <h2>{blog?.title} </h2>
            <p> {blog?.content} </p>
        </div>
    )
}