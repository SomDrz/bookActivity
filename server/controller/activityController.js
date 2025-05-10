const Activity = require('../model/activity');


const CreateActivities =async(req,res)=>{
    try{
    
        const {title,description,location,datetime} = req.body

       const activity =  new Activity({
           title,description,location,datetime
       })
       await activity.save()
         res.status(201).json({message:"created"})
    }catch(err){
        res.status(500).send('Server error');
    }
}
const listActivities = async (req, res) => {
    try{
        const activities = await Activity.find();
        res.json(activities);
    }catch(err){
        res.status(500).send('Server error');
    }
 
};

const bookActivity = async (req, res) => {

    try{
        const activity = await Activity.findById(req.params.id);

        if (!activity) {
             res.status(404).json({ message: 'Activity not found' });
        }
      
        activity.bookings.push(req.user.id);
        await activity.save();
        res.json({ messsg: 'Activity booked successfully' });
    }
        catch(err){
            res.status(500).send('Server error');
        }
  
};

const getMyBookings = async (req, res) => {
    try{
        const activities = await Activity.find({ bookings: req.user.id });
        res.json(activities);
    }
        catch(err){
            res.status(500).send('Server error');
        }
  
};

module.exports ={
    CreateActivities, listActivities,bookActivity,getMyBookings
}