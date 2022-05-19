import {Form ,FormGroup,Label,Input,Button,Badge} from 'reactstrap'
import ViewUser from './ViewUser'
import {useRef, useState} from 'react'
import NewModal from './NewModal'
const AddUser=()=>{
   const [username,setUsername] = useState("")
   const [age,setAge] = useState(0)
   const [users,setUsers] = useState([])
   const [error,setError] = useState(null)
   const [isError,setIsError] = useState(false)
   const usernameRef= useRef()
   const ageRef= useRef()

   const usernameChangeHandler=(event)=>{
         console.log(usernameRef.current.value)
         setUsername(event.target.value)
   }
   const ageChangeHandler=(event)=>{
         setAge(event.target.value)
   }
   const setIsErrortofalse=()=>{
         setIsError(false)
   }
   const random =()=>{
      console.log(usernameRef.value)
      console.log(ageRef)
   }
   const submitHandler=(event)=>{
      event.preventDefault()
      if(username.length>2 && age>0 && age < 126){
         setError(null)
         const user={
            username:username,
            age:age
         }
         setUsers([...users,user])
      }else{
         // console.log("error")
         if(username.length<=0 && age==0){
            setIsError(true)
            setError("Please enter the correct value")
            // alert("Please enter the correct value") 
         }
         else if(username.length<3){
            // alert("Username cannot be less than 3 character")
            setIsError(true)
            setError("Username cannot be less than 3 character")
         }
         else if(age<0 || age>125 ){
            // alert("Age cannot be less than 1 and not greater than 125")
            setIsError(true)
            setError("Age cannot be less than 1 and not greater than 125")
         }
      }

   }
   return(
      <div>
         {random()}
         <h1 className='text-center'>Add User form</h1>
        <Form onSubmit={submitHandler}>
         <FormGroup>
           <Label for="Username">Username</Label>
            <Input 
            type="text" 
            name="Username" 
            id="Username" 
            placeholder="Username" 
            onChange={usernameChangeHandler}
            // ref={usernameRef}
            innerRef={usernameRef}/>
         </FormGroup>
         <FormGroup>
           <Label for="Age">Age</Label>
            <Input 
            type="number" 
            name="Age" 
            id="Age" 
            placeholder="Age"
            onChange={ageChangeHandler} 
            // ref={ageRef}
            innerRef={ageRef}/>
         </FormGroup>
         <Button type="submit" color="primary">Add User</Button>
        </Form>
        {/* {error ? <div className='pt-2'><Badge color="danger">{error}</Badge></div>:""} */}
        {isError ? <NewModal error={error} closeError={setIsErrortofalse}/>:""}
        <h1 className='text-center pt-5'>Added Users</h1>
        {
           users.map(user=>{
              return(
               <ViewUser user={user}/>
              )
           })
        }
        
      </div>
   )
}
export default AddUser