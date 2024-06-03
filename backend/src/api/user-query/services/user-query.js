'use strict';

/**
 * user-query service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-query.user-query');
