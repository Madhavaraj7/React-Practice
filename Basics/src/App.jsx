import Students from "./Students.jsx";
import Greeting from "./UserGreeting.jsx"; 


function App() {
  return (
    <>
      <Students name="liston" age="24" />
      <Greeting isLoggedIn={false} username="Madhav" /> 
    </>
  );
}

export default App;