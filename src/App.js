import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import About from "./About";
import BlogDetails from "./BlogDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//comment added

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
              
            <Route exact path="/create" element={<Create />}/>

            <Route exact path="/about" element={<About />}/>
              
            <Route exact path="/blogs/:id" element={<BlogDetails />}/>
              
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
