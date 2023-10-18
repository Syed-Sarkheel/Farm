'use client'
import { SimpleRegistrationForm } from '@/components/SimpleRegistrationForm';
import React from 'react'
// Remove the import statement for CardDefault

const Page = () => {
    return (
        <div className='grid lg:grid-cols-3 p-10 ml-10'>
            <SimpleRegistrationForm />
        </div>
    );
};

export default Page;
