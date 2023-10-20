

function PersonForm(props){
 
return(
    <form id="form">
    <div className='name'>
      name: <input type="text"
                   value= {props.newName}
                   onChange= {props.handleName}
                   />
    </div>
    <div className='number'>
      number: <input type="text"
                   value= {props.newNumber}
                   onChange= {props.handleNumber}
                   />
    </div>
    <div>
      <button type="submit" onClick= {props.addToList}>add</button>
    </div>
  </form>


)

}

export default PersonForm