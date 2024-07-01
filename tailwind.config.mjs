/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
    daisyui: {
        themes: [
            {
                mino: {
                    "primary": "#e64c3e",
                    "secondary": "#3de69a",
                    "accent": "#E2692C",
                    "neutral": "#E3C39F",
                    "base-100": "#141010",
                },
            },
        ],
    },
    theme: {
        extend: {
          fontFamily: {
              'sans': ['Noto Sans JP', 'sans-serif'],
          },
          colors: {
              'mino': {
                  100: "#fadbd8",
                  200: "#f5b7b2",
                  300: "#f0948b",
                  400: "#eb7065",
                  500: "#e64c3e",
                  600: "#b83d32",
                  700: "#8a2e25",
                  800: "#5c1e19",
                  900: "#2e0f0c"
              },
              'mino-dark': {
                  100: "#d1d1d2",
                  200: "#a3a3a4",
                  300: "#767577",
                  400: "#484749",
                  500: "#1a191c",
                  600: "#151416",
                  700: "#100f11",
                  800: "#0a0a0b",
                  900: "#050506"
              },
              'mino-yellow': {
                  100: "#fdf7da",
                  200: "#fbeeb5",
                  300: "#f9e691",
                  400: "#f7dd6c",
                  500: "#f5d547",
                  600: "#c4aa39",
                  700: "#93802b",
                  800: "#62551c",
                  900: "#312b0e"
              },
          },
        },
      },
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
