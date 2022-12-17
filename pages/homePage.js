import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/Link'
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillWallet } from "react-icons/ai";
import { GiPodiumWinner } from "react-icons/gi";
import { ImArrowRight } from "react-icons/im";

const HomePage = () => {

    const headeRef = useRef();
    const hamRef = useRef();
    const [countDown, setCountDown] = useState(false)

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

    useEffect(() => {
        // Set the date we're counting down to
        var countDownDate = new Date("Dec 22, 2022 00:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);


    }, [])

    return (
        <>
            <div className='bg-white'>
                <navbar className='z-50'>
                    <div ref={headeRef} className='lg:flex fixed w-full bg-indigo-900 justify-around items-center shadow-md font-bold h-20 overflow-hidden z-20'>
                        <div ref={hamRef} className='lg:hidden ham' onClick={hamclick} ></div>
                        <div className='w-[100px]'>
                            <img className='' src="/images/Amator_Logo.png" alt="" />
                        </div>
                        <div className='text-sm text-center my-5 space-y-10 lg:space-y-0 lg:space-x-10 flex items-center flex-col lg:flex-row text-white overflow-hidden'>
                            <Link onClick={closeNavbar} href="#about">ABOUT</Link>
                            <Link onClick={closeNavbar} href="#enroll">ENROLL</Link>
                            <Link onClick={closeNavbar} href="#location">LOCATION</Link>
                            <Link onClick={closeNavbar} href="#referral">REFERRAL</Link>
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
                            <h1 id='demo' className='text-center lg:text-xl font-bold'>

                            </h1>
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

                <section className='flex lg:justify-around flex-col lg:flex-row py-5 lg:py-0 items-center bg-white text-black font-bold lg:h-96 ' id='enroll'>
                    <div className='h-60 w-60 flex justify-around items-center border rounded-lg'>
                        <div className='flex-col flex justify-center items-center space-y-4'>
                            <AiOutlineUserAdd className='text-white w-20 h-20 bg-[#fd295a] p-5 rounded-full' />
                            <p className=''>ENROLL</p>
                        </div>
                    </div>
                    <div>
                        <ImArrowRight className='w-16 h-16 text-[#fd295a] rotate-90 lg:rotate-0 my-5' />
                    </div>
                    <div className='h-60 w-60 flex justify-around items-center border rounded-lg'>
                        <div className='flex-col flex justify-center items-center space-y-4'>
                            <AiFillWallet className='w-20 h-20 text-white bg-[#fd295a] p-5 rounded-full' />
                            <p>DEPOSIT</p>
                        </div>
                    </div>
                    <div>
                        <ImArrowRight className='w-16 h-16 text-[#fd295a] rotate-90 lg:rotate-0 my-5' />
                    </div>
                    <div className='h-60 w-60 flex justify-around items-center border rounded-lg'>
                        <div className='flex-col flex justify-center items-center space-y-4'>
                            <GiPodiumWinner className='w-20 h-20 text-white bg-[#fd295a] p-5 rounded-full' />
                            <p>WIN</p>
                        </div>
                    </div>
                </section>
                <hr />
                <div className='bgimg lg:h-[105vh] h-[100%] lg:space-y-10'>
                    <about className=' py-10 flex justify-center items-center' id="about">
                        <div className='w-2/4 space-y-10 lg:space-y-20'>
                            <div className=' flex justify-center items-center lg:text-4xl text-2xl text-white font-bold'>
                                <h1 className='text-center'>ABOUT AMATOR</h1>
                            </div>
                            <div className='flex justify-center items-center text-white text-justify'>
                                <p>The 5-day poker festival is expected to draw players from all across the country with a sizeable participation from the enthusiastic local poker community. Organizers are offering free return tickets (ex-India) along with luxury accommodation to all players who confirm their participation in this mega event on or before December 18th.</p>
                            </div>
                        </div>
                    </about>
                    <location className='flex lg:justify-around flex-col lg:flex-row py-5 lg:py-0 space-y-5 lg:space-y-0 items-center text-white font-bold h-auto' id='location'>
                        <div className=' flex justify-around items-center'>
                            <div className='h-60 w-60 flex-col flex justify-center items-center space-y-4 bg-transparent backdrop-blur-md border rounded-2xl back_shadow1 z-0 hover:bg-indigo-900'>
                                <h1 className='text-xl'>Kolkata</h1>
                                <p>December 26</p>
                                {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                            </div>
                        </div>
                        <div className='flex justify-around items-center'>
                            <div className='h-60 w-60  flex-col flex justify-center items-center space-y-4 br-transparent backdrop-blur-sm  border rounded-2xl back_shadow1 hover:bg-indigo-900'>
                                <h1 className='text-xl'>Mumbai</h1>
                                <p>Coming Soon</p>
                                {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                            </div>
                        </div>
                        <div className=' flex justify-around items-center'>
                            <div className='h-60 w-60 flex-col flex justify-center items-center space-y-4 br-transparent border backdrop-blur-sm rounded-2xl back_shadow1 hover:bg-indigo-900'>
                                <h1 className='text-xl'>Delhi</h1>
                                <p>Coming Soon</p>
                                {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                            </div>
                        </div>
                        <div className=' flex justify-around items-center '>
                            <div className='h-60 w-60 flex-col flex justify-center items-center space-y-4 br-transparent backdrop-blur-sm border rounded-2xl back_shadow1 hover:bg-indigo-900'>
                                <h1 className='text-xl'>Jaypur</h1>
                                <p>Coming Soon</p>
                                {/* <button className='bg-[#fd295a] px-3 py-1 rounded-full'>Bet Now</button> */}
                            </div>
                        </div>
                    </location>
                </div>
                <news className='bg-white flex flex-col justify-center items-center space-y-20 my-10'>
                    <div className='bg-white text-gray-700 w-2/4 space-y-5'>
                        <div>
                            <h1 className='lg:text-4xl text-2xl font-bold text-center text-black'>AMATOR NEWS</h1>
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
                <footer className='flex justify-center items-center bg-white' id='referral'>
                    <div className='flex flex-col lg:flex-row bg-indigo-900 justify-between items-center rounded-lg my-10 w-3/4 text-white'>
                        <div className='p-5'>
                            <h1 className='font-bold '>SUBSCRIBE</h1>
                            <h1 className='font-bold mt-3 text-2xl '>FOR NEWSLETTER</h1>
                        </div>
                        <div className='p-5'>
                            <input type="email" name="" id="" className='text-white outline-none border-b-2 bg-indigo-900' placeholder='Enter Your Email Address' />
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