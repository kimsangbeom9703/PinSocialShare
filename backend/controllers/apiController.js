'use strict';
const apiService = require('../services/apiService')

module.exports = {
    home : async (req,res,next) => {
        const data = apiService.getData()
        res.status(200).send(data)
    }
}