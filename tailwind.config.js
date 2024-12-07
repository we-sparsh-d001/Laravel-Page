const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                poppins: ['"Poppins", sans-serif'],
            },
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
    content: [
        "./node_modules/flowbite/**/*.js"
    ]
}