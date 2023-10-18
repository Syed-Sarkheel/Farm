'use client'
import { DefaultTable } from '@/components/DefaultTable'
import { StickyNavbar } from '@/components/StickyNavbar'
import React from 'react'

const Page = () => {
    return (
        <div>
            <StickyNavbar path='Retailer' />
            <DefaultTable />
        </div>
    )
}

export default Page;