const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log('error-handler.js', err)
  //console.log('statusCode', err.statusCode)
  //console.log(`message`, err.message)


  let customError = {
    //set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later'
  }

  /*
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ success: false, msg: err.message })
  }
  */

  if(err.code && err.code === 11000){
    customError.statusCode = 400
    customError.msg = `Duplicate value entered for ${Object.entries(err.keyValue)}, field, please choose another value`
  }
  if(err.name === 'ValidationError'){
    customError.statusCode = 400
    customError.msg = Object.values(err.errors).map((item)=> item.message).join(',')
  }
  if(err.name === 'CastError'){
    customError.statusCode = 404
    customError.msg = `No item found with id: ${err.value}`
  }
  //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ success: false, msg: customError.msg })
  
}

module.exports = errorHandlerMiddleware
