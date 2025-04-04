import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const EventStatus = ({ requestId }) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`/api/request-status/${requestId}`);
        const data = await response.json();
        setStatus(data.status);
      } catch (error) {
        console.error("Error fetching request status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [requestId]);

  if (loading) {
    return <div className="text-gray-600 text-lg">Fetching status...</div>;
  }

  return (
    <div className="flex items-center gap-2 p-4 border rounded-lg shadow-md w-64">
      {status === "accepted" && (
        <>
          <CheckCircle className="text-green-500" size={24} />
          <span className="text-green-700 font-semibold">Accepted</span>
        </>
      )}
      {status === "rejected" && (
        <>
          <XCircle className="text-red-500" size={24} />
          <span className="text-red-700 font-semibold">Rejected</span>
        </>
      )}
      {status === "pending" && (
        <>
          <Clock className="text-yellow-500" size={24} />
          <span className="text-yellow-700 font-semibold">Pending</span>
        </>
      )}
    </div>
  );
};

export default EventStatus;
