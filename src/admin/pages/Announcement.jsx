import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Announcement() {
  const [text, setText] = useState(""); // State for new announcement text
  const [announcements, setAnnouncements] = useState([]); // State for list of announcements
  const [edit, setEdit] = useState(null); // State to track which announcement is being edited
  const [editText, setEditText] = useState(""); // State to store the updated text during editing

  // Fetch announcements on component mount
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Function to fetch announcements from the backend
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/get/announcements`
      );
      setAnnouncements(response.data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  // Handle posting a new announcement
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/post/announcements`,
        { text }
      );
      setAnnouncements([...announcements, response.data]); // Add new announcement to the list
      setText(""); // Clear the input field
    } catch (error) {
      console.error("Error posting announcement:", error);
    }
  };

  // Handle editing an announcement
  const handleEdit = async (id) => {
    if (editText.trim() === "") return;

    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/admin/update/announcements/${id}`,
        { text: editText }
      );

      // Update the announcements list with the edited Failed to delete announcement. Please try again.
      const updatedAnnouncements = announcements.map((announcement) =>
        announcement._id === id ? response.data : announcement
      );
      setAnnouncements(updatedAnnouncements);

      // Reset edit state
      setEdit(null);
      setEditText("");
    } catch (error) {
      console.error("Error editing announcement:", error);
      alert("Failed to edit announcement. Please try again.");
    }
  };

  // Handle deleting an announcement
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/admin/delete/announcements/${id}`
      );

      // Remove the deleted announcement from the list
      const updatedAnnouncements = announcements.filter(
        (announcement) => announcement._id !== id
      );
      setAnnouncements(updatedAnnouncements);
    } catch (error) {
      console.error("Error deleting announcement:", error);
      alert("Failed to delete announcement. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>

      {/* Form to post a new announcement */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write an announcement..."
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Post Announcement
        </button>
      </form>

      {/* List of announcements */}
      <div className="space-y-2">
        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className="p-3 border rounded-md bg-gray-100 shadow-sm"
          >
            {edit === announcement._id ? (
              // Edit mode
              <div className="space-y-2">
                <textarea
                  className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                  rows="3"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(announcement._id)}
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
              // Display mode
              <div className="flex justify-between items-center">
                <p>{announcement.text}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEdit(announcement._id);
                      setEditText(announcement.text);
                    }}
                    className="px-2 py-1 bg-yellow-500 text-white rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(announcement._id)}
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
