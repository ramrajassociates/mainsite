import React,{useState} from 'react'
import Image from 'next/image';
import { MdShareLocation, MdPhoneInTalk } from 'react-icons/md';
import axios from 'axios';
function ContactHeaderComp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');
    const SumbitForm = (e) => {
      e.preventDefault();
      console.log(name, email, service, message);
      setName('');
      setEmail('');
      setService('');
      setMessage('');
      axios.post('/api/form', {
        name: name,
        email: email,
        service: service,
        message: message
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
  return (<>
    <div className='object-contain sm:h-[80vh] h-[30vh] relative'>
        <Image src={'/Images/contactus1.jpg'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top   '></Image>
      <div className='bg-gray-600 sm:backdrop-blur rounded-lg absolute h-32 gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-5 w-96 bg-opacity-20 sm:left-24 top-20'>
        <p className='text-main font-bold text-4xl'>Contact Us</p>
      </div>
    </div>
    <div className='py-5'>
    <div className="content mx-auto sm:px-24 realtive w-full flex md:flex-row flex-col-reverse justify-around gap-4">
      <Image src={'/Images/ctbg1.jpg'} width={1920} height={1080} className='absolute  -z-10 opacity-20 object-cover object-bottom h-full'></Image>
        <div className='flex flex-col gap-2 px-2'>
          
<div className="flex flex-col justify-center items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
  <MdShareLocation size={30}></MdShareLocation>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Office Address</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">32, Shastri Nagar, Jaipur</p>
</div>
<div className="flex flex-col justify-center items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
  <MdPhoneInTalk size={30}></MdPhoneInTalk>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Telephone number</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">+91-9116145123</p>
</div>
<div className="flex flex-col justify-center items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
  <MdShareLocation size={30}></MdShareLocation>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mail address</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">info@ramrajassociates.com</p>
</div>

      </div>
        <div className='md:w-1/2 w-full px-2'>
          
<form onSubmit={SumbitForm}>
  <div className="mb-6">
  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name <span className='text-xs text-red-600'>*</span></label>
<div className="flex">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
  </span>
  <input type="text" id="name" name='name' className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} value={name} required/>
</div>
  </div>
  <div className="mb-6">
  <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span className='text-xs text-red-600'>*</span></label>
<div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input type="email" name='email' id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
</div>
  </div>
  <div className="mb-6">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">service <span className='text-xs text-red-600'>*</span></label>
  <select data-te-select-init required id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  name='service' onChange={(e)=>setService(e.target.value)} value={service} >
  <option value={''}> Select Service</option>
  <option value={'digital-marketing'}> Digital Marketing</option>
  <option value={'web-app-development'}> Web App Development</option>
  <option value={'video-photography'}> Video Photography</option>
  <option value={'surveillance-solution'}> Surveillance Solutions</option>
  <option value={'networking-communication'}> Networking Communication</option>
  <option value={'hardware-solution'}> Hardware Solutions</option>
  <option value={'software-solution'}> Software Solutions</option>
              </select>
  </div>
  <div className="mb-6">
    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
              <textarea name="message" id="message" cols="30" rows="5"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>setMessage(e.target.value)} value={message} >

              </textarea>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
</form>

</div>
      </div>
    </div>
      <iframe loading="lazy" src="https://maps.google.com/maps?q=Ramraj%20Associates%2C%20SHOP%20NO.%2032%2C%20near%20Imperial%20Hospital%2C%20Shastri%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302016&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Ramraj Associates, SHOP NO. 32, near Imperial Hospital, Shastri Nagar, Jaipur, Rajasthan 302016" aria-label="Ramraj Associates, SHOP NO. 32, near Imperial Hospital, Shastri Nagar, Jaipur, Rajasthan 302016" className='w-full h-96'></iframe>
    </>
  )
}

export default ContactHeaderComp