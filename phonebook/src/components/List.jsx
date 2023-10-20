import personService from '../services/persons'

function List(props){

    let list=props.list.filter(person=> 
        person.name.toLowerCase().startsWith(props.filter.toLowerCase()))

function DeletePerson(e){        
  if (confirm(`Delete "${e.target.id}" from this phonebook?`)){
      
      const personToDelete= list.find((person)=>{return (person.name===e.target.id)})
     // console.log(personToDelete)
      personService
         .remove(personToDelete.id)
         .then(() => {
           let p1=personToDelete
      props.set(props.list.filter(p=>p!==p1))
        })
      }        
}



return(
    <div>
        <ul>{ 
         
          
        list.map(person => 
         <li key={person.name}>{person.name} {person.number}
           <button id={person.name} onClick={DeletePerson}>Delete</button>
         </li>
         
         )}
         
         </ul>
      </div>
)

}
export default List
