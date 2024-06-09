import React, {useState} from "react"

function MyComponent() {
  
    let i = 0
    const [name, setName] = useState("")
    const [submitName,submitFun] = useState()


    const setUserValue = (e)=>{
        setName(e.target.value)
    }

    const submit = (e)=>{
        e.preventDefault()
        if((name.trim('')).length>0)
        submitFun(name)
        let inVal = document.getElementById('valDiv')
        document.getElementById('inputVal').value = ''
        inVal.style.display = 'block'
        setName("")
    }


    const style = {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'column'
    }

    return(
        <div style={style}>
            <div className="formDiv">
                <form action="" style={style}>
                    <input type="text" id='inputVal' className='inputName' placeholder="Enter you name" value={name} onChange={setUserValue}/>
                    <input type="submit" className='submitBtn' onClick={submit} />
                </form>
            </div>
            <div>
                <h1 id='valDiv' className='insertVal'>{submitName}</h1>
            </div>
        </div>
    )
}

export default MyComponent;
