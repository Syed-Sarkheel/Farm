'use client'
import { TransactionsTable } from '@/components/TransactionsTable'
import React, { useEffect, useState } from 'react'
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Order ID", "Product Name", "Date", "Quantity (Kg)", "Amount (Rs.)"];



const Page = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        fetch('https://x8ki-letl-twmt.n7.xano.io/api:eaXUv0bD/farmer_transaction')
            .then((res) => res.json())
            .then((data) => { setTransactions(data.result); });
    }, [])
    console.log(transactions)

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Recent Transactions
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about the last transactions
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                        <Button className="flex items-center gap-3" size="sm">
                            <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardBody className=" px-2 border rounded-xl">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {transactions.map((transaction) => {
                        return (
                            <TransactionsTable
                                key={transaction?.id}
                                orderId={transaction?.id}
                                productName={transaction._products?.Name}
                                date={transaction?._order.Date}
                                quantity={transaction?._order.Quantity}
                                amount={transaction?._order.Amount}
                            />)
                    })}
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Button variant="outlined" size="sm">
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" size="sm">
                        1
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        2
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        3
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        ...
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        8
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        9
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" size="sm">
                    Next
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Page

