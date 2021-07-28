import React from 'react';

function NotFound  () {
    return (
        <>
            <div className='w-full min-h-screen bg-center bg-origin-content bg-404 bg-cover bg-no-repeat  '>
                <h1 className='text-indigo-500 font-bold text-9xl text-center pt-48 pl-48 pr-48' style={{'font-size' : '10rem' }}>404</h1>
                <p className='text-tama font-semibold text-5xl text-center mt-16'>Page not found </p>
                <p className='text-gray-400 font-semibold text-4xl text-center mt-8'>Ooups! Looks like you got lost. </p>
            </div>            
        </>
    )
}
export default  NotFound