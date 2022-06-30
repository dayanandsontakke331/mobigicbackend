const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const userModel = require('../model/user')

const checkAuth =  async (req, res, next) => {
    let token;
    if(authorization && authorization.startsWith('bearer')){

        try {
            // get token from user
            token = authorization.split(" ")[1]

            // varify token
            const {userId} = jwt.verify(process.env.SECRET_KEY)
           
            // get user from token
            req.user = await userModel.findById(userId).select('-password')

            next()

        } catch (error) {

            console.log(error);
            
        }

    }
  
}