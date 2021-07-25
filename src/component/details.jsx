import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEvent,updateEvent,deleteEvent } from '../store/events';
import cookie from 'react-cookies';
import{Link,useHistory,Redirect} from 'react-router-dom';

export default function EventDetails(props){
    const [show,setShow]=useState(false)
    const [deletedFlag, setDeletedFlag] = useState(false)
    const dispatch = useDispatch();
    const history=useHistory();
    const id=window.location.pathname.split('/')[2]
  
    const state = useSelector(state => {
        return {
            events: state.events

        }
    });
    // console.log('props',window.location.pathname.split('/')[2]);
    
    // console.log('state',state.events);
    
useEffect(() => {
  dispatch(getEvent(id))

}, [])

const editHandler =( e ) =>{
    e.preventDefault()
    let event = {
        name : e.target.name.value,
        description :e.target.description.value,
        from : e.target.from.value,
        end  : e.target.end.value,
        attendance_limit :e.target.attendance_limit.value,
        address : e.target.address.value,
        catagories :e.target.catagories.value,
        type : e.target.type.value,
        room_owner  :e.target.room_owner.value,
    }
    let id = e.target.eventId.value
    dispatch(updateEvent(event , id))
    history.push('/event/:id')
    setShow(false)
}

const deleteHandler = id =>{
    dispatch(deleteEvent( id))
    setDeletedFlag(true)
    // history.push('/event')
}
const username=cookie.load('username')
// console.log(username);
// console.log(state.events.room_owner);

return(
    <>
    <div>
    <small>From : {state.events.from} To : {state.events.end}</small> 
     <h3>Hosted By: {state.events.room_owner}</h3>
     <h3> Location: {state.events.address}</h3>
     <h3> Type: {state.events.type}</h3>
     <h3> Category: {state.events.categories}</h3>
     <h3> Attendance limit: {state.events.attendance_limit}</h3>

     </div>

<div>
{/* <If condition > */}
{state.events.room_owner===username &&
<>


 <button onClick={()=> (show?setShow(false):setShow(true))}>update event</button>

{/* <Link to={`/event/`}> */}
 <button onClick={()=> (deleteHandler (state.events._id))}>delete event</button>
 {/* </Link> */}
{
 show&&<form onSubmit={editHandler }>
    <input type='hidden' value={state.events._id} name='eventId'/>
    <input type='text' name='name' placeholder='name' />
    <input type='text' name='description' placeholder='description'/>
    <input type='text' name='from' placeholder='from' />
    <input type='text' name='end' placeholder='end'/>

    <input type='number' name='attendance_limit' placeholder='number'/>
    <input type='text' name='address' placeholder='address'/>
    <input type='text' name='catagories' placeholder='catagories'/>

    <select  name="type">

        <option value="real_word">real_word</option>
        <option value="online">online</option>
    </select>

    <input type='text' name='room_owner' placeholder='room owner'/>
    <button type='submit'>submit</button>
</form>
}
 
 <hr></hr>
 <hr></hr>
 </>
} 

</div>
{
    //   deletedFlag&& <Direc to='/event'><button>go</button></Direc>
     deletedFlag&& <Redirect to='/event'/>
    //  <button>go</button></Redirect>
  
}

  </>
)




}