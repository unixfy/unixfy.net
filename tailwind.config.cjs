const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    darkMode: 'class',

    theme: {
        fontFamily: {
            sans: [
                '"IBM Plex Sans"',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
            display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui']
        },
        extend: {},
    },

    plugins: [],
};

module.exports = config;
