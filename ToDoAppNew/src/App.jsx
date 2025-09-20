import Home from "./components/Home";
import Login from "./components/Login";
import Product from "./components/Product";
import SignUp from "./components/SignUp";
import TodoApp from "./components/TodoApp";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
 

function App() {
  let user="praveenj"
  return (
    <div className="app">
      <Router>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login/">Login</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>    
          <li><Link to="/todo">TodoApp</Link></li>
        </ol>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Product/>}></Route>
          <Route path="login/" element={<Login/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/todo" element={<TodoApp/>}></Route>
        </Routes>
      </Router>


      
      {/* <TodoApp/>
      <Login/>
      <TodoApp/> */}
    </div>

    )
}

export default App
