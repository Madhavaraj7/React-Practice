
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import User from "./Pages/Users.jsx";
import About from "./Pages/About.jsx";
import Conduct from "./Pages/Conduct.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<User/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/conduct" element={<Conduct/>} />

    </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App;
