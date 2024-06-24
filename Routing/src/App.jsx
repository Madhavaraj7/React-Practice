
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import User from "./Pages/User.jsx";
import About from "./Pages/About.jsx";
import Conduct from "./Pages/Conduct.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users/:username" element={<User/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/conduct" element={<Conduct/>} />

    </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App;
