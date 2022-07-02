import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import {Home} from "./components/Home"
import {Navbar} from "./components/Navbar"
import {Products} from "./components/Products"
import {Users} from "./components/Users"
import {UsersDetails} from "./components/UsersDetails"
import {Login} from "./components/Login"

function App() {
  return (

    <div className="App">  
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/login" element={<Login />}></Route>

         <Route path="/navbar/:id" element={<Navbar/>}></Route>
         <Route path="/navbar" element={<Navbar/>}></Route>

         <Route path="/product" element={<Products/>}></Route>
         <Route path="/product/:value" element={<Products/>}></Route>
         <Route path="/users" element={<Users/>}></Route>
         <Route path="/users/:id" element={<UsersDetails/>}></Route>
         <Route path="/users/admin" element={<h1>Admin page</h1>}></Route>
         <Route path="*" element={<h1>error</h1>}></Route>
         <Route path="" element={<h1>4040 not found</h1>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
