'use strict';

import apiService from '../services/apiService.js';

export default {
    home: async (req, res, next) => {
        const data = apiService.getData();
        res.status(200).send(data);
    }
};
