import React from 'react'
import Image from 'next/image'

import { FaHome } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { FaWhatsappSquare } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'
import  sidelogo  from '../public/images/side-logo2.png'

const Footer = () => {
	return (
		<>
			<div className='mt-12'>
				<div className='space-y-10 flex flex-col lg:flex-row lg:justify-evenly lg:items-start items-center'>
					<div className='text-center flex flex-col items-center'>
						{/* <img className='w-[200px]' src="/images/side-logo2.png" alt="" /> */}
						<Image className='w-[200px]' src={sidelogo}/>
						<p className=' leading-10 text-gray-600 '>Founded in 2015, Sudofire is<br />
							recognised as an Innovative<br />
							Solution Provider by D.P.I.I.T for<br />
							developing a framework that<br />
							enables our developers to be more<br />
							efficient with their coding skills.</p>
					</div>
					<div className='text-center'>
						<div className='text-center leading-10 text-gray-600'>
							<h1 className='text-gray-700 font-bold text-lg' >SERVICES</h1>
							<p>Enterprise Content Management</p>
							<p>Internet Of Things(IoT)</p>
							<p>SaaS & Mobility Solutions</p>
							<p>Devops & Cloud Services</p>
						</div>
						<div className='my-10 flex flex-col items-center space-y-5 font-bold text-lg text-gray-800'>
							<h1>FOLLOW US</h1>
							<div className='flex flex-row space-x-10 '>
								<GrFacebook className='text-[#f05d58] text-3xl' />
								<GrLinkedin className='text-[#f05d58] text-3xl' />
								<GrInstagram className='text-[#f05d58] text-3xl' />
								<FaWhatsappSquare className='text-[#f05d58] text-3xl' />
							</div>
						</div>
					</div>
					<div className='leading-7 text-center text-gray-600'>
						<h1 className='text-gray-700 text-lg font-bold'>CONTACT INFO</h1>
						<div className='flex justify-start items-center space-x-2'>
							<FaHome className='text-[#f05d58] text-2xl' />
							<p>WEBSITE : </p>
						</div>
						<p className=''>https://sudofire.com</p>
						<div className='flex justify-start items-center space-x-2 mt-3'>
							<MdEmail className='text-[#f05d58] text-2xl' />
							<p>EMAIL : </p>
						</div>
						<p className='mb-3'>sales@sudofire.com</p>
						<div className='flex lg:justify-start items-center space-x-2'>
							<FaPhoneAlt className='text-[#f05d58] text-2xl' />
							<p>PHONE : </p>
						</div>
						<p>+91 98114 06941</p>
						<div className='flex lg:justify-start items-center space-x-2 mt-3'>
							<BiCurrentLocation className='text-2xl text-[#f05d58]' />
							<p className="">OFFICE LOCATION</p>
						</div>
						<span className='' >Sudofire Technologies, 1st Floor,<br /> Landmark Cyberpark, Sector 67,<br />Gurugram, Haryana</span>
					</div>
				</div>
			</div>
		</>

	)
}

export default Footer;