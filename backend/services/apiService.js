'use strict';

import apiModel from '../models/apiModel.js';

export default {
    getData: () => {
        return apiModel.data();
    }
};
