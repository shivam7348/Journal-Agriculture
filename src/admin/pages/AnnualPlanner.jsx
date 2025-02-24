import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AnnualPlanner() {
  const [image, setImage] = useState(null);
  const [annualPlanner, setAnnualPlanner] = useState([]);
  const [edit, setEdit] = useState(null);
  const [editImage, setEditImage] = useState(null);
  const fileInputRef = useRef(null); // Reference for file input

  useEffect(() => {
    fetchAnnualPlanner();
  }, []);

  const fetchAnnualPlanner = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/annualPlanner/get`
      );
      setAnnualPlanner(response.data);
    } catch (error) {
      toast.error("Error fetching annualPlanner");
      console.error("Error fetching annualPlanner:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return toast.warn("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/annualPlanner/post`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImage(null);
      if (fileInputRef.current) fileInputRef.current.value = ""; // Reset input field
      toast.success("Image uploaded successfully");
      fetchAnnualPlanner();
    } catch (error) {
      toast.error("Error uploading image");
      console.error("Error posting image:", error);
    }
  };

  const handleEdit = async (id) => {
    if (!editImage) {
      toast.info("No new file chosen, keeping the previous image");
      setEdit(null);
      return;
    }

    const formData = new FormData();
    formData.append("image", editImage);

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/annualPlanner/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setEdit(null);
      setEditImage(null);
      toast.success("Image updated successfully");
      fetchAnnualPlanner();
    } catch (error) {
      toast.error("Error updating image");
      console.error("Error editing image:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/annualPlanner/delete/${id}`
      );
      setAnnualPlanner(annualPlanner.filter((img) => img._id !== id));
      toast.success("Image deleted successfully");
    } catch (error) {
      toast.error("Error deleting image");
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Annual Planner </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="file"
          ref={fileInputRef} // Assign ref to input
          className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Upload Image
        </button>
      </form>
      <div className="space-y-2">
        {annualPlanner.map((img) => (
          <div
            key={img._id}
            className="p-3 border rounded-md bg-gray-100 shadow-sm"
          >
            {edit === img._id ? (
              <div className="space-y-2">
                <img
                  src={
                    editImage ? URL.createObjectURL(editImage) : img.image.url
                  }
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md"
                />
                <input
                  type="file"
                  className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
                  onChange={(e) => setEditImage(e.target.files[0])}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(img._id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEdit(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <img
                  src={img.image.url}
                  alt="Uploaded"
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEdit(img._id)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(img._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
