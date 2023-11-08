import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import BlogsList from './components/BlogsList';
function App() {
  return (
    <div>
      <h1>Blog App</h1>
      <nav>
        <Link to="/"> Home </Link> | 
        <Link to="/blogs"> Blogs  </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsList />} />
      </Routes>
    </div>
  );
}

export default App;
