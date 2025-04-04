// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// const Event = () => {
//   const [formData, setFormData] = useState({
//     student: JSON.parse(localStorage.getItem("student"))._id,
//     name: '',
//     urn: '',
//     roomNumber: '',
//     hostelNumber: '',
//     eventDetails: '',
//     fundRequired: '',
//   });
//   console.log(formData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response= await axios.post("http://localhost:3000/api/Event/EventFund",formData);
//     if (response.data.success) {
//       toast.success("Event Fund submitted Successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } else {
//       toast.error(data.errors || "Something went wrong!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   } catch (error) {
//     toast.error(error.response?.data?.errors || "Server Error!", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   }
// };
//   return (
//     <div className="flex justify-center items-center min-h-screen p-6 bg-gray-900" style={{ marginLeft: '250px' }}>
//       <div className="w-1/3 p-6 rounded-lg border border-gray-700" style={{ backgroundColor: '#111828' }}>
//         <h2 className="text-xl font-bold text-center text-white mb-4">Event Fund Request</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-300 font-semibold mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-300 font-semibold mb-1">URN</label>
//             <input
//               type="text"
//               name="urn"
//               className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.urn}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex gap-2">
//             <div className="w-1/2">
//               <label className="block text-gray-300 font-semibold mb-1">Room No.</label>
//               <input
//                 type="text"
//                 name="roomNumber"
//                 className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.roomNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-gray-300 font-semibold mb-1">Hostel No.</label>
//               <input
//                 type="text"
//                 name="hostelNumber"
//                 className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formData.hostelNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-300 font-semibold mb-1">Event Details</label>
//             <textarea
//               name="eventDetails"
//               rows="3"
//               className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.eventDetails}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label className="block text-gray-300 font-semibold mb-1">Fund Required (₹)</label>
//             <input
//               type="number"
//               name="fundRequired"
//               className="w-full px-3 py-2 border border-gray-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.fundRequired}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
        
//       </div>
//     </div>
//   );
// };

// export default Event;
import React, { useState } from 'react';
<<<<<<< HEAD
import EventStatus from './EventStatus';
=======
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 066d66112f8070a6bbe7111d5063c6cff36d7263

const Event = () => {
  const [formData, setFormData] = useState({
    student: JSON.parse(localStorage.getItem("student"))?._id || '',
    name: '',
    urn: '',
    roomNumber: '',
    hostelNumber: '',
    eventDetails: '',
    fundRequired: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/Event/EventFund", formData);
      if (response.data.success) {
        toast.success("Event Fund submitted Successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      } else {
        toast.error(response.data.errors || "Something went wrong!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.errors || "Server Error!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-900" style={{ marginLeft: '250px' }}>
      <ToastContainer />
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
<<<<<<< HEAD
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <EventStatus requestId="12345" />
    </div>
=======
>>>>>>> 066d66112f8070a6bbe7111d5063c6cff36d7263
      </div>
    </div>
  );
};

export default Event;
