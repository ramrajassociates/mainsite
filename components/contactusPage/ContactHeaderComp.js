import React, { useState } from "react";
import Image from "next/image";
import {
  MdShareLocation,
  MdPhoneInTalk,
  MdMarkEmailUnread,
} from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
function ContactHeaderComp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const SumbitForm = (e) => {
    e.preventDefault();
    // console.log(name, email, service, message);
    setName("");
    setEmail("");
    setService("");
    setMessage("");
    axios
      .post("/api/form", {
        name: name,
        email: email,
        service: service,
        message: message,
        contact_no: contact,
      })
      .then((res) => {
        // console.log(res);
        toast.success("Successfully submitted!");
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="object-contain sm:h-[80vh] h-[30vh] relative">
        <Image
          src={"https://d1efbx4910ct8i.cloudfront.net/Images2/contactus.webp"}
          width={1920}
          height={1080}
          priority={true}
          alt="contact us"
          className="w-full h-full object-cover sm:object-top   "
        ></Image>
        <div className="bg-gray-600 backdrop-blur rounded-lg absolute sm:h-32 h-fit py-5 gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-5 sm:w-96 w-11/12  bg-opacity-20 sm:left-24 top-20">
          <p className="text-main font-bold text-4xl">Contact Us</p>
        </div>
      </div>
      <div className="py-5">
        <div className="content mx-auto sm:px-24 realtive w-full flex md:flex-row flex-col-reverse justify-around gap-4">
          <Image
            src={"https://d1efbx4910ct8i.cloudfront.net/Images2/ctbg1.webp"}
            width={1920}
            height={1080}
            alt="contact us"
            className="absolute  -z-10 opacity-20 object-cover object-bottom h-full"
          ></Image>
          <div className="flex flex-col gap-2 px-2">
            <Link
              className="flex flex-col justify-center items-start hover:scale-105 transition-all duration-300 hover:opacity-90 active:scale-95 max-w-sm p-6 bg-[#d1d5db] rounded-lg shadow "
              href={"https://goo.gl/maps/S7MhVqZj68racWKYA"}
            >
              <HiBuildingOffice2 size={30}></HiBuildingOffice2>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Office Address
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Shop 32, Kanwatia Cir, near Imperial Hospital, Shastri Nagar,
                Jaipur, Rajasthan 302016
              </p>
            </Link>
            <Link
              className="flex flex-col justify-center items-start hover:scale-105 transition-all duration-300 hover:opacity-90 active:scale-95 max-w-sm p-6 bg-[#307fe2] text-main rounded-lg shadow  "
              href={"tel:+919413194723"}
            >
              <MdPhoneInTalk size={30}></MdPhoneInTalk>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-main">
                Telephone number
              </h5>
              <p className="font-normal text-main">+91-9413194723</p>
            </Link>
            <Link
              className="flex flex-col justify-center items-start hover:scale-105 transition-all duration-300 hover:opacity-90 active:scale-95 max-w-sm p-6 text-gray-600 bg-yellow-300 rounded-lg shadow "
              href={"mailto: info@ramrajassociates.com"}
            >
              <MdMarkEmailUnread size={30}></MdMarkEmailUnread>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
                Mail address
              </h5>
              <p className="font-normal text-gray-600">
                info@ramrajassociates.com
              </p>
            </Link>
          </div>
          <div className="md:w-1/2 w-full px-2">
            <form onSubmit={SumbitForm}>
              <div className="mb-6">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name <span className="text-xs text-red-600">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  for="email-address-icon"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email <span className="text-xs text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  for="contact_no"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Contact No{" "}
                  <span className="text-xs text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      // fill="#000000"
                      version="1.1"
                      id="Capa_1"
                      width="800px"
                      height="800px"
                      viewBox="0 0 891.024 891.024"
                      xmlSpace="preserve"
                      className="w-4 h-4  fill-gray-500"
                    >
                      <g>
                        <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8   l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9   c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75   l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7   C1,142.575-3.5,162.675,2.8,180.875z" />
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="contact_no"
                    id="contact_no"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your contact no"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  service <span className="text-xs text-red-600">*</span>
                </label>
                <select
                  data-te-select-init
                  required
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="service"
                  onChange={(e) => setService(e.target.value)}
                  value={service}
                >
                  <option value={""}> Select Service</option>
                  <option value="Search Engine Optimization">
                    Search Engine Optimization
                  </option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="PPC marketing">PPC marketing</option>
                  <option value="Social media marketing">
                    Social media marketing
                  </option>
                  <option value="Social media Optimization">
                    Social media Optimization
                  </option>
                  <option value="Custom web development">
                    Custom web development
                  </option>
                  <option value="E-commerce Development">
                    E-commerce Development
                  </option>
                  <option value="Wordpress Development">
                    Wordpress Development
                  </option>
                  <option value="Surveillance Service">
                    Surveillance Service
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=Ramraj%20Associates%2C%20SHOP%20NO.%2032%2C%20near%20Imperial%20Hospital%2C%20Shastri%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302016&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
        title="Ramraj Associates, SHOP NO. 32, near Imperial Hospital, Shastri Nagar, Jaipur, Rajasthan 302016"
        aria-label="Ramraj Associates, SHOP NO. 32, near Imperial Hospital, Shastri Nagar, Jaipur, Rajasthan 302016"
        className="w-full h-96"
      ></iframe>
    </>
  );
}

export default ContactHeaderComp;
