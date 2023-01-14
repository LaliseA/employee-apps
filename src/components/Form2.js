import React from 'React';
import { useState, } from'React';

function Form2() {
    const [name, setName] = useState ('')
    const [occupation, setOccupation] = useState('')
    function handleName (e){
        console.log(e.target.value)
        setName(e.target.value)
    }
    function handleOccupation (e){
        console.log(e.target.value)
        setOccupation(e.target.value)
    }
    return (
      <div>
      <form2>
      <input type ="text" placeholder= "name" onChange = {handleName} value={name}/>
      < input type="text" placeholder= "occupation" onChange = {handleOccupation} value={occupation}/>
      </form2>
      </div>
  )
};
export default Form2;