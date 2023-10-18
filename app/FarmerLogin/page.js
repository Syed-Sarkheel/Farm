'use client'
import { SimpleRegistrationForm } from '@/components/SimpleRegistrationForm';
import React from 'react';
import bg from '@/public/sign_in_background.jpg';

const Page = () => {
    return (
        <div className='relative flex justify-end items-center h-screen'>
            <div
                className='absolute w-full h-full bg-fixed bg-cover'
                style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            <SimpleRegistrationForm name='Farmer' path={'Farmer/Products'} />
        </div>
    );
};

export default Page;