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

export const startCreateBlog = ({ formData, redirect, resetForm }) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/api/blogs', formData)
            console.log(response.data)
            dispatch(addBlog(response.data))
            resetForm()
            redirect()
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