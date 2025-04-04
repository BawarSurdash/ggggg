import Cover from "./cover";
import Navbar from "./navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Event = () => {
    const [listOfPosts, setListOfPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/posts').then((response) => {
            setListOfPosts(response.data);
        });
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/event/${id}`);
    };

    return (
        <div className="pt-16">
            <Navbar />
            <Cover title="Event" sub1="Home" sub2="Event" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listOfPosts.map((value, key) => (
                        <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img 
                                    src={value.image} 
                                    alt={value.title} 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button 
                                        onClick={() => handleViewDetails(value.id)}
                                        className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                                    {value.title}
                                </h3>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-gray-600">{value.category}</span>
                                    <span className="text-pink-600 font-semibold">{value.priceText}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Event;