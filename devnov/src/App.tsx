
import { Route, Routes } from 'react-router-dom'
import './App.css'
import JavaHelloWorld from './pages/Java_Hello_World/Java_Hello_World'
import CPlusPlusHelloWorld from './pages/C_Plus_Plus_Hello_World/C_Plus_Plus_Hello_World'
import CSharpHelloWorld from './pages/C_Sharp_Hello_World/C_Sharp_Hello_World'
import PythonHelloWorld from './pages/Python_Hello_World/Python_Hello_World'
import RHelloWorld from './pages/R_Hello_World/R_Hello_World'
import JSHelloWorld from './pages/JS_Hello_World/JS_Hello_World'
import PHPHelloWorld from './pages/PHP_Hello_World/PHP_Hello_World'
import JavaInput from './pages/Java_Input/Java_Input'

function App() {


  return (
    <Routes>
        <Route path='/' element={<JavaHelloWorld/>}></Route>
        <Route path='JavaHelloWorld' element={<JavaHelloWorld/>}></Route>
        <Route path='CPlusPlusHelloWorld' element={<CPlusPlusHelloWorld/>}></Route>
        <Route path='CSharpHelloWorld' element={<CSharpHelloWorld/>}></Route>
        <Route path='PythonHelloWorld' element={<PythonHelloWorld/>}></Route>
        <Route path='RHelloWorld' element={<RHelloWorld/>}></Route>
        <Route path='JSHelloWorld' element={<JSHelloWorld/>}></Route>
        <Route path='PHPHelloWorld' element={<PHPHelloWorld/>}></Route>
        <Route path='JavaInput' element={<JavaInput/>}></Route>
    </Routes>
     
  )
}

export default App
