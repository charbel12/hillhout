const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/users')

exports.signup = async (req,res,next) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) return

    const full_name = req.body.full_name
    const email = req.body.email
    const password = req.body.password
    const phone_number = req.body.phone_number

    try{
        const hashedPassword = await bcrypt.hash(password,10)
        console.log(hashedPassword)
        const userDetails = {
            full_name: full_name,
            email: email,
            password: hashedPassword,
            phone_number: phone_number
        }
        const result = await User.save(userDetails)
        res.status(201).json({message:"user registered!"})
    }

    catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }   
        next(err)
    }
}

exports.login = async (req,res,next) => {
    
    const email = req.body.email
    const password = req.body.password
    const secret = process.env.SECRET_KEY

    try {
        const user = await User.find(email)

        if(user[0].length !== 1){
            const error = new Error('A user with this email could not be found.')
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0]
        const isEqual = await bcrypt.compare(password, storedUser.password)
        
        if(!isEqual){
            const error = new Error('The password you entered is wrong!')
            error.statusCode = 401;
            throw error;
        }
        
        const token = jwt.sign(
            {
                name: storedUser.full_name,
                userId: storedUser.id,
                email: storedUser.email,
                phone: storedUser.phone_number
            },secret || 's{27z2v+~J&;', {expiresIn: '1h'}
        )

        res.status(201).json({message:"Logged In!", token:token, userId:storedUser.id})

    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error)
    }

}
