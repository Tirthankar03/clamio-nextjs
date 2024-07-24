'use client'
import React, { useState } from 'react';

const MyProfile = () => {
    const [formData, setFormData] = useState({
        firstName: 'Anish',
        lastName: '',
        gender: 'Male',
        email: 'sdnasoidsa@gmail.com',
        mobile: '+9199X332323',
    });

    const [editMode, setEditMode] = useState({
        name: false,
        email: false,
        mobile: false,
    });

    const handleEditToggle = (field) => {
        setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = (field) => {
        setEditMode((prev) => ({ ...prev, [field]: false }));
    };

    const handleCancel = (field) => {
        setEditMode((prev) => ({ ...prev, [field]: false }));
        // Optionally reset the form data if needed
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>

            <div className="mb-4">
                <div className="flex justify-between">
                    <label className="block text-sm font-medium">First Name</label>
                    {!editMode.name ? (
                        <button
                            className="text-blue-500"
                            onClick={() => handleEditToggle('name')}
                        >
                            Edit
                        </button>
                    ) : (
                        <div className="flex space-x-2">
                            <button
                                className="text-blue-500"
                                onClick={() => handleSave('name')}
                            >
                                Save
                            </button>
                            <button
                                className="text-blue-500"
                                onClick={() => handleCancel('name')}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
                {!editMode.name ? (
                    <div className="mt-1 block w-full p-2 border border-gray-300 rounded">
                        {formData.firstName} {formData.lastName}
                    </div>
                ) : (
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Your Gender</label>
                <div className="mt-1">
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex justify-between">
                    <label className="block text-sm font-medium">Email Address</label>
                    {!editMode.email ? (
                        <button
                            className="text-blue-500"
                            onClick={() => handleEditToggle('email')}
                        >
                            Edit
                        </button>
                    ) : (
                        <div className="flex space-x-2">
                            <button
                                className="text-blue-500"
                                onClick={() => handleSave('email')}
                            >
                                Save
                            </button>
                            <button
                                className="text-blue-500"
                                onClick={() => handleCancel('email')}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
                {!editMode.email ? (
                    <div className="mt-1 block w-full p-2 border border-gray-300 rounded">
                        {formData.email}
                    </div>
                ) : (
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                )}
            </div>

            <div className="mb-4">
                <div className="flex justify-between">
                    <label className="block text-sm font-medium">Mobile Number</label>
                    {!editMode.mobile ? (
                        <button
                            className="text-blue-500"
                            onClick={() => handleEditToggle('mobile')}
                        >
                            Edit
                        </button>
                    ) : (
                        <div className="flex space-x-2">
                            <button
                                className="text-blue-500"
                                onClick={() => handleSave('mobile')}
                            >
                                Save
                            </button>
                            <button
                                className="text-blue-500"
                                onClick={() => handleCancel('mobile')}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
                {!editMode.mobile ? (
                    <div className="mt-1 block w-full p-2 border border-gray-300 rounded">
                        {formData.mobile}
                    </div>
                ) : (
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                )}
            </div>
        </div>
    );
};

export default MyProfile;
