import React, { useState } from "react";
import Navbar from "../components/Navbar";
import person from '../assets/person.png';
import tomato from '../assets/tomato.jpg';
import pineapple from '../assets/pineapple.jpg';
import bellpaper from '../assets/bellpaper.jpg';
import carrot from '../assets/carrot.jpg';
import pumpkin from '../assets/pumpkin.jpg';

function Home() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const loadImages = () => {
        
        setTimeout(() => {
            setImagesLoaded(true);
        }, 1000); 
    };

    return (
        <div className="container-fluid">
            <div className="flex">
                <div className="w-1/4">
                    <Navbar />
                </div>

                <div className="w-3/4">
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-2xl">Dashboard</h1>
                            <div className="text-base text-gray-500 hover:bg-gray-200 hover:font-bold">Welcome Back!</div>
                        </div>
                        <div className="flex items-center ml-auto">
                            <img src={person} alt="user" className="w-8 h-8 mr-2" />
                            <p className="text-sm">
                               <a href="mailto:user@gmail.com">user@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="inline-block px-4 py-1 bg-green-500 rounded hover:bg-gray-600" onClick={loadImages} disabled={imagesLoaded}>
                            <button className="text-white">{imagesLoaded ? "These items are available" : "Show available items"}</button>
                        </div>

                        {imagesLoaded && (
                            <div className="flex justify-center gap-8 mt-4">
                                
                                
                                <div className="flex flex-col items-center border-4 border-gray-300 border-double hover:scale-110">
                                    <img src={tomato} alt="tomato" className="block mb-2" style={{ width: '150px', height: '175px' }} />
                                    <p className="mt-4 font-bold text-center text-green-600 hover:text-gray-500">TOMATO</p>
                                </div>
                                
                                <div className="flex flex-col items-center border-4 border-gray-300 border-double hover:scale-110">
                                <img src={pumpkin} alt="pumpkin" className="block mb-2" style={{ width: '150px', height: '175px' }} />
                                <p className="mt-4 font-bold text-center text-green-600 hover:text-gray-500">PUMPKIN</p>
                            </div>
    
    
                            <div className="flex flex-col items-center border-4 border-gray-300 border-double hover:scale-110">
                                <img src={pineapple} alt="pineapples" className="block mb-2" style={{ width: '150px', height: '175px' }} />
                                <p className="mt-4 font-bold text-center text-green-600 hover:text-gray-500">PINEAPPLE</p>
                            </div>
                            

                            <div className="flex flex-col items-center border-4 border-gray-300 border-double hover:scale-110">
                                <img src={carrot} alt="carrots" className="block mb-2" style={{ width: '150px', height: '175px' }} />
                                <p className="mt-4 font-bold text-center text-green-600 hover:text-gray-500">CARROT</p>
                            </div>

                            
                            <div className="flex flex-col items-center border-4 border-gray-300 border-double hover:scale-110">
                                <img src={bellpaper} alt="bellpaper" className="block mb-2" style={{ width: '150px', height: '175px' }} />
                                <p className="mt-4 font-bold text-center text-green-600 hover:text-gray-500">BELL PEPPER</p>
                            </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <hr />
                    </div>

                    <div className="mt-8">
                        <div className="inline-block px-4 py-1 bg-green-500 rounded hover:bg-gray-600">
                            <h6 className="text-white">Data Analysis</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
