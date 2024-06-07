import React ,{useState} from 'react'

function Mycomponent() {

    const [car,setCar] = useState({year:2024,make:"BMW",model:"Q7"})


    const handleyearchange= (event)=>{

        setCar(c=>({...c,year:event.target.value}))
        // setCar({...car,year:event.target.value})

    }

    const handlemakechange= (event)=>{

        setCar(c=>({...c,make:event.target.value}))

    }

    const handlemodelchange= (event)=>{

        setCar(c=>({...c,model:event.target.value}))

    }




  return (



    <div>
        <p>you car is : {car.year},{car.make},{car.model}</p>


        <input type="number" value={car.year} onChange={handleyearchange}></input><br>
        </br>
        <br/>

        <input type='text' value={car.make} onChange={handlemakechange}></input>
        <br/>
        <br/>

        <input type='text' value={car.model} onChange={handleyearchange}></input>

    </div>
  )
}

export default Mycomponent