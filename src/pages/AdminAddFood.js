import React, { useState } from "react";
import toast from "react-hot-toast";

const AdminAddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      foodName,
      price,
      category,
      imageURL,
    };

    setItems([...items, newItem]);

    // Clear fields
    setFoodName("");
    setPrice("");
    setCategory("");
    setImageURL("");

    toast.success("Food item added successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel – Add Food Item</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        <div>
          <label className="block font-medium">Food Name</label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter food item name"
          />
        </div>

        <div>
          <label className="block font-medium">Price (₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Category</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
            <option value="Meals">Meals</option>
            <option value="Desserts">Desserts</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Paste image link here"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded text-lg font-semibold hover:bg-green-700"
        >
          Add Item
        </button>
      </form>

      {/* Display Added Items */}
      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Added Items</h2>

        {items.length === 0 ? (
          <p className="text-gray-500">No items added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white shadow-md p-4 rounded">
                <img
                  src={item.imageURL}
                  alt={item.foodName}
                  className="h-32 w-full object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-2">{item.foodName}</h3>
                <p className="text-gray-700">₹{item.price}</p>
                <p className="text-sm opacity-70">{item.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAddFood;
