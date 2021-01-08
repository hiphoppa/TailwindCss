module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                '1/10': '10%',
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus']
        },
    },
    plugins: [],
}