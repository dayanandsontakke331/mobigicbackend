const userModel = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

var SECRET_KEY = 'gugsd123sdf'
exports.save_new_user = async (req, res)=>{

        try {

            const newUser = new userModel(req.body)
            await newUser.save()
            const savedUser = await userModel.find({email : req.body.email});
            res.send(newUser);
            console.log(newUser)
    
        } catch (err) {
    
            console.log(err);
            res.send(err)
            
        }

}

// get specific user for login
exports.get_user_login = async (req, res)=>{
    try {
        const { email, password } = req.body;
        // const user = await userModel.findOne({_id : req.params.userId});
        // console.log(user);


        if(user){

            if(password == user.password){

                res.send("User Alredy Exist");

            }else{

                res.send('Enter valid email and password');

            }
        }

    } catch (error) {

        console.log(error);
        res.send(error);
        
    }
}


