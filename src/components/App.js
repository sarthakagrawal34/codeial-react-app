import { Home, Login, SignUp, Settings } from '../pages';
import { Loader, NavBar } from './';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

function PrivateRoute({ children }) {
  const auth = useAuth();
  
 return auth.user ? children : <Navigate to="/login" />; 
}

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        ></Route>

        {/* When no route matches we use path="*" which means that this will be rendered */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
