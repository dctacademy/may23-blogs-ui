import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import BlogsList from './components/BlogsList';
import BlogForm from './components/BlogForm';
import BlogShow from './components/BlogShow';
import { useEffect } from 'react'
import { startGetMyBlogs } from './actions/blogs-action';
import { useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(localStorage.getItem('token')) { // handle page reloads
      dispatch(startGetMyBlogs())
    }
  }, [])

  return (
    <div>
      <h1>Blog App</h1>
      <nav>
        <Link to="/"> Home </Link> | 
        <Link to="/my-blogs"> My Blogs  </Link>
      </nav>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-blogs" element={<BlogsList />} />
        <Route path="/blogs/new" element={<BlogForm />} />
        <Route path="/blogs/:id" element={<BlogShow /> }/>
      </Routes>
    </div>
  );
}

export default App;
