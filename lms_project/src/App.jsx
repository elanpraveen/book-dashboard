import { useState } from 'react'
import './App.css'
import CreateLead  from "./components/CreateLead";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
    return (
    <div className="app">
      <Router>
        <ol>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/CreateLead">CreateLead</Link></li>
        </ol>
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route> */}
          <Route path="/CreateLead" element={<CreateLead/>}></Route>
        </Routes>
      </Router>


      
      {/* <TodoApp/>
      <Login/>
      <TodoApp/> */}
    </div>

    )

}

export default App
