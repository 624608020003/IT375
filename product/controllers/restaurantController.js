
const Datatests = require('../models/restaurantModel');
exports.getAllRestaurants =async(req,res) => {
    try{
        const datatests = await Datatests.find();
        res.status(200).render("main",
            {
        status:'success',
        results: datatests.length,
        data: {datatests}
        });
        }catch (err){
        res.status(404).json({
        status: 'fail',
        message: err
        });}
       
            };

exports.getRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const datatests = await Datatests.findOne({id: (restaurantId)});
        if(datatests){
        res.status(200).json({
        status:'success',
        data: {datatests}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status:'fail',
        message: err
        });
        
        }
};
exports.createRestaurant = async(req,res) => {
   try{
   /*  const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json({
    status:'success',
    data: {restaurant: newRestaurant}
    });*/
    let currentRestaurantId = await Datatests.find({}).sort({id: -1}).limit(1).then((lastRestaurant) => {
        return lastRestaurant[0].id

    });
    currentRestaurantId += 1;
const creatRestaurant = {
id: currentRestaurantId,
...req.body
};
const newRestaurant = await Datatests.create(creatRestaurant);
res.status(201).json({
status:'success',
data: {datatests: newRestaurant}
});
    }catch(err){
    res.status(400).json({
    status:'fail',
    message: err
    });
    
    }
    };
exports.updateRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const datatests = await Datatests.findOneAndUpdate({id: restaurantId},req.body,{
        new: true,
        runValidators: true
        });
        if(datatests){
        res.status(200).json({
        status:'success',
        data: {datatests}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        }
};
exports.deleteRestaurant = async(req,res) => {
    try{
        const restaurantsId = parseInt(req.params.id);
        const datatests = await Datatests.findOneAndDelete({id: parseInt(restaurantsId)});
        if(datatests){
        res.status(200).json({
        status:'success',
        data: null
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        
        }
};