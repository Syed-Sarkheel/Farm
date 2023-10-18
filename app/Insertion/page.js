'use client'
import React, { useState } from 'react';
import bg from '@/public/sign_up_background.jpg';
import { Input, Button } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';

const Page = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Description: '',
        Stock: '',
        Harvest: '',
        Category: '',
        Price: '',
        Expiry_Date: '',
        Product_Image: '',
    });
    const router = useRouter();
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Define the URL for your API endpoint
        const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:eaXUv0bD/products';
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
                }
            })
            .catch(error => {
                setError('An error occurred. Please try again.');
                setSuccessMessage(''); // Clear any previous success message
            });
        router.push('Farmer/Products')
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
                <h1 className='text-6xl'>Add Products</h1>
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
                            label="Description"
                            onChange={handleChange}
                            name="Description"
                            type='text'
                            color='white'
                            value={formData.Description}
                        />
                        <Input
                            variant="outlined"
                            label="Stock"
                            onChange={handleChange}
                            type='number'
                            name="Stock"
                            color='white'
                            value={formData.Stock}
                        />        </div>
                    <div className='grid pt-10 text-white grid-cols-2 gap-72'>
                        <Input
                            variant="outlined"
                            type='date'
                            label="Harvest"
                            onChange={handleChange}
                            name="Harvest"
                            color='white'
                            className='p-80'
                            value={formData.Harvest}
                        />
                        <Input
                            variant="outlined"
                            type='text'
                            label="Category"
                            onChange={handleChange}
                            name="Category"
                            color='white'
                            value={formData.Category}
                        />
                    </div>
                    <div className='pt-10 flex gap-8'>
                        <Input
                            variant="outlined"
                            type='date'
                            label="Expiry date"
                            height={56}
                            onChange={handleChange}
                            name="Expiry_Date"
                            className='h-56'
                            color='white'
                            value={formData.Expiry_Date}
                        />
                        <Input
                            variant="outlined"
                            type='file'
                            label="Product Image"
                            height={56}
                            onChange={handleChange}
                            name="Product_Image"
                            className='h-56'
                            color='white'
                            value={formData.Product_Image}
                        />
                    </div>
                    <div className='pt-10'>
                        <Input
                            variant="outlined"
                            type='number'
                            label="Price/Kg"
                            height={56}
                            onChange={handleChange}
                            name="Price"
                            className='h-56'
                            color='white'
                            value={formData.Price}
                        />
                    </div>

                    {/* ... (other input fields) */}
                    <div className='mt-10 flex justify-end pr-5'>
                        <Button variant='gradient' ripple={true} color='green' type="submit">Submit </Button>
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