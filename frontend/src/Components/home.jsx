import Navbar from "./navbar";
import { Carousel } from 'antd';
import  Footer  from "./Footer";
import wedding from "../assets/imgs/wedding.webp";
import birthday from "../assets/imgs/birthday.jpg";
import social from "../assets/imgs/social.png";
import concert from "../assets/imgs/concert.jpg";
import home1 from "../assets/imgs/home1.jpg";
import home2 from "../assets/imgs/home2.jpg";
import home3 from "../assets/imgs/home3.jpg";
import home4 from "../assets/imgs/home4.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegWindowMaximize, FaClock, FaRegSmile, FaHeadset } from 'react-icons/fa';

const contentStyle = {
    margin: 0,
    height: '88vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    position: 'relative',
    transition: 'all 0.5s',  
};

const Home = () => {


    return ( 
        <div className="pt-16">
            <Navbar/>
            <Carousel 
                arrows 
                infinite={true} 
                autoplay={false}
                autoplaySpeed={5000}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                speed={1000}
                className="transition-all duration-500"
                dots={{ className: 'transition-all duration-300' }}
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <div style={contentStyle}>
                        <img src={birthday} alt="" className="w-full h-full object-cover opacity-70"/>
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                            <h2 className="text-5xl font-bold">
                                We are the Event Management Specialists
                            </h2>
                            <p className="text-xl text-gray-200">
                                We personalize your wedding events
                            </p>
                            <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                                Book Now
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <div style={contentStyle}>
                        <img src={wedding} alt="" className="w-full h-full object-cover opacity-70"/>
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                            <h2 className="text-5xl font-bold">
                                Birthday Event Management Specialists
                            </h2>
                            <p className="text-xl text-gray-200">
                                Celebrate Your Events That Lasts Longer
                            </p>
                            <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                            Book Now
                        </button>
                            
                          
                        </div>
                  
                        
                    </div>
                </div>
                <div className="relative">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <h3 style={contentStyle}>
                    <img src={social} alt="" className="w-full h-full object-cover opacity-70"/>
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-5xl font-bold">
                            Social Event Planning Excellence
                        </h2>
                        <p className="text-xl text-gray-200">
                            Corporate Events, Parties & Social Gatherings Made Perfect
                        </p>
                        <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                                Book Now
                            </button>
                    </div>
                </h3>
            </div>
            <div className="relative">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <h3 style={contentStyle}>
                <img src={concert} alt="" className="w-full h-full object-cover opacity-70"/>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-5xl font-bold">
                        Concert & Music Event Experts
                    </h2>
                    <p className="text-xl text-gray-200">
                        Creating Unforgettable Live Music Experiences
                    </p>
                    <button className="!px-4 !py-2 !bg-orange-500 hover:!bg-orange-600 !text-white !text-sm !font-medium !rounded-md !shadow-sm transition-all duration-300 hover:shadow">
                    Book Now
                </button>
                </div>
            </h3>
        </div>
            </Carousel>
        
            <div className="px-8 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        {/* Left Section - Title and Description */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                Building Memories -<br/>
                                Your Trusted Event<br/>
                                Partner
                            </h2>
                            <p className="text-gray-600 mt-4 max-w-md">
                                Find out more about our team, vision, and dedication to creating 
                                extraordinary experiences. In this section, we share our story and our 
                                commitment to the success of each event.
                            </p>
                        </div>

                        {/* Right Section - Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* 100K+ Stats */}
                            <div className="bg-orange-500 rounded-lg p-6">
                                <h3 className="text-3xl font-bold text-white">100K+</h3>
                                <p className="text-white text-sm mt-1">Events That Took Place</p>
                            </div>

                            {/* 1M Stats */}
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-gray-900">1M</h3>
                                <p className="text-gray-600 text-sm mt-1">Active Users Reached</p>
                            </div>

                            {/* 500+ Stats */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                                <p className="text-gray-600 text-sm mt-1">Existing Partnerships</p>
                            </div>

                            {/* 30+ Stats */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">30+</h3>
                                <p className="text-gray-600 text-sm mt-1">Award Winning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 py-16 bg-white">
            {/* Event Corner Section */}
            <div className="max-w-6xl mx-auto">
                <div className="mb-6 grid grid-cols-2 gap-4">
                    <h2 className="text-4xl font-bold text-gray-900">Every Corner of Our Event</h2>
                    <p className="text-gray-600 mt-4 max-w-xl">
                        Find Togetherness and Friendship in Every Corner of Our Events depicts 
                        moments of closeness and a sense of brotherhood that exist during our events. 
                        These photos show how shared experiences can create lasting relationships.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-12 gap-4 mt-8">
                    {/* Large image */}
                    <div className="col-span-12 md:col-span-7">
                        <img 
                            src={home1} 
                            alt="Dinner Event" 
                            className="w-full h-[400px] object-cover rounded-2xl"
                        />
                    </div>
                    
                    {/* Small images container */}
                    <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4">
                        <img 
                            src={home2} 
                            alt="Event Scene" 
                            className="w-full h-[190px] object-cover rounded-2xl"
                        />
                        <img 
                            src={home3} 
                            alt="Event Scene" 
                            className="w-full h-[190px] object-cover rounded-2xl"
                        />
                        <img 
                            src={home4} 
                            alt="Event Scene" 
                            className="w-full h-[190px] object-cover col-span-2 rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div> 
        <div className="px-8 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Feature Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Easy Online Reservations */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm">
                            <div className="text-blue-500 mb-4">
                                <FaRegWindowMaximize size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Easy Online Reservations
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Attendees can easily reserve their spots online with just a few clicks. Once booked, they can manage their reservations while ensuring a smooth and hassle-free reservation process.
                            </p>
                        </div>

                        {/* Real-Time Updates */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm">
                            <div className="text-yellow-500 mb-4">
                                <FaClock size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Real-Time Updates
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Stay informed with instant notifications about event details, bookings, and changes.
                            </p>
                        </div>

                        {/* User-Friendly Interface */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm">
                            <div className="text-orange-500 mb-4">
                                <FaRegSmile size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                User-Friendly Interface
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                A simple and intuitive design makes event booking and management effortless.
                            </p>
                        </div>

                        {/* Fast & Reliable Support */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm">
                            <div className="text-green-500 mb-4">
                                <FaHeadset size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Fast & Reliable Support
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Get quick responses to any inquiries or concerns about event reservations, ensuring a smooth and hassle-free booking experience.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Elevate Your Event to<br />
                            New Heights
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Our platform has many superior features, such as online ticket sales, 
                            attendee management, and real-time event statistics. These 
                            features help make your event planning and execution efficient.
                        </p>
                        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <Footer />
        </div>
    );
  }

export default Home;