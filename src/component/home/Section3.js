import React from 'react';
import { ReactComponent as Cont } from '../../assets/cont.svg';
import After from './After';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';

const Section3 = () => {
  return (
    <div className='relative mt-4'>
      <Cont className='w-full' />
      <After />
      <div className=' flex flex-col items-center'>
        <div className='flex items-center justify-center flex-col mb-20'>
          <h1 className='font-semibold text-6xl text-header'>
            Got a question ?
          </h1>
          <h3 className='font-extralight text-2xl text-header mt-5'>
            We'd like to talk more about what you need
          </h3>
        </div>
        <div className='flex w-full justify-center px-20 gap-3'>
          <div className='w-1/4 flex flex-col items-center h-52 border-r border-gray-300 justify-center'>
            <div className='inline-flex items-center justify-center shadow-round w-16 h-16 rounded-full p-4'>
              <BusinessRoundedIcon
                fontSize={'large'}
                style={{ color: '#5E72E4' }}
              />
            </div>
            <h4 className='text-3xl text-header mt-8'>Address</h4>
            <p className='text-l text-gray-400 mt-5'>Amman, Jordan</p>
          </div>
          <div className='w-1/4 flex flex-col items-center h-52 border-r border-gray-300 justify-center'>
            <div className='inline-flex items-center justify-center shadow-round w-16 h-16 rounded-full p-4'>
              <MailOutlineRoundedIcon
                fontSize={'large'}
                style={{ color: '#5E72E4' }}
              />
            </div>
            <h4 className='text-3xl text-header mt-8'>Email</h4>
            <p className='text-l text-gray-400 mt-5'>support@plex.com</p>
          </div>
          <div className='w-1/4 flex flex-col items-center h-52 border-r border-gray-300 justify-center'>
            <div className='inline-flex items-center justify-center shadow-round w-16 h-16 rounded-full p-4'>
              <PhoneAndroidRoundedIcon
                fontSize={'large'}
                style={{ color: '#5E72E4' }}
              />
            </div>
            <h4 className='text-3xl text-header mt-8'>Phone</h4>
            <p className='text-l text-gray-400 mt-5'>+9(62) 535 3523</p>
          </div>
          <div className='w-1/4 flex flex-col items-center h-52  justify-center'>
            <div className='inline-flex items-center justify-center shadow-round w-16 h-16 rounded-full p-4'>
              <ContactSupportRoundedIcon
                fontSize={'large'}
                style={{ color: '#5E72E4' }}
              />
            </div>
            <h4 className='text-3xl text-header mt-8'>Contact</h4>
            <p className='text-l text-gray-400 mt-5'>Plex Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
