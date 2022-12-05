'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');


/**
 * job controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job.job');
