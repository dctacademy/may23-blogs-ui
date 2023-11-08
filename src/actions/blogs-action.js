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