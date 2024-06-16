import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import { warehouses } from '../lib/data';

const warehouseList = warehouses;

export default function WarehouseList() {
    const { setHeaderName } = useContext(AdminContext);

    useEffect(() => {
        setHeaderName("Warehouses");
    }, [setHeaderName]);

    return (
        <div className="flex flex-col items-start p-8 w-full">
            <h2 className="text-2xl font-bold mb-4">Warehouses</h2>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="p-4">Warehouse ID</th>
                        <th className="p-4">Location</th>
                        <th className="p-4">Manager ID</th>
                        <th className="p-4">Manager Name</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {warehouseList.map(warehouse => (
                        <tr key={warehouse.id} className="border-b border-gray-200">
                            <td className="p-4">{warehouse.id}</td>
                            <td className="p-4">{warehouse.location}</td>
                            <td className="p-4">{warehouse.managerId}</td>
                            <td className="p-4">{warehouse.managerName}</td>
                            <td className="p-4">
                                <Link to={`/warehouse/${warehouse.id}`} className="bg-green-600 text-white px-4 py-1 rounded-lg">
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
