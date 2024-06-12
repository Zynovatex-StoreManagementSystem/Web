import React from "react";
import Navbar from "../components/Navbar";
import person from '../assets/person.png';

function Warehouses(){
    return(
        <div className="container-fluid flex">
            <div className="w-1/4">
                <Navbar />
            </div>
            <div className="w-3/4">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-2xl">Connect</h1>
                        
                        <div className="text-gray-500 text-base hover:bg-gray-200 hover:font-bold">Connect with warehouse!</div>
                    </div>
                    <div className="ml-auto flex items-center">
                        <img src={person} alt="user" className="w-8 h-8 mr-2" />
                        <p className="text-sm">
                           <a href="mailto:user@gmail.com">user@gmail.com</a>
                        </p>
                    </div>
                </div>


                <div className="mt-8 mr-8 w-full flex justify-center">
                    <table className="mt-8 mr-8 w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-3 px-6">Warehouse ID</th>
                                <th className="py-3 px-6">Location</th>
                                <th className="py-3 px-6">Manager ID</th>
                                <th className="py-3 px-6">Manager Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-400 text-center hover:italic">
                                <td className="py-2 px-4 text-white">001</td>
                                <td className="py-2 px-4">Kalutara</td>
                                <td className="py-2 px-4 text-white">214185M</td>
                                <td className="py-2 px-4">G.T.J.Saranga</td>
                            </tr>
                            <tr className="bg-emerald-500 text-center hover:italic">
                                <td className="py-2 px-4 text-white">002</td>
                                <td className="py-2 px-4 ">Gampaha</td>
                                <td className="py-2 px-4 text-white">214147B</td>
                                <td className="py-2 px-4 ">K.Perera</td>
                            </tr>
                            <tr className="bg-gray-400 text-center hover:italic">
                                <td className="py-2 px-4 text-white">003</td>
                                <td className="py-2 px-4">Galle</td>
                                <td className="py-2 px-4 text-white">214072H</td>
                                <td className="py-2 px-4">P.Bandara</td>
                            </tr>
                            <tr className="bg-emerald-500 text-center hover:italic">
                                <td className="py-2 px-4 text-white">004</td>
                                <td className="py-2 px-4 ">Kandy</td>
                                <td className="py-2 px-4 text-white">214173B</td>
                                <td className="py-2 px-4 ">M.Rusween</td>
                            </tr>
                            <tr className="bg-gray-400 text-center hover:italic">
                                <td className="py-2 px-4 text-white">005</td>
                                <td className="py-2 px-4">Dambulla</td>
                                <td className="py-2 px-4 text-white">214142F</td>
                                <td className="py-2 px-4">S.Padmasiri</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
}

export default Warehouses;