import React, { useState } from 'react'
import { BsCart3, BsSuitHeart, BsSearch } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

const navLinks = [
    { name: "Home", to: "/" },
    { name: "Cafe News", to: "/cafe" },
    { name: "News", to: "/news" },
    { name: "Contact Us", to: "/contact" },
];
const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const handleisOpen = () => {
        setOpen((prev) => !prev);
    }

    const currentRoute = window.location.pathname;
    return (
        <div className='w-full bg-light h-[80px]'>
            <div className='flex justify-between items-center h-full px-4'>
                <h1 className='flex item-center text-lg font-bold underline underline-offset-8'>
                    <a href="/">Coffeelab</a>
                </h1>
                <ul className='hidden md:flex items-center gap-4'>
                    {navLinks.map(({ name, to }) =>
                        <li key={name + to}
                            className={`hover:text-orange text-${currentRoute === to ? "orang" : "brown"
                                }`}
                        >
                            <a href={to}>{name}</a>
                        </li>
                    )}
                </ul>
                <div className='hidden md:flex items-center gap-6'>
                    <div>
                        <BsSearch />
                    </div>
                    <div>
                        <BsSuitHeart />
                    </div>
                    <div className='flex items-center'>
                        <BsCart3 />
                        <sup className='text-red'>3</sup>
                    </div>
                    <div className="rounded-full">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Avada" className='w-7 h-7 rounded-full' />
                    </div>
                </div>

                <div className='pr-2 md:hidden'>
                    {isOpen ? (<MdOutlineClose
                        className='text-red font-bold text-xl w-7'
                        onClick={handleisOpen}
                    />
                    ) : (
                        <FiMenu

                            className='text-red font-bold text-xl w-7'
                            onClick={handleisOpen}
                        />
                    )}
                </div>
            </div>
            {isOpen && (
                <div className='bg-light-grey p-4 absolute w-full md:hidden '>
                    <ul className='md:hidden flex flex-col items-start gap-4'>
                        {navLinks.map(({ name, to }) =>
                            <li key={name + to}
                                className={`hover:text-orange text-${currentRoute === to ? "orang" : "brown"
                                    }`}
                            >
                                <a href={to}>{name}</a>
                            </li>
                        )}
                    </ul>
                    <div className='mt-4 md:hidden flex items-center justify-between gap-6'>
                        <div>
                            <BsSearch />
                        </div>
                        <div>
                            <BsSuitHeart />
                        </div>
                        <div className='flex items-center'>
                            <BsCart3 />
                            <sup className='text-red'>3</sup>
                        </div>
                        <div className="rounded-full">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Avada" className='w-7 h-7 rounded-full' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar