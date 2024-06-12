import React from "react";
import Navbar from "../components/Navbar";
import person from '../assets/person.png';

function Orders(){
    return(
        <div className="container-fluid flex">
            <div className="w-1/4">
                <Navbar />
            </div>
            <div className="w-3/4">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-2xl">Orders</h1>
                        
                        <div className="text-gray-500 text-base hover:bg-gray-200 hover:font-bold">TRANSACTIONS</div>
                    </div>
                    <div className="ml-auto flex items-center">
                        <img src={person} alt="user" className="w-8 h-8 mr-2" />
                        <p className="text-sm">
                           <a href="mailto:user@gmail.com">user@gmail.com</a>
                        </p>
                    </div>
                </div>


                <div className="mt-8 mr-8 w-full flex justify-center">
                    <table className="mt-8 mr-8 w-full border-collapse border border-green-500">


                        <thead className="bg-green-500 text-white">
                            <tr className="bg-green-500 font-extrabold">
                                <th className="py-2 px-4 border border-gray-200 ">Status</th>
                                <th className="py-2 px-4 border border-gray-200 ">Amount</th>
                                <th className="py-2 px-4 border border-gray-200 ">Method</th>
                                <th className="py-2 px-4 border border-gray-200 ">Transaction ID</th>
                                <th className="py-2 px-4 border border-gray-200 ">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-300 text-center">
                                <td className="py-1 px-2 border border-gray-200  bg-red-600 text-white font-bold rounded-full">FAILED</td>
                                <td className="py-1 px-2 border border-gray-200 ">Rs 10,000</td>
                                <td className="py-1 px-2 border border-gray-200  hover:scale-125">Visa</td>
                                <td className="py-1 px-2 border border-gray-200  font-bold">001B</td>
                                <td className="py-1 px-2 border border-gray-200  font-thin">22/02/2024</td>
                            </tr>
                            <tr className="hover:bg-gray-200 text-center">
                                <td className="py-1 px-2 border border-gray-200  bg-yellow-400 text-white font-bold rounded-full">PENDING</td>
                                <td className="py-1 px-2 border border-gray-200 ">Rs 5,000</td>
                                <td className="py-1 px-2 border border-gray-200  hover:scale-125">Master Card</td>
                                <td className="py-1 px-2 border border-gray-200  font-bold">001A</td>
                                <td className="py-1 px-2 border border-gray-200  font-thin">02/02/2024</td>
                            </tr>
                            <tr className="hover:bg-gray-300 text-center">
                                <td className="py-1 px-2 border border-gray-200  bg-green-700 text-white font-bold rounded-full">PAID</td>
                                <td className="py-1 px-2 border border-gray-200 ">Rs 15,000</td>
                                <td className="py-1 px-2 border border-gray-200  hover:scale-125">Visa</td>
                                <td className="py-1 px-2 border border-gray-200  font-bold">002S</td>
                                <td className="py-1 px-2 border border-gray-200  font-thin">02/03/2024</td>
                            </tr>
                            <tr className="hover:bg-gray-200 text-center">
                                <td className="py-1 px-2 border border-gray-200  bg-green-700 text-white font-bold rounded-full">PAID</td>
                                <td className="py-1 px-2 border border-gray-200 ">Rs 7,500</td>
                                <td className="py-1 px-2 border border-gray-200  hover:scale-125">Master Card</td>
                                <td className="py-1 px-2 border border-gray-200  font-bold">001J</td>
                                <td className="py-1 px-2 border border-gray-200 font-thin">05/03/2024</td>
                            </tr>
                            <tr className="hover:bg-gray-300 text-center">
                                <td className="py-1 px-2 border border-gray-200  bg-yellow-400 text-white font-bold rounded-full">PENDING</td>
                                <td className="py-1 px-2 border border-gray-200 ">Rs 6,317</td>
                                <td className="py-1 px-2 border border-gray-200 hover:scale-125">Master Card</td>
                                <td className="py-1 px-2 border border-gray-200  font-bold">004K</td>
                                <td className="py-1 px-2 border border-gray-200  font-thin">24/02/2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                


            </div>
        </div>
    );
}

export default Orders;