
const EventFund = require('../models/EventFundmodel.js');

exports.EventFundRegister = async (req, res) => {
    let success = false;
    const {
        student,
        name,
        urn,
        roomNumber,
        hostelNumber,
        eventDetails,
        fundRequired
    } = req.body;
    try {
        if (!student || !name || !urn || !roomNumber || !hostelNumber || !eventDetails || !fundRequired) {
            return res.status(400).json({ success, msg: 'All EventFund fields are required!' });
        }

        console.log("Received EventFund data:", req.body);
        const eventRequest = new EventFund({
            student,
            name,
            urn,
            roomNumber,
            hostelNumber,
            eventDetails,
            fundRequired
        });

        await eventRequest.save();
        success = true;
        res.status(201).json({ success, msg: 'EventFund registered successfully' });

    } catch (err) {
        console.error("Error in EventFundRegister:", err.message);
        res.status(500).json({ success: false, msg: 'Server error while registering EventFund' });
    }
};
exports.getEventFundBtStudentId = async (req, res) => {
    try {
        const {studentId}=req.body;
        const EventFundDetailsOfStudent = await EventFund.find({ student: studentId });
        if(!EventFundDetailsOfStudent)
        {
            res.status(400).json({ success: false, msg: 'No Events are found!' });
        }
        res.status(200).json({ success: true,eventDetails:EventFundDetailsOfStudent });
    } catch (err) {
        console.error("Error in getEventFund:", err.message);
        res.status(500).json({ success: false, msg: 'Error fetching EventFund data' });
    }
};

exports.getEventFund = async (req, res) => {
    try {
        const eventFundData = await EventFund.find().populate('student', ['name', 'room_no', 'urn','batch','dept','email',])
        res.status(200).json({ success: true, eventFundData });
    } catch (err) {
        console.error("Error in getEventFund:", err.message);
        res.status(500).json({ success: false, msg: 'Error fetching EventFund data' });
    }
};
