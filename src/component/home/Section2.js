const Content = () => {
  return (
    <div className='relative pt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 z-10'>
      <div className='absolute inset-0'>
        <div className='absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4' />
      </div>
      <div className='relative'>
        <div className='grid gap-12 row-gap-8 lg:grid-cols-2'>
          <div className='grid gap-12 row-gap-5 md:grid-cols-2'>
            <div className='relative'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 w-32 -mt-8 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12'
              >
                <defs>
                  <pattern
                    id='d06ca312-d4ed-465f-ad18-fb0c0f92b6f1'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)'
                  width='52'
                  height='24'
                />
              </svg>
              <div className='relative'>
                <div className='flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400'>
                  <svg
                    className='w-8 h-8 text-teal-900'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </div>
                <h6 className='mb-2 font-semibold leading-5'>
                Join PLEX Today                </h6>
                <p className='text-sm text-gray-900'>
                  Join Our Continuously Growing Community 
                  and explore new features and meet with others
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400'>
                <svg
                  className='w-8 h-8 text-teal-900'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <h6 className='mb-2 font-semibold leading-5'>
              find your people
              </h6>
              <p className='text-sm text-gray-900'>
              Plex brings people together in person (and now online!)              </p>
            </div>
            <div>
              <div className='flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400'>
                <svg
                  className='w-8 h-8 text-teal-900'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <h6 className='mb-2 font-semibold leading-5'>
                Sign up Now 
              </h6>
              <p className='text-sm text-gray-900'>
              Join us in our mission of empowering people to achieve personal growth by making real human connections.
              </p>
            </div>
            <div>
              <div className='flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400'>
                <svg
                  className='w-8 h-8 text-teal-900'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <h6 className='mb-2 font-semibold leading-5'>
                Host Events
              </h6>
              <p className='text-sm text-gray-900'>
                Create events or find upcoming events and keep connected to your community.

              </p>
            </div>
          </div>
          <div>
            <img
              className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
              src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
