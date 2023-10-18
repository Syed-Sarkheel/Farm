'use client'
import { SimpleRegistrationForm } from '@/components/SimpleRegistrationForm'
import React from 'react'
import bg from '@/public/sign_in_background.jpg';


const page = () => {
    return (
        <div className='relative flex justify-end items-center h-screen'>
            <div
                className='absolute w-full h-full bg-fixed bg-cover'
                style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            <SimpleRegistrationForm name='Retailer' path={'Retailer/Products'} />
        </div>
    )
}

export default page