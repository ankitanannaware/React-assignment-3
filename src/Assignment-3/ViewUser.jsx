import {Card,CardBody,CardTitle} from 'reactstrap'
const ViewUser=(props)=>{
    return(
       <div className='pt-2'>
         <Card>
           <CardBody>
             <CardTitle>{props.user.username} ({props.user.age} years old)</CardTitle>
           </CardBody>
         </Card>
       </div>
    )
 }
 export default ViewUser