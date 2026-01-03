/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
          colors: {
            // Brand - Modern & Minimal (Professional yet Soft)
            brand: {
              primary: '#C4B4E3', // Lavender
              secondary: '#FFD6BA', // Peach
              accent: '#B3E5FC', // Soft Cyan
              background: '#FAFAFA', // Very Light Gray
              text: '#2B2B2B', // Dark Slate
            },
            // Light Golden Sunrise Theme
            'pastel-blue': {
              DEFAULT: '#B8E2FF', // Light Sky Blue
              light: '#D1EDFF',
              dark: '#9FD6FF',
              50: '#F8FCFF', // Very Light Blue
              100: '#F0F8FF',
              200: '#E6F3FF',
              300: '#D1EDFF',
              400: '#B8E2FF', // Light Sky Blue
              500: '#9FD6FF',
              600: '#86CAFF',
              700: '#6DBEFF',
              800: '#54B2FF',
              900: '#3BA6FF',
            },
            'pastel-pink': {
              DEFAULT: '#FFD1DC', // Light Sunrise Pink
              light: '#FFE0E8',
              dark: '#FFC2D1',
              50: '#FFF8FA', // Very Light Pink
              100: '#FFF0F3',
              200: '#FFE8ED',
              300: '#FFE0E8',
              400: '#FFD1DC', // Light Sunrise Pink
              500: '#FFC2D1',
              600: '#FFB3C6',
              700: '#FFA4BB',
              800: '#FF95B0',
              900: '#FF86A5',
            },
            'pastel-yellow': {
              DEFAULT: '#FFF8DC', // Light Golden
              light: '#FFFBE6',
              dark: '#FFF5D2',
              50: '#FFFEF8', // Very Light Golden
              100: '#FFFDF0',
              200: '#FFFBE6',
              300: '#FFF9DC',
              400: '#FFF8DC', // Light Golden
              500: '#FFF5D2',
              600: '#FFF2C8',
              700: '#FFEFBE',
              800: '#FFECB4',
              900: '#FFE9AA',
            },
            'pastel-green': {
              DEFAULT: '#E0F7FA', // Light Morning Mint
              light: '#E8FAFC',
              dark: '#D8F4F7',
              50: '#F8FDFE', // Very Light Mint
              100: '#F0FBFD',
              200: '#E8FAFC',
              300: '#E0F7FA', // Light Morning Mint
              400: '#D8F4F7',
              500: '#D0F1F4',
              600: '#C8EEF1',
              700: '#C0EBEE',
              800: '#B8E8EB',
              900: '#B0E5E8',
            },
            'pastel-purple': {
              DEFAULT: '#F0E6FF', // Light Dawn Purple
              light: '#F5EDFF',
              dark: '#EBDFFF',
              50: '#FDFBFF', // Very Light Purple
              100: '#FAF7FF',
              200: '#F5EDFF',
              300: '#F0E6FF', // Light Dawn Purple
              400: '#EBDFFF',
              500: '#E6D8FF',
              600: '#E1D1FF',
              700: '#DCC4FF',
              800: '#D7B7FF',
              900: '#D2AAFF',
            },
            // Light Neutrals
            'neutral-light': '#FEFEFE',
            'neutral-dark': '#4A5568',
          },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Light Golden Sunrise Gradients
        'gradient-pastel': 'linear-gradient(135deg, #B8E2FF 0%, #FFD1DC 25%, #FFF8DC 50%, #E0F7FA 75%, #F0E6FF 100%)',
        'gradient-pastel-reverse': 'linear-gradient(135deg, #F0E6FF 0%, #E0F7FA 25%, #FFF8DC 50%, #FFD1DC 75%, #B8E2FF 100%)',
        'gradient-blue-pink': 'linear-gradient(135deg, #B8E2FF 0%, #FFD1DC 100%)', // Light Sky to Sunrise
        'gradient-pink-yellow': 'linear-gradient(135deg, #FFD1DC 0%, #FFF8DC 100%)', // Light Sunrise Glow
        'gradient-yellow-green': 'linear-gradient(135deg, #FFF8DC 0%, #E0F7FA 100%)', // Light Morning
        'gradient-green-purple': 'linear-gradient(135deg, #E0F7FA 0%, #F0E6FF 100%)', // Light Mist
        'gradient-purple-blue': 'linear-gradient(135deg, #F0E6FF 0%, #B8E2FF 100%)',
        'gradient-sunrise': 'linear-gradient(180deg, #B8E2FF 0%, #FFD1DC 30%, #FFF8DC 60%, #FFE4B5 100%)', // Light Sunrise
        'gradient-morning-sky': 'linear-gradient(180deg, #B8E2FF 0%, #D1EDFF 50%, #F8FCFF 100%)', // Light Morning Sky
      },
          boxShadow: {
            'pastel-blue': '0 8px 32px -8px rgba(184, 226, 255, 0.3)', // Light Sky Blue
            'pastel-pink': '0 8px 32px -8px rgba(255, 209, 220, 0.3)', // Light Sunrise Pink
            'pastel-yellow': '0 8px 32px -8px rgba(255, 248, 220, 0.4)', // Light Golden
            'pastel-green': '0 8px 32px -8px rgba(224, 247, 250, 0.3)', // Light Morning Mint
            'pastel-purple': '0 8px 32px -8px rgba(240, 230, 255, 0.3)', // Light Dawn Purple
            'glow-blue': '0 0 20px rgba(184, 226, 255, 0.4), 0 0 40px rgba(184, 226, 255, 0.2)', // Light Sky Glow
            'glow-pink': '0 0 20px rgba(255, 209, 220, 0.4), 0 0 40px rgba(255, 209, 220, 0.2)', // Light Sunrise Glow
            'glow-yellow': '0 0 20px rgba(255, 248, 220, 0.5), 0 0 40px rgba(255, 248, 220, 0.3)', // Light Sun Glow
            'inner-pastel': 'inset 0 2px 4px 0 rgba(184, 226, 255, 0.08)',
          },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'opensans': ['var(--font-opensans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

