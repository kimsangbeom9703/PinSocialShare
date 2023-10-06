'use strict';
const apiModel = require('../models/apiModel')
module.exports = {
    getData : () => {
        return apiModel.test()
    }
}