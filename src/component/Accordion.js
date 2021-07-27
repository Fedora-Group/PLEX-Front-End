import React from 'react';

const Accordion = props => {
  let border = ``;
  if (props.length !== 0) {
    border = `border-b border-gray-200`;
  }
  return (
    <div class='container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100'>
      <div class='px-4 py-5 sm:px-6 border-b w-full '>
        <div className={`pb-2 ${border}`}>
          <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white'>
            Online Users ({props.length})
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200'>
            informations about Audenice.
          </p>
        </div>
        <ul className='flex flex-col divide divide-y w-full  h-full'>
          {props.children}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
