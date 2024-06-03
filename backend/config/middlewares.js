module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
// Example configuration in middlewares.js
module.exports = {
  settings: {
    public: {
      path: './public', // Adjust the path if necessary
    },
  },
};
