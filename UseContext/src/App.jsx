import { createContext, useState } from "react";
import Container from "./Container";

export const themeContext = createContext();

function App() {
  const [color, setColor] = useState("light");
  

  const theme = () => {
    setColor((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <themeContext.Provider value={{ color: color }}>
        <button onClick={theme}>change</button>
        <h1>App Component</h1>
        <Container />
      </themeContext.Provider>
    </>
  );
}

export default App;
