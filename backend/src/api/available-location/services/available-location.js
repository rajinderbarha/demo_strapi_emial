'use strict';

/**
 * available-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::available-location.available-location');
