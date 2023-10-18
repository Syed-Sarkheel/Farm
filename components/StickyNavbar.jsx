'use client'
import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export function StickyNavbar({ path }) {
    const router = useRouter();

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <div className=" max-h-full w-full ">
            <Navbar className=" top-0  max-w-full rounded-none py-2 px-4  lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Image onClick={() => router.push('../')} src={'/logo.png'} width={50} height={50} alt="logo" className="rounded-full hover:cursor-pointer w-[50%] lg:w-fit" />
                    <div className="mr-4 hidden lg:block">
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:justify-center lg:gap-6">
                            <a href={`/${path}/Products`} className="flex text-4xl hover:underline pr-20 items-center">
                                Products
                            </a>

                            <a href={`../${path}/Transaction`} className="flex text-4xl hover:underline pl-20 items-center">
                                Transactions
                            </a>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">

                        <Button
                            variant="gradient"
                            size="lg"
                            color="red"
                            className="hidden ml-5 lg:inline-block"
                            onClick={() => router.push('/')}
                        >
                            Logout
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <a href="#" className="flex items-center">
                                Products
                            </a>
                        </Typography>

                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <a href="#" className="flex items-center">
                                Transactions
                            </a>
                        </Typography>
                    </ul>                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Buy Now</span>
                    </Button>
                </MobileNav>
            </Navbar>
        </div>
    );
}