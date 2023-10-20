const Total = (props) => {

let total = props.parts.reduce((sum, item) =>  {
  
  return sum + parseInt(item.exercises)},0) 
   

   
    return (
        <div>
             <h4>Total of {total} exercises </h4>
        </div>  
    )
}

export default  Total