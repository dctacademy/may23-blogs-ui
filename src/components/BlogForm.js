import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { startCreateBlog } from '../actions/blogs-action'
export default function BlogForm() {
    const dispatch = useDispatch() 
    const navigate = useNavigate() 

    const blogValidationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        content: Yup.string().required('content is required').min(5)
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            content: ''
        },
        validationSchema: blogValidationSchema, 
        validateOnChange: false, 
        onSubmit: (formData, { resetForm }) => { 
            const redirect = () => {
                navigate('/my-blogs')
            }

            dispatch(startCreateBlog({formData, resetForm, redirect}))
        }
    })
    return (
        <div>
            <h2>BlogForm Component</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>Title</label>
                <input 
                    type="text"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    name="title"
                />
                { formik.errors.title ? formik.errors.title : ''}
                 <br /> 
                <label>Content</label>
                <textarea
                    name="content"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                >
                </textarea>
                {formik.errors.content ? formik.errors.content : ''}
                <br />
                <input type="submit" /> 
            </form>
        </div>
    )
}