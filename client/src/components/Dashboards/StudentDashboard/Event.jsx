import React, { useState } from 'react';
import EventStatus from './EventStatus';

const Event = () => {
  const [formData, setFormData] = useState({
    name: '',
    urn: '',
    roomNumber: '',
    hostelNumber: '',
    eventDetails: '',
    fundRequired: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-900" style={{ marginLeft: '250px' }}>
      <div className="w-1/3 p-6 rounded-lg border border-gray-700" style={{ backgroundColor: '#111828' }}>
        <h2 className="text-xl font-bold text-center text-white mb-4">Event Fund Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">URN</label>
            <input
              type="text"
              name="urn"
              className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.urn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-gray-300 font-semibold mb-1">Room No.</label>
              <input
                type="text"
                name="roomNumber"
                className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.roomNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-300 font-semibold mb-1">Hostel No.</label>
              <input
                type="text"
                name="hostelNumber"
                className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.hostelNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">Event Name</label>
            <input
              name="eventDetails"
              className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.eventDetails}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">Fund Required (₹)</label>
            <input
              type="number"
              name="fundRequired"
              className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.fundRequired}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <EventStatus requestId="12345" />
    </div>
      </div>
    </div>
  );
};

export default Event;
