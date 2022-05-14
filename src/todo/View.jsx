const View=(props)=>{
  return(
      <div>
          <h1>Viewtask</h1>
          <ul>
              <li>{props.username}</li>
              <li>{props.age}</li>
          </ul>
      </div>
  )
}
export default View