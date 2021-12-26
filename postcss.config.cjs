const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: {
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss: {},
    //But others, like autoprefixer, need to run after,
    autoprefixer: {},
    // Add CSSNANO if we're in production (i.e. building)
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};

module.exports = config;
