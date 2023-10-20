import { useState , useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import List from './components/List'

import personService from './services/persons'

import Notification from './components//Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  /*   { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 } */
 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const [message, setMessage] = useState(null)

 
 
   useEffect(() => {
    personService
      .getAll()
      .then( data0=> {
        setPersons( data0)
      })
  }, []) 

  function setFilter(e){
    e.preventDefault()
    setNewFilter(e.target.value.trim())
   
    
  }

  function handleName(e){
    setNewName(e.target.value)
  }

  function handleNumber(e){
    setNewNumber(e.target.value.trim())
 
     
  }
  
  function addToList(e){
    e.preventDefault()
 
    let arr = (persons.filter((person)=>{return person.name===newName}))
   
    if (arr.length>0)
    {
  
    if (confirm(`"${newName}" is already added to phonebook,
   replace the old number with the new one?`)){
      
      const personToUpdate= persons.find((person)=>{return (person.name===newName)})
    
      personService
         .update(personToUpdate.id, 
                {'id':personToUpdate.id,
                 'name': personToUpdate.name,
                 'number': newNumber})
         .then(() => {
          setPersons(persons)})

          setMessage(
            `Updated ${personToUpdate.name}'s number`
          )
          setTimeout(() => {
            setMessage(null)
          }, 4000)  
      }       
    
  
  }
    else {
          personService
            .create({name:newName, number: newNumber})
              .then(person => {
          setPersons(persons.concat(person))})

          setMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 4000)
  }

  
}

  return (
    <div>
      <h2>Phonebook</h2>
       <Notification message={message} />
        <Filter  value={newFilter} onChange={setFilter} />
      <h2>Add a new</h2>
      <PersonForm 
          newName={newName}
          newNumber={newNumber}
          handleName={handleName}
          handleNumber={handleNumber}
          addToList={addToList}
      />
      <h2>Numbers</h2>
      <p>{newFilter}</p>
      <List filter={newFilter}
           list ={persons}
           set ={setPersons} />
      
    
    </div>
  )
}

export default App