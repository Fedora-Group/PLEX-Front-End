import React , {useState } from 'react';
import { Link } from "react-router-dom";

function AboutUs () {


    const [num , setNumber] = useState (0)
    const [events , setEvents] = useState ([])

    async function getEventsCount (){
        const url = 'https://oauth-maq.herokuapp.com/events';
        let result = await fetch (url,{
            
                method: 'get',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
            
        })
        let data = await result.json ();
        setNumber (data.length)
        setEvents (data)
    }
    React.useEffect(() => {
        // console.log ('hi')
        getEventsCount ()
    },[])
    
    return (
        <React.Fragment>
        <div style={{ 'padding': '30px'}}>
            <h2>PLEX Creates Possibilities</h2>
            <p>
            PLEX is a platform for finding and Creating events.
            People use PLEX to meet new people, learn new things, share knowledge, get out of their comfort zones, communicate their thought, and pursue their passions, together.
            </p>
            
            <button><Link to='/'>Join PLEX</Link></button>    
        </div>
        <div>
            <h3 >
                What You Can Do With PLEX
            </h3>
            <div style={{'display' : 'grid' , 'gridTemplateColumns' : '1fr 1fr 1fr' , 'padding': '30px'}}>
                <div>
                <img src='https://e.top4top.io/p_2025lzlp31.png' alt='search' style={{'width' : '170px' , 'height' : '150px'}}></img>
                    <h4>Search New Interesting Events</h4>
                    <p>Search for an event in your area of interest, Attend new Events everyday, join others with same interests  </p>
                </div>

                <div>
                <img src='https://b.top4top.io/p_202544u6y1.png' alt='create' style={{'width' : '200px' , 'height' : '150px'}}></img>
                    <h4>Share your Thoughts</h4>
                    <p>create events, share your knowledge, and expand your network and gain experience </p>
                </div>

                <div>
                <img src='https://g.top4top.io/p_2025mfc6z1.png' alt='communicate' style={{'width' : '200px' , 'height' : '150px'}}></img>
                    <h4>communicate</h4>
                    <p>Join discussions in events with others, ask about events , and interact with the host during the event</p>
                </div>
                
            </div>
            <div style={{'display' : 'grid' , 'gridTemplateColumns' : '50% 50%' , 'padding' : '30px'}}>
            
                <div>
                    Til this Moment <br/>
                    {num} <br/>
                     Events have Been Created 
                </div>
                <div>
                    {
                        events.map(item=>(
                        <div>
                            <h4>{item.name}</h4>
                            <p> {item.description ? item.description : ''} </p>
                        </div>
                    ))
                    
                    }
                </div>
            <div style={{'display' : 'grid' , 'grid-template-columns': '1fr 1fr 1fr','grid-column-gap': '20px' , 'grid-row-gap': '20px','grid-template-rows': '1fr 1fr 1fr' , 'grid-template-columns': '1fr 1fr 1fr' , 'margin' : 'auto'}}>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/55441454?v=4" alt='ibrahim' style={{'width' : '200px' , 'height' : '200px'}}/>
                        <h2>Ibrahim Banat</h2>
                        <p>Full Stack Web Developer</p>
                        <a href='https://github.com/ibrahimBanat' >GitHub</a><br/>
                        <a href='https://www.linkedin.com/in/ibrba/' >LinkedIn</a>
                    </div>

                    <div>
                        <img src="https://avatars.githubusercontent.com/u/78357436?v=4" alt='mohammad' style={{'width' : '200px' , 'height' : '200px'}}/>
                        <h2>Mohammad Quthama</h2>
                        <p>Full Stack Web Developer</p>
                        <a href='https://github.com/mohammad-qethama' >GitHub</a><br/>
                        <a href='https://www.linkedin.com/in/mohammad-quthama-500541184/' >LinkedIn</a>
                    </div>

                    <div>
                        <img src="https://avatars.githubusercontent.com/u/78385348?v=4" alt='Neveen' style={{'width' : '200px' , 'height' : '200px'}}/>
                        <h2>Neveen Beiram</h2>
                        <p>Full Stack Web Developer</p>
                        <a href='https://github.com/NeveenBeiram' >GitHub</a><br/>
                        <a href='https://www.linkedin.com/in/neveen-beiram/' >LinkedIn</a>
                    </div>

                    <div>
                        <img src="https://avatars.githubusercontent.com/u/78357015?v=4" alt='tamarajr' style={{'width' : '200px' , 'height' : '200px'}}/>
                        <h2>Tamara Al-Billeh</h2>
                        <p>Full Stack Web Developer</p>
                        <a href='https://github.com/tamaraalbilleh' >GitHub</a><br/>
                        <a href='https://www.linkedin.com/in/tamaraalbilleh/' >LinkedIn</a>
                    </div>

                    <div>
                        <img src="https://avatars.githubusercontent.com/u/78374286?v=4" alt='tamarasr' style={{'width' : '200px' , 'height' : '200px'}}/>
                        <h2>Tamara Al-Rashed</h2>
                        <p>Full Stack Web Developer</p>
                        <a href='https://github.com/Tamaraalrashed' >GitHub</a><br/>
                        <a href='https://www.linkedin.com/in/tamara-alrashed/' >LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>


        </React.Fragment>
    )
}


export default AboutUs;