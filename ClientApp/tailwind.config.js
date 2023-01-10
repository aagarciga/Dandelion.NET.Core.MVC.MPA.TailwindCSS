/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "../Views/**/*.{razor,cshtml}"],
    corePlugins: {
        preflight: true
    },
    theme: {
        extend: {},
    },
    plugins: [],
};
