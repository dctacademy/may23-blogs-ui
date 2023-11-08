import axios from '../config/axios'

export const startGetMyBlogs = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/api/blogs/my-blogs') 
            dispatch(setMyBlogs(response.data))
        } catch(e){
            alert(e.message)
        }
    }
}

const setMyBlogs = (blogs) => {
    return { type: 'SET_MY_BLOGS', payload: blogs} 
}

export const startCreateBlog = ({ formData, navigate, resetForm }) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/api/blogs', formData)
            dispatch(addBlog(response.data))
            resetForm()
            navigate(`/blogs/${response.data._id}`)
        } catch(e) {
            dispatch(setServerErrors(e.response.data.errors))
        }
    }
}

const addBlog = (blog) => {
    return { type: 'ADD_BLOG', payload: blog}
}

const setServerErrors = (err) => { 
    return { type: 'SET_ERRORS', payload: err}
}

export const startDeleteBlog = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`/api/blogs/${id}`) 
            dispatch(removeBlog(response.data._id))
        } catch(e){

        }
    }
}

const removeBlog = (id) => {
    return { type: "REMOVE_BLOG", payload: id }
}