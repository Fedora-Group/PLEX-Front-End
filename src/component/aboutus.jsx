import React, { useState } from 'react';
import { Link } from "react-router-dom";




function AboutUs() {


    const [num, setNumber] = useState(0)
    const [events, setEvents] = useState([])

    async function getEventsCount() {
        const url = 'https://oauth-maq.herokuapp.com/events';
        let result = await fetch(url, {

            method: 'get',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },

        })
        let data = await result.json();
        setNumber(data.length)
        setEvents(data)
    }
    React.useEffect(() => {
        // console.log ('hi')
        getEventsCount()
    }, [])

    return (
        <React.Fragment>
            
           
            {/* <div style={{ 'padding': '30px' }}> */}
                <div className=' min-h-screen p-8 bg-aboutImg rounded-3xl bg-cover shadow-lg opacity-80 bg-no-repeat'>
              
                <div className='bg-gray-200 p-2.5  opacity-80 mt-40 leading-6 text-center rounded-3xl  '>
                    <h2 className='font-serif text-lg italic text-blue-800 '>PLEX Creates Possibilities</h2>
                    <p className='font-serif text-sm'>
                        PLEX is a platform for finding and Creating events.
                        People use PLEX to meet new people, learn new things, share knowledge, get out of their comfort zones, communicate their thought, and pursue their passions, together.
                    </p>
                   
                    
                </div>
                <div className=' p-2.5 mt-6 leading-6 text-center rounded-3xl'>

                    <button className='transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-full'><Link to='/'>Join PLEX</Link></button>
                </div>
            </div>

            <div className='mt-9 text-center '>
               <div className=''>
                <h3 className='font-serif text-lg italic text-blue-800 text-3xl '>
                    What You Can Do With PLEX
                </h3>
                {/* style={{ 'display': 'grid', 'gridTemplateColumns': '1fr 1fr 1fr', 'padding': '30px' }} */}
                <div className='grid grid-cols-3 text-center p-20 gap-3 '>
                    
                    <div className=' bg-blue-300 rounded-md text-center leading-8 w-11/12 h-44'>
                        {/* <img src='https://e.top4top.io/p_2025lzlp31.png' alt='search' style={{ 'width': '170px', 'height': '150px' }}></img> */}
                        <h4 className='mt-5 font-serif text-blue-800  text-xl'>Search New Interesting Events</h4>
                        <p className='mt-3'>Search for an event in your area of interest, Attend new Events everyday, join others with same interests  </p>
                    </div>

                    <div className='bg-blue-300 text-center rounded-md  leading-8 w-11/12 h-44'>
                        {/* <img src='https://b.top4top.io/p_202544u6y1.png' alt='create' style={{ 'width': '200px', 'height': '150px' }}></img> */}
                        <h4 className='mt-5  font-serif text-blue-800   text-xl'>Share your Thoughts</h4>
                        <p className='mt-3'>create events, share your knowledge, and expand your network and gain experience </p>
                    </div>

                    <div className='bg-blue-300 text-center rounded-md leading-8 w-11/12 h-44'>
                        {/* <img src='https://g.top4top.io/p_2025mfc6z1.png' alt='communicate' style={{ 'width': '200px', 'height': '150px' }}></img> */}
                        <h4 className='mt-5 font-serif text-blue-800   text-xl'>communicate</h4>
                        <p className='mt-3'>Join discussions in events with others, ask about events , and interact with the host during the event</p>
                    </div>

                </div>
            </div>
            {/* style={{ 'display': 'grid', 'gridTemplateColumns': '50% 50%', 'padding': '30px' }} */}
                <div className='m-auto p-10  bg-gray-100  border-2 rounded-xl  border-opacity-5 w-96 ' >

                    <div className='animate-pulse font-serif text-center text-indigo-700  '>
                        Til this Moment <br />
                       <span className=' text-xl italic font-bold leading-8 text-pink-600'>
                            {num} <br />
                           </span>
                        Events have Been Created
                    </div>
                    {/* <div> */}
                    {/* {
                        events.map(item=>(
                        <div>
                            <h4>{item.name}</h4>
                            <p> {item.description ? item.description : ''} </p>
                        </div>
                    ))
                    
                    } */}
                    {/* </div> */}
                    </div>
{/* style={{ 'display': 'grid', 'grid-template-columns': '1fr 1fr 1fr', 'grid-column-gap': '20px', 'grid-row-gap': '20px', 'grid-template-rows': '1fr 1fr 1fr', 'grid-template-columns': '1fr 1fr 1fr', 'margin': 'auto' }} */}
                    <div className='grid  grid-cols-3 gap-2 m-14 ' >
                      
                      
                        <div className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                            <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/55441454?v=4" alt='ibrahim' style={{ 'width': '200px', 'height': '200px' }} />
                            <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Ibrahim Banat</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                            <div  className='px-6 pt-4 pb-2'>
                            <p className='animate-bounce  text-red-600'>contact me </p>
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/ibrahimBanat' >GitHub</a><br />
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/ibrba/' >LinkedIn</a>
                            </div>
                            </div>
                        </div>



                        <div  className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                            <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78357436?v=4" alt='mohammad' style={{ 'width': '200px', 'height': '200px' }} />
                          <div className='px-6 py-4'>
                            <h2  className='font-bold text-xl mb-2 text-blue-800'>Mohammad Quthama</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                            <div className='px-6 pt-4 pb-2'>
                            <p className='animate-bounce  text-red-600'>contact me </p>
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/mohammad-qethama' >GitHub</a><br />
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/mohammad-quthama-500541184/' >LinkedIn</a>
                            </div>
                          </div>
                        </div>



                        <div  className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                            <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78385348?v=4" alt='Neveen' style={{ 'width': '200px', 'height': '200px' }} />
                           <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Neveen Beiram</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                           <div className='px-6 pt-4 pb-2'>
                           <p className='animate-bounce  text-red-600'>contact me </p>
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/NeveenBeiram' >GitHub</a><br />
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/neveen-beiram/' >LinkedIn</a>
                        </div>
                           </div>
                           </div>



                        <div  className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                            <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78357015?v=4" alt='tamarajr' style={{ 'width': '200px', 'height': '200px' }} />
                            <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Tamara Al-Billeh</h2>
                            <p  className='text-gray-700 text-base'>Full Stack Web Developer</p>
                           <div className='px-6 pt-4 pb-2'>
                           <p className='animate-bounce  text-red-600'>contact me </p>
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/tamaraalbilleh' >GitHub</a><br />
                            <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/tamaraalbilleh/' >LinkedIn</a>
                           </div>
                        </div>
                        </div>
                        
                        
                        <div  className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                            <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78374286?v=4" alt='tamarasr' style={{ 'width': '200px', 'height': '200px' }} />
                           <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Tamara Al-Rashed</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                          <div className='px-6 pt-4 pb-2 '>
                              <p className='animate-bounce  text-red-600'>contact me </p>
                            <a className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/Tamaraalrashed' >GitHub</a><br />
                            <a  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/tamara-alrashed/' >LinkedIn</a>
                          </div>
                        </div>
                           </div>
                    </div>
                
            </div>

          
        </React.Fragment>
    )
}


export default AboutUs;