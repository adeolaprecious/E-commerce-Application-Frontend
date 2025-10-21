import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "https://e-commerce-application-backend-u42p.onrender.com";

const Profile = () => {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({ firstName: "", lastName: "", password: "" });
  const [editMode, setEditMode] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [cachedPic, setCachedPic] = useState(null); // 🟢 Cache image to prevent disappearance
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setCachedPic(res.data.profilePic);
        setForm({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          password: "",
        });
      })
      .catch(() => toast.error("Failed to load profile"));
  }, [token]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE_URL}/user/profile`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Profile updated!");
      setEditMode(false);
    } catch {
      toast.error("Failed to update profile");
    }
  };

  // 🟢 Upload profile picture
  const handleUpload = async () => {
    if (!imageFile) return toast.warn("Please select an image first!");
    const formData = new FormData();
    formData.append("profilePic", imageFile);

    try {
      const res = await axios.post(`${API_BASE_URL}/user/upload-picture`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUser({ ...user, profilePic: res.data.profilePic });
      setCachedPic(res.data.profilePic); // 🟢 Update cached image
      setImageFile(null);
      setPreview(null);
      toast.success("Profile picture uploaded!");
    } catch (err) {
      toast.error("Upload failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-amber-700">
        My Profile
      </h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={
            preview
              ? preview
              : cachedPic
              ? `${API_BASE_URL}${cachedPic}`
              : "https://ui-avatars.com/api/?name=User&size=150"
          }
          alt="Profile Picture"
          className="w-32 h-32 rounded-full border-4 border-amber-500 object-cover mb-3"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-3 text-sm"
        />

        <button
          onClick={handleUpload}
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
        >
          Upload Picture
        </button>
      </div>

      {!editMode ? (
        <div>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="mt-4 bg-amber-600 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border p-2 w-full rounded"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="New Password"
            className="border p-2 w-full rounded"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-amber-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="text-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;