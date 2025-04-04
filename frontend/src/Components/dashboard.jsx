import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [listOfPosts, setListOfPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
        priceText: '',
        minPrice: '',
        maxPrice: ''
    });
    const [editing, setEditing] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const categories = [
        'Birthday',
        'Wedding',
        'Gender Reveal',
        'Easter',
        'Graduation'
    ];

    useEffect(() => {
        axios.get('http://localhost:3001/posts').then((response) => {
            console.log(response.data);
            setListOfPosts(response.data);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'minPrice' || name === 'maxPrice') {
            // Remove any non-numeric characters
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormData(prev => ({
                ...prev,
                [name]: numericValue,
                priceText: name === 'minPrice' 
                    ? `$${numericValue} - $${prev.maxPrice || ''}`
                    : `$${prev.minPrice || ''} - $${numericValue}`
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/posts', formData);
            setListOfPosts([...listOfPosts, response.data]);
            // Clear form
            setFormData({
                title: '',
                description: '',
                category: '',
                image: '',
                priceText: '',
                minPrice: '',
                maxPrice: ''
            });
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`http://localhost:3001/posts/${postId}`);
            setListOfPosts(listOfPosts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleEdit = (post) => {
        setEditing(post.id);
        // Extract min and max prices from priceText
        const prices = post.priceText.match(/\$(\d+)/g) || [];
        const minPrice = prices[0] ? prices[0].replace('$', '') : '';
        const maxPrice = prices[1] ? prices[1].replace('$', '') : '';
        
        setFormData({
            title: post.title,
            description: post.description,
            category: post.category,
            image: post.image,
            priceText: post.priceText,
            minPrice,
            maxPrice
        });
    };

    const handleUpdate = async (postId) => {
        try {
            const response = await axios.put(`http://localhost:3001/posts/${postId}`, formData);
            setListOfPosts(listOfPosts.map(post => 
                post.id === postId ? response.data : post
            ));
            setEditing(null);
            // Clear form
            setFormData({
                title: '',
                description: '',
                category: '',
                image: '',
                priceText: '',
                minPrice: '',
                maxPrice: ''
            });
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <button
                            onClick={() => setIsFormVisible(!isFormVisible)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            {isFormVisible ? 'Close Form' : '+ Add New Post'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {/* Form Section */}
                {isFormVisible && (
                    <div className="mb-8 bg-white rounded-lg shadow p-6">
                        <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                name="minPrice"
                                                value={formData.minPrice}
                                                onChange={handleChange}
                                                placeholder="Min"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <span className="text-gray-500">-</span>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                name="maxPrice"
                                                value={formData.maxPrice}
                                                onChange={handleChange}
                                                placeholder="Max"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button 
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                                >
                                    Create Post
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listOfPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
                            {editing === post.id ? (
                                // Edit form
                                <div className="p-4">
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={handleChange}
                                        name="title"
                                        className="w-full p-2 border rounded mb-2"
                                    />
                                    <textarea
                                        value={formData.description}
                                        onChange={handleChange}
                                        name="description"
                                        className="w-full p-2 border rounded mb-2"
                                    />
                                    <select
                                        value={formData.category}
                                        onChange={handleChange}
                                        name="category"
                                        className="w-full p-2 border rounded mb-2"
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        value={formData.image}
                                        onChange={handleChange}
                                        name="image"
                                        className="w-full p-2 border rounded mb-2"
                                    />
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                name="minPrice"
                                                value={formData.minPrice}
                                                onChange={handleChange}
                                                placeholder="Min"
                                                className="w-full p-2 border rounded mb-2"
                                            />
                                        </div>
                                        <span className="text-gray-500">-</span>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                name="maxPrice"
                                                value={formData.maxPrice}
                                                onChange={handleChange}
                                                placeholder="Max"
                                                className="w-full p-2 border rounded mb-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            onClick={() => handleUpdate(post.id)}
                                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditing(null)}
                                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // Display post
                                <div>
                                    {post.image && (
                                        <div className="aspect-w-16 aspect-h-9">
                                            <img 
                                                src={post.image} 
                                                alt={post.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                {post.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-green-600">{post.priceText}</span>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleEdit(post)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;