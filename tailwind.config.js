/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-white": "#FFFFFF",
        "accent-orange": "#F58021",
        "alice-blue": "#EAF6FB",
        "accent-gray": "#484955",
        "accent-black": "#161925",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Add your custom CSS classes here
      extend: {
        // Define the card container's fixed height
        '.card': {
          height: '400px', // Adjust the desired fixed height as needed
        },

        // Define the maximum height and text-overflow for the short description
        '.short-description': {
          maxHeight: '100px', // Adjust the desired max height for the short description
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1300px",
    },
  },
  plugins: [],
};