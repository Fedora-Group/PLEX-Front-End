import React from 'react';
import { useHistory } from 'react-router';

const BackToHome = () => {
  const history = useHistory();
  return (
    <div className=' min-h-screen bg-center bg-origin-content bg-404 bg-cover bg-no-repeat  '>
     
     <p className='text-tama font-semibold  text-center  text-center pt-48 pl-48 pr-48' style={{'font-size' : '2rem' }}>
     sorry you have been kicked <br/>or the meeting has been ended
       </p>
    

      <button  className='rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
            
            onClick={() => {
              history.push('/');
            }}
            >
        Back to home
      </button>
        

    </div>

  );
};

export default BackToHome;
