
function MyComponent(props) {
  return (

    props.data.map((value)=>{
      return(
        <div className='container' key={value.id}>
         <div className='name'>{value.name}</div>
         <div className='email'>Email:{value.email}</div>
        </div>
      )
    })


  )
}

export default MyComponent