import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import cookie from 'react-cookies';
// import superagent from 'superagent'


let apiUrl = 'https://oauth-maq.herokuapp.com/events';

const eventsSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        get(state, action) {
            console.log('stateFromStore', action.payload);
           return action.payload
        },
        // single(state, action) {
        //     return action.payload
        //      // console.log('stateFromStore', state);
        //  }

    }

})

export const { get,single } = eventsSlice.actions;

export const getEvents = () => async dispatch => {

    // get all events with axios // 
    await axios.get (apiUrl , {
        headers: {'Content-Type': 'application/json',
        'Accept-Language':'en',
        cache:'no-cache',
        mode: 'cors',
        withCredentials: true}
     })
    .then (res => {
    //  console.log('insideEventsss',res.data);

        // console.log('check',res.data);
        dispatch(get(res.data))
    })
    .catch ((err) => console.error (err))

}



export const getEvent = (id) => async dispatch => {
    // get event by id with axios // 
    let url = `${apiUrl}/${id}`
    const token = cookie.load('token');
    await axios.get (url , {
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept-Language':'en',
        cache:'no-cache',
        mode: 'cors',
        withCredentials: true}
    })
    .then (res => {
        console.log('check',res.data);
        // dispatch(single(res.data))
        
    })
    .catch ((err) => console.error (err))
   
}


export const createEvent = (event) => async dispatch => {
     // create events with axios // 
    const token = cookie.load('token');
    let user = cookie.load('username');
    console.log ('user cookie' , user)

    let event2 = { 
        name :' event.name',
        description : 'event.description',
        from : 'event.from',
        end  : 'event.end' ,
        attendance_limit : 4,
        address : 'event.address' ,
        catagories : 'event.catagories',
        type : 'online',
        room_owner  :user,
    }
    // console.log ('cookies in create ' ,cookie.loadAll() )
    axios.post(apiUrl,event2,{
        headers :  {  
            Authorization: `Bearer ${token}`,
            'Accept-Language':'en',
            cache:'no-cache',
            mode: 'cors',
            'Content-Type': 'application/json',
            withCredentials : true,
            username : 'ravi2',
            "Cookies":  cookie.loadAll() 
        },
    })
    .then (res => {
        console.log('check',res.data);
    }).catch ((err)=> console.error (err))

}


export const updateEvent = (event ,id) => async dispatch => {
    // update events with axios // 
    let url2 = `${apiUrl}/${id}`
    const token = cookie.load('token');
          
    await axios({
        method: 'put',
        url : url2,
        headers :  {
            'Authorization': 'Bearer ' + token ,
        },
        data : event       
    })
    .then (res => {
        console.log('check',res.data);
        dispatch(getEvent(id))
    }).catch ((err)=> console.error (err))

}



export const deleteEvent = (id) => async dispatch => {
    // delete with axios // 
    const url = `${apiUrl}/${id}`
    const token = cookie.load('token');
      
    await axios.delete (url , {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept-Language':'en',
            cache:'no-cache',
            mode: 'cors',
           withCredentials: true}
    })
    .then (res => {
        console.log('check',res.data);
        // dispatch(getEvents())
        
    })
    .catch ((err)=> console.error (err))
  
}

export default eventsSlice.reducer;


  // get event by id with super agent // 
  // let result = superagent.get (url).set('token' , token )
   
  //   .set('Accept-Language', 'en')
  //   .set('Content-Type', 'application/json')
  //   .set('mode','cors')
  //   .set('withCredentials','true')
  //   .set ( 'Authorization', `Bearer ${token}`)
  // .then ((res)=> console.log (res.body))
  //   console.log('check Hi2');





      // create events with superagent //
   // let result = superagent.post (apiUrl)
      // .set('token' , token )
      //   .send({
      //       // name : event.name,
      //       // description : event.description,
      //       // from : event.from,
      //       // end  : event.end ,
      //       // attendance_limit : event.attendance_limit,
      //       // address : event.address ,
      //       // catagories : event.catagories,
      //       // type : event.type,
      //       // room_owner  :event.room_owner
      //       name :' event.name',
      //       description : 'event.description',
      //       from : 'event.from',
      //       end  : 'event.end' ,
      //       attendance_limit : 4,
      //       address : 'event.address' ,
      //       catagories : 'event.catagories',
      //       type : 'online',
      //       room_owner  :'ravi2',
      //   })
      //   .set('Cookie', "username=ravi2")
      //   .set('Accept-Language', 'en')
      //   .set('Content-Type', 'application/json')
      //   .set('mode','cors')
      //   .set('withCredentials','true')
      //   .set ( 'Authorization', `Bearer ${token}`)
      // .then ((res)=> console.log (res.body))
      //   console.log('check Hi2');




// update events with superagent // 
        //   let result = superagent.put (url)
        // .set('token' , token )
        //     .send(event)
        //     .set('Accept-Language', 'en')
        //     .set('Content-Type', 'application/json')
        //     .set('mode','cors')
        //     .set('withCredentials','true')
        //     .set ( 'Authorization', `Bearer ${token}`)
        //   .then ((res)=> console.log (res.body)).catch((err)=> console.error (err))
        //     console.log('check Hi2');
        // return axios({ method: 'get', url: api + '/api/user/getUserInfo?UserId=1', headers: { 'Authorization': 'Bearer ' + accessToken } })


 // delete with superagent // 
    // export const deleteEvent = (id) => async dispatch => {
    //     let url = `${apiUrl}/${id}`
    //     const token = cookie.load('token');
        
    //       let result = superagent.delete (url)
    //       .set('token' , token )
    //         // .send(event)
    //         .set('Accept-Language', 'en')
    //         .set('Content-Type', 'application/json')
    //         .set('mode','cors')
    //         .set('withCredentials','true')
    //         .set ( 'Authorization', `Bearer ${token}`)
    //       .then ((res)=> console.log (res.body)).catch((err)=> console.error (err))
    //         console.log('check Hi2');
    // }

// event example // 
// {
//     "name":"The Art of Making a Lasting First Impression in Dating1",
//     "description":"Imagine going on a date while stepping into your Feminine Power, creating a meaningful connection and leaving a lasting impression.",
//     "from":"17-6-2021",
//     "end" : "20-6-2021",
//     "attendance_limit":40, 
//     "address" :"Amman-Jordan",
//     "catagories":"Dating",
//     "type":"online"
//   }