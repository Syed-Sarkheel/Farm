'use client'
import { CardDefault } from '@/components/CardDefault'
import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
// Remove the import statement for CardDefault
const Page = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://x8ki-letl-twmt.n7.xano.io/api:eaXUv0bD/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <>
            <div className='flex justify-end m-1 p-2'>
                <Button color='green' className='p-3 text-sm rounded-full'><a href='../../Insertion'>Add Product</a></Button>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 p-10 ml-10'>
                {products?.map((product) => {
                    return (
                        <CardDefault
                            key={product.id}
                            id={product.id}
                            path={product.Product_Image?.url}
                            name={product.Name}
                            price={product.Price}
                            stock={product.Stock}
                            desc={product.Description}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Page;
