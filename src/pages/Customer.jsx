import React from "react";
import Navbar from "../components/Navbar";
import recentmessages from '../assets/recentmessages.png';
import person from '../assets/person.png';

function Customer() {
    return (
        <div className="container-fluid">
            <div className="flex">
                <div className="w-1/4">
                    <Navbar />
                </div>
                <div className="w-3/4">
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-2xl">Customers</h1>
                            <div className="text-gray-500 text-base hover:bg-gray-200 hover:font-bold">Connect with your customers!</div>
                        </div>
                        <div className="ml-auto flex items-center">
                            <img src={person} alt="user" className="w-8 h-8 mr-2" />
                            <p className="text-sm">
                                <a href="mailto:user@gmail.com">user@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mt-8">
                        <img src={recentmessages} alt="recent messages" className="w-8 h-8 mr-2 hover:scale-110" />
                        <h6>Recent messages</h6>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Customer;