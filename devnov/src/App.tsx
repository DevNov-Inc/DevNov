import {useEffect, useState} from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import '../src/App.css'
import Login from './components/login/login'
//import { initializeApp } from 'firebase/app';
//import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth'
import JavaHelloWorld from './pages/Java_Hello_World/Java_Hello_World'
import CPlusPlusHelloWorld from './pages/C_Plus_Plus_Hello_World/C_Plus_Plus_Hello_World'
import CSharpHelloWorld from './pages/C_Sharp_Hello_World/C_Sharp_Hello_World'
import PythonHelloWorld from './pages/Python_Hello_World/Python_Hello_World'
import RHelloWorld from './pages/R_Hello_World/R_Hello_World'
import JSHelloWorld from './pages/JS_Hello_World/JS_Hello_World'
import PHPHelloWorld from './pages/PHP_Hello_World/PHP_Hello_World'
import JavaInput from './pages/Java_Input/Java_Input'
import CHelloWorld from './pages/C_Hello_World/C_Hello_World'

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // wait for the auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user : User | null) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        // Redirect after login (if currently on login page)
        if (window.location.pathname === '../login') {
          navigate('/');
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Login route */}
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/" /> : <Login />}
      />

      {/* Protected routes */}
      <Route
        path="/"
        element={currentUser ? <JavaHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="JavaHelloWorld"
        element={currentUser ? <JavaHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="CPlusPlusHelloWorld"
        element={currentUser ? <CPlusPlusHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="CSharpHelloWorld"
        element={currentUser ? <CSharpHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="CHelloWorld"
        element={currentUser ? <CHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="PythonHelloWorld"
        element={currentUser ? <PythonHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="RHelloWorld"
        element={currentUser ? <RHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="JSHelloWorld"
        element={currentUser ? <JSHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="PHPHelloWorld"
        element={currentUser ? <PHPHelloWorld /> : <Navigate to="/login" />}
      />
      <Route
        path="JavaInput"
        element={currentUser ? <JavaInput /> : <Navigate to="/login" />}
      />
    </Routes>
  );

  /*return (
    <Routes>
        <Route path='/' element={<JavaHelloWorld/>}></Route>
        <Route path='JavaHelloWorld' element={<JavaHelloWorld/>}></Route>
        <Route path='CPlusPlusHelloWorld' element={<CPlusPlusHelloWorld/>}></Route>
        <Route path='CSharpHelloWorld' element={<CSharpHelloWorld/>}></Route>
        <Route path='CHelloWorld' element={<CHelloWorld/>}></Route>
        <Route path='PythonHelloWorld' element={<PythonHelloWorld/>}></Route>
        <Route path='RHelloWorld' element={<RHelloWorld/>}></Route>
        <Route path='JSHelloWorld' element={<JSHelloWorld/>}></Route>
        <Route path='PHPHelloWorld' element={<PHPHelloWorld/>}></Route>
        <Route path='JavaInput' element={<JavaInput/>}></Route>
    </Routes>
     
  )*/
}

export default App
