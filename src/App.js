import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import BlogsList from './components/BlogsList';
import BlogForm from './components/BlogForm';
function App() {
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
      </Routes>
    </div>
  );
}

export default App;
