import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import fruitIcon from "../images/fruits.png";
import vegetableIcon from "../images/vegetables.png";
import grainIcon from "../images/grains.png";
import { getTotalStockByItems, categories, getItemUrl } from "../lib/data";

export default function Customers() {
    const { setHeaderName } = useContext(AdminContext);
    const [selectedCategory, setSelectedCategory] = useState("Fruits");

    useEffect(() => {
        setHeaderName("Categories");
    }, []);

    return (
        <div className="flex flex-col items-center justify-between gap-10 px-4 py-6 md:px-14">
            <div className="flex items-center w-full p-4 bg-green-600 rounded-lg">
                <span className="text-2xl text-white">Categories</span>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center ${selectedCategory === category ? "border-2 border-green-500" : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        <h3 className="mb-2 text-lg font-semibold">{category}</h3>
                        <img
                            src={
                                category === "Fruits"
                                    ? fruitIcon
                                    : category === "Vegetables"
                                        ? vegetableIcon
                                        : grainIcon
                            }
                            alt={category}
                            className="w-24 h-24"
                        />
                    </button>
                ))}
            </div>

            <div className="w-full">
                <div className="flex flex-col items-start w-full p-8">
                    <h2 className="mb-4 text-2xl font-bold">Stocks</h2>
                    <table className="w-full overflow-hidden bg-white rounded-lg shadow-md">
                        <thead className="text-white bg-green-600">
                            <tr className="border-b border-gray-200">
                                <th className="p-4">ID</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Available Stock</th>
                                <th className="p-4">Full Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getTotalStockByItems()[selectedCategory].map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="p-4">
                                        <img src={getItemUrl(item.itemId)} alt={item.itemName} className="w-8 h-8 border-2 border-green-600 rounded-full" />{item.itemId}
                                    </td>
                                    <td className="p-4">{item.itemName}</td>
                                    <td className="p-4"> {item.availableStock} kg</td>
                                    <td className="p-4">{item.totalStock} kg</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
