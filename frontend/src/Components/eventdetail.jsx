import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./navbar";
import Cover from "./cover";

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedEvents, setRelatedEvents] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
            setPost(response.data);
            // Fetch related events after getting the main post
            axios.get('http://localhost:3001/posts').then((allPosts) => {
                // Filter related events by category, excluding the current event
                const related = allPosts.data.filter(
                    event => event.category === response.data.category && event.id !== parseInt(id)
                );
                setRelatedEvents(related);
            });
        }).catch(error => {
            console.error('Error fetching event details:', error);
        });
    }, [id]);

    const handleSelectEvent = () => {
        navigate('/events');
    };

    const handleViewEvent = (eventId) => {
        navigate(`/event/${eventId}`);
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="pt-16 bg-gray-50 min-h-screen">
            
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <button 
                    onClick={handleSelectEvent}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Events
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Left side - Image */}
                        <div className="md:w-1/2">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Right side - Details */}
                        <div className="md:w-1/2 p-6 md:p-8">
                            {/* Category Badge */}
                            <div className="mb-4">
                                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                                    {post.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl font-bold text-gray-900 mb-4">
                                {post.title}
                            </h1>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-600">
                                    {post.description}
                                </p>
                            </div>

                            {/* Price Range */}
                            <div className="mb-8">
                                <p className="text-gray-900">
                                    <span className="text-red-500">Price Range: </span>
                                    {post.priceText}
                                </p>
                            </div>

                            {/* Select Event Button */}
                            <button 
                                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
                            >
                                Select Event
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Events Section */}
                {relatedEvents.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related {post.category} Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedEvents.map((event) => (
                                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative">
                                        <img 
                                            src={event.image} 
                                            alt={event.title} 
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button 
                                                onClick={() => handleViewEvent(event.id)}
                                                className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {event.title}
                                        </h3>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-gray-600">{event.category}</span>
                                            <span className="text-red-500 font-semibold">{event.priceText}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EventDetail;