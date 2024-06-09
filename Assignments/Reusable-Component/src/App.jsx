import MyComponent from "./MyComponent.jsx";

function App() {

  const data =[
    { id:1, name: 'Leanne Graham', email: 'leannegraham@abc.com'},
    { id:2, name: 'Ervin', email: 'ervinhowell@abc.com'},
   
  ]

  return (
    <>
      <MyComponent data = {data} />
      

    </>
  );
}

export default App;
