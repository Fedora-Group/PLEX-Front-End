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
                            <div className='px-6 pt-4 pb-2'>
                                <p className='animate-bounce  text-red-600'>contact me </p>

                                {/* <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/ibrahimBanat' >GitHub</a><br />
                                <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/ibrba/' >LinkedIn</a>
                            */}
                                <div className='grid grid-cols-2 gap-10'>

                                    <a className=' p-5' href='https://www.linkedin.com/in/ibrba/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>

                                    <a className=' p-5' href='https://github.com/ibrahimBanat'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                        <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78357436?v=4" alt='mohammad' style={{ 'width': '200px', 'height': '200px' }} />
                        <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Mohammad Quthama</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                            <div className='px-6 pt-4 pb-2'>
                                <p className='animate-bounce  text-red-600'>contact me </p>

                                {/* <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/mohammad-qethama' >GitHub</a><br />
                                <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/mohammad-quthama-500541184/' >LinkedIn</a>
                             */}

                                <div className='grid grid-cols-2 gap-10'>

                                    <a className=' p-5' href='https://www.linkedin.com/in/mohammad-quthama-500541184/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>

                                    <a className=' p-5' href='https://github.com/mohammad-qethama'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                        <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78385348?v=4" alt='Neveen' style={{ 'width': '200px', 'height': '200px' }} />
                        <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Neveen Beiram</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                            <div className='px-6 pt-4 pb-2'>
                                <p className='animate-bounce  text-red-600'>contact me </p>

                                {/* <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/NeveenBeiram' >GitHub</a><br />
                                <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/neveen-beiram/' >LinkedIn</a>
                             */}
                                <div className='grid grid-cols-2 gap-10'>

                                    <a className=' p-5' href='https://www.linkedin.com/in/neveen-beiram/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>

                                    <a className=' p-5' href='https://github.com/NeveenBeiram'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                        <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78357015?v=4" alt='tamarajr' style={{ 'width': '200px', 'height': '200px' }} />
                        <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Tamara Al-Billeh</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                            <div className='px-6 pt-4 pb-2'>
                                <p className='animate-bounce  text-red-600'>contact me </p>

                                {/* <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/tamaraalbilleh' >GitHub</a><br />
                                <a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/tamaraalbilleh/' >LinkedIn</a>
                            */}

                                <div className='grid grid-cols-2 gap-10'>

                                    <a className=' p-5' href='https://www.linkedin.com/in/tamaraalbilleh/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>

                                    <a className=' p-5' href='https://github.com/tamaraalbilleh'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='transform hover: transition duration-500 hover:scale-125 m-auto max-w-sm rounded overflow-hidden shadow-lg mb-14'>
                        <img className='w-full m-auto' src="https://avatars.githubusercontent.com/u/78374286?v=4" alt='tamarasr' style={{ 'width': '200px', 'height': '200px' }} />
                        <div className='px-6 py-4'>
                            <h2 className='font-bold text-xl mb-2 text-blue-800'>Tamara Al-Rashed</h2>
                            <p className='text-gray-700 text-base'>Full Stack Web Developer</p>
                            <div className=' px-6 pt-4 pb-2 '>
                                <p className='animate-bounce  text-red-600'>contact me </p>
                                {/* <a className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://github.com/Tamaraalrashed' >GitHub</a><br /> */}

                                {/* <IconButton>
                            <LinkedInIcon >
                            <a  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' href='https://www.linkedin.com/in/tamara-alrashed/'>LinkedIn</a>
                            </LinkedInIcon>
                            </IconButton> */}
                                <div className='grid grid-cols-2 gap-10'>

                                    <a className=' p-5' href='https://www.linkedin.com/in/tamara-alrashed/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>

                                    <a className=' p-5' href='https://github.com/Tamaraalrashed'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </React.Fragment>
    )
}


export default AboutUs;