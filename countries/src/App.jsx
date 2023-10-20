import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Details from './Details'



export default function App() {


  const [countries, setCountries] = useState([])
  
  const [filter, setFilter] = useState('')

  const [class0, setClass0] = useState('class1')
  const [ind, setInd] = useState(99)

  let filteredList

  let html1
  

  const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'


  useEffect(() => {
    axios
      .get(url)
      .then(response => {

        setCountries(response.data)
      })
  }, [])






  function OnChange(e) {
    setFilter(e.target.value.trim())
    setInd(99)
  
  }
  function OnClick(e){

    setInd(e.target.id)
     if ( e.target.name==(e.target.id+'true')) 
     
         {setClass0('class1')
          setInd(e.target.id)
       }  
     else
         { 
          setClass0('class2')
          setInd(e.target.id)
        }

        console.log(class0, ind, e.target.id, e.target.name)
  }

  
 
   filteredList = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(filter.toLowerCase()))
  let filteredCount = filteredList.length
   
  if (filteredCount > 10) { html1 = <h4 className="many">Too many matches, specify another filter</h4> }
  else if (filteredCount === 1) {

    html1 = <Details country={filteredList[0]} />
  }
  else if (filteredCount > 0) {
   
    
    html1 =
    <div >
      <ul>
        {filteredList.map((country, index) =>
        
            <li key={index}>
           
              {country.name.common}
            <button id={index}  onClick={OnClick}>Show</button>
          
            {ind == index &&
            <Details country={country} cl={class0}/>}
            </li>
              ) }
  
      </ul>
    </div>

  }


  return (
    <>
     
      <div className='container'>
        <h1>Countries</h1>
        <label htmlFor="filter">Find countries:</label>
        <input name="filter"
          type="text"
          id="filter"

          onChange={OnChange} />


        {html1}
      </div>

    </>

  )

}