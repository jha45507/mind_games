// import React from 'react'
import React, { useRef } from 'react'
import Link from 'next/Link'
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillWallet } from "react-icons/ai";
import { GiPodiumWinner } from "react-icons/gi";
import { ImArrowRight } from "react-icons/im";
const HomePage = () => {

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
        <>
            <div className='bg-white'>
                <navbar className='z-10'>
                    <div ref={headeRef} className='lg:flex fixed w-full bg-blue-900 justify-around items-center shadow-md font-bold h-20 overflow-hidden'>
                        <div ref={hamRef} className='lg:hidden ham' onClick={hamclick} ></div>
                        <div className='w-[100px]'>
                            <img className='' src="/images/Amator_Logo.png" alt="" />
                        </div>
                        <div className='text-sm text-center my-5 space-y-10 lg:space-y-0 lg:space-x-10 flex items-center flex-col lg:flex-row text-white overflow-hidden'>
                            {/* <Link onClick={closeNavbar} href="#">SERVICES</Link> */}
                            <Link onClick={closeNavbar} href="#">ABOUT</Link>
                            <Link onClick={closeNavbar} href="#">ENROLL</Link>
                            <Link onClick={closeNavbar} href="#">LOCATION</Link>
                            <Link onClick={closeNavbar} href="#">CONTACT</Link>
                        </div>
                    </div>
                </navbar>

                <div className=''>
                    <div className="flex items-center justify-center">
                        <img className='w-[100%] mt-20 lg:block hidden' src={'/images/web_view_banner.jpeg'} />
                        <img className='w-[100%] mt-20 block lg:hidden' src={'/images/mobile_view_banner.jpg'} />
                    </div >
                </div>

                <div className='flex lg:justify-around flex-col lg:flex-row py-5 lg:py-0 items-center lg:h-48 bg-[#fd295a]'>
                    <div className='space-y-5'>
                        <div>
                            <h1 className='text-center lg:text-xl font-bold'>NEXT MATCH</h1>
                        </div>
                        <div>
                            <h1 className='text-center lg:text-xl font-bold'>00: 00: 00: 00</h1>
                        </div>
                        <div>
                            <h1 className='text-center lg:text-xl font-bold'>Days Hrs Min Sec</h1>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div>
                            <h1 className='text-center lg:text-xl font-bold'>Coming Soon Matches In KOLKATA</h1>
                        </div>
                        <div>
                            <p className='text-center lg:text-xl font-bold'>The upcoming event at Kolkata from December 22 to December 26, 2022 with 30 Live Tables. </p>
                        </div>
                    </div>
                </div>

                <section className='flex lg:justify-around flex-col lg:flex-row py-5 lg:py-0 items-center bg-white text-black font-bold lg:h-96 '>
                    <div className='h-60 w-60 flex justify-around items-center border rounded-lg'>
                        <div className='flex-col flex justify-center items-center space-y-4'>
                            <AiOutlineUserAdd className='text-white w-20 h-20 bg-[#fd295a] p-5 rounded-full' />
                            <p>ENROLL</p>
                        </div>
                    </div>
                    <div>
                        <ImArrowRight className='w-16 h-16 text-[#fd295a]' />
                    </div>
                    <div className='h-60 w-60 flex justify-around items-center border rounded-lg'>
                        <div className='flex-col flex justify-center items-center space-y-4'>
                            <AiFillWallet className='w-20 h-20 text-white bg-[#fd295a] p-5 rounded-full' />
                            <p>DEPOSIT</p>
                        </div>
                    </div>
                    <div>
                        <ImArrowRight className='w-16 h-16 text-[#fd295a]' />
                    </div>
                    <div className='h-60 w-60 flex justify-around items-center border rounded-lg'>
                        <div className='flex-col flex justify-center items-center space-y-4'>
                            <GiPodiumWinner className='w-20 h-20 text-white bg-[#fd295a] p-5 rounded-full' />
                            <p>WIN</p>
                        </div>
                    </div>
                </section>
                <hr />
                <about className='bg-white py-10 flex justify-center items-center'>
                    <div className='w-2/4 space-y-10'>
                        <div className='bg-white flex justify-center items-center lg:text-4xl text-2xl text-black font-bold'>
                            <h1 className='text-center'>ABOUT AMATOR</h1>
                        </div>
                        <div className='bg-white flex justify-center items-center text-gray-700 text-justify'>
                            <p>The 5-day poker festival is expected to draw players from all across the country with a sizeable participation from the enthusiastic local poker community. Organizers are offering free return tickets (ex-India) along with luxury accommodation to all players who confirm their participation in this mega event on or before December 18th.</p>
                        </div>
                    </div>
                </about>
                <location className='flex lg:justify-around flex-col lg:flex-row py-5 lg:py-0 space-y-5 lg:space-y-0 items-center bg-white text-black font-bold h-auto'>
                    <div className=' flex justify-around items-center border rounded-lg bg-gray-200'>
                        <div className='h-60 w-60 flex-col flex justify-center items-center space-y-4'>
                            <h1>Kolkata</h1>
                            <p>December 26</p>
                            {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                        </div>
                    </div>
                    <div className='flex justify-around items-center border rounded-lg bg-gray-200'>
                        <div className='h-60 w-60  flex-col flex justify-center items-center space-y-4'>
                            <h1>Mumbai</h1>
                            <p>Coming Soon</p>
                            {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                        </div>
                    </div>
                    <div className=' flex justify-around items-center border rounded-lg bg-gray-200'>
                        <div className='h-60 w-60 flex-col flex justify-center items-center space-y-4'>
                            <h1>Delhi</h1>
                            <p>Coming Soon</p>
                            {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                        </div>
                    </div>
                    <div className=' flex justify-around items-center border rounded-lg bg-gray-200'>
                        <div className='h-60 w-60 flex-col flex justify-center items-center space-y-4'>
                            <h1>Jaypur</h1>
                            <p>Coming Soon</p>
                            {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                        </div>
                    </div>
                </location>
                <news className='bg-white flex flex-col justify-center items-center space-y-20 my-10'>
                    <div className='bg-white text-gray-700 w-2/4 space-y-5'>
                        <div>
                            <h1 className='lg:text-4xl text-2xl font-bold text-center text-black'>SPORTS NEWS</h1>
                        </div>
                        <div>
                            <p className='text-justify'>Amator is Kolkata first legal poker room and commenced operations in October last year. They have slowly built a sizeable base of loyal patrons in the city. Vipin Choudhary, a lawyer by profession, in association with two other active members of Kolkata poker community i.e. Diddy and Shashwat operate the Amator poker room.</p>
                        </div>
                    </div>
                    <div className='flex lg:space-x-10 space-y-10 lg:space-y-0 flex-col lg:flex-row px-5'>

                        <div className='bg-gray-200 p-5 flex justify-center items-center rounded-3xl back_shadow'>
                            <div className='bg-gray-200 flex flex-col justify-center items-center space-y-5 '>
                                <img className='lg:w-[400px] w-[300px] rounded-3xl' src='/images/image1.jpg' />
                                <h1 className='font-bold text-2xl text-black text-center'>UNDERSTANDING ODDS br IN BETTING</h1>
                                <p className='text-gray-700 text-center'>Odds in Betting are primarily a mathematical <br /> expectancy along with an approximation concerning <br /> specified results of a competitive  <br /> sports event.</p>
                                {/* <button className='text-white bg-[#fd295a] font-bold px-4 py-1 rounded-full'>Read More</button> */}
                            </div>
                        </div>
                        <div className='bg-gray-200 p-5 flex justify-center items-center rounded-3xl back_shadow'>
                            <div className='bg-gray-200 flex flex-col justify-center items-center space-y-5 '>
                                <img className='lg:w-[400px] w-[300px] rounded-3xl' src='/images/image2.jpg' />
                                <h1 className='font-bold text-2xl text-black text-center'>MOYES SCOUTS GRIEZMANN AND POGBA</h1>
                                <p className='text-gray-700 text-center'>Odds in Betting are primarily a mathematical <br /> expectancy along with an approximation concerning <br /> specified results of a competitive sports event.</p>
                                {/* <button className='text-white bg-[#fd295a] font-bold px-4 py-1 rounded-full'>Read More</button> */}
                            </div>
                        </div>

                    </div>
                </news>
                <footer className='flex justify-center items-center bg-white'>
                    <div className='flex flex-col lg:flex-row bg-blue-600 justify-between items-center rounded-lg my-10 w-3/4 text-white'>
                        <div className='p-5'>
                            <h1 className='font-bold '>SUBSCRIBE</h1>
                            <h1 className='font-bold mt-3 text-2xl '>FOR NEWSLETTER</h1>
                        </div>
                        <div className='p-5'>
                            <input type="email" name="" id="" className='text-white outline-none border-b-2 bg-blue-600' placeholder='Enter Your Email Address' />
                        </div>
                        <div className='p-5'>
                            <button className='font-bold text-xl bg-[#fd295a] py-2 px-5 rounded-full'>Subscribe Now</button>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default HomePage