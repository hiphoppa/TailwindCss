module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                '1/10': '10%',
                '-1/10': '-10%',
                '-110': '-110%',
                '4/10': '40%',
                '28/100': '28%',
                '17/100': '17%',
                '45/100': '45%',
                '60/100': '60%',
                '70/100': '70%'
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