import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";



function Details(props){


  let weather  

  const [temp, setTemp] = useState(0)
  const [desc, setDesc] = useState('')
  const [wind, setWind] = useState(0)

  const [iconCode, setIconCode] = useState('')

  const [iconCode2, setIconCode2] = useState('')
  const [temp2, setTemp2] = useState(0)
  const [desc2, setDesc2] = useState('')
  const [wind_spd, setWind_spd] = useState(0)
  const [wind_cdir, setWind_cdir] = useState('')
  
  setTimeout(()=>{}, 5000)


  let capital=props.country.capital[0]
    
   const API_KEY1=import.meta.env.VITE_API_KEY1
   let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${capital}&limit=1&appid=${API_KEY1}`
   // https://api.openweathermap.org/data/2.5/forecast?q=Budapest&appid=850e2ef3a43901e5a06ad6a6a5e99c9d
   let iconurl =`https://openweathermap.org/img/wn/${iconCode}@2x.png`

   const API_KEY2=import.meta.env.VITE_API_KEY2
   let url2=`https://api.weatherbit.io/v2.0/current?city=${capital}&key=${API_KEY2}`
   // https://api.weatherbit.io/v2.0/current?city=Budapest&key=ce6b5aca0a064b3c99dbf8249a646799 
    let iconurl2 =`./icons/${iconCode2}.png`

    useEffect(() => {
      axios
        .get(url1)
        .then(response => {
          setTimeout(()=>{}, 5000)
     
         weather = response.data
     
         weather? console.log(weather) :console.log('wwno weather data')
        
         setTimeout(()=>{
          weather? console.log(weather) :console.log('no weather data')
            weather? setTemp(Number.parseFloat((weather.list[0].main.temp)-273).toFixed(2)) : setTemp(0)

            weather? setDesc(weather.list[0].weather[0].description) : setDesc('')
            weather? setIconCode(weather.list[0].weather[0].icon) : setIconCode('')

            weather? setWind(weather.list[0].wind.speed) : setWind(0)

             console.log(temp)
            console.log(desc)
            console.log(iconCode)
            console.log(wind) 
        },1000)
       

        })
    }, [])
 
  
  
    

 
  useEffect(() => {
      axios
        .get(url2)
        .then(response => {
          setTimeout(()=>{}, 5000)
     
        let weather2 = response.data
     
         weather2? console.log(weather2) :console.log('w2wno weather data')
        
         setTimeout(()=>{
          weather2? console.log(weather2) :console.log('no weather data')
            weather2? setTemp2(weather2.data[0].temp) : setTemp2(0)
            weather2? setDesc2(weather2.data[0].weather.description) : setDesc2('')
            weather2? setIconCode2(weather2.data[0].weather.icon) : setIconCode2('')

            weather2? setWind_spd(Number.parseFloat(weather2.data[0].wind_spd).toFixed(2)) : setWind_spd(0)
            weather2? setWind_cdir(weather2.data[0].wind_cdir_full) : setWind_cdir('')

           
            console.log(temp2)
            console.log(desc2)
     
            console.log(iconCode2)
            console.log(wind_spd)
            console.log(wind_cdir)

        },200)
       

        })
    }, [])
 

 
  iconurl =`https://openweathermap.org/img/wn/${iconCode}@2x.png`

  iconurl2 =`./icons/${iconCode2}.png`
 

let languages =Object.values(props.country.languages)
  

  return(
    <div >
      <div className="bordered inner-cont1">
        <h2>{props.country.name.common}</h2>
        <p >Capital: {capital}</p>
        <p>Area: {props.country.area}</p>
        <div>Languages: 
          <ul>{languages.map((l1) => <li key={l1}>{l1}</li>)}</ul>
        </div>   
        <img src={props.country.flags.png} width="150px" />
      </div> 
        <div className="bordered inner-cont2">
            <h3 >Weather in {props.country.capital[0]}</h3>
        <div className="bordered">
            <p>Temperature: {temp} °C</p>
            <p>Weather: {desc} </p>
            <img src={iconurl} className="icon"/>
            <p>Wind: {wind} m/s  </p>
            <em>Weather API:<span>openweathermap</span></em>
         </div>
         <div className="bordered">
             <p>Temperature: {temp2} °C</p>
             <p>Weather: {desc2} </p>

             <img src={iconurl2} className="icon"/>
             <p>Wind-speed: {wind_spd} m/s  </p>
             <p>Wind-direction: {wind_cdir}</p>
             <em>Weather API:<span>weatherbit</span></em>
        </div>   
        </div>

    </div>
  )


}

export default Details