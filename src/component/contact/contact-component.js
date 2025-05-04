'use client'
import React from 'react';

const ContactComponent = () => {


    const sendMessageBtn = (e) => {
        e.preventDefault();
        alert('send successfully')
    }

    return (
        <>
            <div className="py-10 p-0 lg:p-10 bg-gray-50">
                <h1 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[54px] font-bold text-center">
                    Let’s Chat<span className="text-blue-400">!</span>
                </h1>
                <p className="text-gray-700 text-center mt-2">
                    Feel free to contact us through Twitter or Facebook if you prefer!
                </p>
                <form onSubmit={sendMessageBtn} className="bg-white rounded-lg shadow-lg p-6 mt-6 max-w-2xl mx-auto space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name:"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email:"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <input
                            type="url"
                            placeholder="Website Link :"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Message :"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400  h-32"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </>
    );
};

export default ContactComponent;