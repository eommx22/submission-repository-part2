

function Filter(props){

return (
    <div className='filter'>
         <h4> filter shown with:</h4> 
          <input type="text"
             value={props.value}
             onChange={props.onChange}
           />
    </div>
)
}

export default Filter