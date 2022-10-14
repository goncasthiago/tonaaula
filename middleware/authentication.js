//const User = require('../models/User')
const { UnauthenticatedError } = require('../errors/index')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    const {authorization} = req.headers

    if (!authorization || !authorization.startsWith('Bearer ')){
        throw new UnauthenticatedError('Authentication invalid!')
    }
    
    const token = authorization.split(' ')[1]
    
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        //console.log('payload: ', payload)
        req.user = { userId:payload.id, name: payload.name, profile: payload.profile}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid!')
        
    }
}
module.exports = auth