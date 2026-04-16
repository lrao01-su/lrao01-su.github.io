module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#FF5733',
        'accent-dark': '#FF6B47',
        surface: {
          light: '#FFFFFF',
          dark: '#0D1117',
        },
        'surface-alt': {
          light: '#F6F8FA',
          dark: '#161B22',
        },
        'border': {
          light: '#D0D7DE',
          dark: '#30363D',
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
