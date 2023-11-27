const mongoose = require('mongoose');
//const model = mongoose.model('trips');
const Trip = mongoose.model('trips');

//GET: trips - lists of all trips
//const tripsList = async(req, res) => {
//    model
//        .find({}) // empty filter fo all
//        .exec((err, trips) => {
//            if (!trips){
//                return res
//                    .status(404)
//                    .json({"message":"trip not found"});
//            } else if (err){
//                return res
//                    .status(404)
//                    .json(err);
//            } else {
//                return res
//                    .status(200)
//                    .json(trips);
//            }
//        });
//};

// GET: /trips - lists all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        console.log('Retrieved trips:', trips);
        
        if (!trips || trips.length === 0) {
            return res.status(404).json({ "message": "No trips found" });
        } else {
            return res.status(200).json(trips);
        }
    } catch (err) {
        console.error('Error fetching trips:', err);
        return res.status(500).json({ "error": err.message });
    }
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
        
        if (!trip) {
            return res.status(404).json({ "message": "Trip not found" });
        } else {
            return res.status(200).json(trip);
        }
    } catch (err) {
        console.error('Error fetching trip by code:', err);
        return res.status(500).json({ "error": err.message });
    }
};

module.exports = {
    tripsList,
    tripsFindCode
};