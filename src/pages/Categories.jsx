import React from "react";
import Navbar from "../components/Navbar";
import person from '../assets/person.png';
import fruits from '../assets/fruits.png';
import vegetables from '../assets/vegetables.png';
import grains from '../assets/grains.jpg';

function Categories(){
  return(
    <div className="container-fluid">
        <div className="flex">
            <div className="w-1/4">
                <Navbar />
            </div>

            <div className="w-3/4">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-2xl">Categories</h1>
                        <div className="text-gray-500 text-base hover:bg-gray-200 hover:font-bold">Welcome Back!</div>
                    </div>
                    <div className="ml-auto flex items-center">
                        <img src={person} alt="user" className="w-8 h-8 mr-2" />
                        <p className="text-sm">
                           <a href="mailto:user@gmail.com">user@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className="mt-8 mb-4">
                    <div className="inline-block px-4 py-1 bg-green-500 rounded hover:bg-gray-600">
                            <h6 className="text-white ">Available categories</h6>
                    </div>
                    <div className="flex mt-4 justify-center gap-8">
                        <div className="flex flex-col items-center border-double border-4 border-gray-300 hover:scale-110">
                            <img src={fruits} alt="fruits" className="block mb-2 " width="200" height="200"  />
                            <p className="font-bold text-center text-green-600 hover:text-gray-500">FRUITS</p>
                        </div>
                        <div className="flex flex-col items-center border-double border-4 border-gray-300 hover:scale-110">
                            <img src={vegetables} alt="vegetables" className="block mb-2 " width="200" height="200" />
                            <p className="font-bold text-center text-green-600 hover:text-gray-500">VEGETABLES</p>
                        </div>
                        <div className="flex flex-col items-center border-double border-4 border-gray-300 hover:scale-110">
                            <img src={grains} alt="grains" className="block mb-2 mt-11" width="200" height="200" />
                            <p className="font-bold text-center text-green-600 hover:text-gray-500">GRAINS</p>
                        </div>
                    </div>
                </div>

         

                <hr  />



                <div className="mt-8 mr-10 w-full flex justify-center"></div>



                <table className="mt-8 mr-8 w-full border-collapse border border-gray-300">
                   <thead className="bg-green-500 text-white">
        
                    <tr>
                       <th className="py-2 px-4 border border-gray-300">Item Name</th>
                       <th className="py-2 px-4 border border-gray-300">Item ID</th>
                       <th className="py-2 px-4 border border-gray-300">Available Stock</th>
                       <th className="py-2 px-4 border border-gray-300">Full Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-gray-100 text-center">
                       <td className="py-2 px-4 border border-gray-300 font-mono hover:text-green-500 hover:font-bold">Tomato</td>
                       <td className="py-2 px-4 border border-gray-300 font-semibold">02V</td>
                       <td className="py-2 px-4 border border-gray-300">95kg</td>
                       <td className="py-2 px-4 border border-gray-300">150kg</td>
                    </tr>
                    <tr className="bg-gray-200 text-center">
                       <td className="py-2 px-4 border border-gray-300 font-mono hover:text-green-500 hover:font-bold">PineApple</td>
                       <td className="py-2 px-4 border border-gray-300 font-semibold">03F</td>
                       <td className="py-2 px-4 border border-gray-300">65kg</td>
                       <td className="py-2 px-4 border border-gray-300">160kg</td>
                    </tr>
                    <tr className="bg-gray-100 text-center">
                       <td className="py-2 px-4 border border-gray-300 font-mono hover:text-green-500 hover:font-bold">Green Grams</td>
                       <td className="py-2 px-4 border border-gray-300 font-semibold">01G</td>
                       <td className="py-2 px-4 border border-gray-300">50kg</td>
                       <td className="py-2 px-4 border border-gray-300">170kg</td>
                    </tr>
                    <tr className="bg-gray-200 text-center">
                       <td className="py-2 px-4 border border-gray-300 font-mono hover:text-green-500 hover:font-bold">Pumpkin</td>
                       <td className="py-2 px-4 border border-gray-300 font-semibold">01V</td>
                       <td className="py-2 px-4 border border-gray-300">38kg</td>
                       <td className="py-2 px-4 border border-gray-300">70kg</td>
                    </tr>
            
                   </tbody>
                </table>
    

            </div>
        </div>
    </div>
  );
}

export default Categories;
