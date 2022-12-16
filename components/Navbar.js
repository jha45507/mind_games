import React, { useRef } from 'react'
import Link from 'next/Link'
const Navbar = () => {
    const headeRef = useRef();
    const hamRef = useRef();
    const hamclick = () => {
        if (hamRef.current.classList.contains('ham')) {
            hamRef.current.classList.toggle('ham-active')
        }

        if (headeRef.current.classList.contains('h-20')) {
            headeRef.current.classList.replace('h-20', 'h-auto')
        }

        else if (headeRef.current.classList.contains('h-auto')) {
            headeRef.current.classList.replace('h-auto', 'h-20')
        }
    }
    const closeNavbar = () => {
        headeRef.current.classList.replace('h-auto', 'h-20')
        hamRef.current.classList.remove('ham-active')
    }
    return (
        <div ref={headeRef} className='lg:flex fixed w-full bg-blue-900 justify-around items-center shadow-md font-bold h-20 overflow-hidden'>
            <div ref={hamRef} className='lg:hidden ham' onClick={hamclick} ></div>

            <div className='w-[100px]'>
                <img className='' src="/images/Amator_Logo.png" alt="" />
            </div>

            <div className='text-sm text-center my-5 space-y-10 lg:space-y-0 lg:space-x-10 flex items-center flex-col lg:flex-row text-white overflow-hidden'>
                <Link onClick={closeNavbar} href="#">SERVICES</Link>
                <Link onClick={closeNavbar} href="#">PORTFOLIO</Link>
                <Link onClick={closeNavbar} href="#">CAREERS</Link>
                <Link onClick={closeNavbar} href="#">CLIENTS</Link>
                <Link onClick={closeNavbar} href="#">CONTACT US</Link>
            </div>
        </div>
    )
}

export default Navbar