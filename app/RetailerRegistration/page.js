'use client'
import React, { useState } from 'react';
import bg from '@/public/sign_up_background.jpg';
import { Input, Button } from "@material-tailwind/react";

const Page = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Phone_Number: '',
        Password: '',
        GST_Number: '',
        Shop_Agreement: '',
        Address: '',
        State: '',
        District: '',
        Pincode: '',
        path: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Define the URL for your API endpoint
        const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:eaXUv0bD/retailer';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                // Check if the API response indicates success
                if (data.success) {
                    setSuccessMessage('Registration successful!');
                    console.log(data)
                    setError(''); // Clear any previous error message
                } else {
                    setError('Registration failed. Please try again.');
                    setSuccessMessage(''); // Clear any previous success message
                    console.log(data)
                }
            })
            .catch(error => {
                setError('An error occurred. Please try again.');
                setSuccessMessage(''); // Clear any previous success message
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='relative items-center h-screen'>
            <div
                className='absolute w-full h-full bg-fixed -z-10 bg-cover'
                style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            <div className='text-white pt-24 text-center'>
                <h1 className='text-6xl'>Registration</h1>
            </div>
            <form className='flex justify-center pt-10' onSubmit={handleSubmit}>
                <div className='pl-48 pt-10 w-100 pr-48'>
                    <Input
                        variant="outlined"
                        label="Name"
                        onChange={handleChange}
                        name="Name"
                        className='h-10'
                        color='white'
                        value={formData.Name}
                    />
                    <div className='grid pt-10 text-white grid-cols-2 gap-72'>
                        {/* ... (other input fields) */}
                        <Input
                            variant="outlined"
                            label="Phone Number"
                            onChange={handleChange}
                            name="Phone_Number"
                            color='white'
                            value={formData.Phone_Number}
                        />
                        <Input
                            variant="outlined"
                            label="Password"
                            onChange={handleChange}
                            type='password'
                            name="Password"
                            color='white'
                            value={formData.Password}
                        />        </div>
                    <div className='grid pt-10 text-white grid-cols-2 gap-72'>
                        <Input
                            variant="outlined"
                            type='text'
                            label="GST Number"
                            onChange={handleChange}
                            name="GST_Number"
                            color='white'
                            value={formData.GST_Number}
                            className='p-80'
                        />
                        <Input
                            variant="outlined"
                            type='file'
                            label="Shop Agreement"
                            onChange={handleChange}
                            name="Shop_Agreement"
                            value={formData.Shop_Agreement}
                            color='white'
                        />
                    </div>
                    <div className='pt-10'>
                        <Input
                            variant="outlined"
                            type='text'
                            label="Address"
                            height={56}
                            onChange={handleChange}
                            name="Address"
                            className='h-56'
                            color='white'
                            value={formData.Address}
                        />
                    </div>
                    <div className='pt-10 flex gap-8'>
                        <Input
                            variant="outlined"
                            type='dropdown'
                            label="State"
                            height={56}
                            onChange={handleChange}
                            name="State"
                            className='h-56'
                            color='white'
                            value={formData.State}
                        />
                        <Input
                            variant="outlined"
                            type='dropdown'
                            label="District"
                            height={56}
                            onChange={handleChange}
                            name="District"
                            className='h-56'
                            color='white'
                            value={formData.District}
                        />
                        <Input
                            variant="outlined"
                            type='number'
                            label="Pincode"
                            height={56}
                            onChange={handleChange}
                            name="Pincode"
                            className='h-56'
                            color='white'
                            value={formData.Pincode}
                        />
                    </div>
                    {/* ... (other input fields) */}
                    <div className='mt-10 flex justify-end pr-5'>
                        <Button variant='gradient' ripple={true} color='green' type="submit">Submit</Button>
                    </div>
                    {successMessage && (
                        <p className="text-green-500 text-center">{successMessage}</p>
                    )}
                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Page;