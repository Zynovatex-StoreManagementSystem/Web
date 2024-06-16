import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import { getStocksByWarehouseID, getItemName, getItemUrl, warehouses } from '../lib/data';

export default function WarehouseDetails() {
  const { id } = useParams();
  const { setHeaderName } = useContext(AdminContext);


  const warehouseStock = getStocksByWarehouseID(id) || [];
const warehouseName = warehouses.find(warehouse => warehouse.id === id)?.location;

  useEffect(() => {
    setHeaderName(`${warehouseName} Stock`);
  }, [setHeaderName, id]);


  return (
    <div className="flex flex-col items-start w-full p-8">
      <h2 className="mb-4 text-2xl font-bold">Warehouse {id} Stock</h2>
      <table className="w-full overflow-hidden bg-white rounded-lg shadow-md">
        <thead className="text-white bg-green-600">
          <tr>
            <th className="p-4">Item ID</th>
            <th className="p-4">Item Name</th>
            <th className="p-4">Available Stock</th>
            <th className="p-4">Full Stock</th>
          </tr>
        </thead>
        <tbody>
          {warehouseStock.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4">
                  <img src={getItemUrl(item.itemId)} alt={getItemName(item.itemId)} className="w-8 h-8 border-2 border-green-600 rounded-full" />{item.itemId}
                </td>
              <td className="p-4">{getItemName(item.itemId)}</td>
              <td className="p-4">{item.availableStock} kg</td>
              <td className="p-4">{item.fullStock} kg</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
