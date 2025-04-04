import React from 'react';

const EventRequestVerification = ({ eventData, onAccept, onReject }) => {
  // Default values in case props are not provided
  const defaultEventData = {
    name: "Student Name",
    urn: "123456789",
    roomNo: "A-101",
    hostelNo: "H3",
    eventName: "Cultural Night",
    fund: "5000"
  };

  // Use provided data or fallback to defaults
  const data = eventData || defaultEventData;
  
  return (
    <div className="w-full max-w-md mx-auto shadow-lg bg-[#111828] rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-xl font-bold text-center text-white">{data.eventName}</h3>
        <p className="text-center text-gray-300">Event Verification Request</p>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="font-medium text-gray-300">Student Name:</div>
          <div className="text-white">{data.name}</div>
          
          <div className="font-medium text-gray-300">URN:</div>
          <div className="text-white">{data.urn}</div>
          
          <div className="font-medium text-gray-300">Room No:</div>
          <div className="text-white">{data.roomNo}</div>
          
          <div className="font-medium text-gray-300">Hostel No:</div>
          <div className="text-white">{data.hostelNo}</div>
          
          <div className="font-medium text-gray-300">Event Name:</div>
          <div className="text-white">{data.eventName}</div>
          
          <div className="font-medium text-gray-300">Requested Fund:</div>
          <div className="font-semibold text-white">₹{data.fund}</div>
        </div>
      </div>
      
      <div className="flex justify-between p-4 pt-2 border-t border-gray-700">
        <button 
          onClick={() => onReject && onReject(data)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reject
        </button>
        
        <button 
          onClick={() => onAccept && onAccept(data)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default EventRequestVerification;