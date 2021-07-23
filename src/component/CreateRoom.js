import React from 'react';
import Header from './Header';

const CreateRoom = () => {
  return (
    //   https://res.cloudinary.com/eventcreate/image/upload/v1622059377/eventwebsites_rbwjmx.png
    <div className=' p-8 bg-hero-pattern min-h-screen bg-hero bg-centered bg-cover w-full h-full'>
      <Header />
      <div>
        <div class=''>
          <div class='bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden'>
            <div class='px-4 py-8 sm:px-10'>
              <div>
                <h2>Create Event</h2>
              </div>
              <div>
                <span class='block w-full rounded-md shadow-sm'>
                  <button
                    type='button'
                    class='py-2 px-4  bg-createEvent hover:bg-createEventHover focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                  >
                    Create Event
                  </button>
                </span>
              </div>
              <div class='relative mt-6'>
                <div class='absolute inset-0 flex items-center'>
                  <div class='w-full border-t border-gray-300'></div>
                </div>
                <div class='relative flex justify-center text-sm leading-5'>
                  <span class='px-2 text-gray-500 bg-white'>Or</span>
                </div>
              </div>
              <div class='mt-6'>
                <div class='w-full space-y-6'>
                  <div>Join Event</div>
                  <div class='w-full'>
                    <div class=' relative '>
                      <input
                        type='text'
                        id='search-form-price'
                        class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                        placeholder='Enter Event ID'
                      />
                    </div>
                  </div>

                  <div>
                    <span class='block w-full rounded-md shadow-sm'>
                      <button
                        type='button'
                        class='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                      >
                        Join Event
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=''></div>
      </div>
    </div>
  );
};

export default CreateRoom;
