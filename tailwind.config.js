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
          height: 'auto', // Remove the fixed height for mobile
        },

        // Define the maximum height and text-overflow for the short description
        '.short-description': {
          maxHeight: 'none', // Remove the max height for mobile
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    screens: {
      xs: "480px", // Keep the xs screen size
      sm: "640px", // Adjust the sm screen size for mobile
      md: "768px", // Adjust the md screen size for tablets
      lg: "1024px", // Add a lg screen size for larger devices
      xl: "1280px", // Keep the xl screen size
    },
  },
  plugins: [],
};
