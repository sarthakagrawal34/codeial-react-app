import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Home, Login } from '../pages';
import { Loader, NavBar } from './';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks';

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    }

    fetchPosts();
  }, []);


  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />}></Route>
        <Route path="/login" element={<Login/>}></Route>

        {/* When no route matches we use path="*" which means that this will be rendered */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
