import Part from "./Part.jsx";

const Content = (props) => {
    return (
        <div>
          {props.parts.map(
            (item)=>
             <Part part={item.name}
                  exercises={item.exercises} 
                   key ={item.id} /> 
                  
          )         
}

         
        </div>
    )
}

export default Content