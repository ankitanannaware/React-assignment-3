import { useState } from "react"
import View from './View'
const User=()=>{
   const [username,setUsername]=useState("")
   const [age,setAge]=useState("")
   const [tasks,setTasks]=useState([])
   
   const usernameChangeHandler=(event)=>{
      setUsername(event.target.value)
   }
   const ageChangeHandler=(event)=>{
      setAge(event.target.value)
   }
 
   const submitHandler=(event)=>{
       event.preventDefault()
       const task={
          username:username,
          age:age
       }
       setTasks([...tasks,task])
       setUsername("")
       setAge("")
    }
    return(
        <div className="User">
         <form onSubmit={submitHandler}>
            <div>
              <label>Username<br></br></label>
              <input type="text" value={username} onChange={usernameChangeHandler}/> 
            </div> 
            <div>
              <label>Age(In Years)<br></br></label>
              <input type="text" value={age} onChange={ageChangeHandler}/> 
            </div>  
            <div>
              <button>Add User</button>
            </div> 
            <div>
              <input type="text" value="Max (31 years old)" /> 
            </div> 
         </form> 
         {
            tasks.map((task)=>{
               return(
                  <View username={task.username} age={task.age}/>
               )
            })
         }
         </div>
        
    )
}
export default User